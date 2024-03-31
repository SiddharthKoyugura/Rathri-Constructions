import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const { searchParams } = new URL(request.url);
    const userIds = searchParams.getAll("userIds");

    if (!userIds || !Array.isArray(userIds)) {
        return new NextResponse("Missing or invalid userIds", { status: 400 });
    }

    const user = await db.user.findMany({
        where: {
            id: {
                in: userIds,
            }
        }
    });

    return NextResponse.json(user);
}