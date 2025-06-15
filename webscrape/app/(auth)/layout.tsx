import React from 'react'
import SignIn from './sign-in/[[...sign-in]]/page'
import SignUp from './sign-up/[[...sign-up]]/page'
import Logo from '@/components/logo'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 '>
        <Logo/>
        {children}
    </div>
  )
}

export default Layout