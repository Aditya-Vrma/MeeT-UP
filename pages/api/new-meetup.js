import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://aditya_vrma:aditya_vrma@clusterx.yp8yxbz.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
//t11CXYVxYm34Xb5A
//mongodb+srv://nextapp:<password>@cluster0.l8tkh7g.mongodb.net/?retryWrites=true&w=majority
