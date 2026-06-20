import { heritage } from "../data/squad";

export function Heritage() {
  return (
    <section className="heritage section-pad" id="heritage">
      <div className="heritage-backdrop" aria-hidden="true"> إرث </div>
      <header className="section-title">
        <div>
          <p className="section-kicker">Before the next chapter</p>
          <h2>ATLAS<br /><span>HERITAGE</span></h2>
        </div>
        <p>Icons who turned the red shirt into a standard, carried forward by the class of 2026.</p>
      </header>
      <div className="heritage-list">
        {heritage.map((icon, index) => (
          <article key={icon.name}>
            <span>0{index + 1}</span>
            <h3>{icon.name}</h3>
            <p>{icon.era}</p>
            <small>{icon.mark}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
