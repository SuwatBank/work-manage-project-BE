import express from "express"
import * as statusController from "../controllers/status.controller.js";

const statusRouter = express.Router()

statusRouter.get("/getStatus/:id", statusController.getAllStatus)
statusRouter.post("/createStatus/:id", statusController.createStatus)
statusRouter.patch("/updateStatus/:id", statusController.updateTaskStatus)

export default statusRouter