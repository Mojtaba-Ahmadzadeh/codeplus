import React from 'react'

function Roadmaps() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 pt-25 md:pt-40">
            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13">
                <div className="flex flex-col items-start gap-y-2.5">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        نقشــه راه ها
                    </h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">
                        نقشه های راه برای شروع اصولی یادگیری
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">

                <div className="py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <a href="https://sabzlearn.ir/course-cat/front-end/" className="flex flex-col justify-center items-center h-full text-white" title="فرانت اند">
                        <svg className="w-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 44.8125H15M33.1875 14.7188L36.8641 18.3866C37.962 19.4812 37.962 21.2558 36.8641 22.3504L33.1875 25.9688M15 14.7188L11.3234 18.3866C10.2255 19.4812 10.2255 21.2558 11.3234 22.3504L15 25.9688M21.9375 27.8438L26.25 12.8438M46.125 12.5625V27.9375C46.125 33.1151 41.9276 37.3125 36.75 37.3125H11.248C6.07144 37.3125 1.875 33.1161 1.875 27.9395V12.5625C1.875 7.38487 6.07237 3.1875 11.25 3.1875H36.75C41.9276 3.1875 46.125 7.38487 46.125 12.5625Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <div className="text-center mt-3 sm:mt-4">
                            <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">فرانت اند</h3>
                            <span className="inline-block font-danaMedium text-sm sm:text-base">30 دوره</span>
                        </div>
                    </a>
                </div>

                <div className="py-5 bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <a href="#" className="flex flex-col justify-center items-center h-full text-white" title="بک اند">
                        <svg className="w-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="24" cy="24" r="20"></circle>
                            <path d="M16 16h16v16H16z"></path>
                        </svg>
                        <div className="text-center mt-3 sm:mt-4">
                            <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">بک اند</h3>
                            <span className="inline-block font-danaMedium text-sm sm:text-base">25 دوره</span>
                        </div>
                    </a>
                </div>

                <div className="py-5 bg-gradient-to-r from-[#FF6A00] to-[#EE0979] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <a href="#" className="flex flex-col justify-center items-center h-full text-white" title="دیتابیس">
                        <svg className="w-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="24" cy="16" rx="18" ry="6"></ellipse>
                            <path d="M6 16v16c0 3.314 8.059 6 18 6s18-2.686 18-6V16"></path>
                        </svg>
                        <div className="text-center mt-3 sm:mt-4">
                            <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">دیتابیس</h3>
                            <span className="inline-block font-danaMedium text-sm sm:text-base">12 دوره</span>
                        </div>
                    </a>
                </div>

                <div className="py-5 bg-gradient-to-r from-[#12c2e9] to-[#c471ed] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <a href="#" className="flex flex-col justify-center items-center h-full text-white" title="دیگر دوره‌ها">
                        <svg className="w-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 12h24v24H12z"></path>
                            <path d="M24 12v24"></path>
                            <path d="M12 24h24"></path>
                        </svg>
                        <div className="text-center mt-3 sm:mt-4">
                            <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">دیگر دوره‌ها</h3>
                            <span className="inline-block font-danaMedium text-sm sm:text-base">10 دوره</span>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Roadmaps