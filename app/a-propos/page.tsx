"use client";
import { useEffect, useState } from "react";

export default function APropos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ paddingTop: isMobile ? "4rem" : "5rem" }}>

      <section style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", minHeight: isMobile ? "auto" : "70vh", borderBottom: "1px solid rgba(28,22,18,0.08)" }}>
        <div style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Qui je suis
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "3rem" : "5rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.92, marginBottom: "2rem" }}>
            JE SUIS NAJIYA.<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>COACH,<br />PAR VOCATION.</em>
          </h1>
          <p style={{ fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.9, color: "var(--muted)", maxWidth: "400px" }}>
            J'aurais pu soigner des corps dans un couloir d'hôpital. J'ai choisi de les transformer, une femme à la fois.
          </p>
        </div>
        {!isMobile && (
          <div style={{ background: "var(--sable-dark)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "16rem", fontWeight: 800, color: "rgba(28,22,18,0.04)", textTransform: "uppercase", fontStyle: "italic", userSelect: "none", lineHeight: 1 }}>N</span>
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", background: "var(--blanc)", padding: "1.2rem 1.5rem" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.3rem" }}>Personal Trainer</p>
              <strong style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", color: "var(--brun)" }}>Najiya — Nej Coach</strong>
            </div>
          </div>
        )}
      </section>

      <section style={{ padding: isMobile ? "3rem 1.5rem" : "6rem 3rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "start" }}>
        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Mon parcours
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "2.5rem" : "3.5rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "2rem" }}>
            UN VIRAGE.<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>LE BON.</em>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            <>Pendant des années, je me suis dirigée vers les soins infirmiers — apprendre à prendre soin des autres, à être là quand ça compte. Je savais déjà, au fond, ce qui me motivait vraiment : <em style={{ color: "var(--brun)", fontStyle: "normal" }}>les gens. Leur bien-être. Leur transformation.</em></>,
            <>Mais il y avait cette autre chose, constante, qui ne me lâchait pas. Le sport. Pas comme une discipline — comme une langue. Une façon d'exister, de me sentir forte, vivante, capable.</>,
            <>Alors j'ai fait le choix qui demande du courage : <em style={{ color: "var(--brun)", fontStyle: "normal" }}>tout recommencer.</em> J'ai arrêté les études d'infirmière, obtenu mon diplôme de Personal Trainer, et lancé Nej Coach.</>,
            <>Une coach qui ne juge pas. Qui adapte. Qui comprend que chaque corps a une histoire, et que la transformation durable commence toujours par la bienveillance.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.95, color: "var(--muted)" }}>{text}</p>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "0 1.5rem 3rem" : "0 3rem 6rem" }}>
        <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "3rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
          Ce en quoi je crois
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1px", background: "rgba(28,22,18,0.08)" }}>
          {[
            { n: "01", titre: "L'adaptation", texte: "Aucun corps ne se ressemble. Aucun programme ne devrait se ressembler non plus. Je pars toujours de toi — jamais d'un template." },
            { n: "02", titre: "La durée", texte: "Les résultats rapides ne durent pas. Ce qui dure, c'est ce qu'on construit patiemment, semaine après semaine, dans la constance." },
            { n: "03", titre: "La bienveillance", texte: "Le sport n'est pas une punition. C'est un outil de puissance. Avec moi, tu apprends à aimer ce que ton corps peut faire." },
          ].map((v) => (
            <div key={v.n} style={{ background: "var(--blanc)", padding: "2.5rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--rose-light)", lineHeight: 1, marginBottom: "1rem" }}>{v.n}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.8rem", color: "var(--brun)" }}>{v.titre}</h3>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8, color: "var(--muted)" }}>{v.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "0 1.5rem 3rem" : "0 3rem 6rem" }}>
        <div style={{ background: "var(--sable-dark)", padding: isMobile ? "2rem 1.5rem" : "3.5rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "4rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
              Ce qui arrive
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "2.5rem" : "3rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "1rem" }}>
              JE NE M'ARRÊTE<br />
              <em style={{ fontStyle: "italic", color: "var(--rose)" }}>JAMAIS D'APPRENDRE.</em>
            </h2>
            <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)" }}>
              Accompagner des femmes de tous profils demande une expertise sans cesse renouvelée.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5px", background: "rgba(28,22,18,0.08)" }}>
            {[
              { label: "Personal Training", statut: "Diplômée" },
              { label: "Nutritionniste certifiée", statut: "En cours" },
              { label: "Yoga & mobilité", statut: "Prochainement" },
              { label: "Pilates féminin", statut: "Prochainement" },
              { label: "Femme enceinte & post-partum", statut: "Prochainement" },
              { label: "Seniors & mobilité douce", statut: "Prochainement" },
            ].map((f) => (
              <div key={f.label} style={{ background: "var(--blanc)", padding: "1.1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--brun)" }}>{f.label}</span>
                <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.7rem", color: f.statut === "Diplômée" ? "var(--brun)" : f.statut === "En cours" ? "var(--rose)" : "var(--muted)", background: f.statut === "Diplômée" ? "rgba(28,22,18,0.08)" : f.statut === "En cours" ? "var(--rose-pale)" : "rgba(28,22,18,0.04)" }}>
                  {f.statut}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ margin: isMobile ? "0 1.5rem 3rem" : "0 3rem 5rem", background: "var(--brun)", padding: isMobile ? "2.5rem 1.5rem" : "3.5rem", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "center", gap: "2rem", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "2rem" : "2.5rem", fontWeight: 800, textTransform: "uppercase", color: "var(--blanc)", lineHeight: 0.95, maxWidth: "400px" }}>
          PRÊTE À ÉCRIRE<br />
          <em style={{ fontStyle: "italic", color: "var(--rose-light)" }}>TON HISTOIRE ?</em>
        </h2>
        <a href="/questionnaire" style={{ background: "var(--sable)", color: "var(--brun)", padding: "1rem 2.5rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
          Faire mon bilan →
        </a>
      </section>

    </main>
  );
}