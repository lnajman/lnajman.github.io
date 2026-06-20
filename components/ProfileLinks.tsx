const profileLinks = [
  {
    label: "HAL",
    detail: "Open archive CV and publications",
    href: "https://cv.hal.science/laurent-najman",
  },
  {
    label: "Google Scholar",
    detail: "Citations and publication metrics",
    href: "https://scholar.google.com/citations?user=j-2_cT0AAAAJ",
  },
  {
    label: "ORCID",
    detail: "0000-0002-6190-0235",
    href: "https://orcid.org/0000-0002-6190-0235",
  },
  {
    label: "Scopus",
    detail: "Author ID 6701738948",
    href: "http://www.scopus.com/inward/authorDetails.url?authorID=6701738948&partnerID=MN8TOARS",
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: "https://www.linkedin.com/in/laurentnajman/",
  },
];

type ProfileLinksProps = {
  className?: string;
  compact?: boolean;
};

export function ProfileLinks({
  className = "",
  compact = false,
}: ProfileLinksProps) {
  const classes = [
    "profile-links",
    compact ? "profile-links-compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={classes} aria-label="External academic profiles">
      {profileLinks.map((profile) => (
        <li key={profile.label}>
          <a href={profile.href}>
            <span>{profile.label}</span>
            {compact ? null : <small>{profile.detail}</small>}
          </a>
        </li>
      ))}
    </ul>
  );
}
