"use client";
import { useEffect, useState } from "react";

const steps = [
  { n: "01", title: "Bilan personnalisé", desc: "Tu remplis un questionnaire détaillé. Je construis ton programme en 48h." },
  { n: "02", title: "Suivi hebdomadaire", desc: "On ajuste ensemble chaque semaine selon tes retours et ta progression." },
  { n: "03", title: "Résultats durables", desc: "Des habitudes qui s'installent — pas un régime de 3 semaines." },
];

const programmes = ["Remise en forme", "Perte de poids", "Prise de masse", "Équilibre & bien-être"];

export default function Methode() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 3rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "3rem" : "5rem", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            La méthode
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "2.5rem" : "clamp(2.8rem, 4vw, 4rem)", fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            UN PROGRAMME<br />
            FAIT <em style={{ fontStyle: "italic", color: "var(--rose)" }}>POUR TOI,</em><br />
            PAS POUR TOUTES.
          </h2>
          <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", marginBottom: "2rem" }}>
            Pas de planning générique. Un coaching qui part de qui tu es — ton niveau, tes contraintes, ta vie.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.2rem", background: "var(--blanc)", borderLeft: "2.5px solid var(--rose)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--rose-light)", lineHeight: 1, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em", color: "var(--brun)", marginBottom: "0.25rem", textTransform: "uppercase" }}>{s.title}</strong>
                  <p style={{ fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7, color: "var(--muted)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Programmes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5px", background: "rgba(28,22,18,0.08)" }}>
            {programmes.map((p) => (
              <div key={p} style={{ background: "var(--sable)", padding: "1.4rem 1.8rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", borderLeft: "2.5px solid transparent", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--blanc)"; e.currentTarget.style.borderLeftColor = "var(--rose)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--sable)"; e.currentTarget.style.borderLeftColor = "transparent"; }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                <span style={{ color: "var(--muted)" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}