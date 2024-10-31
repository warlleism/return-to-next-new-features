import Form from 'next/form';

export default async function Skills({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const params = await searchParams.then((item) => item)

    if (params)
        return (
            <div>
                <h1>Skills</h1>
                <Form action="/pages/pages-form-action/finaly">
                    <select name="skills" id="">
                        <option value="react">React js</option>
                        <option value="vue">Vue js</option>
                        <option value="angular">Angular js</option>
                        <option value="next">Next js</option>
                    </select>
                    <input name="name" type='text' defaultValue={params?.name} />
                    <input name="email" type='text' defaultValue={params?.email} />
                    <input name="age" type='text' defaultValue={params?.age} />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Avançar</button>
                </Form>
            </div>
        );
};

