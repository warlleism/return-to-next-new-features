"use client";

export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <>
            <h1>Global Error</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </>
    );
}
