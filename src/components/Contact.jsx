import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-label" style={{ textAlign: "center" }}>Contact</p>
        <h2 className="section-title" style={{ textAlign: "center" }}>Let's build something together</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.8 }}>
          I'm currently open to new opportunities — full-time roles at product companies.
          Drop me a message and I'll get back to you quickly.
        </p>

        {/* Contact Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
          <ContactCard icon="✉️" label="Email" value={personal.email} href={`mailto:${personal.email}`} />
          <ContactCard icon="📞" label="Phone" value={personal.phone} href={`tel:${personal.phone}`} />
          <ContactCard icon="💼" label="LinkedIn" value="nikita-singh" href={personal.linkedin} />
          <ContactCard icon="🐙" label="GitHub" value="Nikita-7024" href={personal.github} />
        </div>

        {/* CTA Button */}
        <a href={`mailto:${personal.email}`} style={{
          display: "inline-block",
          padding: "16px 48px", borderRadius: "var(--radius)",
          background: "var(--accent-gradient)", color: "#fff",
          fontWeight: 700, fontSize: 16,
          boxShadow: "0 4px 32px rgba(59,130,246,0.35)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 8px 40px rgba(59,130,246,0.5)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 32px rgba(59,130,246,0.35)"; }}
        >Send me an email →</a>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      padding: "20px 28px", borderRadius: "var(--radius-lg)",
      background: "var(--bg-card)", border: "1px solid var(--border)",
      display: "flex", alignItems: "center", gap: 14,
      transition: "border-color 0.2s, transform 0.2s", minWidth: 220,
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <span style={{ fontSize: 24 }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>{value}</div>
      </div>
    </a>
  );
}
