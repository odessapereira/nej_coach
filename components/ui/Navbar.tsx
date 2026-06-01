"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav style={{
      display: "flex", flexDirection: "column",
      borderBottom: "1px solid rgba(28,22,18,0.08)",
      background: "var(--sable)",
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "1rem 1.5rem" : "1.25rem 3rem" }}>
        <Link href="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.6rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brun)", textDecoration: "none" }}>
          NEJ<em style={{ fontStyle: "italic", color: "var(--rose)" }}>COACH</em>
        </Link>

        {isMobile ? (
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--brun)", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--brun)", transition: "all 0.2s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--brun)", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        ) : (
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
              <Link href="/questionnaire" style={{ background: "var(--brun)", color: "var(--blanc)", padding: "0.6rem 1.5rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
                Commencer
              </Link>
            </li>
          </ul>
        )}
      </div>

      {isMobile && open && (
        <div style={{ background: "var(--sable)", borderTop: "1px solid rgba(28,22,18,0.08)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            { label: "À propos", href: "/a-propos" },
            { label: "Programmes", href: "/programmes" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
              {item.label}
            </Link>
          ))}
          <Link href="/questionnaire" onClick={() => setOpen(false)} style={{ background: "var(--brun)", color: "var(--blanc)", padding: "0.9rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
            Commencer
          </Link>
        </div>
      )}
    </nav>
  );
}
