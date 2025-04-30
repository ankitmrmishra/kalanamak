import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const queryParams = req.nextUrl.searchParams;
    const token = queryParams.get("token");
    const email = queryParams.get("email");
    if (!token || !email) {
      return NextResponse.json({ error: "Invalid query" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User Not found" }, { status: 400 });
    }

    const TokenexpiryTime = user.verifyTokenExpiry;
    if (TokenexpiryTime) {
      if (TokenexpiryTime?.getTime() < Date.now()) {
        return NextResponse.json({ error: "Token Expired" }, { status: 400 });
      } else {
        await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            isVerified: true,
            verifyToken: null,
            verifyTokenExpiry: null,
          },
        });
        return NextResponse.json(
          { message: "Email Verified successfully" },
          { status: 200 }
        );
        // return NextResponse.redirect(new URL("/userSucessEmail", req.url));
      }
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Email Verification Failed", details: error },
      { status: 500 }
    );
  }
}
