"use client";
import { useState } from "react";

const STEPS = 4;

type FormData = {
  prenom: string;
  email: string;
  age: string;
  taille: string;
  poids: string;
  niveau: string;
  frequence: string;
  lieu: string;
  objectif: string;
  delai: string;
  blessures: string;
  pourquoi: string;
  source: string;
  message: string;
  honeypot: string;
};

const initial: FormData = {
  prenom: "", email: "", age: "", taille: "", poids: "",
  niveau: "", frequence: "", lieu: "",
  objectif: "", delai: "", blessures: "",
  pourquoi: "", source: "", message: "",
  honeypot: "",
};

const inputStyle = {
  width: "100%", padding: "0.85rem 1rem",
  background: "var(--blanc)", border: "1px solid rgba(28,22,18,0.15)",
  fontSize: "0.88rem", fontFamily: "'DM Sans', sans-serif",
  color: "var(--brun)", outline: "none",
};

const labelStyle = {
  display: "block", fontSize: "0.72rem", fontWeight: 500,
  letterSpacing: "0.12em", textTransform: "uppercase" as const,
  color: "var(--muted)", marginBottom: "0.5rem",
};

const optionBtnStyle = (selected: boolean) => ({
  padding: "0.85rem 1.5rem", fontSize: "0.82rem", fontWeight: 400,
  border: selected ? "1.5px solid var(--brun)" : "1px solid rgba(28,22,18,0.2)",
  background: selected ? "var(--brun)" : "var(--blanc)",
  color: selected ? "var(--blanc)" : "var(--brun)",
  cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
  transition: "all 0.15s",
});

export default function Questionnaire() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    if (form.honeypot) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError("Une erreur est survenue. Réessaie ou contacte-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  const fieldGroup = (children: React.ReactNode) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {children}
    </div>
  );

  const field = (label: string, key: keyof FormData, type = "text", placeholder = "") => (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => set(key, e.target.value)}
        style={inputStyle}
      />
    </div>
  );

  const options = (label: string, key: keyof FormData, choices: string[]) => (
    <div>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.25rem" }}>
        {choices.map((c) => (
          <button key={c} onClick={() => set(key, c)} style={optionBtnStyle(form[key] === c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );

  if (done) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "480px", textAlign: "center" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem" }}>
            Questionnaire reçu ✓
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3.5rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "1.5rem" }}>
            MERCI {form.prenom.toUpperCase()} !
          </h1>
          <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)" }}>
            Ton bilan a bien été reçu. Je reviens vers toi sous <strong style={{ color: "var(--brun)" }}>48h</strong> pour te proposer un programme sur mesure.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: "6rem 2rem 4rem" }}>
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Étape {step} sur {STEPS}
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "2rem" }}>
            {step === 1 && "QUI ES-TU ?"}
            {step === 2 && "TON NIVEAU"}
            {step === 3 && "TON OBJECTIF"}
            {step === 4 && "TA MOTIVATION"}
          </h1>

          {/* PROGRESS BAR */}
          <div style={{ height: "2px", background: "rgba(28,22,18,0.1)", borderRadius: "2px" }}>
            <div style={{ height: "100%", width: `${(step / STEPS) * 100}%`, background: "var(--rose)", transition: "width 0.3s ease" }} />
          </div>
        </div>

        {/* ÉTAPE 1 */}
        {step === 1 && fieldGroup(
          <>
            {field("Prénom", "prenom", "text", "Ton prénom")}
            {field("Email", "email", "email", "ton@email.com")}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Âge</label>
                <input type="number" placeholder="25" value={form.age} onChange={e => set("age", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Taille (cm)</label>
                <input type="number" placeholder="165" value={form.taille} onChange={e => set("taille", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Poids (kg)</label>
                <input type="number" placeholder="60" value={form.poids} onChange={e => set("poids", e.target.value)} style={inputStyle} />
              </div>
            </div>
            {/* HONEYPOT — invisible */}
            <input
              type="text"
              value={form.honeypot}
              onChange={e => set("honeypot", e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              aria-hidden="true"
            />
          </>
        )}

        {/* ÉTAPE 2 */}
        {step === 2 && fieldGroup(
          <>
            {options("Niveau sportif", "niveau", ["Débutante", "Intermédiaire", "Avancée"])}
            {options("Séances par semaine", "frequence", ["1-2x", "3-4x", "5x et +"])}
            {options("Tu t'entraînes où ?", "lieu", ["À la maison", "En salle", "Extérieur", "Les trois"])}
          </>
        )}

        {/* ÉTAPE 3 */}
        {step === 3 && fieldGroup(
          <>
            {options("Objectif principal", "objectif", ["Perte de poids", "Remise en forme", "Prise de masse", "Bien-être"])}
            {options("Résultats dans", "delai", ["1 mois", "3 mois", "6 mois", "Pas de rush"])}
            <div>
              <label style={labelStyle}>Blessures ou contraintes physiques</label>
              <textarea
                placeholder="Dos fragile, genou opéré... ou rien du tout !"
                value={form.blessures}
                onChange={e => set("blessures", e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
          </>
        )}

        {/* ÉTAPE 4 */}
        {step === 4 && fieldGroup(
          <>
            <div>
              <label style={labelStyle}>Pourquoi maintenant ?</label>
              <textarea
                placeholder="Qu'est-ce qui t'a décidée à te lancer ?"
                value={form.pourquoi}
                onChange={e => set("pourquoi", e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            {options("Comment tu m'as trouvée ?", "source", ["Instagram", "Bouche à oreille", "Google", "Autre"])}
            <div>
              <label style={labelStyle}>Un message pour moi ? (optionnel)</label>
              <textarea
                placeholder="Tout ce que tu veux ajouter..."
                value={form.message}
                onChange={e => set("message", e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
          </>
        )}

        {/* NAVIGATION */}
        {error && (
          <p style={{ marginTop: "1.5rem", fontSize: "0.82rem", color: "#c0392b" }}>{error}</p>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem" }}>
          {step > 1 ? (
            <button onClick={prev} style={{ background: "transparent", border: "1px solid rgba(28,22,18,0.2)", color: "var(--muted)", padding: "0.85rem 1.8rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              ← Retour
            </button>
          ) : <div />}

          {step < STEPS ? (
            <button onClick={next} style={{ background: "var(--brun)", color: "var(--blanc)", padding: "0.85rem 2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Continuer →
            </button>
          ) : (
            <button onClick={submit} disabled={loading} style={{ background: "var(--rose)", color: "var(--blanc)", padding: "0.85rem 2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Envoi..." : "Envoyer mon bilan →"}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}