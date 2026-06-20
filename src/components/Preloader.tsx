import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let timer: number;

    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const minDuration = 3800; // Minimum 3.8s loading screen to showcase the animations
    const startedAt = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startedAt;
      
      // Smoothly advance progress up to 98%
      let nextProgress = Math.min(98, Math.round((elapsed / minDuration) * 98));
      
      // If media is fully loaded and minimum duration elapsed, complete to 100%
      if (isLoaded && elapsed >= minDuration) {
        nextProgress = 100;
      }

      setProgress(nextProgress);

      if (nextProgress < 100) {
        requestAnimationFrame(tick);
      } else {
        // Hold on 100% briefly before transitioning out
        timer = window.setTimeout(() => {
          document.body.style.overflow = "";
          setVisible(false);
        }, 350);
      }
    };

    const frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", handleLoad);
      if (timer) clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Staggered Crimson swipe layer that slides up under the fading preloader */}
          <motion.div
            className="preloader-swipe-layer"
            initial={{ y: "100%" }}
            animate={{ y: "100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="preloader"
            role="status"
            aria-label="Loading Atlas 26"
            initial={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="preloader-rays" aria-hidden="true" />
            
            {/* Impressive golden pulse ring expanding behind emblem */}
            <motion.div
              className="preloader-pulse-ring"
              animate={{ scale: [0.85, 1.45], opacity: [0.35, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />

            <motion.div
              className="preloader-emblem"
              initial={{ scale: 0.68, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="preloader-glow-ring" />
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

            {/* Glowing gold Arabic tracking-in wordmark in the background */}
            <motion.div
              className="preloader-arabic-wordmark"
              initial={{ opacity: 0, letterSpacing: "-0.2em" }}
              animate={{ opacity: 0.08, letterSpacing: "0.18em" }}
              transition={{ delay: 0.9, duration: 1.8, ease: "easeOut" }}
              aria-hidden="true"
            >
              أسود الأطلس
            </motion.div>

            <div className="preloader-status">
              <span>Lions of the Atlas</span>
              <div><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
              <strong>{String(progress).padStart(3, "0")}</strong>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
