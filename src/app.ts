import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todo";
const compression = require("compression");

const app = express();
app.use(compression());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: err.message });
});

app.listen(3000);
