'use client'

import { use } from "react";
import getProducts from "./service/get";

export default function RequestServerActions() {

    const products = use(getProducts());

    return (
        <>
            <h1>Request Server Actions</h1>
            {
                products?.map((item: any) => {
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