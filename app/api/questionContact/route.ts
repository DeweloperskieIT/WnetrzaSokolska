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
      const formMessage = formData.get("formMessage");

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

      const now = new Date();

      // Extract day, month, year, hour, and minute from the date
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
      const year = now.getFullYear();
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");

      // Format the date and time as dd.mm.yyyy hh:mm
      const formattedDateTime = `${day}D.${month}M.${year}R ${hour}:${minute}`;

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: destinationAddress as string,
        subject: `Aranżacje Zapytanie - ${formattedDateTime} - Formularz`,
        text: `
        Email: ${email}
        ${telefon ? `Telefon: ${telefon}` : "Nie podano numeru telefonu"}
          Treść formularza - ${formMessage}
        `,
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
