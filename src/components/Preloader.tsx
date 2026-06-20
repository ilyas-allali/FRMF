import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const startedAt = performance.now();
    const duration = 2300;

    const tick = () => {
      const next = Math.min(100, Math.round(((performance.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next < 100) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, duration + 180);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          role="status"
          aria-label="Loading Atlas 26"
          initial={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-rays" aria-hidden="true" />
          <motion.div
            className="preloader-emblem"
            initial={{ scale: 0.68, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="preloader-orbit preloader-orbit--outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, ease: "linear", repeat: Infinity }}
            />
            <motion.span
              className="preloader-orbit preloader-orbit--inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            />
            <img src="/players/Royal_Moroccan_Football_Federation_logo.svg" alt="FRMF" />
          </motion.div>
          <div className="preloader-wordmark" aria-hidden="true">
            {"MOROCCO".split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45 + index * 0.055, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="preloader-status">
            <span>Lions of the Atlas</span>
            <div><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
            <strong>{String(progress).padStart(3, "0")}</strong>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
