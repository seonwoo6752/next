// app/api/posts/route.ts
import clientPromise from "@/util/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();         // ← 폼 데이터로 파싱
    const title = String(form.get("title") ?? "").trim();
    const content = String(form.get("content") ?? "").trim();

    if (!title || !content) {
      return NextResponse.json({ ok: false, message: "title/content 필요" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("forum0");
    const result = await db.collection("board").insertOne({
      title,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
    // 또는 페이지로 리다이렉트하고 싶다면:
    // return NextResponse.redirect(new URL("/posts", req.url));
  } catch (err: any) {
    return NextResponse.json({ ok: false, message: "서버 오류", error: err.message }, { status: 500 });
  }
}
