import { NextResponse } from "next/server";
import db from "../../../lib/prisma";

export async function GET(res: NextResponse) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
