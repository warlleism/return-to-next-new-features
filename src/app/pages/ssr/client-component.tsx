'use client'

import { Post } from "./page";

const ClientComponent = () => {
    const changeItens = () => {
        for (let i = 0; i < 101; i++) {
            if (i % 2 == 0) {
                const item = document.getElementById(`news-${i}`);
                if (item) {
                    item.style.backgroundColor = 'red';
                }
            }

        }
    }

    return (
        <button onClick={changeItens}>Change</button>
    )
}

export default ClientComponent