import { registerUser } from './actions'
export default function Form() {
    return (
        <div>
            <form action={registerUser}>
                <input type="text" name="name" placeholder="name" className='w-[300px] h-[40px] bg-[#02020203] bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none'/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}