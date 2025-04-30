import * as React from "react";

interface EmailTemplateProps {
  FirstName: string;
  verifyToken: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  FirstName,
  verifyToken,
  email,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#fff",
      color: "#333",
    }}
  >
    <h1 style={{ color: "#2e2e2e" }}>
      Welcome to Kalanamak . कालानमक, {FirstName}!
    </h1>

    <p>
      Thank you for signing up and joining our journey to revive the legacy of
      the ancient <strong>Kalanamak rice</strong> — the “Scented Black Pearl” of
      India.
    </p>

    <h2 style={{ marginTop: "24px", color: "#444" }}>
      Please verify your email
    </h2>

    <p>
      To complete your registration and start shopping, please confirm your
      email address by clicking the button below:
    </p>

    <a
      href={`https://kalanamak.vercel.app/api/user/verify?token=${verifyToken}&email=${email}`}
      style={{
        display: "inline-block",
        marginTop: "16px",
        padding: "12px 24px",
        backgroundColor: "#4b2e2e",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "6px",
        fontWeight: "bold",
      }}
    >
      Verify My Email
    </a>

    <p style={{ marginTop: "24px" }}>
      If you didn’t create an account with us, please ignore this email or
      contact us at support@kalanamak.in.
    </p>

    <hr
      style={{ margin: "32px 0", border: "none", borderTop: "1px solid #eee" }}
    />

    <p style={{ fontSize: "12px", color: "#888" }}>
      Thank you for supporting local farmers and preserving the heritage of
      India’s most aromatic rice.
    </p>

    <p style={{ fontSize: "12px", color: "#888" }}>— The Kalanamak Team</p>
  </div>
);
