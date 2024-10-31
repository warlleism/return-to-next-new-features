import Form from 'next/form';

const Contacts = () => {
    return (
        <div>
            <h1>Contatos</h1>
            <Form action="/pages/pages-form-action/skills">
                <input name="name" type='text' className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
                <input name="email" type='text' className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
                <input name="age" type='text' className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Avançar</button>
            </Form>
        </div>
    )
}

export default Contacts;