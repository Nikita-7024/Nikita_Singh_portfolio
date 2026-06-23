import { useState } from "react";
import { projects, projectCategories } from "../data/portfolio";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const featured = filtered.filter((p) => p.highlight);
  const rest = filtered.filter((p) => !p.highlight);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-subtitle">
          Enterprise clinical platforms, production client websites, and personal open-source projects — built end-to-end.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {projectCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{
              padding: "8px 18px", borderRadius: 20, border: "1px solid",
              cursor: "pointer", fontSize: 13, fontWeight: 500,
              transition: "all 0.2s", fontFamily: "var(--font-body)",
              borderColor: activeTab === cat ? "var(--accent-blue)" : "var(--border)",
              background: activeTab === cat ? "rgba(59,130,246,0.15)" : "transparent",
              color: activeTab === cat ? "var(--accent-blue)" : "var(--text-muted)",
            }}>
              {cat}
              <span style={{
                marginLeft: 6, fontSize: 11,
                color: activeTab === cat ? "var(--accent-cyan)" : "var(--text-muted)",
              }}>
                {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Featured row */}
        {featured.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: featured.length === 1 ? "1fr" : "repeat(auto-fit, minmax(420px, 1fr))",
            gap: 24, marginBottom: 24,
          }}>
            {featured.map((p, i) => <ProjectCard key={i} project={p} featured />)}
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {rest.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "48px 0", fontSize: 15 }}>
            No projects in this category yet.
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <div style={{
      padding: featured ? "32px" : "24px",
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-card)",
      border: featured ? "1px solid var(--border-accent)" : "1px solid var(--border)",
      display: "flex", flexDirection: "column", gap: 14,
      position: "relative", overflow: "hidden",
      transition: "border-color 0.2s, transform 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = featured ? "var(--border-accent)" : "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Glow for featured */}
      {featured && (
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          transform: "translate(40%, -40%)", pointerEvents: "none",
        }} />
      )}

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          {featured && (
            <span style={{
              fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.1em",
              color: "var(--accent-cyan)", textTransform: "uppercase", display: "block", marginBottom: 6,
            }}>⭐ Featured</span>
          )}
          {/* Domain badge */}
          <span style={{
            display: "inline-block", fontSize: 12,
            color: "var(--text-muted)", marginBottom: 8,
          }}>{project.domain}</span>
          <h3 style={{ fontSize: featured ? 19 : 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 3, lineHeight: 1.3 }}>
            {project.name}
          </h3>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
            {project.company} · {project.period}
          </div>
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            padding: "6px 14px", borderRadius: "var(--radius)",
            border: "1px solid var(--border)", color: "var(--text-secondary)",
            fontSize: 12, transition: "all 0.2s", flexShrink: 0, whiteSpace: "nowrap",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "var(--accent-blue)"; e.target.style.color = "var(--accent-blue)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-secondary)"; }}
          >GitHub ↗</a>
        )}
      </div>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            padding: "3px 10px", borderRadius: 12,
            background: "rgba(59,130,246,0.08)", color: "var(--accent-blue)",
            fontSize: 11, fontFamily: "var(--font-display)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}>{t}</span>
        ))}
      </div>

      {/* Bullet points */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {project.points.map((p, i) => (
          <li key={i} style={{ display: "flex", gap: 10, color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7 }}>
            <span style={{ color: "var(--accent-cyan)", flexShrink: 0 }}>▸</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
