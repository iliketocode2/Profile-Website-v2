/**
 * Shared math for the traced desk lamp SVG: bulb lives in the same local
 * space as the Inkscape path group (matrix below).
 */

export const LAMP_MATRIX =
  'matrix(1.2072421,0,0,1.1915593,-160.26411,-116.60953)';

const A = 1.2072421;
const B = 0;
const C = 0;
const D = 1.1915593;
const E = -160.26411;
const F = -116.60953;

/** Bulb center in local (path-group) coordinates — tune with DeskLamp visuals. */
export const LAMP_BULB_LOCAL = { x: 215, y: 220 };

/**
 * Shade cuts off the bulb from upper-right along this segment (local space).
 * Adjust angle/length if the clip does not match the artwork.
 */
/** Shade inner edge / cut line (local space). Tune to match artwork. */
export const LAMP_SHADE_CUT_LOCAL = {
  x0: 80,
  y0: 120,
  x1: 323,
  y1: 300,
} as const;

/** Map a point from lamp path local space to the 654×654 lamp SVG root. */
export function lampLocalToRoot654(lx: number, ly: number) {
  return {
    x: A * lx + B * ly + E,
    y: C * lx + D * ly + F,
  };
}

/**
 * Parallelogram (local coords) covering the half-plane on the bulb side of
 * the shade cut line: extended edge along the cut, extruded by `BIG` in
 * the perpendicular direction that contains the bulb.
 */
export function lampBulbClipPolygonLocal(
  bulbX: number,
  bulbY: number,
  cut: typeof LAMP_SHADE_CUT_LOCAL
) {
  const { x0, y0, x1, y1 } = cut;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  let vx = -uy;
  let vy = ux;
  const midx = (x0 + x1) / 2;
  const midy = (y0 + y1) / 2;
  if (
    (bulbX - midx) * vx + (bulbY - midy) * vy < 0
  ) {
    vx = -vx;
    vy = -vy;
  }
  const EXT = 3500;
  const BIG = 3500;
  const ex0 = x0 - ux * EXT;
  const ey0 = y0 - uy * EXT;
  const ex1 = x1 + ux * EXT;
  const ey1 = y1 + uy * EXT;
  return [
    `${ex0},${ey0}`,
    `${ex1},${ey1}`,
    `${ex1 + vx * BIG},${ey1 + vy * BIG}`,
    `${ex0 + vx * BIG},${ey0 + vy * BIG}`,
  ].join(' ');
}
