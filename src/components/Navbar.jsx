import { useState, useEffect } from "react";

const FolderIcon = ({ label, href, active }) => (
  <a
    href={href}
    className="folder-icon group"
    aria-label={`Navigate to ${label}`}
  >
    <svg
      width="36"
      height="32"
      viewBox="0 0 44 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C2 8.34 3.34 7 5 7H18L22 3H39C40.66 3 42 4.34 42 6V32C42 33.66 40.66 35 39 35H5C3.34 35 2 33.66 2 32V10Z"
        fill={active ? "#e8c84a" : "#f5c842"}
        stroke="#2c2c2c"
        strokeWidth="2"
      />
      <path
        d="M2 13H42V32C42 33.66 40.66 35 39 35H5C3.34 35 2 33.66 2 32V13Z"
        fill={active ? "#f0d55a" : "#fad84a"}
        stroke="#2c2c2c"
        strokeWidth="2"
      />
    </svg>
    <span className="font-mono text-[10px] text-charcoal font-medium">
      {label}
    </span>
  </a>
);

const HIcon = ({ href, active }) => (
  <a href={href} className="folder-icon" aria-label="Home">
    <div
      style={{
        width: 36,
        height: 36,
        background: active ? "#4a5230" : "#6b7645",
        border: "2px solid #2c2c2c",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "2px 2px 0px #2c2c2c",
      }}
    >
      <span
        style={{
          fontFamily: "Share Tech Mono",
          fontSize: 18,
          color: "white",
          fontWeight: "bold",
        }}
      >
        p
      </span>
    </div>
    <span className="font-mono text-[10px] text-charcoal font-medium">
      profile
    </span>
  </a>
);

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "projects",
      "content",
      "resume",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "profile", href: "#hero", id: "hero", isH: true },
    { label: "works", href: "#projects", id: "projects" },
    { label: "about", href: "#about", id: "about" },
    { label: "content", href: "#content", id: "content" },
    { label: "resume", href: "#resume", id: "resume" },
    { label: "contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* ── DESKTOP ONLY: Sidebars ── */}
      <div className="hidden lg:block">
        <nav className="sidebar-nav left-8" aria-label="Main navigation">
          <HIcon href="#hero" active={active === "hero"} />
          <FolderIcon
            label="works"
            href="#projects"
            active={active === "projects"}
          />
        </nav>

        <nav className="sidebar-nav right-8" aria-label="Secondary navigation">
          <FolderIcon
            label="contact"
            href="#contact"
            active={active === "contact"}
          />
          <FolderIcon
            label="resume"
            href="#resume"
            active={active === "resume"}
          />
        </nav>
      </div>

      {/* ── MOBILE & TABLET ONLY: Top bar ── */}
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
        aria-label="Mobile navigation"
        style={{
          background: "#f0ede3",
          borderBottom: "2px solid #2c2c2c",
          boxShadow: "0 2px 0px #6b7645",
        }}
      >
        {/* OS-style title bar */}
        <div
          style={{
            background: "#6b7645",
            borderBottom: "2px solid #2c2c2c",
            padding: "5px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "Share Tech Mono, monospace",
              fontSize: 12,
              color: "white",
              letterSpacing: 0.5,
            }}
          >
            C:\PRANJALI\portfolio
          </span>
          <div
            style={{
              width: 14,
              height: 14,
              background: "#e87c7c",
              border: "1.5px solid #2c2c2c",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: "bold",
              color: "#2c2c2c",
            }}
          >
            ✕
          </div>
        </div>

        {/* Nav icons row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "8px 10px",
            backgroundImage:
              "linear-gradient(to right, #d8d4c4 1px, transparent 1px), linear-gradient(to bottom, #d8d4c4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          {navItems.map((item) =>
            item.isH ? (
              <HIcon
                key={item.id}
                href={item.href}
                active={active === item.id}
              />
            ) : (
              <FolderIcon
                key={item.id}
                label={item.label}
                href={item.href}
                active={active === item.id}
              />
            ),
          )}
        </div>
      </nav>

      {/* Spacer for mobile so hero isn't hidden behind top navbar */}
      <div className="lg:hidden" style={{ height: 100 }} />
    </>
  );
}
