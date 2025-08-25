import React from 'react'

function UserStates() {
    return (
        <section className="bg-white dark:bg-gray-800 flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg transition-colors duration-300">

            {/* <!-- Courses Card --> */}
            <div className="w-28 sm:w-32 flex items-center gap-x-3 sm:gap-x-4">
                <img
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    src="../images/courses-empty.png"
                    alt="Courses"
                />
                <div className="flex flex-col gap-y-0.5 text-label sm:text-caption text-black dark:text-white">
                    <span className="font-bold text-sm sm:text-base">42 دوره</span>
                    <span className="font-regular text-secondary dark:text-gray-400 text-xs sm:text-sm">
                        دوره ها من
                    </span>
                </div>
            </div>

            {/* <!-- Questions Card --> */}
            <div className="w-28 sm:w-32 flex items-center gap-x-3 sm:gap-x-4">
                <img
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    src="../images/questions-empty.png"
                    alt="Questions"
                />
                <div className="text-label sm:text-caption text-black dark:text-white">
                    <span className="font-bold text-sm sm:text-base">35 پرسش</span>
                    <span className="font-regular text-secondary dark:text-gray-400 text-xs sm:text-sm">
                        پرسش پاسخ
                    </span>
                </div>
            </div>

            {/* <!-- Tickets Card --> */}
            <div className="w-28 sm:w-32 flex items-center gap-x-3 sm:gap-x-4">
                <img
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    src="../images/tickets-empty.png"
                    alt="Tickets"
                />
                <div className="flex flex-col gap-y-0.5 text-label sm:text-caption text-black dark:text-white">
                    <span className="font-bold text-sm sm:text-base">19 تیکت</span>
                    <span className="font-regular text-secondary dark:text-gray-400 text-xs sm:text-sm">
                        تیکت ها
                    </span>
                </div>
            </div>

            {/* <!-- Wallet Card --> */}
            <div className="w-28 sm:w-32 flex items-center gap-x-3 sm:gap-x-4">
                <img
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    src="../images/transactions-empty.png"
                    alt="Wallet"
                />
                <div className="flex flex-col gap-y-0.5 text-label sm:text-caption text-black dark:text-white">
                    <span className="font-bold text-sm sm:text-base">
                        0 <span className="text-label font-regular mr-0.5">تومان</span>
                    </span>
                    <span className="font-regular text-secondary dark:text-gray-400 text-xs sm:text-sm">
                        کیف پول
                    </span>
                </div>
            </div>

        </section>
    )
}

export default UserStates
