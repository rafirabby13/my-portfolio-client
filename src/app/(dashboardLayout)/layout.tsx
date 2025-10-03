

import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/dashboard/Header'
import DashboardSidebar from '@/components/sidebar/Sidebar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { authOptions } from '@/helpers/authOptions'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React, { ReactNode } from 'react'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className='flex bg-white w-full'>
            <div>
                <DashboardSidebar />
            </div>
            <div className='flex flex-col w-full'>
                {/* <div>
                    <Header />
                </div> */}
                <div className='flex-1 bg-red-900'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
