import { useState, useEffect } from "react";
import { personal, stats } from "../data/portfolio";

const ROLES = [
  "Full Stack Developer",
  "Node.js Engineer",
  "React.js Developer",
  "AWS Cloud Developer",
  "Backend Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "80px 24px 64px",
      background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>

        {/* Terminal tag */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 14px", borderRadius: 20,
          border: "1px solid var(--border-accent)",
          background: "rgba(59,130,246,0.08)",
          marginBottom: 32,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease 0.1s",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--text-secondary)" }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, lineHeight: 1.1,
          marginBottom: 20, letterSpacing: "-1px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.2s",
        }}>
          Hi, I'm{" "}
          <span style={{
            background: "var(--accent-gradient)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {personal.name}
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 28px)",
          color: "var(--text-secondary)", marginBottom: 28, minHeight: "2em",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.35s",
        }}>
          <span style={{ color: "var(--accent-cyan)" }}>&gt; </span>
          {displayed}
          <span style={{ animation: "blink 1s infinite", color: "var(--accent-blue)" }}>|</span>
        </div>

        {/* Summary */}
        <p style={{
          fontSize: 17, color: "var(--text-secondary)", maxWidth: 600,
          lineHeight: 1.8, marginBottom: 40,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.45s",
        }}>
          {personal.summary}
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 16, flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.55s",
        }}>
          <a href="#projects" style={{
            padding: "14px 32px", borderRadius: "var(--radius)",
            background: "var(--accent-gradient)", color: "#fff",
            fontWeight: 600, fontSize: 15,
            boxShadow: "0 4px 24px rgba(59,130,246,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(59,130,246,0.45)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 24px rgba(59,130,246,0.3)"; }}
          >View Projects</a>

          <a href={`mailto:${personal.email}`} style={{
            padding: "14px 32px", borderRadius: "var(--radius)",
            border: "1px solid var(--border)", color: "var(--text-primary)",
            fontWeight: 500, fontSize: 15, transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.target.style.borderColor = "var(--accent-blue)"}
            onMouseLeave={e => e.target.style.borderColor = "var(--border)"}
          >Get in Touch</a>

          <a href={personal.github} target="_blank" rel="noreferrer" style={{
            padding: "14px 32px", borderRadius: "var(--radius)",
            border: "1px solid var(--border)", color: "var(--text-secondary)",
            fontWeight: 500, fontSize: 15, transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "var(--accent-cyan)"; e.target.style.color = "var(--accent-cyan)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-secondary)"; }}
          >GitHub ↗</a>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 24, marginTop: 72, maxWidth: 600,
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.7s",
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ borderLeft: "2px solid var(--accent-blue)", paddingLeft: 16 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
