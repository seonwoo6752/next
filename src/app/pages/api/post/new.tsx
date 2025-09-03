import {connectDB} from '@/util/database';

export default async function handler(req, res){
    if(req.method == 'POST'){
    const db = await connectDB().db("forum0");
    const posts = await db.collection("board").find().toArray()
    }
}