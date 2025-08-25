import React from 'react'

function Box() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* <!-- مجموع تیکت‌های دریافتی --> */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 
    p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">مجموع تیکت‌های دریافتی</h3>
                    <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-300">
                        {/* <!-- Icon --> */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z"></path>
                        </svg>
                    </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">245</div>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">کل تیکت‌های ثبت‌شده</p>
            </div>

            {/* <!-- مجموع محصولات سایت --> */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 
    p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">مجموع دوره‌های آموزشی</h3>
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300">
                        {/* <!-- Icon (Book) --> */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h4l2-2m0-12l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4l-2-2m0-12v12"></path>
                        </svg>
                    </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">120</div>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">دوره فعال در سایت</p>
            </div>


            {/* <!-- مجموع سفارشات --> */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 
    p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">مجموع سفارشات</h3>
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">
                        {/* <!-- Icon --> */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M9 3v18m6-18v18"></path>
                        </svg>
                    </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">560</div>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">کل سفارشات ثبت‌شده</p>
            </div>

            {/* <!-- مجموع کاربران --> */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 
    p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">مجموع کاربران</h3>
                    <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-300">
                        {/* <!-- Icon --> */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10-8a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">3,200</div>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">تعداد کل کاربران</p>
            </div>
        </section>
    )
}

export default Box