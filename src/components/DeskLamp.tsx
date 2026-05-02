'use client';

/**
 * DeskLamp.tsx
 *
 * Change from previous version: size classes are increased.
 * The ambient wash ellipse proportionally matches the new
 * size so the glow radius relative to the lamp stays the same.
 * No other logic changes.
 */

import Image from 'next/image';
import { useEffect, useId, useState } from 'react';
import {
  LAMP_BULB_LOCAL,
  LAMP_MATRIX,
  LAMP_SHADE_CUT_LOCAL,
  lampBulbClipPolygonLocal,
  lampLocalToRoot654,
} from '@/lib/lampLight';

export default function DeskLamp() {
  const [dark, setDark] = useState(false);
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    const root = document.documentElement;
    const check = () =>
      setDark(root.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const t = 'opacity 0.65s ease, fill 0.65s ease';
  const bulb = LAMP_BULB_LOCAL;
  const bulbRoot = lampLocalToRoot654(bulb.x, bulb.y);
  const clipPts = lampBulbClipPolygonLocal(
    bulb.x,
    bulb.y,
    LAMP_SHADE_CUT_LOCAL
  );

  const washGradId = `dl-wash-${uid}`;
  const clipId = `dl-bulb-clip-${uid}`;
  const bulbCoreId = `dl-bulb-core-${uid}`;
  const bulbDimId = `dl-bulb-dim-${uid}`;
  const bloomId = `dl-bloom-${uid}`;

  /*
   * Ellipse radii are intentionally larger than the gradient
   * radius r so the gradient reaches zero opacity before the
   * ellipse boundary, eliminating any visible ellipse edge.
   */
  const washRx = dark ? 400 : 300;
  const washRy = dark ? 380 : 280;

  return (
    <div
      className={[
        'relative select-none pointer-events-none',
        'aspect-square',
        /* Increased from 260/300/360px */
        'w-[320px] sm:w-[380px] md:w-[440px]',
        'flex-shrink-0',
      ].join(' ')}
      aria-hidden="true"
    >
      {/*
       * Ambient wash layer.
       * Uses an <ellipse> rather than a <rect> so there is no
       * hard rectangular boundary regardless of background.
       */}
      <svg
        viewBox="0 0 654 654"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 z-0 h-full w-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient
            id={washGradId}
            gradientUnits="userSpaceOnUse"
            cx={bulbRoot.x}
            cy={bulbRoot.y}
            r={dark ? 320 : 240}
            fx={bulbRoot.x}
            fy={bulbRoot.y}
          >
            <stop
              offset="0%"
              stopColor="#fff0d0"
              stopOpacity="0.5"
            />
            <stop
              offset="35%"
              stopColor="#ffd898"
              stopOpacity="0.22"
            />
            <stop
              offset="85%"
              stopColor="#ff9900"
              stopOpacity="0.04"
            />
            <stop
              offset="100%"
              stopColor="#ff9900"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <ellipse
          cx={bulbRoot.x}
          cy={bulbRoot.y}
          rx={washRx}
          ry={washRy}
          fill={`url(#${washGradId})`}
          opacity={dark ? 1 : 0}
          style={{ transition: t }}
        />
      </svg>

      <Image
        src="/lamp-black.svg"
        alt=""
        width={654}
        height={654}
        className="relative z-[1] h-full w-full object-contain"
        draggable={false}
        unoptimized
      />

      <svg
        viewBox="0 0 654 654"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 z-[2] h-full w-full"
      >
        <defs>
          <radialGradient
            id={bulbCoreId}
            cx="45%"
            cy="35%"
            r="65%"
          >
            <stop offset="0%" stopColor="#fffef5" />
            <stop offset="45%" stopColor="#fff4c8" />
            <stop offset="100%" stopColor="#e8d078" />
          </radialGradient>
          <radialGradient
            id={bulbDimId}
            cx="50%"
            cy="40%"
            r="60%"
          >
            <stop offset="0%" stopColor="#c8c2b4" />
            <stop offset="100%" stopColor="#7a7268" />
          </radialGradient>
          <filter
            id={bloomId}
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="9" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform={LAMP_MATRIX}>
          <defs>
            <clipPath
              id={clipId}
              clipPathUnits="userSpaceOnUse"
            >
              <polygon points={clipPts} />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            <ellipse
              cx={bulb.x}
              cy={bulb.y + 6}
              rx={dark ? 38 : 24}
              ry={dark ? 34 : 20}
              fill="#fff6d4"
              opacity={dark ? 0.55 : 0.12}
              style={{ transition: t }}
            />

            <g
              filter={`url(#${bloomId})`}
              style={{ transition: t }}
            >
              <ellipse
                cx={bulb.x}
                cy={bulb.y}
                rx={dark ? 20 : 17}
                ry={dark ? 24 : 20}
                fill={
                  dark
                    ? `url(#${bulbCoreId})`
                    : `url(#${bulbDimId})`
                }
                stroke="#4a4036"
                strokeWidth="0.85"
                style={{ transition: t }}
              />
            </g>

            <ellipse
              cx={bulb.x - 5}
              cy={bulb.y - 8}
              rx={5}
              ry={7}
              fill="#ffffff"
              opacity={dark ? 0.55 : 0.18}
              transform={
                `rotate(-18 ${bulb.x - 5} ${bulb.y - 8})`
              }
              style={{ transition: t }}
            />

            <g
              opacity={dark ? 0.95 : 0.25}
              style={{ transition: t }}
            >
              <path
                d={
                  `M ${bulb.x - 4} ${bulb.y - 2}` +
                  ` Q ${bulb.x} ${bulb.y + 4}` +
                  ` ${bulb.x + 4} ${bulb.y - 2}`
                }
                fill="none"
                stroke="#c9a040"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle
                cx={bulb.x}
                cy={bulb.y + 1}
                r={dark ? 2.2 : 1.4}
                fill="#ffd870"
                style={{ transition: t }}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}