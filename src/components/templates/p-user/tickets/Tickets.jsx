import Sidebar from '@/components/modules/p-user/sidebar/Sidebar'
import TicketCard from '@/components/modules/p-user/ticketCard/TicketCard'
import Topbar from '@/components/modules/p-user/topbar/Topbar'
import React from 'react'

function Tickets() {
    return (
        <>

            {/* <!-- Overlay for mobile screens --> */}
            <div className="invisible opacity-0 fixed inset-0 bg-black/20 md:hidden z-40 transition-all duration-300"></div>

            {/* <!-- Sidebar component --> */}
            <Sidebar />

            {/* <!-- Main content area --> */}
            <main className="flex-1 text-black dark:text-white transition-colors duration-300">
                <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">

                    {/* <!-- Topbar / Header component --> */}
                    <Topbar />
                    <div id="below-header">
                        <section className="bg-white p-5 sm:p-7 lg:rounded-lg h-full lg:dark:bg-gradient-to-r lg:dark:from-gray-800 lg:dark:to-gray-900">
                            <div>

                                {/* <!-- Header: Tickets section title and actions --> */}
                                <div className="flex items-center justify-between flex-wrap gap-y-5 mb-8">

                                    {/* <!-- Section title and "New Ticket" button for desktop --> */}
                                    <div className="flex items-center max-xs:w-full max-xs:flex-wrap gap-4">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">تیکت‌های من</span>

                                        <a
                                            href="/tickets/create"
                                            className="flex items-center gap-2 px-3 py-1 border border-green-600 rounded-md text-green-600 hover:bg-green-600 hover:text-white transition-colors max-xs:hidden"
                                            aria-label="Create new ticket"
                                        >
                                            <i className="fas fa-plus-circle text-lg" aria-hidden="true"></i>
                                            <span className="font-semibold">ایجاد تیکت جدید</span>
                                        </a>
                                    </div>

                                    {/* <!-- Action buttons: sort & mobile "New Ticket" --> */}
                                    <div className="flex gap-4 max-xs:w-full">
                                        {/* Sort button */}
                                        <button
                                            type="button"
                                            aria-label="Sort tickets"
                                            className="btn-sm btn-filled-gray max-xs:w-full xs:btn-only-icon flex items-center gap-1 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            <i className="fas fa-sort" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                                            <span className="sr-only">مرتب سازی</span>
                                        </button>

                                        {/* New Ticket button for mobile */}
                                        <a
                                            href="/tickets/create"
                                            className="hidden max-xs:inline-flex btn-sm btn-filled-brand bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-2"
                                            aria-label="Create new ticket"
                                        >
                                            <i className="fas fa-plus-circle text-lg" aria-hidden="true"></i>
                                            ایجاد تیکت جدید
                                        </a>
                                    </div>
                                </div>

                                {/* <!-- Tickets list --> */}
                                <div className="flex flex-col gap-y-5">

                                    <TicketCard />
                                    <TicketCard />
                                    <TicketCard />

                                    {/* <!-- Repeat this ticket block for each ticket --> */}

                                </div>
                            </div>
                        </section>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Tickets