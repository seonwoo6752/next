import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";


interface Post {
    _id: ObjectId;
    title: string;
    content: string;
    createdAt?: Date;
  }

  type PageProps = { params: { id: string } };

export default async function Edit({ params }: PageProps){
    const client = await clientPromise;
    const db = client.db("forum0");
  
    let post = null;
    
      post = await db
        .collection<Post>("board")
        .findOne({ _id: new ObjectId(params.id) }); 

        if (!post) {
            return <div>해당 글을 찾을 수 없습니다.</div>;
          }

          await db.collection('post').updateOne({},{$set : {title: post.title, content: post.content}})
    return(
        <div className="p-20">
        <h4>수정 페이지</h4>
        <form action="/api/post/edit" method= "PATCH">
        <input name="_id" defaultValue={post._id.toString()} hidden/>
            <input  name="title" defaultValue={post.title} />
            <input  name="content" defaultValue={post.content} />
            <button type="submit">전송</button>
        </form>
    </div>
    )
}