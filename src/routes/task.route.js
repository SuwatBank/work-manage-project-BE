import express from "express"
import * as taskController from "../controllers/task.controller.js"
const taskRouter = express.Router()

taskRouter.get("/getTasks/:id", taskController.getAllTask)
taskRouter.post("/createTask/:id", taskController.createTask)
taskRouter.get("/removeTask", taskController.createTask)

export default taskRouter