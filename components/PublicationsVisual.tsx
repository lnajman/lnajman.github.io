export function PublicationsVisual() {
  return (
    <figure
      className="publications-visual"
      aria-label="Abstract HAL publication records"
    >
      <svg viewBox="0 0 640 420" role="img" aria-hidden="true">
        <path
          className="publication-grid"
          d="M78 72 H562 M78 132 H562 M78 192 H562 M78 252 H562 M78 312 H562 M140 48 V354 M252 48 V354 M364 48 V354 M476 48 V354"
        />
        <g className="publication-pages">
          <rect x="126" y="92" width="252" height="172" rx="8" />
          <rect x="158" y="126" width="252" height="172" rx="8" />
          <rect x="190" y="160" width="252" height="172" rx="8" />
        </g>
        <g className="publication-lines">
          <path d="M226 206 H402" />
          <path d="M226 238 H370" />
          <path d="M226 270 H414" />
          <path d="M226 302 H336" />
        </g>
        <path
          className="publication-flow primary"
          d="M104 320 C166 292 184 250 222 214 C270 170 338 174 382 216 C424 256 464 282 538 258"
        />
        <path
          className="publication-flow secondary"
          d="M98 110 C172 142 210 110 268 118 C340 128 368 184 436 190 C488 194 520 166 548 136"
        />
        <g className="publication-nodes">
          <circle cx="104" cy="320" r="9" />
          <circle cx="222" cy="214" r="8" />
          <circle cx="382" cy="216" r="8" />
          <circle cx="538" cy="258" r="9" />
          <circle cx="98" cy="110" r="7" />
          <circle cx="268" cy="118" r="7" />
          <circle cx="436" cy="190" r="7" />
          <circle cx="548" cy="136" r="7" />
        </g>
        <g className="publication-tags">
          <rect x="430" y="84" width="80" height="34" rx="17" />
          <rect x="450" y="306" width="92" height="34" rx="17" />
        </g>
      </svg>
    </figure>
  );
}
