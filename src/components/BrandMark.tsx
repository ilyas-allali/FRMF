export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-label="Atlas 26">
      <img
        src="/players/Royal_Moroccan_Football_Federation_logo.svg"
        alt="Royal Moroccan Football Federation"
      />
      {!compact && (
        <span>
          <b>ATLAS</b>
          <small>MMXXVI</small>
        </span>
      )}
    </div>
  );
}
