"use client"

import { useCallback, useEffect, useState } from "react";
import getData from "./actions/get";

export default function RequestServerActions() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const fetch = useCallback(async () => {
        try {
            const response = await getData();
            setData(response);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('finally');
        }
    }, [count])

    useEffect(() => {
        fetch();
    }, [])

    return (
        <>
            <h1>Request Server Actions</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Get Data</button>
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
        </>
    )
}