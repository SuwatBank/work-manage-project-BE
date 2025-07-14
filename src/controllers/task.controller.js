import prisma from "../config/prisma.config.js";
import createError from "../utils/create.error.util.js";

export const getAllTask = async(req, res, next) => {
  const { id } = req.params
  const result = await prisma.task.findMany({
    where : {
      projectListId: + id
    }

  })
  res.json({tasks: result})
}

export const createTask = async(req, res, next) => {
  try {
    const {detail} = req.body
    const {id} = req.params
    // console.log('detail', detail)
    console.log('req.projectListId', req.task)
    console.log('detail', detail)
    const task = await prisma.task.create({
      data: {
        detail: detail,
        projectListId: +id
      }
    })
    res.status(201).json({
      message: "Task created successfully",
      result: task
    })
    
  } catch (error) {
    console.log(error)
  }
}