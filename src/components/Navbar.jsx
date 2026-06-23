import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 24px",
      background: scrolled ? "rgba(7, 9, 26, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #1e293b" : "1px solid transparent",
      transition: "all 0.3s ease",
      height: "64px", display: "flex", alignItems: "center",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }}>
          <span style={{ color: "var(--accent-cyan)" }}>&gt; </span>nikita.singh
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ fontSize: 14, color: "var(--text-secondary)", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
            >{l.label}</a>
          ))}
          <a href={`mailto:${personal.email}`} style={{
            padding: "8px 20px", borderRadius: "var(--radius)",
            border: "1px solid var(--accent-blue)", color: "var(--accent-blue)",
            fontSize: 14, fontWeight: 500, transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "var(--accent-blue)"; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--accent-blue)"; }}
          >Hire Me</a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", fontSize: 22 }} className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, color: "var(--text-secondary)", padding: "8px 0" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
