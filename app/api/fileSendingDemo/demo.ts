import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

async function handler(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const formData = await req.formData();

      const destinationAddress = formData.get("destinationAddress");
      const imie = formData.get("imie");
      const email = formData.get("email");
      const telefon = formData.get("telefon");
      const files = formData.getAll("files") as File[];

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

      const attachments = await Promise.all(
        files.map(async (file) => {
          const buffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(buffer),
          };
        })
      );

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "krzysiek.kutniowski@deweloperskie.pl",
        subject: `%`,
        text: `
          Imię: ${imie}
          Email: ${email}
          ${telefon ? `Telefon: ${telefon}` : "Nie pdoano numeru telefonu"}
        `,
        attachments,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email", error);
      return NextResponse.json(
        { message: "Failed to send email", error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}

export { handler as GET, handler as POST };
