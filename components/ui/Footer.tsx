"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer style={{
      padding: isMobile ? "2rem 1.5rem" : "1.8rem 3rem",
      borderTop: "1px solid rgba(28,22,18,0.1)",
      display: "flex", flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between", alignItems: "center",
      gap: "1.5rem", background: "var(--sable)",
      textAlign: isMobile ? "center" : "left",
    }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
        NEJ<em style={{ fontStyle: "italic", color: "var(--rose)" }}>COACH</em>
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: isMobile ? "1rem" : "2rem" }}>
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