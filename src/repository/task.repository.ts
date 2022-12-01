import Task from "../models/Task";

import Repository from "../interfaces/repository.interface";
import { v4 as uuidv4 } from "uuid";

let tasks: Task[] = [];

class TaskRepository implements Repository {
  public async findAll(): Promise<Task[]> {
    return tasks;
  }

  public async save(data: Task): Promise<Task> {
    const task: Task = new Task(
      uuidv4(),
      data.title,
      data.description,
      false,
      new Date(Date.now())
    );
    tasks.push(task);
    return task;
  }

  public async update(id: string, data: Task): Promise<Task> {
    const index: number = tasks.findIndex((obj) => obj.id == id);
    tasks[index].title = data.title;
    tasks[index].description = data.description;
    tasks[index].lastUpdated = new Date(Date.now());
    const taskfound: Task = tasks.find((obj) => obj.id == id)!;
    return taskfound;
  }

  public async delete(id: string): Promise<void> {
    const index: number = tasks.findIndex((obj) => obj.id == id);
    tasks.splice(index, 1);
  }

  public async toggleDone(id: string): Promise<void> {
    const taskfound: Task = tasks.find((obj) => obj.id == id)!;
    console.log("debugger", { id, taskfound });
    //taskfound.toggleDone();
  }
}

export default TaskRepository;
