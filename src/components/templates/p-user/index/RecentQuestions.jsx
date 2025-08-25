import React from 'react'

function RecentQuestions() {
    return (
        <div className="col-span-12 xl:col-span-6">

            {/* <!-- Header: Recent Questions title and link --> */}
            <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-black dark:text-white">پرسش های اخیر</span>
                <a
                    href="/questions"
                    className="btn-xs btn-filled-gray btn-only-icon text-gray-700 dark:text-gray-300"
                >
                    <span
                        className="iconify i-linear:arrow-left size-3.5"
                        aria-hidden="true"
                    ></span>
                </a>
            </div>

            {/* <!-- Empty state: no questions available --> */}
            <div className="flex items-center justify-center flex-col py-8 gap-y-5 bg-white dark:bg-gray-700 rounded-lg">
                <img
                    src="../images/questions-empty.png"
                    className="w-12 sm:w-14 md:w-16"
                    alt="No questions"
                />
                <div className="text-center flex flex-col gap-y-1 text-black dark:text-white">
                    <span className="text-label font-bold">پرسشی وجود ندارد!</span>
                    <span className="text-secondary dark:text-gray-400 text-caption">
                        شما هنوز سوالی مطرح نکردید.
                    </span>
                </div>
                <a href="/questions" className="btn btn-primary px-5 py-2 text-sm">
                    ثبت پرسش
                </a>
            </div>
        </div>
    )
}

export default RecentQuestions
