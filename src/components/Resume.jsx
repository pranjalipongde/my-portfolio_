import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const highlights = [
  { label: "2+ Years", sub: "Frontend Experience" },
  { label: "40%", sub: "Page Load Improvement" },
  { label: "99", sub: "Lighthouse Score" },
  { label: "10+", sub: "Projects Delivered" },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="os-window reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\resume.pdf</span>
            <div className="os-close-btn" aria-hidden="true">
              ✕
            </div>
          </div>

          <div className="p-7 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <h2
                  style={{
                    fontFamily: '"Special Elite", serif',
                    fontSize: 28,
                    color: "#4a5230",
                    marginBottom: 8,
                  }}
                >
                  Resume
                </h2>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-xs">
                  Frontend Developer · React Developer · UI Builder
                  <br />
                  Available for full-time roles & freelance projects.
                </p>
              </div>

              {/* File icon */}
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: 70,
                    height: 80,
                    background: "#f0ede3",
                    border: "2px solid #2c2c2c",
                    borderRadius: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "3px 3px 0px #6b7645",
                    gap: 4,
                  }}
                >
                  <FileText size={28} color="#6b7645" />
                  <span
                    style={{
                      fontFamily: "Share Tech Mono, monospace",
                      fontSize: 9,
                      color: "#4a5230",
                    }}
                  >
                    .PDF
                  </span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    border: "2px solid #2c2c2c",
                    borderRadius: 6,
                    padding: "14px 10px",
                    textAlign: "center",
                    background: "rgba(107,118,69,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Special Elite", serif',
                      fontSize: 26,
                      color: "#4a5230",
                      lineHeight: 1,
                    }}
                  >
                    {h.label}
                  </div>
                  <div className="font-mono text-[10px] text-charcoal/60 mt-1 uppercase tracking-wider">
                    {h.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience timeline snippet */}
            <div className="mb-8">
              <p className="font-mono text-xs text-olive uppercase tracking-widest mb-4">
                // Experience
              </p>
              <div className="space-y-3">
                {[
                  {
                    role: "Frontend Developer",
                    company: "DigiCroz",
                    period: "Jan 2026 – Present",
                    current: true,
                  },
                  {
                    role: "Frontend Developer",
                    company: "PWM Group",
                    period: "May 2025 – Jul 2025",
                    current: false,
                  },
                  {
                    role: "Frontend Developer",
                    company: "Blue Infinity Tech LLP",
                    period: "May 2023 – Feb 2024",
                    current: false,
                  },
                  {
                    role: "ReactJS Intern",
                    company: "Syslog Infotech",
                    period: "Sep 2022 – Apr 2023",
                    current: false,
                  },
                ].map((exp) => (
                  <div
                    key={exp.company}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      paddingBottom: 10,
                      borderBottom: "1px dashed #d8d4c4",
                    }}
                  >
                    <div>
                      <span className="font-body text-sm font-semibold text-charcoal">
                        {exp.role}
                      </span>
                      <span className="font-mono text-xs text-olive mx-2">
                        @
                      </span>
                      <span className="font-body text-sm text-charcoal/70">
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span
                          style={{
                            marginLeft: 8,
                            background: "#6b7645",
                            color: "white",
                            fontFamily: "Share Tech Mono, monospace",
                            fontSize: 9,
                            padding: "1px 6px",
                            borderRadius: 10,
                          }}
                        >
                          CURRENT
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-charcoal/50 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download button */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/Pranjali_Pongde_Resume.pdf"
                download
                className="retro-btn filled flex items-center gap-2"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="mailto:pranjalipongde0997@gmail.com"
                className="retro-btn flex items-center justify-center gap-2"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
