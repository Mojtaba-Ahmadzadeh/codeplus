import React from 'react'

function Questions() {
    return (
        <div id="below-header">
            <section className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-lg shadow-md">
                {/* <!-- Header --> */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">سوالات من</h2>
                    <button className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition">
                        <span className="iconify" data-icon="linear:sort" style={{ fontSize: '1rem' }}></span>
                        مرتب‌سازی
                    </button>
                </div>

                {/* <!-- Question List --> */}
                <div className="space-y-4">
                    {/* <!-- Question Item --> */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-gray-200 dark:border-zinc-700 rounded-md hover:border-brand transition">
                        <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand line-clamp-2">
                            سلام خسته نباشید من میخوام توی پروژه‌ام ...
                        </a>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <span className="iconify" data-icon="linear:book" style={{ fontSize: '1rem' }}></span>
                                <a href="#" className="hover:text-brand transition">آموزش Next.js</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="iconify" data-icon="linear:clock" style={{ fontSize: '1rem' }}></span>
                                1404/02/28
                            </div>
                            <div className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md">بسته شده</div>
                        </div>
                    </div>

                    {/* <!-- Question Item (تکراری با تغییر محتوا) --> */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-gray-200 dark:border-zinc-700 rounded-md hover:border-brand transition">
                        <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand line-clamp-2">
                            من هنگام لاگین شدن خطای 401 می‌گیرم، چطور حلش کنم؟
                        </a>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <span className="iconify" data-icon="linear:book" style={{ fontSize: '1rem' }}></span>
                                <a href="#" className="hover:text-brand transition">دوره وب‌سوکت</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="iconify" data-icon="linear:clock" style={{ fontSize: '1rem' }}></span>
                                1404/01/10
                            </div>
                            <div className="bg-red-100 text-red-600 px-2 py-0.5 rounded-md">باز</div>
                        </div>
                    </div>
                </div>

                {/* <!-- Load More Button --> */}
                <div className="mt-8 flex justify-center">
                    <button className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-md transition-all duration-300
           bg-gradient-to-r from-emerald-400 to-green-600 text-white shadow-lg
           hover:brightness-110 hover:scale-105
           dark:from-emerald-500 dark:to-green-700 dark:shadow-emerald-800/40">
                        مشاهده بیشتر
                        <span className="iconify" data-icon="linear:arrow-down" style={{ fontSize: '1rem' }}></span>
                    </button>
                </div>


            </section>

        </div>
    )
}

export default Questions