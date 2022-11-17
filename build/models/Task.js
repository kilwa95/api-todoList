"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    toggleDone() {
        this.completed = !this.completed;
    }
}
exports.default = Task;
