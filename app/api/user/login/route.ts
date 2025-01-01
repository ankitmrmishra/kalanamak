import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json({ error: "All Fields are Required" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    const isPassword = await bcryptjs.compare(password, user.password);
    if (!isPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        { error: "Please verify your email to login" },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        user: { id: user.id, email: user.email },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Login failed", details: error },
      { status: 500 }
    );
  }
}
