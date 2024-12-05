"use client"

import { useState } from "react"

export default function UserDetails() {
    const [UserDetails, setUserDetails] = useState<{ name: string }>({ name: "warllei" })

    return (
        <div>
            <p>{UserDetails.name}</p>
            <button onClick={() => setUserDetails(undefined as any)}>Alterar</button>
        </div>
    )
}