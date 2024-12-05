import ClientComponent from "./client-component"

export interface Post {
    id: number
    title: string
    body: string
}
const News = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return (
        <>
            <ClientComponent />
            {data.map((e: Post) => {
                return (
                    <div key={e.id} id={`news-${e.id}`}>
                        <div>{e.id}</div>
                        <div>{e.title}</div>
                        <div>{e.body}</div>
                    </div>

                )
            })}
        </>
    )
}

export default News;