import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { squad, type Position } from "../data/squad";

const filters: Array<"All" | Position> = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

export function Roster() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const players = useMemo(
    () => filter === "All" ? squad : squad.filter((player) => player.position === filter),
    [filter],
  );

  return (
    <section className="roster section-pad" id="roster">
      <header className="section-title">
        <div>
          <p className="section-kicker">Official final selection · 02.06.2026</p>
          <h2>THE <span>26</span></h2>
        </div>
        <p>Submitted to FIFA for the 2026 World Cup. Two injury replacements are reflected in this final list.</p>
      </header>
      <div className="roster-filters" role="group" aria-label="Filter players by position">
        {filters.map((item) => (
          <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>
            {item}<span>{item === "All" ? 26 : squad.filter((player) => player.position === item).length}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="roster-grid">
        <AnimatePresence mode="popLayout">
          {players.map((player, index) => (
            <motion.article
              layout
              key={player.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, delay: index * 0.012 }}
              className="roster-row"
            >
              <span>{String(squad.indexOf(player) + 1).padStart(2, "0")}</span>
              <div><h3>{player.name}</h3><p>{player.club}</p></div>
              <small>{player.position}</small>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
