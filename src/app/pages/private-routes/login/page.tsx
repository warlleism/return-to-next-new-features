'use client'

import Link from "next/link";
import { login, logout } from "./action";
import { useState } from "react";

export default function Login() {

    const [form, setForm] = useState({ username: '', password: '' })

    const handleLogin = (event: any) => {
        event.preventDefault()
        login(form)
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <span>Username</span>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                </div>
                <div>
                    <span>Password</span>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </form>
            <div className="mb-10 mt-10">
                <h1>Logout</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={logout}>Logout</button>
            </div>
            <div><Link href="/pages/private-routes/dashboard">dashboard</Link></div>
            <div><Link href="/pages/private-routes/settings">settings</Link></div>
        </div>
    )
}