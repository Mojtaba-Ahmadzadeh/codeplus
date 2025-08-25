import React from 'react'
import BreadCrumb from '../p-admin/index/BreadCrumb'
import CourseStatus from './CourseStatus'
import CommentForm from './CommentForm'
import Profile from './Profile'
import CourseDescription from './CourseDescription'


function CourseDetails() {
    return (
        <main className="overflow-x-hidden mt-8 sm:mt-10">
            <div className="w-full py-3 max-w-7xl mx-auto px-4 md:px-0">
                <BreadCrumb />
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-10 rounded-xl max-w-7xl px-4 md:px-0 mx-auto p-4 lg:p-0 bg-white dark:bg-darker lg:bg-transparent">
                {/* <!-- Course Info --> */}
                <div className="flex flex-col justify-between order-2 lg:order-1">
                    {/* <!-- Title + Description --> */}
                    <div>
                        <h1 className="font-kalamehSemiBold text-[1.375rem] leading-8 sm:text-[1.625rem] sm:leading-10 mb-4">
                            آموزش ساخت ربات تلگرام با پایتون
                        </h1>
                        <p className="sm:text-lg text-gray-700 dark:text-gray-300 line-clamp-4 sm:line-clamp-3">
                            آیا تا به حال به این فکر کرده‌اید که یک دستیار ربات تلگرامی مخصوص خودتان داشته باشید که کارها را
                            خودکار انجام دهد و در وقتتان صرفه‌جویی کند؟ از پاسخگویی به پیام‌ها گرفته تا مدیریت گروه‌ها و
                            اجرای دستورات پیچیده، ربات‌های تلگرامی یک ابزار قدرتمند در دنیای دیجیتال هستند […]
                        </p>
                    </div>

                    {/* <!-- Price + Button --> */}
                    <div className="space-y-4 lg:space-y-8 mt-4 lg:mt-6">
                        <div className="flex flex-wrap-reverse items-center justify-center lg:justify-between gap-4">
                            {/* <!-- Add to Cart Button --> */}
                            <button id="register-in-course" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-emerald-500 via-lime-500 to-green-500 
         hover:from-green-500 hover:via-emerald-500 hover:to-lime-600 
         transition-all duration-500 ease-in-out 
         shadow-md hover:shadow-xl focus:outline-none 
         focus:ring-4 focus:ring-green-300 dark:focus:ring-green-600">
                                <i className="fas fa-graduation-cap text-lg animate-pulse duration-1000"></i>
                                افزودن به سبد خرید
                            </button>

                            {/* <!-- Price --> */}
                            <div className="flex items-end gap-2 text-gray-800 dark:text-white">
                                <span className="font-danaBold text-2xl">۱,۶۰۰,۰۰۰</span>
                                <span className="font-danaMedium text-lg">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Course Video Preview --> */}
                <div className="order-1 w-full xl:h-[360px] rounded-xl overflow-hidden">
                    <video id="plyr_1" className="w-full h-full rounded-xl" controls="" poster="https://sabzlearn.ir/wp-content/uploads/2025/07/65-2.webp">
                        <source src="https://tech.sabzlearn.ir/uploads/mehrshad_b/telegram-bot-python/v.mp4?h=MTPmn_JXDP-JKF0g6jdTCA&amp;t=1754284004" type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20 max-w-7xl mx-auto px-4 md:px-0">
                <div className="col-span-12 lg:col-span-8 ">
                    <CourseStatus />
                    <CourseDescription/>
                    <div className="bg-white dark:bg-gray-800 rounded-xl mt-8 pt-1 shadow-md dark:shadow-lg transition-colors duration-300 px-4 md:px-6 pb-6">
                        {/* <!-- عنوان سرفصل --> */}
                        <div className="flex items-center justify-start gap-x-4 mb-7 mt-8 relative">
                            <span className="absolute -right-6 sm:-left-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-l-sm"></span>
                            <i className="fas fa-graduation-cap text-sky-500 text-[30px] hidden md:inline-block"></i>
                            <div id="lessons" className="font-bold text-2xl md:text-2xl text-gray-900 dark:text-white select-none">
                                سرفصل‌ها
                            </div>
                        </div>

                        {/* <!-- سرفصل‌ها --> */}
                        <div className="space-y-6 md:space-y-7">
                            {/* <!-- هر سرفصل --> */}
                            <div className="topic border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="topic__head flex justify-between items-center px-5 py-4 bg-gray-100 dark:bg-gray-700 cursor-pointer group">
                                    <span className="topic__title font-danaDemiBold text-lg lg:text-xl text-gray-900 dark:text-white line-clamp-3 transition-colors group-hover:text-sky-500">
                                        آشنایی با مفاهیم اولیه
                                    </span>
                                    <div className="flex items-center gap-x-3">
                                        <div className="topic__time direction-ltr hidden lg:flex items-center gap-x-2 font-nunito text-sm text-gray-600 dark:text-gray-300 transition-colors group-hover:text-sky-500">
                                            <span>6 lesson</span>
                                            <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
                                            <span>25m</span>
                                        </div>
                                        <svg className="w-6 h-6 text-gray-400 group-hover:text-sky-500 transition-colors duration-300">
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </div>
                                </div>

                                <div className="topic__body bg-gray-50 dark:bg-gray-800">
                                    {/* <!-- درس --> */}
                                    <div className="flex items-center justify-between gap-x-6 flex-wrap lg:flex-nowrap px-6 py-5 border-t border-gray-200 dark:border-gray-700 group hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300">
                                        <div className="flex items-center gap-x-4 flex-grow">
                                            <div className="flex justify-center items-center w-9 h-7 text-sm font-danaDemiBold bg-gray-200 dark:bg-white/10 rounded-md group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 select-none">
                                                1
                                            </div>
                                            <a href="#" className="text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                                تعاریف اولیه
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                            <span className="text-sm md:text-base select-none">05:23</span>
                                            <svg className="w-7 h-7 text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                                <use href="#play-circle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <!-- بقیه درس‌ها مشابه همین ساختار تکرار می‌شن --> */}
                                </div>
                            </div>
                            <div className="topic border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="topic__head flex justify-between items-center px-5 py-4 bg-gray-100 dark:bg-gray-700 cursor-pointer group">
                                    <span className="topic__title font-danaDemiBold text-lg lg:text-xl text-gray-900 dark:text-white line-clamp-3 transition-colors group-hover:text-sky-500">
                                        پیادسازی اولین رباط تلگرام ساده
                                    </span>
                                    <div className="flex items-center gap-x-3">
                                        <div className="topic__time direction-ltr hidden lg:flex items-center gap-x-2 font-nunito text-sm text-gray-600 dark:text-gray-300 transition-colors group-hover:text-sky-500">
                                            <span>6 lesson</span>
                                            <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
                                            <span>25m</span>
                                        </div>
                                        <svg className="w-6 h-6 text-gray-400 group-hover:text-sky-500 transition-colors duration-300">
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </div>
                                </div>

                                <div className="topic__body bg-gray-50 dark:bg-gray-800">
                                    {/* <!-- درس --> */}
                                    <div className="flex items-center justify-between gap-x-6 flex-wrap lg:flex-nowrap px-6 py-5 border-t border-gray-200 dark:border-gray-700 group hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300">
                                        <div className="flex items-center gap-x-4 flex-grow">
                                            <div className="flex justify-center items-center w-9 h-7 text-sm font-danaDemiBold bg-gray-200 dark:bg-white/10 rounded-md group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 select-none">
                                                1
                                            </div>
                                            <a href="#" className="text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                                تعاریف اولیه
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                            <span className="text-sm md:text-base select-none">05:23</span>
                                            <svg className="w-7 h-7 text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                                <use href="#play-circle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 flex-wrap lg:flex-nowrap px-6 py-5 border-t border-gray-200 dark:border-gray-700 group hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300">
                                        <div className="flex items-center gap-x-4 flex-grow">
                                            <div className="flex justify-center items-center w-9 h-7 text-sm font-danaDemiBold bg-gray-200 dark:bg-white/10 rounded-md group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 select-none">
                                                1
                                            </div>
                                            <a href="#" className="text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                                تعاریف اولیه
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                            <span className="text-sm md:text-base select-none">05:23</span>
                                            <svg className="w-7 h-7 text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                                <use href="#play-circle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 flex-wrap lg:flex-nowrap px-6 py-5 border-t border-gray-200 dark:border-gray-700 group hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300">
                                        <div className="flex items-center gap-x-4 flex-grow">
                                            <div className="flex justify-center items-center w-9 h-7 text-sm font-danaDemiBold bg-gray-200 dark:bg-white/10 rounded-md group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 select-none">
                                                1
                                            </div>
                                            <a href="#" className="text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                                تعاریف اولیه
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                            <span className="text-sm md:text-base select-none">05:23</span>
                                            <svg className="w-7 h-7 text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                                <use href="#play-circle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-x-6 flex-wrap lg:flex-nowrap px-6 py-5 border-t border-gray-200 dark:border-gray-700 group hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300">
                                        <div className="flex items-center gap-x-4 flex-grow">
                                            <div className="flex justify-center items-center w-9 h-7 text-sm font-danaDemiBold bg-gray-200 dark:bg-white/10 rounded-md group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 select-none">
                                                1
                                            </div>
                                            <a href="#" className="text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                                تعاریف اولیه
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                            <span className="text-sm md:text-base select-none">05:23</span>
                                            <svg className="w-7 h-7 text-gray-400 group-hover:text-sky-600 transition-colors duration-300">
                                                <use href="#play-circle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* <!-- بقیه درس‌ها مشابه همین ساختار تکرار می‌شن --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommentForm />
                </div>
                <Profile/>
            </section>

        </main>
    )
}

export default CourseDetails