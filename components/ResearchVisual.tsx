import { useId } from "react";

type ResearchVisualProps = {
  className?: string;
  variant?: "hero" | "theme";
};

export function ResearchVisual({
  className = "",
  variant = "hero",
}: ResearchVisualProps) {
  const gridId = `${variant}-${useId().replace(/:/g, "")}`;

  return (
    <figure
      className={`math-plate ${variant === "theme" ? "theme-plate" : ""} ${className}`}
      aria-label="Abstract graph, tree, contour, and simplicial complex motif"
    >
      <svg viewBox="0 0 640 420" role="img" aria-hidden="true">
        <defs>
          <pattern
            id={gridId}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 32 0 L 0 0 0 32" />
          </pattern>
        </defs>
        <rect className="plate-paper" x="0" y="0" width="640" height="420" />
        <rect
          className="plate-grid"
          fill={`url(#${gridId})`}
          x="28"
          y="28"
          width="584"
          height="364"
        />
        <path
          className="plate-contour contour-a"
          d="M92 280 C126 222 165 236 198 196 C231 156 278 166 300 118 C326 60 398 72 430 128 C462 184 526 168 554 226 C586 292 534 348 456 336 C390 326 358 356 294 332 C236 310 198 344 148 326 C104 310 72 316 92 280Z"
        />
        <path
          className="plate-contour contour-b"
          d="M154 260 C182 220 218 226 244 190 C270 154 318 176 342 140 C370 98 420 124 432 170 C446 222 494 212 500 258 C506 304 458 318 412 300 C366 282 336 310 286 288 C236 266 198 304 154 260Z"
        />
        <path
          className="plate-contour contour-c"
          d="M226 246 C246 218 270 220 288 196 C308 170 344 190 366 166 C386 144 412 162 416 194 C420 224 454 226 452 254 C450 286 412 286 386 270 C356 254 334 274 304 258 C276 244 246 272 226 246Z"
        />
        <path
          className="plate-tree"
          d="M102 102 L176 156 L244 104 M176 156 L220 226 L306 200 M220 226 L172 306 M306 200 L388 252 L502 210 M388 252 L444 326 M502 210 L548 290"
        />
        <g className="plate-complex">
          <path d="M368 86 L478 72 L548 144 L504 236 L410 214 L346 154 Z" />
          <path d="M368 86 L410 214 L478 72 L504 236 L548 144 L410 214 L346 154 L478 72" />
        </g>
        <g className="plate-watershed">
          <path d="M78 348 C138 334 184 364 236 348 S338 322 404 346 S518 366 584 332" />
          <path d="M92 368 C160 348 210 386 270 362 S368 344 430 366 S522 392 592 354" />
        </g>
        {[
          [102, 102],
          [176, 156],
          [244, 104],
          [220, 226],
          [306, 200],
          [172, 306],
          [388, 252],
          [502, 210],
          [444, 326],
          [548, 290],
          [368, 86],
          [478, 72],
          [548, 144],
          [504, 236],
          [410, 214],
          [346, 154],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            className="plate-node"
            cx={cx}
            cy={cy}
            r="6"
          />
        ))}
      </svg>
    </figure>
  );
}
