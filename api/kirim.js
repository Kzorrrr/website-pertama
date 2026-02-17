import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nama } = req.body;

    await client.connect();
    const db = client.db("belajarCloud");
    const collection = db.collection("users");

    await collection.insertOne({ nama });

    res.status(200).json({
      message: `Halo ${nama}, data kamu sudah disimpan!`
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
