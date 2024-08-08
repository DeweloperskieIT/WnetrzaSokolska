import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import multiparty from "multiparty";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: "Failed to parse form data" });
      }

      const { imie, email, telefon, zgoda } = fields;
      const uploadedFiles = files.files || [];

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587", 10),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const attachments = uploadedFiles.map((file: any) => ({
        filename: file.originalFilename,
        path: file.path,
      }));

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "krzysiek.kutniowski@deweloperskie.pl",
        subject: "New Contact Form Submission",
        text: `
          Imię: ${imie}
          Email: ${email}
          Telefon: ${telefon}
          Zgoda: ${zgoda ? "Yes" : "No"}
        `,
        attachments,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Failed to send email", error);
        res.status(500).json({ message: "Failed to send email", error });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
