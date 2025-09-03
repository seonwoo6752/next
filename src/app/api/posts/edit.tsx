import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";


interface Post {
    _id: ObjectId;
    title: string;
    content: string;
    createdAt?: Date;
  }

export default async function handler(req, res){
    if(req.method == 'POST'){
    const client = await clientPromise;
    const db = client.db("forum0");
    let post = null;
    post = await db.collection<Post>("board").updateOne({_id: new ObjectId(req.body.id)},{$set : {title: req.body.title, content: req.body.content}})

    }
    res.status(200).redirect(302,'/list')
}