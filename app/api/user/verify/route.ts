import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  if (!email || !token) {
    return NextResponse.json(
      { error: "Invalid or missing parameters." },
      { status: 400 }
    );
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    if (user.verifyToken !== token || !user.verifyTokenExpiry) {
      return NextResponse.json({ error: "Invalid token." }, { status: 400 });
    }

    if (user.verifyTokenExpiry < new Date()) {
      return NextResponse.json(
        { error: "Token has expired." },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verifyToken: null,
        verifyTokenExpiry: null,
      },
    });

    return NextResponse.json({ message: "Email verified successfully." });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "User creation failed", details: error },
      { status: 500 }
    );
  }
}
