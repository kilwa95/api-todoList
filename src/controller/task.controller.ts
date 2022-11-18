import { Request, Response, NextFunction, Router } from "express";
import Controller from "../interfaces/controller.interface";
import TaskRepository from "../repository/task.repository";

class TaskController implements Controller {
  public path = "/tasks";
  public router = Router();
  private taskRepository = new TaskRepository();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllTasks);
    this.router.post(this.path, this.createTask);
    this.router.put(`${this.path}/:id`, this.updateTask);
    this.router.delete(`${this.path}/:id`, this.deleteTask);
    this.router.patch(`${this.path}/:id`, this.toggleDoneTask);
  }

  private getAllTasks = async (request: Request, response: Response) => {
    const tasks = await this.taskRepository.findAll();
    response.json(tasks);
  };

  private createTask = async (request: Request, response: Response) => {
    const taskData = request.body;
    const newTask = await this.taskRepository.save(taskData);
    response.json(newTask);
  };

  private updateTask = async (request: Request, response: Response) => {
    const id = request.params.id;
    const taskData = request.body;
    const updatedTask = await this.taskRepository.update(id, taskData);
    response.json(updatedTask);
  };

  private deleteTask = async (request: Request, response: Response) => {
    const id = request.params.id;
    await this.taskRepository.delete(id);
    response.json({ message: "Task deleted" });
  };

  private toggleDoneTask = async (request: Request, response: Response) => {
    const id = request.params.id;
    await this.taskRepository.toggleDone(id);
    response.json({ message: "Task toggled" });
  };
}

export default TaskController;
