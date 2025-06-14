import BreadcrumbHeader from '@/components/breadcrumb-header'
import DesktopSidebar from '@/components/desktop-sidebar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex h-screen'>
        <DesktopSidebar/>
        <div className='flex flex-col flex-1 min-h-screen'>
            <header className='flex items-center justify-between
            px-66 py-4 h-[50px] container'>
                <BreadcrumbHeader/>
            </header>
            <Separator/>
            <div className='overflow-auto'>
                <div className='flex-1 container py-4 text-accent-foreground'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout