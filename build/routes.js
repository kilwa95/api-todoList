"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationRouter = void 0;
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
router.use(express_1.default.json());
let tasks = [];
router.get("/", (req, res) => {
    res.send("todo list");
});
router.get("/tasks", (req, res) => {
    res.json(tasks);
});
router.post("/tasks", (req, res) => {
    const body = req.body;
    const task = new Task((0, uuid_1.v4)(), body.title, body.description, body.completed);
    tasks.push(task);
    res.json(task);
});
router.put("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const index = tasks.findIndex((obj) => obj.id == id);
    tasks[index].title = req.body.title;
    tasks[index].description = req.body.description;
    const taskfound = tasks.find((obj) => obj.id == id);
    res.json(taskfound);
});
router.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const index = tasks.findIndex((obj) => obj.id == id);
    tasks.splice(index, 1);
    res.send("Task deleted");
});
router.patch("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const taskfound = tasks.find((obj) => obj.id == id);
    taskfound.toggleDone();
    res.send("Task deleted");
});
exports.applicationRouter = router;
