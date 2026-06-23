import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">Work Experience</p>
        <h2 className="section-title">Where I've worked</h2>
        <p className="section-subtitle">4+ years across consulting, product, and agency environments.</p>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 20, top: 0, bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-cyan), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 48, paddingLeft: 60 }}>
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ job, index }) {
  const isFirst = index === 0;

  return (
    <div style={{ position: "relative" }}>
      {/* Dot */}
      <div style={{
        position: "absolute", left: -48, top: 6,
        width: 16, height: 16, borderRadius: "50%",
        background: isFirst ? "var(--accent-gradient)" : "var(--bg-card)",
        border: `2px solid ${isFirst ? "var(--accent-blue)" : "var(--border)"}`,
        boxShadow: isFirst ? "0 0 12px rgba(59,130,246,0.5)" : "none",
      }} />

      <div style={{
        padding: "28px 32px", borderRadius: "var(--radius-lg)",
        background: "var(--bg-card)",
        border: `1px solid ${isFirst ? "var(--border-accent)" : "var(--border)"}`,
        transition: "border-color 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-accent)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = isFirst ? "var(--border-accent)" : "var(--border)"}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
              {job.role}
            </h3>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--accent-blue)" }}>{job.company}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 13,
              color: "var(--text-muted)", marginBottom: 4,
            }}>{job.period}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{job.location}</div>
          </div>
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {job.tech.map((t) => (
            <span key={t} style={{
              padding: "3px 10px", borderRadius: 12,
              background: "rgba(59,130,246,0.1)", color: "var(--accent-cyan)",
              fontSize: 12, fontFamily: "var(--font-display)",
              border: "1px solid rgba(6,182,212,0.2)",
            }}>{t}</span>
          ))}
        </div>

        {/* Points */}
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {job.points.map((p, i) => (
            <li key={i} style={{ display: "flex", gap: 12, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
              <span style={{ color: "var(--accent-cyan)", flexShrink: 0, marginTop: 2 }}>▸</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
