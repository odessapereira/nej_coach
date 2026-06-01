"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ prenom: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const submit = async () => {
    if (!form.prenom || !form.email || !form.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError("Une erreur est survenue. Réessaie ou écris-moi directement sur Instagram.");
    } finally {
      setLoading(false);
    }
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

  const socials = [
    {
      name: "Instagram",
      handle: "@nej_coach",
      url: "https://instagram.com/nej_coach",
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      handle: "@nej_coach",
      url: "https://tiktok.com/@nej_coach",
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
        </svg>
      ),
    },
  ];

  return (
    <main style={{ paddingTop: isMobile ? "4rem" : "5rem" }}>

      {/* HEADER */}
      <section style={{ padding: isMobile ? "3rem 1.5rem 2rem" : "4rem 3rem 3rem", borderBottom: "1px solid rgba(28,22,18,0.08)" }}>
        <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
          Me contacter
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? "3rem" : "clamp(3rem, 5vw, 5rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.92 }}>
          ON SE<br />
          <em style={{ fontStyle: "italic", color: "var(--rose)" }}>PARLE ?</em>
        </h1>
      </section>

      <section style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 3rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "3rem" : "6rem", alignItems: "start" }}>

        {/* FORMULAIRE */}
        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Envoie-moi un message
          </div>

          {done ? (
            <div style={{ padding: "2rem", background: "var(--blanc)", borderLeft: "2.5px solid var(--rose)" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                MESSAGE REÇU ✓
              </h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "var(--muted)" }}>
                Je reviens vers toi très vite, {form.prenom} !
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <label style={labelStyle}>Prénom</label>
                <input type="text" placeholder="Ton prénom" value={form.prenom} onChange={e => set("prenom", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="ton@email.com" value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea placeholder="Dis-moi tout..." value={form.message} onChange={e => set("message", e.target.value)} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              {error && <p style={{ fontSize: "0.82rem", color: "#c0392b" }}>{error}</p>}
              <button onClick={submit} disabled={loading} style={{ background: "var(--brun)", color: "var(--blanc)", padding: "1rem 2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", opacity: loading ? 0.7 : 1, alignSelf: "flex-start" }}>
                {loading ? "Envoi..." : "Envoyer →"}
              </button>
            </div>
          )}
        </div>

        {/* RÉSEAUX */}
        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "var(--rose)", display: "inline-block" }} />
            Me suivre
          </div>
          <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", marginBottom: "2rem" }}>
            Tu peux aussi me retrouver sur les réseaux — je partage mes entraînements, conseils et coulisses du coaching au quotidien.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(28,22,18,0.08)" }}>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ background: "var(--blanc)", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", color: "var(--brun)", transition: "background 0.2s", borderLeft: "2.5px solid transparent" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--sable-dark)"; e.currentTarget.style.borderLeftColor = "var(--rose)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--blanc)"; e.currentTarget.style.borderLeftColor = "transparent"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ color: "var(--rose)" }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "2px" }}>{s.handle}</div>
                  </div>
                </div>
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>→</span>
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}