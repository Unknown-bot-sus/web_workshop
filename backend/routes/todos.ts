import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/";

export const router = Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);