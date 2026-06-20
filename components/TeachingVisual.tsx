export function TeachingVisual() {
  return (
    <figure className="teaching-visual" aria-label="Abstract course board">
      <svg viewBox="0 0 640 420" role="img" aria-hidden="true">
        <path
          className="teaching-grid-lines"
          d="M84 78 H556 M84 138 H556 M84 198 H556 M84 258 H556 M84 318 H556 M148 54 V348 M260 54 V348 M372 54 V348 M484 54 V348"
        />
        <g className="teaching-board">
          <rect x="116" y="86" width="408" height="248" rx="10" />
          <path d="M154 136 H340" />
          <path d="M154 176 H296" />
          <path d="M154 216 H376" />
          <path d="M154 256 H318" />
        </g>
        <path
          className="teaching-curve primary"
          d="M128 304 C190 250 218 168 286 164 C356 158 374 244 446 226 C492 214 516 174 548 128"
        />
        <path
          className="teaching-curve secondary"
          d="M132 120 C188 144 230 122 278 138 C332 156 346 210 404 218 C458 226 494 196 536 214"
        />
        <g className="teaching-nodes">
          <circle cx="128" cy="304" r="9" />
          <circle cx="286" cy="164" r="8" />
          <circle cx="446" cy="226" r="8" />
          <circle cx="548" cy="128" r="9" />
          <circle cx="132" cy="120" r="7" />
          <circle cx="278" cy="138" r="7" />
          <circle cx="404" cy="218" r="7" />
          <circle cx="536" cy="214" r="7" />
        </g>
        <g className="teaching-tiles">
          <rect x="396" y="112" width="72" height="44" rx="8" />
          <rect x="414" y="282" width="92" height="34" rx="17" />
        </g>
      </svg>
    </figure>
  );
}
