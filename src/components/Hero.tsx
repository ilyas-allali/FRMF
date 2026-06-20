import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <motion.div className="hero-copy" style={{ y: titleY, opacity: titleOpacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span>Morocco · North America</span>
          <span>11.06 — 19.07.2026</span>
        </motion.p>
        <div className="hero-title-wrap">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            LIONS
          </motion.h1>
          <motion.h1
            className="hero-title-outline"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.15, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            OF ATLAS
          </motion.h1>
        </div>
        <motion.div
          className="hero-lower"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          <p>26 names. One crest. A new chapter written beyond the horizon.</p>
          <p className="hero-arabic" lang="ar" dir="rtl">أسود الأطلس</p>
        </motion.div>
      </motion.div>
      <a href="#selected" className="scroll-cue">
        <span>Enter the selection</span>
        <ArrowDown size={16} />
      </a>
      <div className="hero-index" aria-hidden="true">MA<span>26</span></div>
    </section>
  );
}
