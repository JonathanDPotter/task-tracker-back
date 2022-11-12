import { Router } from "express";
import controller from "../controllers/task";

const router = Router();

router.get("/", controller.getTasks);

router.get("/:_id", controller.getTask);

router.post("/", controller.createTask);

router.put("/:_id", controller.updateTask);

router.delete("/:_id", controller.deleteTask);

export default router;
