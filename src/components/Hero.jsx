import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "UI Builder",
  "Freelancer",
  "Content Creator",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative"
    >
      {/* Big PORTFOLIO text in background */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: '"Special Elite", serif',
            fontSize: "clamp(60px, 12vw, 140px)",
            color: "rgba(107,118,69,0.13)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* OS Window */}
      <motion.div
        className="os-window w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title bar */}
        <div className="os-titlebar">
          <span className="os-titlebar-text">C:\PRANJALI\portfolio</span>
          <div className="os-close-btn" aria-hidden="true">
            ✕
          </div>
        </div>

        {/* Window content */}
        <div className="p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-olive">
            <img
              src={profile}
              alt="Pranjali"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="font-mono text-olive text-sm tracking-wider uppercase">
              hi! i'm
            </p>
            <h1
              style={{
                fontFamily: '"Special Elite", serif',
                fontSize: "clamp(26px, 5vw, 38px)",
                color: "#4a5230",
                lineHeight: 1.15,
              }}
            >
              Pranjali Pongde
            </h1>
            <div className="font-mono text-sm text-charcoal tracking-wider uppercase flex items-center gap-1 justify-center sm:justify-start">
              <span className="text-olive">I'M A</span>&nbsp;
              <span className="text-olive-dark font-bold cursor-blink">
                {displayed}
              </span>
            </div>
            <p
              className="font-body text-sm text-charcoal/70 italic mt-1"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              "Code with clarity, create with heart."
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
              <a href="#projects" className="retro-btn filled">
                View Work
              </a>
              <a href="#contact" className="retro-btn">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
