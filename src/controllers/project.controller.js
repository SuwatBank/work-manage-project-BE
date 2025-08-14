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

  const data = sortProject.map(item => item.ProjectList)

  console.log('sortProject', sortProject)
  res.json({
    result: data
  })
}

export const projectNearDue = async (req, res, next) => {
  const { id } = req.params;
  const sortProject = await prisma.userOnProject.findMany({
    where: {
      userId: +id,
    },
    include: {
      ProjectList: true,
    },
    orderBy: {
      ProjectList: {
        dueDate: 'asc'
      },
    },
    take: 3,
  });

  const data = sortProject.map(item => item.ProjectList)
  res.json({
    result: data
  })
}
export const newComingProject = async (req, res, next) => {
  const { id } = req.params;
  const sortProject = await prisma.userOnProject.findMany({
    where: {
      userId: +id,
    },
    include: {
      ProjectList: true,
    },
    orderBy: {
      ProjectList: {
        createAt: 'desc'
      },
    },
    take: 3,
  });

  const data = sortProject.map(item => item.ProjectList)
  res.json({
    result: data
  })
}

export const assignProject = async (req, res, next) => {
  const { id } = req.params
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
  try {
    console.log('req.body', req.body)
    const { detail, dueDate, priority, name, userIds } = req.body;
    const { role, id } = req.params;
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

    if (userIds.length > 0) {
      console.log("UserID", userIds)
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
  try {
    const { id } = req.params;
    console.log("iddddd",id);
    const { role } = req.params;
    if (role !== "leader") {
      createError(401, "Unauthorized")
    }
    const foundProject = await prisma.projectList.findUnique({
      where: { id: +id }
    })
    if (!foundProject) {
      createError(400, "Id not found")
    }

    const result = await prisma.projectList.delete({ where: { id: +id } })
    res.status(201).json({
      message: "Delete complete",
      result: result
    })
  } catch (error) {
    console.log(error)
  }

}

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { projectStatus } = req.body;
    const findProject = await prisma.projectList.findUnique({
      where: { id: +id }
    })

    if (!findProject) {
      createError(400, "Cannot update status")
    }
    const response = await prisma.projectList.update({
      where: { id: +id },
      data: { projectStatus }
    })

    res.json({
      message: `Task is had been ${projectStatus}`,
      response: response
    })

  } catch (error) {
    console.log(error);
  }
}