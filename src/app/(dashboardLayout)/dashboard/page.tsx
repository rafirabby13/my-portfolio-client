
"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard =   () => {
const { data: session } = useSession()

    console.log(session?.user)
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
