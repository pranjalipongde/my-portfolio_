import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "GrowthLab - Digital Marketing",
    description:
      "SEO-optimised digital marketing website offering services around growth, branding, and online presence. Achieved 90+ Lighthouse score with performance-first architecture and clean responsive design.",
    tech: ["React.js", "Tailwind CSS", "SEO", "Performance Optimization"],
    github: null,
    live: "https://growth-page-pro.vercel.app/",
    badge: "Live Product",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Portfolio-grade AI resume analyzer with real-time Gemini API integration. Showcases modern UX patterns with shadcn/ui components and clean TypeScript architecture.",
    tech: ["React.js-router", "Vite", "Tailwind CSS", "Gemini API", "puter.js"],
    github: "https://github.com/pranjalipongde/ai-resume-builder",
    live: null,
    badge: "In Progress 🚧",
  },
  {
    title: "Bright Future International School",
    description:
      "Researched and analyzed an existing school website with poor performance and outdated UI. Conducted a full case study and redesigned it from scratch with SEO and performance optimization as the core focus.",
    tech: ["React.js", "Tailwind CSS", "SEO", "Performance Optimization"],
    github: null,
    live: "https://school-connect-lyart.vercel.app/",
    badge: "Case Study Redesign",
  },

  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce web app with authentication, product management, and CRUD operations. Built with optimized rendering and robust error handling for production reliability.",
    tech: ["React.js", "Redux", "Firebase", "REST APIs"],
    github: "https://github.com/pranjali-pongde",
    live: null,
    badge: "Personal Project",
  },
  {
    title: "PWM Group Website",
    description:
      "Developed and optimized the production website from scratch. Achieved 35% performance improvement with SEO-friendly, accessible markup and pixel-perfect cross-device consistency.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    github: null,
    live: "https://www.programmingwithmaurya.com/",
    badge: "Live Product",
  },
  {
    title: "Manage Landing Page",
    description:
      "Marketing landing page designed for high conversions, strong structure, and a polished layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pranjalipongde/frontend-mentor-manage-site",
    live: "https://frontend-mentor-manage-landing-pagee.netlify.app/",
    badge: "Frontend Mentor Challenge",
  },
  {
    title: "AI Writing Assistant UI",
    description:
      "Portfolio-grade AI writing assistant with real-time Gemini API integration. Showcases modern UX patterns with shadcn/ui components and clean TypeScript architecture.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Gemini API", "shadcn/ui"],
    github: "https://github.com/pranjalipongde/ai-writing-assistant",
    live: null,
    badge: "In Progress 🚧",
  },
  {
    title: "Hilink Travel Website",
    description:
      "Modern travel website UI developed with Next.js, React, and Tailwind CSS. Includes smooth animations, and clean responsive design.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    github: "https://github.com/pranjalipongde/ai-writing-assistant",
    live: "https://tailwind-travel-app-design.vercel.app/",
    badge: "Personal Project",
  },
];

const badgeColors = {
  "Personal Project": "#6b7645",
  "Live Product": "#0077b5",
  "Client Work": "#c8b89a",
  "Frontend Mentor Challenge": "#8a6a9a",
  "Case Study Redesign": "#c87941",
  "In Progress 🚧": "#e87c7c",
};

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="os-window mb-8 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\works</span>
            <div className="os-close-btn" aria-hidden="true">
              ✕
            </div>
          </div>
          <div className="p-5">
            <p className="font-mono text-xs text-olive-dark tracking-widest">
              <span className="text-olive">dir</span> /projects — listing{" "}
              {projects.length} items
            </p>
          </div>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="os-window pb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.45,
                  delay: i < INITIAL_COUNT ? 0 : (i - INITIAL_COUNT) * 0.1,
                }}
              >
                <div className="os-titlebar">
                  <span className="os-titlebar-text">
                    {project.title.toLowerCase().replace(/ /g, "_")}.jsx
                  </span>
                  <div className="os-close-btn" aria-hidden="true">
                    ✕
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 h-full">
                  {/* Badge + Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      style={{
                        fontFamily: '"Special Elite", serif',
                        fontSize: 17,
                        color: "#4a5230",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        background: badgeColors[project.badge] || "#6b7645",
                        color: "white",
                        fontFamily: "Share Tech Mono, monospace",
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 20,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        border: "1px solid #2c2c2c",
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <p className="font-body text-sm text-charcoal/75 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.github || project.live) && (
                    <div className="flex gap-3 pt-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn flex items-center gap-1.5 text-xs py-1.5 px-3"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn filled flex items-center gap-1.5 text-xs py-1.5 px-3"
                        >
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="retro-btn filled flex items-center gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp size={15} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={15} />
                View More Projects ({hiddenCount})
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
