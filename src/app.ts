/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import cookieParser from "cookie-parser";

const app: Application = express();

//parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

//application routes
app.use("/api/v1/", router);

const test = (req: Request, res: Response) => {
  res.send("hello world!!");
};

app.get("/", test);

export default app;
