import prisma from "../config/prisma.config.js";
import createError from "../utils/create.error.util.js";

export const getAllStatus = async (req, res, next) => {
  const { id } = req.params
  const result = await prisma.status.findMany({
    where: {
      taskId: +id
    }
  })
  res.json({ status: result })
}

export const createStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { feedback, attachFile } = req.body
    const status = await prisma.status.create({
      data: {
        feedback: feedback,
        attachFile: attachFile,
        taskId: +id
      }
    })
    res.status(201).json({
      message: "Status created successfully",
      result: status
    })
    
  } catch (error) {
    console.log(error)
  }
}

export const updateTaskStatus = async(req, res, next) => {
  try {
    const {id} = req.params
    const {taskStatus} = req.body
    const findtask = await prisma.task.findUnique({where: {id: +id}})
    if(!findtask) {
      createError(400, "Not found task")
    }
    const response = await prisma.status.update({
      where: {taskId : +id},
      data: {taskStatus: taskStatus}
    })
    res.json({message: "Task update complete",
      result: response
    })
  } catch (error) {
    console.log(error)
  }
}