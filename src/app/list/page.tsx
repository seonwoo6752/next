import clientPromise from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const client = await clientPromise;
    const db = client.db("forum0");
    const posts = await db.collection("board").find().toArray();
    return (
      <div className="list-bg">
        {posts.map((a) => {
          const id = a._id?.toString(); // ObjectId -> string
          return (
            <div className="list-item" key={id}>
              <h4>{a.title}</h4>
              <Link href={`/detail/${id}`}>상세보기</Link>
              <DetailLink/>
              <p>1월 1일</p>
            </div>
          );
        })}
      </div>
    );
  }