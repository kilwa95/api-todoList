class Task {
  public id: string;
  public title: string;
  public description: string;
  public completed: boolean;

  constructor(
    id: string,
    title: string,
    description: string,
    completed: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  public toggleDone(): void {
    this.completed = !this.completed;
  }
}

export default Task;
