import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "POST":
      const { db } = await connectToDatabase();
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("users").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const users = await db.collection("users").find({}).limit(20).toArray();

      res.json({ status: 200, data: users });
      break;
  }
};
