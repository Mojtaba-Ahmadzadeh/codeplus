
import React from 'react'
import Users from '@/components/templates/p-admin/users/Users'
import { ThemeProvider } from '@/context/ThemeContext'

function page() {
    return (
        <ThemeProvider>
            <div className='flex min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white'>
                <div className='flex-1 w-full pr-0'>
                    <Users />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default page