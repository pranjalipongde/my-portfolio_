import { motion } from "framer-motion";
import { Play, Heart, ShoppingBag, Star, Sparkles, Camera } from "lucide-react";

const contentPosts = [
  {
    type: "Product Review",
    icon: Sparkles,
    color: "#e8a0a0",
    title: "Mini Lipsticks kit",
    caption:
      "@justherbsindia Mini Lipstick Kit ✨Ordered this 16-shade Ayurvedic lipstick kit from @getsmytten and I’m OBSESSED! 💄So tiny, so cute, and honestly… perfect to test all shades before committing to full-size. Plus, it's herb-enriched, natural, and super beginner-friendly.",
    views: "8k+",
    platform: "Instagram",
  },
  {
    type: "Brand Collab",
    icon: Star,
    color: "#f5c842",
    title: "First Brand collabe with dinkeyclub",
    caption:
      "Try this stunnig pieces from @dinkeyclub and get 10% off with dicount code 3697xDINKEYCLUB",
    views: "7.5k+",
    platform: "Instagram",
  },
];

export default function ContentCreator() {
  return (
    <section id="content" className="py-20 px-4">
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
            <span className="os-titlebar-text">C:\PRANJALI\creator</span>
            <div className="os-close-btn" aria-hidden="true">
              ✕
            </div>
          </div>
          <div className="p-5 sm:p-7">
            <h2
              style={{
                fontFamily: '"Special Elite", serif',
                fontSize: 26,
                color: "#4a5230",
                marginBottom: 8,
              }}
            >
              Beyond the Code ✨
            </h2>
            <p className="font-body text-charcoal/75 text-sm leading-relaxed">
              When I'm not pushing components to production, I'm creating
              content around makeup, skincare, lifestyle, and honest product
              reviews. This side of me keeps my design eye sharp and my
              creativity alive.
            </p>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.title}
                className="os-window reveal hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Colored preview area */}
                <div
                  style={{
                    height: 100,
                    background: post.color,
                    borderBottom: "2px solid #2c2c2c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Grid pattern overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <Icon
                    size={44}
                    color="white"
                    strokeWidth={1.5}
                    style={{ opacity: 0.9 }}
                  />

                  {/* Platform badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      background: "#2c2c2c",
                      color: "white",
                      fontFamily: "Share Tech Mono, monospace",
                      fontSize: 10,
                      padding: "2px 7px",
                      borderRadius: 20,
                    }}
                  >
                    {post.platform}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span
                      style={{
                        fontFamily: "Share Tech Mono, monospace",
                        fontSize: 10,
                        color: "#6b7645",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {post.type}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: '"Special Elite", serif',
                      fontSize: 15,
                      color: "#2c2c2c",
                      lineHeight: 1.35,
                      marginBottom: 6,
                    }}
                  >
                    {post.title}
                  </h4>
                  <p className="font-body text-xs text-charcoal/65 leading-relaxed mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 font-mono text-xs text-charcoal/50">
                    <Heart size={11} />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="mt-8 text-center reveal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/its_prranjalii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn filled"
          >
            Follow My Content Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
