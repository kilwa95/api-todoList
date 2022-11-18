class Task {
  constructor(
    id: string,
    title: string,
    description: string,
    completed: boolean,
    lastUpdated: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.lastUpdated = lastUpdated;
  }
  public id: string;
  public title: string;
  public description: string;
  public completed: boolean;
  public lastUpdated: Date;

  public toggleDone(): void {
    this.completed = !this.completed;
  }
}

export default Task;
