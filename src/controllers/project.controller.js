import prisma from "../config/prisma.config.js";
import createError from "../utils/create.error.util.js";

export const getALLProjects = async (req, res, next) => {
  const result = await prisma.projectList.findMany({
    orderBy: { createAt: "desc" }
  })
  res.json({ projects: result })
}

export const getProject = async (req, res, next) => {
  const { id } = req.params;
  const sortProject = await prisma.userOnProject.findMany({
    where: {
      userId: +id
    },
    include: {
      ProjectList: true
    }

  })

  // if(!sortProject || sortProject.user.userId !== id) {
  //   createError(400, "Cannot get this project")
  // }

  res.json({
    result: sortProject
  })
}

export const assignProject = async (req, res, next) => {
  const {id} = req.params
  const projects = await prisma.projectList.findMany({
    where: {
      assignor: +id
    }
  })
  res.json({
    result: projects
  })
}

export const createProject = async (req, res, next) => {
  console.log("object");
  try {
    console.log('req.body', req.body)
    const { detail, dueDate, priority, name, userIds } = req.body;

    const { role, id } = req.params;
    // console.log("Role", role)
    if (role !== "leader") {
      createError(401, "Unauthorized")
    }

    const project = await prisma.projectList.create({
      data: {
        name: name,
        detail: detail,
        dueDate: new Date(dueDate),
        priority: Number(priority),
        assignor: +id
      }
    })

    console.log('userIds', userIds)

    if (userIds.length > 0) {
      const connections = userIds.map((userId) => ({
        projectListId: project.id,
        userId: +userId
      }))

      await prisma.userOnProject.createMany({
        data: connections,
        skipDuplicates: true
      })
    }

    res.status(201).json({
      message: "Project created successfully",
      result: project
    })
  } catch (error) {
    console.log(error)
  }
}

export const removeProject = async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.params;
  if (role !== "leader") {
    createError(401, "Unauthorized")
  }
  const foundProject = await prisma.projectList.findUnique({
    where: { id: Number(id) }
  })
  if (!foundProject) {
    createError(400, "Id not found")
  }

  const rs = await prisma.projectList.delete({ where: { id: Number(id) } })
  res.json({ message: "Delete complete" })
}