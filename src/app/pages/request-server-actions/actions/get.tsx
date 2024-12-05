"use client"
export default async function getData() {
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respose.json()
    return data
}