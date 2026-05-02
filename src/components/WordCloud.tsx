'use client';

/**
 * WordCloud.tsx
 *
 * Dark-mode lamp warmth: blurred ellipse + objectBoundingBox radial
 * fill (no full-viewBox rect), so light falls off in an oval instead
 * of tinting all four SVG edges.
 *
 * Requires: npm i d3-cloud
 */

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import type { RefObject } from 'react';

interface CloudWord {
  text?: string;
  size?: number;
  x?: number;
  y?: number;
  rotate?: number;
  font?: string;
  weight?: number | string;
  [key: string]: unknown;
}

interface WordEntry {
  text: string;
  value: number;
  canRotate: boolean;
}

const ANCHOR_TEXT = 'William Goldman';
const ANCHOR_LAYOUT_SIZE = 70;

const WORDS: WordEntry[] = [
  {
    text: 'Mechanical Engineering',
    value: 42,
    canRotate: false,
  },
  {
    text: 'Computer Science',
    value: 40,
    canRotate: false,
  },
  { text: 'JumboCode',        value: 36, canRotate: true  },
  { text: 'CubeSat',          value: 38, canRotate: true  },
  { text: 'Robotics',         value: 30, canRotate: true  },
  { text: 'Cybersecurity',    value: 28, canRotate: false },
  {
    text: 'Tufts University',
    value: 26,
    canRotate: false,
  },
  { text: 'PyScript',         value: 32, canRotate: true  },
  {
    text: 'Web Development',
    value: 28,
    canRotate: false,
  },
  { text: 'CEEO',             value: 34, canRotate: true  },
  { text: 'Aerospace',        value: 30, canRotate: true  },
  { text: 'Invent',           value: 28, canRotate: true  },
  {
    text: 'Open OnDemand',
    value: 32,
    canRotate: false,
  },
  {
    text: 'Generalized ADCS',
    value: 34,
    canRotate: false,
  },
  {
    text: 'Acadia Analytics',
    value: 28,
    canRotate: true,
  },
  { text: 'FTC',              value: 30, canRotate: true  },
  { text: 'LEGO',             value: 28, canRotate: true  },
  { text: 'Draper',           value: 30, canRotate: false },
  { text: 'TTS',              value: 26, canRotate: true  },
  { text: 'Code Sensei',      value: 32, canRotate: false },
];

const REFERENCE_WIDTH = 680;

const LIGHT_COLORS = [
  '#1e3a8a', '#1e40af', '#1d4ed8', '#2563eb',
  '#1a56a0', '#164e90', '#0f3575', '#0e7490',
  '#0369a1', '#075985',
];

const DARK_COLORS = [
  '#bfdbfe', '#93c5fd', '#60a5fa', '#7dd3fc',
  '#a5f3fc', '#67e8f9', '#dbeafe', '#ade8f4',
  '#cae9ff', '#b8e0ff',
];

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

interface PlacedWord extends CloudWord {
  color: string;
  isAnchor: boolean;
}

