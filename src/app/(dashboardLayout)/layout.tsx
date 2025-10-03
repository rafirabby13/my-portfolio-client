

import Header from '@/components/dashboard/Header'
import { DashboardSidebar } from '@/components/sidebar/Sidebar'
import { Button } from '@/components/ui/button'
import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className='flex w-full'>
            <DashboardSidebar />
            <div className='flex-1'>
                <div className=' w-full p-6 border-b-2 border-primary flex items-center justify-between'>
                    <Header />
                    <div>
                        <Button>Logout</Button>
                    </div>
                </div>
                <div className='p-4'>

                    {children}
                </div>

            </div>
        </div>
    )
}

export default DashboardLayout
