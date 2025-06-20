import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id",getTaskById)
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router
