
import Index from '@/components/templates/p-user/index/UserPanel'
import { ThemeProvider } from '@/context/ThemeContext'
import React from 'react'

function page() {
  return (
    <>
      <ThemeProvider>
        <section className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
          <Index />
        </section>
      </ThemeProvider>
    </>
  )
}

export default page