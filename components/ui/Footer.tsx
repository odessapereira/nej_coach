import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      padding: "1.8rem 3rem",
      borderTop: "1px solid rgba(28,22,18,0.1)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: "var(--sable)",
    }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
        NEJ<em style={{ fontStyle: "italic", color: "var(--rose)" }}>COACH</em>
      </div>
      <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
        {[
          { label: "À propos", href: "/a-propos" },
          { label: "Programmes", href: "/programmes" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <span style={{ fontSize: "0.68rem", color: "rgba(138,123,114,0.4)" }}>© 2026 NejCoach</span>
    </footer>
  );
}