
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
   
    const params = await searchParams.then((item) => item)

    return (
        <>
            <div>{params.query}</div>
            <div>{params.name}</div>
            <div>{params.email}</div>
        </>
    )
}
