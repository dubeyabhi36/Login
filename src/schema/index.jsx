import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().max(25).email().required(),
    password: yup.string().min(6).required("Please enter your password")
})