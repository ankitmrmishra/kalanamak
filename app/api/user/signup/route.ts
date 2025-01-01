import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, Firstname, Lastname, mobileNumber } = body;

    if (!email || !password || !Firstname || !Lastname || !mobileNumber) {
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
    const hashedPassword = await bcryptjs.hash(password, 10);

    const Newuser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        Firstname,
        Lastname,
        mobileNumber,
        isVerified: false,
        role: "User",
        forgotPasswordToken: null,
        forgotPasswordTokenExpiry: null,
        verifyToken: null,
        verifyTokenExpiry: null,
      },
    });
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
