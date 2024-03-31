import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const { searchParams } = new URL(request.url);
    const houseId = searchParams.get("id");

    if (!houseId || !Array.isArray(houseId)) {
        return new NextResponse("Missing or invalid houseId", { status: 400 });
    }

    const house = await db.house.findMany({
        where: {
            id: houseId.toString(),
        }
    });

    return NextResponse.json(house);
}