import express, { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import Task from "./models/Task";

const router: Router = express.Router();
router.use(express.json());

let tasks: Task[] = [];

router.get("/tasks", (req: Request, res: Response) => {
  res.status(200).json(tasks);
});

router.post("/tasks", (req: Request, res: Response) => {
  const body = req.body;
  const task: Task = new Task(uuidv4(), body.title, body.description, false);
  tasks.push(task);
  res.status(201).json(task);
});

router.put("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index: number = tasks.findIndex((obj) => obj.id == id);
  tasks[index].title = req.body.title;
  tasks[index].description = req.body.description;
  const taskfound: any = tasks.find((obj) => obj.id == id);

  res.status(200).json(taskfound);
});

router.delete("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index: number = tasks.findIndex((obj) => obj.id == id);
  tasks.splice(index, 1);
  res.status(200).send("Task deleted");
});

router.patch("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const taskfound: any = tasks.find((obj) => obj.id == id);
  taskfound.toggleDone();
  res.status(200).send("Task deleted");
});

export const applicationRouter: Router = router;
