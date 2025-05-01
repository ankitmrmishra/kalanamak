import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import { sendVerificationEmail } from "@/helper/sendEmails";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, Firstname, Lastname } = body;

    if (!email || !password || !Firstname || !Lastname) {
      return NextResponse.json({ error: "All fields are required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 400 }
      );
    }

    const verifyTokengen = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = new Date(Date.now() + 1000 * 60 * 15);
    const hashedPassword = await bcryptjs.hash(password, 10);

    const Newuser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        Firstname,
        Lastname,
        isVerified: false,
        role: "User",
        forgotPasswordToken: null,
        forgotPasswordTokenExpiry: null,
        verifyToken: verifyTokengen,
        verifyTokenExpiry: verifyTokenExpiry,
      },
    });

    await sendVerificationEmail(email, verifyTokengen);

    return NextResponse.json(
      { message: "User created successfully", Newuser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "User creation failed", details: error },
      { status: 500 }
    );
  }
}
