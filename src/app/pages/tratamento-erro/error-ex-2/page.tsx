"use client";

import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

const Blog = () => {
    const [data, setData] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data: Post[] = await response.json();
                setData(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        throw new Error(error);
    }

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
