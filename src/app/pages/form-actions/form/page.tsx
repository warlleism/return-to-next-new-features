import Form from 'next/form';

const FormComponent = () => {
    return (
        <div className='w-screen'>
            <Form action="/pages/search" className='flex flex-col gap-4 mx-auto w-[50%]'>
                <input name="query" className='w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none' />
                <input name="name" className='w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none' />
                <input name="email" className='w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none' />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
            </Form>
        </div>
    )
}

export default FormComponent;