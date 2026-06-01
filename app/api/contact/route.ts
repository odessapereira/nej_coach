import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { prenom, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Nej Coach <onboarding@resend.dev>",
      to: "najiyaeg28@gmail.com",
      subject: `Nouveau message de ${prenom}`,
      html: `
        <h2>Message reçu de ${prenom}</h2>
        <p><b>Email :</b> ${email}</p>
        <p><b>Message :</b></p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
  }
}