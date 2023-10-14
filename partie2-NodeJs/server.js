import express from "express";
import dotenv from "dotenv";
import taskRouter from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
// creating an express instance
const app = express();

//simple middelware
app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/v1", taskRouter);
// connect to the db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listening on requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to database and app listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
