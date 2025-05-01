import nodemailer from "nodemailer";

export async function sendVerificationEmail(email: string, verifToken: string) {
  try {
    var transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"KalaNamak" <${process.env.MAILTRAP_USER}>`,

      to: email,
      subject: "Verify Your Account",
      text: `Click the link below to verify your account:\n\nhttp://kalanamak.vercel.app/api/auth/verify?token=${verifToken}&email=${email}`,
      html: `
      <p>Hi,</p>
      <p>Thank you for registering. Please verify your account by clicking the link below:</p>
      <a href="http://kalanamak.vercel.app/api/user/verify?token=${verifToken}&email=${email}">Verify Your Account</a>
      <p>This link will expire in 15 minutes.</p>
    `,
    };
    await transport.sendMail(mailOptions);
  } catch (error) {
    return error;
  }
}
