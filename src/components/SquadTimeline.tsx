import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { featuredPlayers } from "../data/squad";
import { PlayerCard } from "./PlayerCard";

gsap.registerPlugin(ScrollTrigger);

export function SquadTimeline() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        const getTravel = () => Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth);
        gsap.to(track.current, {
          x: () => -getTravel(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${getTravel() + window.innerWidth * 0.7}`,
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActive(Math.min(featuredPlayers.length - 1, Math.round(self.progress * (featuredPlayers.length - 1)))),
          },
        });
      });
      return () => media.revert();
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section className="timeline" id="selected" ref={section}>
      <div className="timeline-head">
        <p className="section-kicker">The selected five</p>
        <p>Scroll to move · Hover to ignite</p>
      </div>
      <div className="timeline-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${(active + 1) / featuredPlayers.length})` }} />
      </div>
      <div className="timeline-track" ref={track}>
        <div className="timeline-intro">
          <p>Core / 2026</p>
          <h2>BUILT FOR<br /><em>THE MOMENT.</em></h2>
          <span>Five leaders of the full 26-player selection.</span>
        </div>
        {featuredPlayers.map((player, index) => (
          <PlayerCard key={player.name} player={player} index={index} active={active === index} />
        ))}
        <div className="timeline-outro">
          <span>26 / 26</span>
          <h2>The full<br />selection</h2>
          <a href="#roster">Explore the roster ↓</a>
        </div>
      </div>
    </section>
  );
}
