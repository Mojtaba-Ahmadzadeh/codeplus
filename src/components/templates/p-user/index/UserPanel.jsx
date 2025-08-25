import React from 'react'

// Modules
import Sidebar from '@/components/modules/p-user/sidebar/Sidebar'
import Topbar from '@/components/modules/p-user/topbar/Topbar'
import UserStates from './UserStates'
import RecentlyViewed from './RecentlyViewed'
import RecentTickets from './RecentTickets'
import RecentQuestions from './RecentQuestions'

function Index() {
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

                    {/* <!-- Anchor for scroll or additional content below header --> */}
                    <div id="below-header"></div>

                    {/* <!-- User statistics cards --> */}
                    <div className="lg:pb-8">
                        <UserStates />
                    </div>

                    {/* <!-- Main dashboard section --> */}
                    <section className="bg-white dark:bg-gray-800 p-5 sm:p-7 shadow-md lg:rounded-lg h-full transition-colors duration-300">

                        <div className="-mx-5 -mb-6 lg:-m-7 bg-gray-100 dark:bg-gray-800 rounded-lg">

                            {/* <!-- Recently viewed items section --> */}
                            <div className="lg:pb-7">
                                <RecentlyViewed />
                            </div>

                            {/* <!-- Recent tickets and recent questions section --> */}
                            <div className="grid grid-cols-12 gap-5 px-5 sm:px-7 pt-6 pb-7 border-t border-gray-200 dark:border-gray-600">

                                {/* <!-- Recent tickets card --> */}
                                <RecentTickets />

                                {/* <!-- Recent questions card --> */}
                                <RecentQuestions />
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Index
