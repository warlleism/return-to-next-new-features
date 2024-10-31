"use server"

import { z } from "zod";

const registerUserSchema = z.object({
    name: z.string().min(6, { message: "O nome deve ter pelo menos 6 caracteres" }),
})

export async function registerUser(_: unknown, data: FormData) {
    const result = registerUserSchema.safeParse(Object.fromEntries(data))

    if (!result.success) {
        return result.error.flatten().fieldErrors.name?.[0]
    }

    console.log(Object.fromEntries(data))
    return "Hello World";
}