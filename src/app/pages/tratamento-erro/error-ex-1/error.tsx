'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    console.log('teste', error)
    return (
        <div>
            <h3>User Error</h3>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}