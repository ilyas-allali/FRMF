import { motion, useScroll, useSpring } from "framer-motion";
import { BrandMark } from "./components/BrandMark";
import { Hero } from "./components/Hero";
import { Heritage } from "./components/Heritage";
import { LegacyStory } from "./components/LegacyStory";
import { Nav } from "./components/Nav";
import { Preloader } from "./components/Preloader";
import { Roster } from "./components/Roster";
import { SquadTimeline } from "./components/SquadTimeline";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });

  return (
    <>
      <Preloader />
      <motion.div className="page-progress" style={{ scaleX: progress }} />
      <Nav />
      <main>
        <Hero />
        <SquadTimeline />
        <LegacyStory />
        <Roster />
        <Heritage />
      </main>
      <footer className="footer section-pad">
        <BrandMark />
        <p>A private digital tribute to the Lions of the Atlas.</p>
        <div>
          <span>Roster source · FIFA, June 2026</span>
          <span>Photography · Local FRMF collection</span>
        </div>
        <strong>ديما مغرب</strong>
      </footer>
    </>
  );
}
