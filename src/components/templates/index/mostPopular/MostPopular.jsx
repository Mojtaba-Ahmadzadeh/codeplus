import React from 'react'

function MostPopular() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13">
                <div className="flex flex-col items-start gap-y-2.5 mt-25 sm:mt-40">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        محبوب ترین دوره ها</h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">پرمخاطب ترین دوره های رایگان کدپلاس</p>
                </div>
                <a href="https://sabzlearn.ir/courses/" className="flex items-center gap-x-1.5 py-1 text-gray-700 dark:text-gray-400 hover:text-green-500 self-end transition-all">
                    <span className="text-sm font-kalamehMedium">همه دوره‌ها</span>
                    <svg className="size-5">
                        <use href="#arrow-up-left-mini"></use>
                    </svg>
                </a>
            </div>

            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                    {/* <!-- تصویر دوره --> */}
                    <a href="https://sabzlearn.ir/course/wp-expert/" className="block aspect-[16/9] rounded-t-xl overflow-hidden">
                        <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/qo2-768x403.webp" alt="آموزش جامع توسعه وردپرس" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </a>

                    {/* <!-- محتوا --> */}
                    <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                        {/* <!-- عنوان --> */}
                        <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                            <a href="https://sabzlearn.ir/course/wp-expert/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                آموزش جامع توسعه وردپرس
                            </a>
                        </h3>

                        {/* <!-- توضیح --> */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین
                            و محبوب‌ترین سیستم...
                        </p>

                        {/* <!-- مدرس و امتیاز --> */}
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#user"></use>
                                </svg>
                                <a href="https://sabzlearn.ir/teacher/amirtaher69" className="hover:underline">امیر طاهرخانی</a>
                            </div>
                            <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                <span>5.0</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#star-mini"></use>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- خط مرزی --> */}
                        <div className="border-t border-neutral-200 dark:border-white/20"></div>

                        {/* <!-- دانشجو و قیمت --> */}
                        <div className="flex justify-between items-end">
                            <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                <i className="fa-solid fa-user text-green-600 dark:text-green-400 text-base"></i>
                                ۸۶ دانشجو
                            </span>
                            <div className="text-right">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">۵,۰۰۰,۰۰۰
                                    تومان</span>
                                <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                    ۴,۰۰۰,۰۰۰ <span className="font-danaMedium text-sm">تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                    {/* <!-- تصویر دوره --> */}
                    <a href="https://sabzlearn.ir/course/wp-expert/" className="block aspect-[16/9] rounded-t-xl overflow-hidden">
                        <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/IRIran-768x403.jpg" alt="آموزش جامع توسعه وردپرس" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </a>

                    {/* <!-- محتوا --> */}
                    <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                        {/* <!-- عنوان --> */}
                        <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                            <a href="https://sabzlearn.ir/course/wp-expert/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                آموزش جامع توسعه وردپرس
                            </a>
                        </h3>

                        {/* <!-- توضیح --> */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین
                            و محبوب‌ترین سیستم...
                        </p>

                        {/* <!-- مدرس و امتیاز --> */}
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#user"></use>
                                </svg>
                                <a href="https://sabzlearn.ir/teacher/amirtaher69" className="hover:underline">امیر طاهرخانی</a>
                            </div>
                            <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                <span>5.0</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#star-mini"></use>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- خط مرزی --> */}
                        <div className="border-t border-neutral-200 dark:border-white/20"></div>

                        {/* <!-- دانشجو و قیمت --> */}
                        <div className="flex justify-between items-end">
                            <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                <i className="fa-solid fa-user text-green-600 dark:text-green-400 text-base"></i>
                                ۸۶ دانشجو
                            </span>
                            <div className="text-right">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">۵,۰۰۰,۰۰۰
                                    تومان</span>
                                <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                    ۴,۰۰۰,۰۰۰ <span className="font-danaMedium text-sm">تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                    {/* <!-- تصویر دوره --> */}
                    <a href="https://sabzlearn.ir/course/wp-expert/" className="block aspect-[16/9] rounded-t-xl overflow-hidden">
                        <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/m1-768x403.jpg" alt="آموزش جامع توسعه وردپرس" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </a>

                    {/* <!-- محتوا --> */}
                    <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                        {/* <!-- عنوان --> */}
                        <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                            <a href="https://sabzlearn.ir/course/wp-expert/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                آموزش جامع توسعه وردپرس
                            </a>
                        </h3>

                        {/* <!-- توضیح --> */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین
                            و محبوب‌ترین سیستم...
                        </p>

                        {/* <!-- مدرس و امتیاز --> */}
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#user"></use>
                                </svg>
                                <a href="https://sabzlearn.ir/teacher/amirtaher69" className="hover:underline">امیر طاهرخانی</a>
                            </div>
                            <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                <span>5.0</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#star-mini"></use>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- خط مرزی --> */}
                        <div className="border-t border-neutral-200 dark:border-white/20"></div>

                        {/* <!-- دانشجو و قیمت --> */}
                        <div className="flex justify-between items-end">
                            <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                <i className="fa-solid fa-user text-green-600 dark:text-green-400 text-base"></i>
                                ۸۶ دانشجو
                            </span>
                            <div className="text-right">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">۵,۰۰۰,۰۰۰
                                    تومان</span>
                                <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                    ۴,۰۰۰,۰۰۰ <span className="font-danaMedium text-sm">تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                    {/* <!-- تصویر دوره --> */}
                    <a href="https://sabzlearn.ir/course/wp-expert/" className="block aspect-[16/9] rounded-t-xl overflow-hidden">
                        <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/s1-768x403.webp" alt="آموزش جامع توسعه وردپرس" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </a>

                    {/* <!-- محتوا --> */}
                    <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                        {/* <!-- عنوان --> */}
                        <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                            <a href="https://sabzlearn.ir/course/wp-expert/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                آموزش جامع توسعه وردپرس
                            </a>
                        </h3>
                        {/* <!-- توضیح --> */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین
                            و محبوب‌ترین سیستم...
                        </p>

                        {/* <!-- مدرس و امتیاز --> */}
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                            <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#user"></use>
                                </svg>
                                <a href="https://sabzlearn.ir/teacher/amirtaher69" className="hover:underline">امیر طاهرخانی</a>
                            </div>
                            <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                <span>5.0</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <use href="#star-mini"></use>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- خط مرزی --> */}
                        <div className="border-t border-neutral-200 dark:border-white/20"></div>

                        {/* <!-- دانشجو و قیمت --> */}
                        <div className="flex justify-between items-end">
                            <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                <i className="fa-solid fa-user text-green-600 dark:text-green-400 text-base"></i>
                                ۸۶ دانشجو
                            </span>
                            <div className="text-right">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">۵,۰۰۰,۰۰۰
                                    تومان</span>
                                <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                    ۴,۰۰۰,۰۰۰ <span className="font-danaMedium text-sm">تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MostPopular