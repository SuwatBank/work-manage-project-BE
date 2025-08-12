import jwt from "jsonwebtoken";
import createError from "../utils/create.error.util.js";
import { getUserBy } from "../services/user.service.js";

export default async function (req,res,next) {

  try {
    const authorization = req.headers.authorization
  if(!authorization) {
    // createError(401, "Have no authorization header")
    res.status(401).json("Token error1")
  }
  
  const token = authorization.split(" ")[1]
  
  if(!token){
    // createError(401, "Unauthorized")
    res.status(401).json("Token error2")
  }
  
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  const checkUser = await getUserBy("id", payload.userId)
  
  if(!checkUser){
    // createError(401, "Unauthorized")
    res.status(401).json("Token error3")
  }
  const {password, createAt, updateAt, ...userData} = checkUser
  req.user = userData
  next()
  } catch (error) {
    console.log(error);
    res.status(401).json("Token error4")
  }
  
}