import Sidebar from '@/components/modules/p-user/sidebar/Sidebar'
import Topbar from '@/components/modules/p-user/topbar/Topbar'
import TransactionCard from '@/components/modules/p-user/transactionCard/TransactionCard'
import React from 'react'

function Wallet() {
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
                        <div className="flex flex-col lg:flex-row gap-x-8">
                            {/* <!-- کارت موجودی کیف پول --> */}
                            <div className="lg:w-60 xl:w-80 flex items-center shrink-0 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-none">
                                {/* <!-- آیکون کیف پول --> */}
                                <div className="size-12 xs:size-15 flex items-center justify-center bg-green-600 text-white rounded-md shrink-0 shadow-md">
                                    <i className="fas fa-wallet text-base" aria-hidden="true"></i>
                                </div>

                                {/* <!-- متن کیف پول --> */}
                                <div className="flex flex-col gap-1 mr-4 text-label xs:text-caption">
                                    <span className="text-secondary dark:text-gray-300 font-medium">موجودی کیف پول</span>
                                    <p className="text-gray-700 dark:text-gray-200 font-semibold">۰ تومان</p>
                                </div>
                            </div>

                            {/* <!-- کارت اشتراک پرو --> */}
                            <div className="w-full flex items-end justify-between flex-wrap gap-y-4 pt-1 pb-5 px-5 xs:p-5 bg-white dark:bg-gray-800 lg:rounded-lg dark:shadow-md">
                                <div className="flex items-center gap-4">
                                    {/* <!-- آیکون ستاره --> */}
                                    <div className="size-12 xs:size-15 flex items-center justify-center rounded-md shrink-0 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700">
                                        <i className="fas fa-star text-base" aria-hidden="true"></i>
                                    </div>

                                    {/* <!-- متن اشتراک --> */}
                                    <div className="flex flex-col gap-1 text-label xs:text-caption">
                                        <span className="text-secondary dark:text-gray-300 font-medium">اشتراک سبزلرن پرو</span>
                                        <p className="text-gray-600 dark:text-gray-400">این سرویس به‌زودی راه‌اندازی میشه ⏳</p>
                                    </div>
                                </div>

                                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-l from-green-500 to-green-700 rounded-lg shadow-md mr-auto cursor-not-allowed opacity-70 transition-all duration-300 hover:scale-105">
                                    بزودی
                                    <i className="fas fa-arrow-left text-sm" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 mt-6 overflow-x-auto">
                            <h3 className="text-base font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fas fa-wallet text-green-600 dark:text-green-400"></i>
                                لیست تراکنش‌ها
                            </h3>

                            <table className="min-w-full text-sm text-right border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-gray-500 dark:text-gray-400">
                                        <th className="px-2 py-2 md:px-3 md:py-2">شناسه</th>
                                        <th className="px-2 py-2 md:px-3 md:py-2">شرح تراکنش</th>
                                        <th className="hidden sm:table-cell px-2 py-2 md:px-3 md:py-2">تاریخ</th>
                                        <th className="px-2 py-2 md:px-3 md:py-2">مبلغ</th>
                                        <th className="hidden md:table-cell px-2 py-2 md:px-3 md:py-2">وضعیت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                </tbody>
                            </table>

                            {/* <!-- دکمه مشاهده همه --> */}
                            <div className="pt-5 text-center">
                                <button className="btn btn-outline-green text-sm px-5 py-2 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition">
                                    مشاهده همه تراکنش‌ها
                                    <i className="fas fa-angle-left mr-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Wallet