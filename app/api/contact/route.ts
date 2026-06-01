import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { prenom, email, message } = await req.json();

  const result = await resend.emails.send({
    from: "Nej Coach <onboarding@resend.dev>",
    to: "odessa.tpereira@icloud.com",
    subject: `Nouveau message de ${prenom}`,
    html: `<h2>Message de ${prenom}</h2><p>${email}</p><p>${message}</p>`,
  });

  console.log("RESEND RESULT:", JSON.stringify(result));
  return NextResponse.json({ ok: true });
}