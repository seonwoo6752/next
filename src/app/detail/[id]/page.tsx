import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";

type DetailProps = { params: { id: string } };

export default async function Detail({ params }: DetailProps) {
  const client = await clientPromise;
  const db = client.db("forum0");

  let post = null;
  
    post = await db
      .collection("board")
      .findOne({ _id: new ObjectId(params.id) }); 

  return (
    <div>
      <h4>상세페이지임</h4>
      {post ? (
        <>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </>
      ) : (
        <p>게시글을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
