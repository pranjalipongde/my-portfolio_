export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "2px solid #2c2c2c",
        background: "#4a5230",
        padding: "24px 16px",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span
            style={{
              fontFamily: '"Special Elite", serif',
              fontSize: 18,
              color: "white",
              letterSpacing: 2,
            }}
          >
            PRANJALI PONGDE
          </span>
        </div>

        <div className="font-mono text-xs text-white/60 text-center">
          <span>C:\{year}\portfolio — Built with ♥</span>
        </div>

        <div className="flex gap-3">
          {["#hero", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] text-white/70 hover:text-white transition-colors"
              style={{ textDecoration: "none" }}
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
