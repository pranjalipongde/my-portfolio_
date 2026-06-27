import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  CheckCircle,
  Calendar,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "pranjalipongdee@gmail.com",
    href: "mailto:pranjalipongdee@gmail.com",
    icon: Mail,
    color: "#e87c7c",
  },
  {
    label: "LinkedIn",
    value: "/in/pranjali-pongde",
    href: "https://linkedin.com/in/pranjali-pongde",
    icon: Linkedin,
    color: "#0077b5",
  },
  {
    label: "GitHub",
    value: "@pranjali-pongde",
    href: "https://github.com/pranjali-pongde",
    icon: Github,
    color: "#2c2c2c",
  },
  {
    label: "Instagram",
    value: "@its_prranjalii",
    href: "https://www.instagram.com/its_prranjalii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    color: "#e4405f",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Pranjali,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:pranjalipongdee@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ── Book a Discovery Call CTA ── */}
        <motion.div
          className="os-window mb-6 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\book_a_call</span>
            <div className="os-close-btn" aria-hidden="true">
              ✕
            </div>
          </div>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left text */}
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                {/* Pulsing dot */}
                <span
                  style={{
                    position: "relative",
                    display: "flex",
                    width: 10,
                    height: 10,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#7ecb96",
                      opacity: 0.6,
                      animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#7ecb96",
                      display: "block",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: 11,
                    color: "#6b7645",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <h2
                style={{
                  fontFamily: '"Special Elite", serif',
                  fontSize: 24,
                  color: "#4a5230",
                  marginBottom: 6,
                }}
              >
                Let's Talk About Your Project
              </h2>
              <p className="font-body text-sm text-charcoal/65 leading-relaxed max-w-sm">
                Have a project in mind? Book a free 30-minute discovery call —
                no pressure, just a conversation about what you need and how I
                can help.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <a
                href="https://calendly.com/pranjalipongde9/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn filled flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 14 }}
              >
                <Calendar size={15} />
                Book a Discovery Call
              </a>
              <span className="font-mono text-[10px] text-charcoal/40">
                // Free · 30 min · No obligation
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Contact info + Form ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Info window */}
          <motion.div
            className="os-window reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="os-titlebar">
              <span className="os-titlebar-text">C:\PRANJALI\contact</span>
              <div className="os-close-btn" aria-hidden="true">
                ✕
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2
                style={{
                  fontFamily: '"Special Elite", serif',
                  fontSize: 26,
                  color: "#4a5230",
                  marginBottom: 8,
                }}
              >
                Let's Connect
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-7">
                Open to frontend roles, freelance projects, and content
                collaborations. Drop a message — I usually respond within 24
                hours!
              </p>

              <div className="space-y-4">
                {contactLinks.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={
                        c.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: c.color,
                          border: "2px solid #2c2c2c",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "2px 2px 0px #2c2c2c",
                          flexShrink: 0,
                          transition: "all 0.15s ease",
                        }}
                        className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none"
                      >
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-olive uppercase tracking-widest">
                          {c.label}
                        </p>
                        <p className="font-body text-sm text-charcoal/80">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form window */}
          <motion.div
            className="os-window reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="os-titlebar">
              <span className="os-titlebar-text">new_message.txt</span>
              <div className="os-close-btn" aria-hidden="true">
                ✕
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-xs text-olive uppercase tracking-widest block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "2px solid #2c2c2c",
                      borderRadius: 4,
                      padding: "8px 12px",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: 14,
                      color: "#2c2c2c",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#6b7645")}
                    onBlur={(e) => (e.target.style.borderColor = "#2c2c2c")}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-olive uppercase tracking-widest block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "2px solid #2c2c2c",
                      borderRadius: 4,
                      padding: "8px 12px",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: 14,
                      color: "#2c2c2c",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#6b7645")}
                    onBlur={(e) => (e.target.style.borderColor = "#2c2c2c")}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-olive uppercase tracking-widest block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Hi Pranjali, I'd love to..."
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "2px solid #2c2c2c",
                      borderRadius: 4,
                      padding: "8px 12px",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: 14,
                      color: "#2c2c2c",
                      resize: "vertical",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#6b7645")}
                    onBlur={(e) => (e.target.style.borderColor = "#2c2c2c")}
                  />
                </div>

                <button
                  type="submit"
                  className="retro-btn filled flex items-center justify-center gap-2 w-full"
                >
                  {sent ? (
                    <div className="flex justify-center items-center gap-2">
                      <CheckCircle size={15} /> Sent! Opening Mail App...
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <Send size={15} /> Send Message
                    </div>
                  )}
                </button>

                <p className="font-mono text-[10px] text-charcoal/40 text-center">
                  // This will open your mail app with pre-filled content
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ping animation */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
