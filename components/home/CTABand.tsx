"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CTABand() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "var(--brun)", padding: isMobile ? "3rem 1.5rem" : "5rem 3rem", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: "2rem", position: "relative", overflow: "hidden", textAlign: isMobile ? "center" : "left" }}>
      <span style={{ position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14rem", fontWeight: 800, color: "rgba(255,255,255,0.03)", textTransform: "uppercase", fontStyle: "italic", userSelect: "none", lineHeight: 1, pointerEvents: "none" }}>
        GO
      </span>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "2rem" : "clamp(2.5rem, 3.5vw, 3.5rem)", fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase", color: "var(--blanc)", maxWidth: "480px", position: "relative", zIndex: 1 }}>
        PRÊTE À SAVOIR QUEL PROGRAMME EST{" "}
        <em style={{ fontStyle: "italic", color: "var(--rose-light)" }}>FAIT POUR TOI ?</em>
      </h2>
      <Link href="/questionnaire" style={{ background: "var(--sable)", color: "var(--brun)", padding: "1rem 2.5rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", position: "relative", zIndex: 1 }}>
        Répondre au questionnaire →
      </Link>
    </section>
  );
}