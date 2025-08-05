import express from "express"
import * as taskController from "../controllers/task.controller.js"
const taskRouter = express.Router()

taskRouter.get("/getTasks/:id", taskController.getAllTask)
taskRouter.post("/createTask/:id", taskController.createTask)
taskRouter.patch("/submitTask/:id", taskController.submitTask)
taskRouter.delete("/deleteTask/:id", taskController.deleteTask)
taskRouter.get("/submitTaskList/:id", taskController.submitTaskList)

export default taskRouter