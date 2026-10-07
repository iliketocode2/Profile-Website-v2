import { forceCollide, forceSimulation, forceX, forceY, SimulationNodeDatum } from 'd3-force';
import { BubbleSize, Project } from './types';

// Bubble radius in px at full (desktop) scale
const BASE_RADIUS: Record<BubbleSize, number> = { xl: 125, lg: 95, md: 72, sm: 54 };
const GAP = 8;
const PADDING = 12;
const GOLDEN_RATIO = 0.6180339887;

export interface PlacedBubble {
  project: Project;
  x: number; // center
  y: number; // center
  r: number;
}

interface BubbleNode extends SimulationNodeDatum {
  project: Project;
  r: number;
  targetX: number;
  targetY: number;
}

// Small deterministic PRNG so the layout is identical on every visit
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(text: string) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  }
  return hash >>> 0;
}

export function sortByRecency(projects: Project[]) {
  return [...projects].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

/**
 * Packs projects into a loose, staggered cluster that fills `width`.
 * Newer projects are pulled toward the top and older ones toward the bottom;
 * each bubble gets an evenly spread, seeded horizontal target so the layout feels random but
 * never changes between renders.
 */
export function layoutBubbles(projects: Project[], width: number): { bubbles: PlacedBubble[]; height: number } {
  if (projects.length === 0 || width <= 0) return { bubbles: [], height: 0 };

  // Shrink bubbles on narrow screens, but keep the smallest ones tappable
  const scale = Math.min(1, Math.max(0.52, width / 1100));
  const sorted = sortByRecency(projects);
  const radii = sorted.map((p) => BASE_RADIUS[p.size ?? 'md'] * scale);

  // Estimate how tall the cluster needs to be from the bubbles' total area
  const area = radii.reduce((sum, r) => sum + Math.PI * (r + GAP) ** 2, 0);
  const usableWidth = width - PADDING * 2;
  const height = Math.max(area / (usableWidth * 0.72), radii[0] * 2);

  const nodes: BubbleNode[] = sorted.map((project, i) => {
    const r = radii[i];
    const random = mulberry32(hashString(project.title));
    const progress = sorted.length === 1 ? 0 : i / (sorted.length - 1);
    // Golden-ratio steps spread neighbours across the width; the jitter keeps it organic
    const spread = (i * GOLDEN_RATIO + random() * 0.25) % 1;
    const targetX = PADDING + r + spread * Math.max(0, usableWidth - 2 * r);
    const targetY = PADDING + r + progress * Math.max(0, height - 2 * r);
    return { project, r, targetX, targetY, x: targetX, y: targetY };
  });

  const simulation = forceSimulation(nodes)
    .force('x', forceX<BubbleNode>((d) => d.targetX).strength(0.04))
    .force('y', forceY<BubbleNode>((d) => d.targetY).strength(0.12))
    .force('collide', forceCollide<BubbleNode>((d) => d.r + GAP / 2).strength(1).iterations(3))
    .stop();

  for (let i = 0; i < 320; i++) {
    simulation.tick();
    // Keep every bubble inside the container horizontally
    for (const node of nodes) {
      node.x = Math.min(width - PADDING - node.r, Math.max(PADDING + node.r, node.x ?? 0));
    }
  }

  const minY = Math.min(...nodes.map((n) => (n.y ?? 0) - n.r));
  const maxY = Math.max(...nodes.map((n) => (n.y ?? 0) + n.r));

  return {
    bubbles: nodes.map((n) => ({ project: n.project, x: n.x ?? 0, y: (n.y ?? 0) - minY + PADDING, r: n.r })),
    height: maxY - minY + PADDING * 2,
  };
}
