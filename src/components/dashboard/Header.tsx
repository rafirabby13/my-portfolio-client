"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from '../app-sidebar'
import { Separator } from '../ui/separator'

const Header = () => {
  const { data: session } = useSession()

  //   console.log(session?.user)
  return (
    <div>
      <SidebarProvider>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            {/* <SidebarTrigger className="-ml-1" /> */}
            <h1 className="text-4xl">Hello, {session?.user?.name}</h1>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

          </header>
       
        </SidebarInset>
      </SidebarProvider>
      
    </div>
  )
}

export default Header
