"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Header = () => {
  const { data: session } = useSession()
  
      console.log(session?.user)
      return (
          <div>
              <h1 className="text-4xl">Hello, {session?.user?.name}</h1>
          </div>
      )
}

export default Header
