import mongoose from "mongoose";

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const database = process.env.MONGODB_DATABASE;

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@eiericksilvacluster.hfiky3m.mongodb.net/${database}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected!!"));
