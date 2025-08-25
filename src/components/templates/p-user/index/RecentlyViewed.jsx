import React from 'react'
import RecentlyViewedBox from '@/components/modules/p-user/recentlyViewedBox/RecentlyViewedBox'

function RecentlyViewed() {
    return (
        <section className="bg-white dark:bg-gray-800 p-5 lg:rounded-lg transition-colors duration-300">

            {/* <!-- Header with link to all courses --> */}
            <div className="flex items-center justify-between mb-6">
                {/* Uncomment the following line if you want a title */}
                <span className="font-bold text-black dark:text-white">اخیرا مشاهده شده</span>
                <a
                    href="/courses"
                    className="btn-xs btn-filled-gray btn-only-icon text-gray-700 dark:text-gray-300"
                >
                    <span
                        className="iconify i-linear:arrow-left size-3.5"
                        aria-hidden="true"
                        style={{ fontSize: '1rem' }}
                    ></span>
                </a>
            </div>

            {/* <!-- Grid of recently viewed course cards --> */}
            <div className="grid grid-cols-12 gap-5">
                {/* <!-- Each RecentlyViewedBox can be reused multiple times --> */}
                <RecentlyViewedBox />
                <RecentlyViewedBox />
                <RecentlyViewedBox />
                <RecentlyViewedBox />
                {/* <!-- Add more boxes as needed --> */}
            </div>
        </section>
    )
}

export default RecentlyViewed
