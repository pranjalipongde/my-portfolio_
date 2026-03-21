import { useState, useEffect } from "react";

const FolderIcon = ({ label, href, active }) => (
  <a
    href={href}
    className="folder-icon group"
    aria-label={`Navigate to ${label}`}
  >
    <svg
      width="44"
      height="38"
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
    <span className="font-mono text-[11px] text-charcoal font-medium">
      {label}
    </span>
  </a>
);

const HIcon = ({ href, active }) => (
  <a href={href} className="folder-icon" aria-label="Home">
    <div
      style={{
        width: 44,
        height: 44,
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
          fontSize: 22,
          color: "white",
          fontWeight: "bold",
        }}
      >
        p
      </span>
    </div>
    <span className="font-mono text-[11px] text-charcoal font-medium">
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

  return (
    <>
      {/* Left sidebar */}
      <nav
        className="sidebar-nav left-4 lg:left-8"
        aria-label="Main navigation"
      >
        <HIcon href="#hero" active={active === "hero"} />
        <FolderIcon
          label="works"
          href="#projects"
          active={active === "projects"}
        />
      </nav>

      {/* Right sidebar */}
      <nav
        className="sidebar-nav right-4 lg:right-8"
        aria-label="Secondary navigation"
      >
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
    </>
  );
}
