import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast 2 characters long!")
    .max(15,"Username must be no more than 15 characters!")
    .regex(/^[a-zA-Z0-9_]+$/,"Only _ is allowed as special character! Use alphanumerics");

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email("Invalid email address!"),
    password : z.string().min(6,{message : "Password should be at least 6 characters long."}),
})