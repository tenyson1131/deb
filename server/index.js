import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
