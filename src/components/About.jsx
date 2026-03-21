import { motion } from 'framer-motion'

const skills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
  'Redux', 'Tailwind CSS', 'REST APIs', 'Firebase',
  'HTML5', 'CSS3', 'Git', 'Vite',
]

const tools = [
  {
    name: 'GitHub',
    color: '#2c2c2c',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    name: 'VS Code',
    color: '#007acc',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 0L8.3 8.9 3.2 4.9 0 6.7v10.6l3.2 1.8 5.1-4L17.5 24 24 21V3L17.5 0zM3 16.1V7.9l3.5 2.4L3 16.1zm14.5 3.9L8 12l9.5-7.8v15.8z"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    color: '#a259ff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
      </svg>
    ),
  },
  {
    name: 'Canva',
    color: '#00c4cc',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102 1.262-5.881 1.34-7.912-.279-1.336-1.039-1.996-2.854-1.627-4.481.38-1.665 1.763-3.036 3.428-3.415 1.462-.333 3.025.055 4.041 1.109.357.371.642.801.835 1.272.18.444.28.917.28 1.4 0 1.25-.536 2.366-1.375 3.148a4.144 4.144 0 0 1-2.895 1.153 4.144 4.144 0 0 1-2.893-1.153 4.129 4.129 0 0 1-1.375-3.148c0-.483.1-.956.279-1.4"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    color: '#000000',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    ),
  },
  {
    name: 'npm',
    color: '#cb3837',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile OS Window */}
        <motion.div
          className="os-window reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\about</span>
            <div className="os-close-btn" aria-hidden="true">✕</div>
          </div>
          <div className="p-6 sm:p-8">
            <h2
              style={{ fontFamily: '"Special Elite", serif', fontSize: 28, color: '#4a5230', marginBottom: 12 }}
            >
              About Me
            </h2>
            <p className="font-body text-charcoal/80 leading-relaxed text-[15px] mb-4">
              Frontend Developer with 2+ years of experience building fast, scalable, and user-focused web applications.
              I specialize in React.js, Next.js, and TypeScript, with a proven track record of improving performance —
              40% faster page loads and 99% Lighthouse scores.
            </p>
            <p className="font-body text-charcoal/80 leading-relaxed text-[15px] mb-6">
              Beyond the terminal, I'm a content creator who loves all things makeup, skincare, lifestyle vlogging,
              and shopping hauls. I believe great UI isn't just code — it's storytelling.
            </p>

            {/* Skills */}
            <div className="mb-6">
              <p className="font-mono text-olive text-xs uppercase tracking-widest mb-3">// Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Fun fact badge */}
            <div
              style={{
                background: 'rgba(107,118,69,0.08)',
                border: '1.5px dashed #6b7645',
                borderRadius: 8,
                padding: '12px 16px',
              }}
            >
              <p className="font-mono text-xs text-olive-dark">
                ✨ Beyond code → makeup tutorials, product reviews, lifestyle vlogs & shopping hauls on Instagram & YouTube
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tools OS Window */}
        <motion.div
          className="os-window reveal mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="os-titlebar">
            <span className="os-titlebar-text">C:\PRANJALI\tools</span>
            <div className="os-close-btn" aria-hidden="true">✕</div>
          </div>
          <div className="p-6 sm:p-8">
            {/* Progress bar decoration */}
            <div
              style={{
                height: 6,
                background: '#e0ddd0',
                borderRadius: 3,
                marginBottom: 20,
                border: '1px solid #c8c4b4',
                overflow: 'hidden',
              }}
            >
              <div style={{ height: '100%', width: '75%', background: '#c8b89a', borderRadius: 3 }} />
            </div>

            <h3
              style={{
                fontFamily: '"Special Elite", serif',
                textAlign: 'center',
                fontSize: 20,
                color: '#4a5230',
                letterSpacing: 4,
                marginBottom: 24,
                textTransform: 'uppercase',
              }}
            >
              Tools
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-items-center">
              {tools.map((t) => (
                <div key={t.name} className="tool-icon">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: t.color,
                      border: '2px solid #2c2c2c',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '2px 2px 0px #2c2c2c',
                    }}
                  >
                    {t.icon}
                  </div>
                  <span className="font-mono text-[11px] text-charcoal">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
