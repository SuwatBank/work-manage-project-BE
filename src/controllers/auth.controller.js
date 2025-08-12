import prisma from "../config/prisma.config.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import createError from "../utils/create.error.util.js";
import { createUser, getUserBy } from "../services/user.service.js";
import { tr } from "@faker-js/faker";
import cookieParser from "cookie-parser";


export async function register(req, res, next) {
  try {
    const { userName, password, confirmPassword, firstName, lastName, department, email, role, phoneNo } = req.body

    if (userName) {
      const foundUser = await getUserBy("userName", userName)
      if (foundUser) {
        createError(409, `Already have this user : ${userName}`)
      }
    }
    if (email) {
      const foundEmail = await getUserBy("email", email)
      if (foundEmail) {
        createError(409, `Already have this email : ${email}`)
      }
    }

    const newUser = {
      userName: userName,
      password: await bcrypt.hash(password, 10),
      firstName: firstName,
      lastName: lastName,
      department: department,
      email: email,
      role: role,
      phoneNo: phoneNo
    }

    await createUser(newUser)

    res.json({
      message: "Register successful"
    })

  } catch (error) {
    next(error)
  }
}

export async function login(req, res, next) {
  try {
    const { userName, password } = req.body;
    console.log("Reqbody", req.body)
    const checkUser = await getUserBy("userName", userName);
    if (!checkUser) {
      createError(401, "Invalid login")
    }

    let checkPassword = await bcrypt.compare(password, checkUser.password)
    if (!checkPassword) {
      createError(401, "Invalid login")
    }

    const payload = {
      userId: checkUser.id,
      role: checkUser.role
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1d"
    })

    const { password: pw, createAt, updateAt, ...userData } = checkUser

    res.json({
      message: "Login successful",
      token: token,
      user: userData
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(`Server error ${error}`)
  }
}

export async function getMe(req, res, next) {
  res.json({ user: req.user })
}

export const getALLUsers = async (req, res, next) => {
  const result = await prisma.user.findMany({
    orderBy: { createAt: "desc" }
  })
  console.log(result)
  res.json({ users: result })
}

export const getMembers = async (req, res, next) => {
  const { department } = req.params
  const result = await prisma.user.findMany({
    where: { department: department }
  })
  res.json({ users: result })
}

export const getUserId = async (req, res, next) => {
  const { id } = req.params
  const result = await prisma.user.findUnique({
    where: { id: +id },
    omit: {
      userName: true,
      password: true

    }
  })
  res.json({ Edituser: result })

}

export const deleteUser = async (req, res, next) => {
  try {

    const { id } = req.params
    // console.log(id)
    const findUser = await prisma.user.findUnique({
      where: { id: Number(id) }
    })

    if (!findUser) {
      createError(400, "Id not found")
    }
    
    const result = await prisma.user.delete({ where: { id: Number(id) } })
    console.log(result)
    res.json({ message: "Delete this user is done" })
    
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const editUser = async (req, res, next) => {
  const { id } = req.params
  console.log(req.body)
  const { firstName, lastName, department, email, role, phoneNo } = req.body
  const findUser = await prisma.user.findUnique({ where: { id: Number(id) } })
  if (!findUser) {
    createError(400, "Cannot edit this user")
  }
  const response = await prisma.user.update({
    where: { id: Number(id) },
    data: { firstName, lastName, department, email, role, phoneNo }
  })

  res.json({ message: `Update data to user : ${response.userName} completed` })
}