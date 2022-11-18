import App from "./app";
import TaskController from "./controller/task.controller";

const app = new App([ new TaskController() ]);

app.listen();
