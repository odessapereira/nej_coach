export default function Promise() {
  const programmes = [
    { icon: "⚡", title: "Remise en forme", desc: "Pour celles qui reprennent après une pause. Progressif, bienveillant, efficace." },
    { icon: "🔥", title: "Perte de poids", desc: "Sans frustration ni yo-yo. On construit des habitudes qui durent." },
    { icon: "💪", title: "Prise de masse", desc: "Sculpter son corps. Prendre de la force sans perdre sa féminité." },
    { icon: "🧘", title: "Équilibre & bien-être", desc: "Sport, mental, repos. Pour celles qui veulent se sentir bien." },
  ];

  return (
    <section style={{
      padding: "6rem 3rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
      borderTop: "1px solid rgba(245,240,235,0.06)",
    }}>
      <div>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--corail)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1px", background: "var(--corail)", display: "inline-block" }} />
          La méthode
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1, marginBottom: "1.5rem" }}>
          Fini de se battre seule.<br />
          <span style={{ color: "var(--corail)" }}>On construit</span> ensemble.
        </h2>
        <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(245,240,235,0.6)", marginBottom: "2rem" }}>
          Pas de programme générique. Pas de "mange moins, bouge plus". Un coaching adapté à ta vie, ton corps, tes objectifs.
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {[
            "Programme 100% personnalisé selon ton niveau et tes contraintes",
            "Suivi hebdomadaire pour ajuster en temps réel",
            "Mindset & nutrition intégrés dans l'approche",
            "Communauté de femmes qui se soutiennent",
          ].map((item) => (
            <li key={item} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "rgba(245,240,235,0.8)", alignItems: "flex-start" }}>
              <span style={{ color: "var(--corail)", flexShrink: 0 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(245,240,235,0.06)" }}>
        {programmes.map((p) => (
          <div key={p.title} style={{
            background: "var(--gris)",
            padding: "2rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gris-mid)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gris)")}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{p.icon}</div>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{p.title}</div>
            <p style={{ fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.6, color: "var(--texte-muted)" }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}