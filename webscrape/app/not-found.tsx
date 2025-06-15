import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-screen p-4 justify-center'>
       <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
            404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
            Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md text-center mx-auto">
            Don&apos;t worry, even the best data gets lost in the internet sometimes.
            Try using a different URL or going back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={"/"} className="px-4 py-2 flex items-center m-auto w-fit justify-center bg-primary text-white rounded-md hover:bg-primary/80 transition-colors">
                <ArrowLeft className='w-4 h-4 mr-2'/>Go to Homepage
            </Link>
        </div>
        </div>
            <footer className='text-sm text-muted-foreground mt-12 text-center'>
                If you believe this is an error please email me at trxcycsgo@gmail.com
            </footer>     
    </div>
  )
}

export default NotFound