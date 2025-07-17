import prisma from "../config/prisma.config.js";
import createError from "../utils/create.error.util.js";

export const getAllTask = async(req, res, next) => {
  const { id } = req.params
  const result = await prisma.task.findMany({
    where : {
      projectListId: +id
    },
    include: {
      status: true
    }
  })
  console.log("result",result)
  res.json({
    tasks: result
  })
}

export const createTask = async(req, res, next) => {
  try {
    const {detail, name, dueDate, userId, priority} = req.body
    const {id} = req.params

    const project = await prisma.projectList.findUnique({
      where: { id: +id }
    })

    if (!project){
      createError(400, "Not found project");
    }

    const task = await prisma.task.create({
      data: {
        name: name,
        detail: detail,
        projectListId: project.id,
        dueDate: new Date(dueDate),
        priority: +priority
      }
    })

    const status = await prisma.status.create({
      data: {
        taskId: task.id,
        taskStatus: "ONGOING",
        projectStatus: "ONGOING"
      }
    })

    if (userId.length > 0) {
      console.log('create useron task');
      const connections = userId.map((userId) => ({
        taskId: task.id,
        userId: +userId
      }))

      await prisma.userOnTask.createMany({
        data: connections,
        skipDuplicates: true
      })
    }
    res.status(201).json({
      message: "Task created successfully",
      result: task,
      statue: status
    })
    
  } catch (error) {
    console.log(error)
  }
}

export const submitTask = async(req, res, next) => {
  try {
    const {id} = req.params;
    const {feedback, taskStatus} = req.body;
    const findTask = await prisma.task.findUnique({
      where: {id: Number(id)}
    })

    if(!findTask){
      createError(400, "Cannot update status")
    }

    const response = await prisma.status.update({
      where: {id: +id},
      data: {feedback, taskStatus}
    })

    res.json({message: `Task is already submit`,
      response: response
    })

  } catch (error) {
    console.log(error)
  }
}