
import React from 'react'
import Tickets from '@/components/templates/p-user/tickets/Tickets'

function page() {
    return (
        <section className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
            <Tickets />
        </section>
    )
}

export default page