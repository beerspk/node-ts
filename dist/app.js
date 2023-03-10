"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const compression = require("compression");
const app = (0, express_1.default)();
app.use(compression());
app.use("/todos", todo_1.default);
app.use((err, req, res, next) => {
    res.json({ message: err.message });
});
app.listen(3000);
