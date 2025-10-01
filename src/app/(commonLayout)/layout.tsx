import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen space-y-10">
            <Navbar />
            <div className="flex-1 container mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout
