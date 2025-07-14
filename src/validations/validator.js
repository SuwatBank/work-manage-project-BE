import {object, string, number, date, ref, Schema} from "yup";
import createError from "../utils/create.error.util.js";

export const registerSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  role: string().required(),
  department: string().required(),
  email: string().email(),
  password: string().min(4).required(),
  confirmPassword: string().oneOf([ref("password")], `Confirm password must be same with password`),
  phoneNo: string().min(10),
  userName: string().required()
})

export const loginSchema = object({
  userName: string().required(),
  password: string().min(6, "Password should have letter at least 6 character")
})

export const validate = (schema, options = {}) => {
  return async function (req, res, next) {
    try {
      const cleanBody = await schema.validate(req.body, {abortEarly : false, ...options})
      req.body = cleanBody
      next()
    } catch (error) {
      let errorMessage = error.errors.join(",")
      createError(400, errorMessage)
    }
  }
}