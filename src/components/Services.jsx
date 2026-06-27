import { motion } from "framer-motion";
import {
  Zap,
  Globe,
  ShoppingCart,
  BarChart2,
  Search,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Landing Page",
    color: "#f5c842",
    delivery: "48hr delivery",
    description:
      "High-converting, mobile-first landing pages built for founders, coaches, and creators. Fast turnaround, pixel-perfect output.",
    features: ["48hr turnaround", "Mobile-first", "SEO ready", "CTA optimized"],
  },
  {
    icon: Globe,
    title: "Business Website",
    color: "#7eb5d6",
    delivery: "5–7 days",
    description:
      "Professional multi-page websites for agencies, startups, and small businesses. Clean design, fast performance, easy to manage.",
    features: ["Multi-page", "Contact form", "SEO optimized", "Responsive"],
  },
  {
    icon: ShoppingCart,
    title: "Web App / Dashboard",
    color: "#6b7645",
    delivery: "Custom timeline",
    description:
      "Full React.js or Next.js web apps with API integration, authentication, role-based access, and dynamic dashboards.",
    features: ["React / Next.js", "REST API", "Auth & RBAC", "Data tables"],
  },
  {
    icon: Smartphone,
    title: "Portfolio Website",
    color: "#e8a0a0",
    delivery: "3–5 days",
    description:
      "Standout portfolio sites for developers, designers, and creators. Unique designs that get you noticed and land you opportunities.",
    features: ["Unique design", "Fast load", "SEO ready", "Mobile-first"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    color: "#8a9a5b",
    delivery: "2–3 days",
    description:
      "Lighthouse audits, performance fixes, SEO improvements, and accessibility fixes for existing websites. Real measurable results.",
    features: [
      "Lighthouse 90+",
      "Core Web Vitals",
      "Meta & SEO",
      "Accessibility",
    ],
  },
  {
    icon: BarChart2,
    title: "UI from Figma / Design",
    color: "#c8b89a",
    delivery: "Depends on scope",
    description:
      "Pixel-perfect conversion of Figma designs or mockups into clean, responsive React components with Tailwind CSS.",
    features: [
      "Pixel-perfect",
      "Tailwind CSS",
      "Reusable components",
      "Clean code",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header window */}
        <motion.div
          className="os-window mb-8 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\services</span>
            <div className="os-close-btn" aria-hidden="true">
              ✕
            </div>
          </div>
          <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2
                style={{
                  fontFamily: '"Special Elite", serif',
                  fontSize: 26,
                  color: "#4a5230",
                  marginBottom: 6,
                }}
              >
                What I Build
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-lg">
                From quick landing pages to full web apps — here's what I offer.
                All projects include clean code, mobile-first design, and fast
                delivery.
              </p>
            </div>
            {/* Available badge */}
            <div
              style={{
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(107,118,69,0.1)",
                border: "1.5px solid #6b7645",
                borderRadius: 20,
                padding: "6px 14px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#7ecb96",
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "Share Tech Mono, monospace",
                  fontSize: 11,
                  color: "#4a5230",
                  letterSpacing: 0.8,
                }}
              >
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="os-window reveal hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="os-titlebar">
                  <span className="os-titlebar-text">
                    {service.title
                      .toLowerCase()
                      .replace(/ \//g, "")
                      .replace(/ /g, "_")}
                    .jsx
                  </span>
                  <div className="os-close-btn" aria-hidden="true">
                    ✕
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  {/* Icon + delivery */}
                  <div className="flex items-start justify-between">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: service.color,
                        border: "2px solid #2c2c2c",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "2px 2px 0px #2c2c2c",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="white" strokeWidth={1.8} />
                    </div>
                    <span
                      style={{
                        fontFamily: "Share Tech Mono, monospace",
                        fontSize: 10,
                        color: "#6b7645",
                        background: "rgba(107,118,69,0.08)",
                        border: "1px solid #6b7645",
                        borderRadius: 20,
                        padding: "2px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ⏱ {service.delivery}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: '"Special Elite", serif',
                      fontSize: 17,
                      color: "#4a5230",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {service.features.map((f) => (
                      <span key={f} className="tech-tag text-[10px]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-8 reveal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="os-window" style={{ borderStyle: "dashed" }}>
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p
                  style={{
                    fontFamily: '"Special Elite", serif',
                    fontSize: 18,
                    color: "#4a5230",
                    marginBottom: 4,
                  }}
                >
                  Not sure what you need?
                </p>
                <p className="font-body text-sm text-charcoal/65">
                  Drop me a message and we'll figure it out together. Free
                  consultation, no pressure.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="#contact"
                  className="retro-btn filled whitespace-nowrap"
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
