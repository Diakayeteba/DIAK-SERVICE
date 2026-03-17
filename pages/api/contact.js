import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  // Transporter Gmail avec App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email reçu par DIAK-SERVICE
  const mailToOwner = {
    from: `"DIAK-SERVICE Site" <${process.env.GMAIL_USER}>`,
    to: 'diakservices75@gmail.com',
    replyTo: email,
    subject: `📬 Nouveau message de ${name} – DIAK-SERVICE`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);padding:32px 32px 24px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:22px;font-weight:900;letter-spacing:-0.5px;">DIAK-SERVICE</h1>
          <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">Nouveau message reçu via le site web</p>
        </div>

        <!-- Body -->
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Nom</span><br>
                <span style="color:#111827;font-size:16px;font-weight:700;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email</span><br>
                <a href="mailto:${email}" style="color:#2563eb;font-size:15px;font-weight:600;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Message</span><br>
                <p style="color:#374151;font-size:15px;line-height:1.7;margin:8px 0 0;background:#fff;padding:16px;border-radius:8px;border:1px solid #e5e7eb;">${message.replace(/\n/g, '<br>')}</p>
              </td>
            </tr>
          </table>

          <!-- Reply button -->
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}?subject=RE: Votre message à DIAK-SERVICE"
               style="display:inline-block;background:#2563eb;color:#fff;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">
              ↩ Répondre à ${name}
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#f3f4f6;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="color:#9ca3af;font-size:12px;margin:0;">© DIAK-SERVICE · Marché Didida, Bamako – Mali</p>
        </div>
      </div>
    `,
  };

  // Email de confirmation envoyé au client
  const mailToClient = {
    from: `"DIAK-SERVICE" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `✅ Votre message a bien été reçu – DIAK-SERVICE`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);padding:32px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:22px;font-weight:900;">DIAK-SERVICE</h1>
          <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">Marché Didida, Bamako – Mali</p>
        </div>
        <div style="padding:32px;">
          <h2 style="color:#111827;font-size:18px;margin:0 0 12px;">Bonjour ${name} 👋</h2>
          <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
            Merci pour votre message ! Nous l'avons bien reçu et nous vous répondrons dans les plus brefs délais.
          </p>
          <div style="background:#eff6ff;border-left:4px solid #2563eb;padding:14px 18px;border-radius:0 8px 8px 0;margin:20px 0;">
            <p style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;margin:0 0 6px;">Votre message</p>
            <p style="color:#374151;font-size:14px;margin:0;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color:#374151;font-size:15px;line-height:1.7;margin:20px 0 0;">
            Vous pouvez également nous contacter directement :<br>
            📞 <strong>+223 75 16 24 16 / 84 16 19 65</strong><br>
            💬 <a href="https://wa.me/22375162416" style="color:#2563eb;">WhatsApp : +223 75 16 24 16</a>
          </p>
        </div>
        <div style="background:#f3f4f6;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="color:#9ca3af;font-size:12px;margin:0;">© DIAK-SERVICE – Tous droits réservés</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToClient);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi. Veuillez réessayer.' });
  }
}
