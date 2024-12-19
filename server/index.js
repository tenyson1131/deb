import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;

    app.listen(port || 3000, () => {
      console.log("Server is running at", port);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
  }
};

startServer();
