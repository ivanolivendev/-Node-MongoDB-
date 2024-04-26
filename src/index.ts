import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import router from "./routes/Routes";

config();
const app = express();
app.use(express.json());

const urlMongo = process.env.MONGO_URL;
const user = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

mongoose
  .connect(process.env.MONGO_URL as string, {
    dbName: "node-typescript-app",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Something Wet Wrong");
  });

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Listen on Port ${process.env.PORT}`);
});
