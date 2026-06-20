import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const qatarRun = [
  { stage: "Group F", score: "7 PTS", title: "Top of the group", detail: "Unbeaten against Croatia, Belgium and Canada." },
  { stage: "Round of 16", score: "3–0", title: "Spain silenced", detail: "Bounou owned the shootout. Hakimi signed it with a panenka." },
  { stage: "Quarter-final", score: "1–0", title: "History over Portugal", detail: "En-Nesyri rose. Morocco became Africa's first World Cup semi-finalist." },
  { stage: "Final chapter", score: "04", title: "A continent stood taller", detail: "Fourth in the world. First forever in the history books." },
];

function Star() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 5 60.6 37.3h34L67 57.2 77.5 90 50 69.8 22.5 90 33 57.2 5.4 37.3h34Z" />
    </svg>
  );
}

export function LegacyStory() {
  const story = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: story, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.08]);

  return (
    <section className="legacy-story" id="legacy" ref={story}>
      <div className="afcon-monument">
        <div className="afcon-rings" aria-hidden="true" />
        <motion.div
          className="afcon-stars"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Star /><Star />
        </motion.div>
        <div className="afcon-copy">
          <p className="section-kicker">Kings of the continent</p>
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            AFRICA<br /><span>× TWO</span>
          </motion.h2>
          <p>Two generations. Two crowns. One nation that never stopped believing.</p>
        </div>
        <div className="afcon-years">
          <div><strong>1976</strong><span>The first crown · Ethiopia</span></div>
          <i />
          <div><strong>2025</strong><span>The second star · Home soil</span></div>
        </div>
        <div className="afcon-count" aria-hidden="true">02</div>
      </div>

      <div className="qatar-story">
        <motion.div className="qatar-image" style={{ y: imageY, scale: imageScale }}>
          <img src="/players/herosection.webp" alt="Morocco's historic 2022 World Cup squad at the royal reception" />
          <div className="qatar-image-shade" />
        </motion.div>
        <div className="qatar-heading">
          <p className="section-kicker">Qatar · 2022</p>
          <h2>THE RUN THAT<br /><em>CHANGED AFRICA.</em></h2>
          <p>Seven matches turned belief into history. Morocco became the first African and Arab nation to reach a World Cup semi-final.</p>
        </div>
        <div className="qatar-run">
          {qatarRun.map((moment, index) => (
            <motion.article
              key={moment.stage}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>0{index + 1}</span>
              <div><small>{moment.stage}</small><h3>{moment.title}</h3><p>{moment.detail}</p></div>
              <strong>{moment.score}</strong>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
