import clientPromise from "@/util/database";
import { NextResponse } from "next/server";

type Post ={
    title: string;
    content: string;
    createdAt: Date;
};

export async function GET() {

    try{
        const client = await clientPromise;
        const db = client.db("forum0");
        const result = await db.collection<Post>("board").find().sort({ _id: -1 }).toArray();
        return NextResponse.json(result, {status: 200});
    }catch(err : any){
        console.error("GET / api/list error:", err);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
