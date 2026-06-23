import { skills } from "../data/portfolio";

const categoryColors = {
  Languages: "#f59e0b",
  Frontend: "#ec4899",
  Backend: "#3b82f6",
  Databases: "#8b5cf6",
  "Cloud & DevOps": "#06b6d4",
  Testing: "#22c55e",
  "API & Docs": "#f97316",
  Concepts: "#64748b",
  Tools: "#94a3b8",
  Integrations: "#a78bfa",
   "AI & GenAI": "#a855f7",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">The full stack, end-to-end</h2>
        <p className="section-subtitle">
          From database schema to cloud infrastructure — I work across the entire system.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} color={categoryColors[category] || "#3b82f6"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, items, color }) {
  return (
    <div style={{
      padding: "24px", borderRadius: "var(--radius-lg)",
      background: "var(--bg-card)", border: "1px solid var(--border)",
      transition: "border-color 0.2s, transform 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {category}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {items.map((skill) => (
          <span key={skill} style={{
            padding: "5px 12px", borderRadius: 20,
            background: color + "18", color: color,
            fontSize: 13, fontWeight: 500,
            border: `1px solid ${color}30`,
            fontFamily: "var(--font-display)",
          }}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
