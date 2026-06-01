import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1.25rem 3rem",
      borderBottom: "1px solid rgba(28,22,18,0.08)",
      background: "var(--sable)",
    }}>
      <Link href="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.6rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brun)", textDecoration: "none" }}>
        NEJ<em style={{ fontStyle: "italic", color: "var(--rose)" }}>COACH</em>
      </Link>
      <ul style={{ listStyle: "none", display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {[
          { label: "À propos", href: "/a-propos" },
          { label: "Programmes", href: "/programmes" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} style={{ textDecoration: "none", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/questionnaire" style={{
            background: "var(--brun)", color: "var(--blanc)",
            padding: "0.6rem 1.5rem", fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
          }}>
            Commencer
          </Link>
        </li>
      </ul>
    </nav>
  );
}