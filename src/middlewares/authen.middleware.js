import jwt from "jsonwebtoken";
import createError from "../utils/create.error.util.js";
import { getUserBy } from "../services/user.service.js";

export default async function (req,res,next) {
  const authorization = req.headers.authorization
  if(!authorization) {
    createError(401, "Have no authorization header")
  }

  const token = authorization.split(" ")[1]

  if(!token){
    createError(401, "Unauthorized")
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  const checkUser = await getUserBy("id", payload.id)

  if(!checkUser){
    createError(401, "Unauthorized")
  }
  const {password, createAt, updateAt, ...userData} = checkUser
  req.user = userData
  next()
}