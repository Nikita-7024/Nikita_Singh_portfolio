import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      padding: "32px 24px",
      borderTop: "1px solid var(--border)",
      background: "var(--bg-primary)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--text-muted)" }}>
          <span style={{ color: "var(--accent-cyan)" }}>&gt; </span>
          nikita.singh · {new Date().getFullYear()}
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          <a href={personal.github} target="_blank" rel="noreferrer"
            style={{ fontSize: 14, color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
          >GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
            style={{ fontSize: 14, color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
          >LinkedIn</a>
          <a href={`mailto:${personal.email}`}
            style={{ fontSize: 14, color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
          >Email</a>
        </div>
      </div>
    </footer>
  );
}
