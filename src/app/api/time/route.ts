import { NextResponse } from "next/server";

export async function GET() {
    let a = new Date();
    return NextResponse.json({time: a.toLocaleString()}, {status: 200});
}
