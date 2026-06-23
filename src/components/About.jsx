import { personal, education } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">Engineer who ships<br />at scale</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: 20, fontSize: 16 }}>
              I'm a Full Stack Developer with 4+ years of experience building production systems that handle real-world scale.
              From MERN-stack platforms serving enterprise clients at <strong style={{ color: "var(--text-primary)" }}>WeAddo</strong> to
              clinical data infrastructure for <strong style={{ color: "var(--text-primary)" }}>Eli Lilly & Company at Deloitte</strong>,
              I've owned complete product cycles end-to-end.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
              My strongest suit is backend architecture — designing systems that are fast, reliable, and maintainable.
              I care deeply about API design, caching strategies, and making things that don't break in production.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn ↗</a>
              <a href={personal.github} target="_blank" rel="noreferrer" style={linkStyle}>GitHub ↗</a>
              <a href={`mailto:${personal.email}`} style={linkStyle}>{personal.email}</a>
            </div>
          </div>

          {/* Right: Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Location card */}
            <Card icon="📍" title="Location" value={personal.location} />
            <Card icon="🎓" title={education.degree} value={`${education.university} · CGPA ${education.cgpa} · ${education.period}`} />
            <Card icon="💼" title="Current Role" value="Full Stack Developer at Deloitte (Eli Lilly DTF Project)" />
            <Card icon="🧩" title="LeetCode" value="200+ problems solved · Intermediate level" href="https://leetcode.com/u/nikita_singh24/" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function Card({ icon, title, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} style={{
      padding: "20px 24px", borderRadius: "var(--radius)",
      background: "var(--bg-card)", border: "1px solid var(--border)",
      display: "flex", gap: 16, alignItems: "flex-start",
      transition: "border-color var(--transition)",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-accent)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <span style={{ fontSize: 22 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 500 }}>{value}</div>
      </div>
    </Wrapper>
  );
}

const linkStyle = {
  padding: "8px 18px", borderRadius: "var(--radius)",
  border: "1px solid var(--border)", color: "var(--text-secondary)",
  fontSize: 14, transition: "all 0.2s",
};
