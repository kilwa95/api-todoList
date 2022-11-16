import express, { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router: Router = express.Router();
router.use(express.json());

let tasks: Task[] = [];

router.get("/", (req: Request, res: Response) => {
  res.send("todo list");
});

router.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

router.post("/tasks", (req: Request, res: Response) => {
  const body = req.body;
  const task: Task = new Task(
    uuidv4(),
    body.title,
    body.description,
    body.completed
  );
  tasks.push(task);
  res.json(task);
});

router.put("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index: number = tasks.findIndex((obj) => obj.id == id);
  tasks[index].title = req.body.title;
  tasks[index].description = req.body.description;
  const taskfound: any = tasks.find((obj) => obj.id == id);

  res.json(taskfound);
});

router.delete("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index: number = tasks.findIndex((obj) => obj.id == id);
  tasks.splice(index, 1);
  res.send("Task deleted");
});

router.patch("/tasks/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const taskfound: any = tasks.find((obj) => obj.id == id);
  taskfound.toggleDone();
  res.send("Task deleted");
});

export const applicationRouter: Router = router;
