
import React from 'react'
import AdminPanel from '@/components/templates/p-admin/index/AdminPanel'
import { ThemeProvider } from '@/context/ThemeContext'

function page() {
  return (
    <ThemeProvider>
      <div className='flex min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white'>
        <div className='flex-1 w-full pr-0'>
          <AdminPanel />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default page