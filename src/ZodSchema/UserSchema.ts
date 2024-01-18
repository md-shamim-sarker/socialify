import { z } from "zod";

export const SignUpSchema = z.object({
    username: z.string()
        .min(3, { message: "Username must be at least 3 charecters." }),
    email: z.string()
        .email()
        .refine(value => !!value, { message: "Email is mandatory & should be valid." }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(10, { message: "Password must not be more than 10 characters." })
        .refine(value => !!value, { message: "Password is Mandatory." }),
    confirmpassword: z.string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(10, { message: "Password must not be more than 10 characters." })
        .refine(value => !!value, { message: "Password is Mandatory." })
}).refine(data => data.password === data.confirmpassword, {
    message: "Password did not match!",
    path: ["confirmpassword"]
})