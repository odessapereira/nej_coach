"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const programmes = [
  {
    id: "remise-en-forme", tag: "Débutante", titre: "Remise en forme",
    accroche: "Pour celles qui reprennent après une pause.",
    description: "Un programme progressif pensé pour les femmes qui reviennent au sport après une longue pause ou qui débutent. On construit des bases solides, sans se blesser, sans se décourager.",
    inclus: ["Programme sur 8 semaines évolutif", "3 séances/semaine de 45min", "Guide nutrition de base inclus", "Suivi hebdomadaire par message", "Ajustements en temps réel"],
    duree: "8 semaines", seances: "3x / semaine", prix: "149", popular: false,
  },
  {
    id: "perte-de-poids", tag: "Le plus demandé", titre: "Perte de poids",
    accroche: "Sans frustration, sans yo-yo, sans se priver.",
    description: "Un rééquilibrage progressif qui combine sport et nutrition. Pas de régime draconien — on crée un déficit calorique intelligent en gardant de l'énergie pour s'entraîner.",
    inclus: ["Programme sur 12 semaines", "4 séances/semaine combinées cardio + muscu", "Plan nutritionnel personnalisé", "Suivi hebdomadaire en visio", "Accès à la communauté privée", "2 bilans mensuels"],
    duree: "12 semaines", seances: "4x / semaine", prix: "249", popular: true,
  },
  {
    id: "prise-de-masse", tag: "Intermédiaire", titre: "Prise de masse",
    accroche: "Sculpter son corps. Prendre de la force.",
    description: "Pour les femmes qui veulent prendre du muscle de façon ciblée. On travaille la force, l'hypertrophie et la posture — avec un plan nutrition adapté à la prise de masse féminine.",
    inclus: ["Programme sur 10 semaines", "4-5 séances/semaine en force", "Plan alimentaire avec surplus calorique", "Suivi des charges semaine par semaine", "Coaching technique sur les exercices clés"],
    duree: "10 semaines", seances: "4-5x / semaine", prix: "229", popular: false,
  },
  {
    id: "bien-etre", tag: "Tous niveaux", titre: "Équilibre & bien-être",
    accroche: "Se sentir bien dans son corps, au quotidien.",
    description: "Sport, mobilité, gestion du stress, sommeil. Un programme holistique pour les femmes qui veulent retrouver de l'énergie et du confort dans leur corps — sans se mettre la pression.",
    inclus: ["Programme sur 8 semaines", "3 séances/semaine (sport + mobilité)", "Routines bien-être quotidiennes", "Guide gestion du stress & sommeil", "Suivi hebdomadaire par message"],
    duree: "8 semaines", seances: "3x / semaine", prix: "149", popular: false,
  },
];

export default function Programmes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ paddingTop: isMobile ? "4rem" : "5rem" }}>
      <section style={{ padding: isMobile ? "3rem 1.5rem 2rem" : "4rem 3rem 3rem", borderBottom: "1px solid rgba(28,22,18,0.08)" }}>
        <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
          Ce que je propose
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "3rem" : "clamp(3rem, 5vw, 5rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.92 }}>
          LES PROGRAMMES<br />
          <em style={{ fontStyle: "italic", color: "var(--rose)" }}>FAITS POUR TOI.</em>
        </h1>
      </section>

      <section style={{ padding: isMobile ? "2rem 1.5rem" : "4rem 3rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1.5rem" }}>
        {programmes.map((p) => (
          <div key={p.id} style={{ background: "var(--blanc)", border: p.popular ? "1.5px solid var(--rose)" : "1px solid rgba(28,22,18,0.1)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div style={{ display: "inline-block", padding: "0.35rem 0.9rem", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", background: p.popular ? "var(--rose)" : "rgba(28,22,18,0.07)", color: p.popular ? "var(--blanc)" : "var(--muted)" }}>
              {p.tag}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1, marginBottom: "0.4rem" }}>{p.titre}</h2>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, fontStyle: "italic", color: "var(--muted)" }}>{p.accroche}</p>
            </div>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8, color: "var(--muted)" }}>{p.description}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {p.inclus.map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.7rem", fontSize: "0.82rem", color: "var(--brun)", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--rose)", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(28,22,18,0.08)" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>⏱ {p.duree}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>🏋️ {p.seances}</div>
            </div>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "center", marginTop: "auto", paddingTop: "1rem", gap: "1rem" }}>
              <div>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--brun)", lineHeight: 1 }}>{p.prix}€</span>
                <span style={{ fontSize: "0.72rem", color: "var(--muted)", marginLeft: "0.4rem" }}>/ programme</span>
              </div>
              <Link href="/questionnaire" style={{ background: p.popular ? "var(--rose)" : "var(--brun)", color: "var(--blanc)", padding: "0.8rem 1.5rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                Je commence →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section style={{ margin: isMobile ? "0 1.5rem 3rem" : "0 3rem 5rem", background: "var(--brun)", padding: isMobile ? "2.5rem 1.5rem" : "3.5rem", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "center", gap: "2rem", textAlign: isMobile ? "center" : "left" }}>
        <div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", color: "var(--blanc)", lineHeight: 0.95, marginBottom: "0.5rem" }}>PAS SÛR DE TON PROGRAMME ?</h2>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(253,250,247,0.6)" }}>Réponds au questionnaire — je te recommande le programme adapté.</p>
        </div>
        <Link href="/questionnaire" style={{ background: "var(--sable)", color: "var(--brun)", padding: "1rem 2.5rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
          Faire mon bilan →
        </Link>
      </section>
    </main>
  );
}