import Link from "next/link";
import Image from "next/image";

const stats = [
  { num: "+120", unit: ".", label: "Femmes\naccompagnées" },
  { num: "94", unit: "%", label: "Taux de\nsatisfaction" },
  { num: "3", unit: "M", label: "Pour voir\ndes résultats" },
];

export default function Hero() {
  return (
    <>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }}>
        {/* LEFT */}
        <div style={{ padding: "5rem 3rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "var(--rose)", display: "inline-block", flexShrink: 0 }} />
            Coaching féminin · Sur mesure
          </div>

          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(4rem, 6.5vw, 6.5rem)", fontWeight: 800, lineHeight: 0.92, textTransform: "uppercase", marginBottom: "1.8rem" }}>
            SE REPRENDRE<br />
            EN MAIN,<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)", fontWeight: 700 }}>VRAIMENT.</em>
          </h1>

          <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", maxWidth: "340px", marginBottom: "2.5rem" }}>
            Un coaching sportif pensé pour les femmes qui veulent des résultats durables — sans culpabilité, sans régime, sans se perdre.
          </p>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link href="/questionnaire" style={{ background: "var(--brun)", color: "var(--blanc)", padding: "0.9rem 2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
              Faire mon bilan →
            </Link>
            <Link href="/a-propos" style={{ border: "1.5px solid var(--brun)", color: "var(--brun)", padding: "0.9rem 2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", background: "transparent" }}>
              Découvrir
            </Link>
          </div>
        </div>

        {/* RIGHT — zone photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/najiya-hero.jpg"
            alt="Najiya - Coach sportive"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--sable) 0%, transparent 15%)",}} />
          <div style={{ position: "absolute", top: "2.5rem", left: 0, background: "var(--rose)", color: "var(--blanc)", padding: "0.6rem 1.2rem", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Coaching femmes
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(28,22,18,0.1)", borderBottom: "1px solid rgba(28,22,18,0.1)" }}>
        {stats.map((s, i) => (
          <div key={s.num} style={{ padding: "1.8rem 3rem", borderRight: i < 2 ? "1px solid rgba(28,22,18,0.1)" : "none", display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--brun)", lineHeight: 1 }}>
              {s.num}<em style={{ fontStyle: "italic", color: "var(--rose)" }}>{s.unit}</em>
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}