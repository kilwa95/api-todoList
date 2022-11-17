import express, { Request, Response } from "express";
import cors from "cors";
import { applicationRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use("/", applicationRouter);

module.exports = app;
