import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { FeaturedPlayer } from "../data/squad";

type Props = { player: FeaturedPlayer; index: number; active: boolean };

export function PlayerCard({ player, index, active }: Props) {
  const card = useRef<HTMLElement>(null);
  const raf = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!card.current || event.pointerType === "touch") return;
    const bounds = card.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      card.current?.style.setProperty("--rx", `${-y * 8}deg`);
      card.current?.style.setProperty("--ry", `${x * 10}deg`);
      card.current?.style.setProperty("--px", `${(x + 0.5) * 100}%`);
      card.current?.style.setProperty("--py", `${(y + 0.5) * 100}%`);
    });
  };

  const resetTilt = () => {
    card.current?.style.setProperty("--rx", "0deg");
    card.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.article
      ref={card}
      className={`player-card ${active ? "is-active" : ""}`}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0.35, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.45 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-tilt">
        <div className="card-number" aria-hidden="true">{player.number}</div>
        <div className="card-media">
          <img
            className="player-image player-image--idle"
            src={player.idleImage}
            alt={`${player.name} portrait`}
            style={{ objectPosition: player.focalIdle }}
            loading={index > 1 ? "lazy" : "eager"}
            decoding="async"
          />
          <motion.img
            className="player-image player-image--action"
            src={player.actionImage}
            alt={`${player.name} in action`}
            style={{ objectPosition: player.focalAction }}
            initial={false}
            animate={{ clipPath: hovered ? "circle(145% at 82% 18%)" : "circle(0% at 82% 18%)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            loading={index > 0 ? "lazy" : "eager"}
            decoding="async"
          />
          <div className="card-vignette" />
          <div className="card-halo" />
          <div className="particles" aria-hidden="true">
            {Array.from({ length: 12 }, (_, particle) => <i key={particle} style={{ "--i": particle } as CSSProperties} />)}
          </div>
        </div>
        <div className="card-topline">
          <span>0{index + 1} / 05</span>
          <span>{player.position}</span>
        </div>
        <div className="card-copy">
          <p>{player.firstName}</p>
          <h3>{player.lastName}</h3>
          <div className="card-meta">
            <span>{player.role}</span>
            <span>{player.club}</span>
          </div>
        </div>
        <div className="card-metric">
          <strong>{player.metric}</strong>
          <span>{player.metricLabel}</span>
        </div>
        <div className="card-action"><ArrowUpRight size={19} /></div>
      </div>
    </motion.article>
  );
}
