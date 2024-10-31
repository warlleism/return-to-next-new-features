"use server"

export async function registerUser(data: FormData) {
    console.log(Object.fromEntries(data))
}