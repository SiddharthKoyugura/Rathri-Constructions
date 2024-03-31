import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(request: NextRequest, response: NextResponse) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.getAll("userId");

    if (!userId || !Array.isArray(userId)) {
        return new NextResponse("Missing or invalid userIds", { status: 400 });
    }

    const user = await db.user.findMany({
        where: {
            id: userId.toString(),
        }
    });

    return NextResponse.json(user);
}