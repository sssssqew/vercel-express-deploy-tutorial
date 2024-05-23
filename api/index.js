const express = require("express");
const mongoose = require("mongoose")
const app = express();

// console.log("몽고아틀라스 주소: ", process.env.MONGODB_URI)
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log("데이터베이스 연결 성공 !!"))
// .catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.q2zkcuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("성공 ~ Pinged your deployment. You successfully connected to MongoDB! ");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;