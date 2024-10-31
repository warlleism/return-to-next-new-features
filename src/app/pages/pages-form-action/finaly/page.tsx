export default async function Finaly({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const params = await searchParams.then((item) => item)
    console.log(params)



    return (
        <div>
            <h1>Finaly</h1>
            <div>{params.skills}</div>
            <div>{params.name}</div>
            <div>{params.email}</div>
            <div>{params.age}</div>
        </div>
    );
};
