import express from "express";
import * as projectController from "../controllers/project.controller.js"

const projectRouter = express.Router()

projectRouter.get("/getProjects", projectController.getALLProjects)
projectRouter.get("/getProject/:id", projectController.getProject)
projectRouter.get("/projectNearDue/:id", projectController.projectNearDue)
projectRouter.get("/newComingProject/:id", projectController.newComingProject)
projectRouter.get("/assignProject/:id", projectController.assignProject)
projectRouter.post("/:role/assignProject/:id", projectController.createProject)
projectRouter.delete("/:role/removeProject/:id", projectController.removeProject)

export default projectRouter