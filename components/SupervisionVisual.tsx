export function SupervisionVisual() {
  return (
    <figure
      className="supervision-visual"
      aria-label="Abstract academic supervision network"
    >
      <svg viewBox="0 0 640 420" role="img" aria-hidden="true">
        <path
          className="lineage-grid"
          d="M72 70 H568 M72 140 H568 M72 210 H568 M72 280 H568 M72 350 H568 M112 48 V372 M208 48 V372 M304 48 V372 M400 48 V372 M496 48 V372"
        />
        <path
          className="lineage-link main"
          d="M318 82 C290 130 272 170 244 210 C212 256 168 286 112 334"
        />
        <path
          className="lineage-link main"
          d="M322 82 C350 132 370 178 408 218 C448 260 500 296 560 334"
        />
        <path
          className="lineage-link secondary"
          d="M318 82 C310 142 320 196 304 256 C294 294 268 326 230 354"
        />
        <path
          className="lineage-link secondary"
          d="M322 82 C340 150 334 206 356 266 C372 310 410 340 462 358"
        />
        <path
          className="lineage-link tertiary"
          d="M144 230 C206 194 264 194 326 230 C386 264 444 264 502 228"
        />
        <g className="lineage-cluster left">
          <circle cx="112" cy="334" r="11" />
          <circle cx="154" cy="294" r="8" />
          <circle cx="194" cy="256" r="8" />
          <circle cx="234" cy="214" r="8" />
          <circle cx="274" cy="172" r="8" />
          <circle cx="230" cy="354" r="8" />
          <circle cx="184" cy="342" r="6" />
        </g>
        <g className="lineage-cluster right">
          <circle cx="560" cy="334" r="11" />
          <circle cx="516" cy="298" r="8" />
          <circle cx="474" cy="262" r="8" />
          <circle cx="432" cy="222" r="8" />
          <circle cx="390" cy="178" r="8" />
          <circle cx="462" cy="358" r="8" />
          <circle cx="504" cy="350" r="6" />
        </g>
        <g className="lineage-cluster center">
          <circle cx="304" cy="256" r="9" />
          <circle cx="356" cy="266" r="9" />
          <circle cx="326" cy="230" r="7" />
        </g>
        <circle className="lineage-hub" cx="320" cy="82" r="22" />
      </svg>
    </figure>
  );
}
