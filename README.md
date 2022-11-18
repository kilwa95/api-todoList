# api_todolist
RESTful API Designed in Node.js and typeScript for a very simple TODO application.

# Features
- add Task
- create Task
- edit Task
- delete Task
- toggle Task

# Installation
using Node package manager
```
npm install
```

# start the project
```
npm start
```

# Root End-Point
```
http://localhost:3000
```

## End-Point
| Method | End-Point   | Description           |
|--------|-------------|-----------------------|
| GET    | / tasks      | List all tasks        |
| POST   | / tasks      | Create new task       |
| DELETE | / tasks/:id  | Delete task           |
| PUT    | / tasks/:id  | edit task             |
| PATCH  | / ttasks/:id | toggle task complited |

# Core Resources
task object represents snapshot of a specific Todo with a unique Id. You can retrieve it to see details about the Todo.
```javascript
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

```








