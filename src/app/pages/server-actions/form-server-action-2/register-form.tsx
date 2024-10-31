"use client";

import { useActionState } from "react";
import { registerUser } from "../form-server-action-2/actions";

export default function RegisterForm() {

    const [result, handleRegisterUser, isPending] = useActionState(registerUser, '')

    return (
        <form action={handleRegisterUser}>
            <input type="text" name="name" placeholder="name" className='w-[300px] h-[40px] bg-[#02020203] bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none' />
            <button type="submit">{isPending ? 'Carregando...' : 'Enviar'}</button>

            {result && <p>{result}</p>}
        </form>
    )
}