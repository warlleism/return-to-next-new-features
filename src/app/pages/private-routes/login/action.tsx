'use server'

import { cookies } from "next/headers"

const users = [
    { username: 'warlleimartinsdev@outlook.com', password: '123' }
]

export async function login(data: any) {

    if (users.find(user => user.username == data.username && user.password == data.password)) {
        const cookiesData = await cookies();
        cookiesData.set('token', 'tdasdasd@DED@!#%DFSAdasd@D12312');
        cookiesData.set({ name: 'user', value: data.username, httpOnly: true, path: '/' })
    }
}

export async function logout() {
    const cookiesData = await cookies()
    cookiesData.delete('token')
    cookiesData.delete('user')
}