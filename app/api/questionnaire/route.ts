import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const body = await req.json();

  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const {
    prenom, email, age, taille, poids,
    niveau, frequence, lieu,
    objectif, delai, blessures,
    pourquoi, source, message,
  } = body;

  try {
    await resend.emails.send({
      from: "NejCoach <onboarding@resend.dev>",
      to: "najiyaeg28@gmail.com",
      subject: `Nouveau bilan — ${prenom}`,
      html: `
        <h2>Nouveau bilan reçu de ${prenom}</h2>
        <hr/>
        <h3>Profil</h3>
        <p><b>Email :</b> ${email}</p>
        <p><b>Âge :</b> ${age} ans</p>
        <p><b>Taille :</b> ${taille} cm</p>
        <p><b>Poids :</b> ${poids} kg</p>
        <hr/>
        <h3>Niveau</h3>
        <p><b>Niveau :</b> ${niveau}</p>
        <p><b>Fréquence :</b> ${frequence}</p>
        <p><b>Lieu :</b> ${lieu}</p>
        <hr/>
        <h3>Objectif</h3>
        <p><b>Objectif :</b> ${objectif}</p>
        <p><b>Délai :</b> ${delai}</p>
        <p><b>Blessures :</b> ${blessures || "Aucune"}</p>
        <hr/>
        <h3>Motivation</h3>
        <p><b>Pourquoi maintenant :</b> ${pourquoi}</p>
        <p><b>Source :</b> ${source}</p>
        <p><b>Message :</b> ${message || "—"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}