export default function WordCloud() {
  const lampWashId = useId().replace(/:/g, '');
  const lampWashBlurId = useId().replace(/:/g, '');
  const containerRef: RefObject<HTMLDivElement | null> =
    useRef(null);
  const [placed, setPlaced] = useState<PlacedWord[]>([]);
  const [dims, setDims] = useState({ w: 680, h: 420 });
  const [dark, setDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const checkDark = () =>
      setDark(root.classList.contains('dark'));
    checkDark();
    const obs = new MutationObserver(checkDark);
    obs.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const h = Math.max(
        320,
        Math.min(520, width * 0.65)
      );
      setDims({
        w: Math.floor(width),
        h: Math.floor(h),
      });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const buildCloud = useCallback(() => {
    if (dims.w < 100) return;

    import('d3-cloud').then((mod) => {
      const cloud = (
        mod as unknown as { default: unknown }
      ).default as (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...args: any[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) => any;

      const rng = seededRng(42);
      const colors = dark ? DARK_COLORS : LIGHT_COLORS;
      const colorRng = seededRng(99);

      const scale = Math.min(
        1.0,
        Math.max(0.45, dims.w / REFERENCE_WIDTH)
      );

      const allWords = [
        {
          text: ANCHOR_TEXT,
          size: Math.round(ANCHOR_LAYOUT_SIZE * scale),
          canRotate: false,
        },
        ...WORDS.map((w) => ({
          text: w.text,
          size: Math.round(w.value * scale),
          canRotate: w.canRotate,
        })),
      ];

      cloud()
        .size([dims.w, dims.h])
        .words(allWords)
        .padding(5)
        .font('Lora, serif')
        .fontWeight((w: CloudWord) => {
          if (w.text === ANCHOR_TEXT) return 'bold';
          const v = w.size ?? 20;
          if (v >= 38) return '700';
          if (v >= 30) return '600';
          if (v >= 24) return '500';
          return '400';
        })
        .fontSize((w: CloudWord) => w.size ?? 20)
        .rotate((w: CloudWord) => {
          if (!(w as { canRotate?: boolean }).canRotate) {
            return 0;
          }
          return rng() > 0.4 ? 0 : 90;
        })
        .random(rng)
        .on('end', (words: CloudWord[]) => {
          const result: PlacedWord[] = words.map((w) => ({
            ...w,
            isAnchor: w.text === ANCHOR_TEXT,
            color:
              w.text === ANCHOR_TEXT
                ? (dark ? '#f9fafb' : '#111827')
                : colors[
                    Math.floor(colorRng() * colors.length)
                  ],
          }));
          setPlaced(result);
          setReady(true);
        })
        .start();
    });
  }, [dims.w, dims.h, dark]);

  useEffect(() => {
    buildCloud();
  }, [buildCloud]);

  const cx = dims.w / 2;
  const cy = dims.h / 2;

  const showGlow = dark && isDesktop;

  const wordFilter = showGlow
    ? 'drop-shadow(-5px 10px 14px rgba(255,210,150,0.35))'
      + ' drop-shadow(-2px 4px 22px rgba(255,235,200,0.2))'
    : undefined;

  const anchorFilter = showGlow
    ? 'drop-shadow(-6px 12px 18px rgba(255,215,160,0.4))'
      + ' drop-shadow(-3px 6px 28px rgba(255,240,210,0.22))'
    : undefined;

  /**
   * Lamp warmth: a blurred ellipse only (no full-viewBox rect).
   * A rect + huge radial R tints the entire viewBox, so every edge
   * keeps mid-opacity and reads as a rectangle. An ellipse with
   * objectBoundingBox gradient + blur falls off in a soft oval.
   */
  const washCx = dims.w * 0.89;
  const washCy = dims.h * 0.52;
  const washRx = dims.w * 0.52;
  const washRy = dims.h * 0.62;

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ overflow: 'visible' }}
    >
      {/*
       * width="100%" fills the container. height is set via
       * CSS only (not as an SVG attribute) to avoid the browser
       * having to reconcile conflicting width, height, and
       * viewBox constraints. overflow:visible allows drop-shadow
       * filter blur to extend outside the viewBox without being
       * clipped by the SVG element boundary.
       */}
      <svg
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{
          height: dims.h,
          overflow: 'visible',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <defs>
          <radialGradient
            id={lampWashId}
            gradientUnits="objectBoundingBox"
            cx="48%"
            cy="46%"
            r="52%"
            fx="42%"
            fy="40%"
          >
            <stop
              offset="0%"
              stopColor="#fff2dc"
              stopOpacity="0.42"
            />
            <stop
              offset="55%"
              stopColor="#ffd9a8"
              stopOpacity="0.1"
            />
            <stop
              offset="100%"
              stopColor="#fff2dc"
              stopOpacity="0"
            />
          </radialGradient>
          <filter
            id={lampWashBlurId}
            x="-45%"
            y="-45%"
            width="190%"
            height="190%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="b"
            />
          </filter>
        </defs>
        {showGlow ? (
          <ellipse
            cx={washCx}
            cy={washCy}
            rx={washRx}
            ry={washRy}
            fill={`url(#${lampWashId})`}
            filter={`url(#${lampWashBlurId})`}
            style={{ pointerEvents: 'none' }}
          />
        ) : null}
        {placed.map((w) => {
          const anchor = w.isAnchor;
          return (
            <text
              key={w.text}
              textAnchor="middle"
              transform={`
                translate(
                  ${cx + (w.x ?? 0)},
                  ${cy + (w.y ?? 0)}
                )
                rotate(${w.rotate ?? 0})
              `}
              fontSize={w.size}
              fontFamily="Lora, serif"
              fontWeight={
                anchor
                  ? 'bold'
                  : typeof w.weight === 'number'
                    ? w.weight
                    : (w.weight ?? 400)
              }
              fill={w.color}
              letterSpacing={anchor ? '-0.5px' : undefined}
              style={{
                cursor: 'default',
                userSelect: 'none',
                transition:
                  'fill 0.4s ease, filter 0.65s ease',
                filter: anchor ? anchorFilter : wordFilter,
              }}
            >
              {w.text}
            </text>
          );
        })}
      </svg>
    </div>
  );
}