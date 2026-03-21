// Social icon color map
const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pranjali-pongde",
    color: "#0077b5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/pranjali-pongde",
    color: "#2c2c2c",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/its_prranjalii?igsh=aHE4anY0Y2Y1enNt",
    color: "#e4405f",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function SocialBar() {
  return (
    <div className="olive-bar w-full">
      <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap px-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ background: s.color }}
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
