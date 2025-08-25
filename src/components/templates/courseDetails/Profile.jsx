import React from 'react'

function Profile() {
    return (
        <aside className="col-span-12 lg:col-span-4 space-y-8">
            {/* ================= Students, Rating & Progress ================= */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex gap-5">
                    {/* Student Count Box */}
                    <div className="flex items-center gap-4 flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-5 py-3 text-center md:text-right">
                        <i className="fas fa-users w-12 h-12 text-green-500 text-[32px] flex-shrink-0 relative top-[2px]"></i>
                        <div>
                            <span className="block font-bold text-lg">219</span>
                            <span className="block text-gray-700 dark:text-gray-400 text-sm">دانشجو</span>
                        </div>
                    </div>

                    {/* Rating Box */}
                    <div className="flex items-center gap-4 flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-5 py-3 text-center md:text-right">
                        <i className="fas fa-star w-12 h-12 text-amber-500 text-[32px] flex-shrink-0 relative top-[2px]"></i>
                        <div>
                            <span className="block font-bold text-lg">5.0</span>
                            <span className="block text-gray-700 dark:text-gray-400 text-sm">رضایت</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                    <div className="flex justify-between items-center font-danaDemiBold text-base mb-3">
                        <span>درصد تکمیل دوره</span>
                        <span>15%</span>
                    </div>
                    <progress
                        className="w-full h-3 rounded-lg overflow-hidden"
                        value="15"
                        max="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="15"
                        role="progressbar"
                    ></progress>
                </div>
            </section>

            {/* ================= Course Teacher ================= */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
                {/* Teacher Image */}
                <img
                    className="mx-auto mb-5 w-24 h-24 rounded-full object-cover"
                    src="https://secure.gravatar.com/avatar/597980f98a372b658b24996aa34ff1d5?s=96&d=mm&r=g"
                    alt="مهرشاد براتی"
                    width="90"
                    height="90"
                    loading="lazy"
                />

                {/* Teacher Name */}
                <h3 className="font-danaDemiBold text-xl mb-2">
                    مهرشاد براتی | مدرس دوره
                </h3>

                {/* Teacher Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 max-w-md mx-auto">
                    برنامه نویس فول استک وب، موبایل، دسکتاپ، کارشناس ارشد مهندسی کامپیوتر
                    نرم افزار
                </p>

                {/* Profile Button */}
                <a
                    href="https://sabzlearn.ir/teacher/mehrshad_b/"
                    className="inline-block px-6 py-2.5 border-2 border-green-600 text-green-600 font-semibold rounded-lg transition duration-300 hover:bg-green-600 hover:text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 active:scale-95 select-none"
                >
                    مشاهده پروفایل من
                </a>
            </section>

            {/* ================= Course Short Link ================= */}
            <section className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
                {/* Short Link Title */}
                <h4 className="font-danaDemiBold text-lg mb-5">لینک کوتاه آموزش</h4>

                {/* Short Link Box */}
                <div className="flex items-center justify-between gap-4 p-5 bg-sky-50 dark:bg-sky-500/10 border border-dashed border-sky-500 rounded-xl">
                    {/* Copy Button */}
                    <button
                        aria-label="کپی لینک کوتاه"
                        type="button"
                        className="text-sky-500 hover:text-sky-600 transition"
                    >
                        <svg className="w-8 h-8" aria-hidden="true">
                            <use href="#clipboard-document"></use>
                        </svg>
                    </button>

                    {/* Short Link Text */}
                    <span className="font-danaMedium text-lg w-64 text-ltr text-left truncate select-text">
                        sabzlearn.ir/?p=6173
                    </span>
                </div>
            </section>
        </aside>
    )
}

export default Profile