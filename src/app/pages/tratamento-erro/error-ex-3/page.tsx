"use client";

import { use, useEffect, useState } from "react";
import getProducts from "./services/get";


const Blog = () => {

    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const request = async () => {
            const response = await getProducts()
            if (response.error) {
                setError(response.error)
            } else {
                setData(response)
            }
        }
        request()
    }
        , [])

    if (error) {
        throw new Error(error);
    }

    return (
        <div>
            <h1>Ex 3</h1>
            {
                data?.map((item: any) => {
                    return (
                        <div key={item.id} style={{ marginBottom: '20px' }}>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Blog;
