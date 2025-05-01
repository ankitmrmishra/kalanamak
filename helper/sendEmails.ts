import { EmailTemplate } from "@/components/ui/emailverificationTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendVerificationEmailProps {
  firstName: string;
  email: string;
  verifyTokengen: string;
}

export async function sendVerificationEmail({
  firstName,
  email,
  verifyTokengen,
}: SendVerificationEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Kalanamak <noreply@ankitmishra.xyz>",
      to: email,
      subject: "Verify your email address",
      react: EmailTemplate({
        FirstName: firstName,
        email: email,
        verifyToken: verifyTokengen,
      }),
    });

    if (error) {
      console.error("Email error:", error);
      throw new Error("Failed to send verification email");
    }

    return data;
  } catch (err) {
    throw err;
  }
}
