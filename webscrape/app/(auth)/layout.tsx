import React from 'react'
import Logo from '@/components/logo'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full mx-auto'>
        <div>
          <Logo className='mr-6 mb-2'/>
          {children}
        </div>
    </div>
  )
}

export default Layout