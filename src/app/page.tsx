// app/page.tsx
import clientPromise from "@/util/database";

export default async function Home() {
  try {
    const client = await clientPromise;
    const db = client.db("forum0");

    const posts = await db.collection("board").find({}).toArray();

    return (
      <main>
        <h1>안녕 👋</h1>
        <ul>
          {posts.map((p) => (
            <li key={p._id.toString()}>{p.title ?? "(제목 없음)"}</li>
          ))}
        </ul>
      </main>
    );
  } catch (err: any) {
    console.error("[Mongo error]", err);
    return <main>데이터를 불러오지 못했습니다.</main>;
  }
}
