import React from 'react'

function SupportMessage() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 pt-25 md:pt-40 ">
            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13">
                <div className="flex flex-col items-start gap-y-2.5">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        مــا چه کمکی میتونیم بهت بکنیم
                    </h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">
                        از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره
                    </p>
                </div>
            </div>
            <div className="grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7 cursor-default">
                <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm bg-white dark:shadow-lg transition-colors duration-300">

                    {/* <!-- آیکون --> */}
                    <div className="flex justify-center lg:justify-end items-center w-[94px] h-[94px] mb-11 lg:mb-0 lg:ml-11 
                    bg-sky-100 dark:bg-sky-800/30 rounded-full transition-colors duration-300">
                        <i className="fa-solid fa-book-open text-sky-600 dark:text-sky-400 
                    translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 text-3xl transition-colors duration-300"></i>
                    </div>

                    {/* <!-- محتوا --> */}
                    <div className="text-center lg:text-right">
                        <h4 className="lg:text-lg font-danaBold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                            تضمین کامل‌ترین محتوا
                        </h4>
                        <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            بزار خیالت راحت کنم، توی دوره‌هامون به ریزترین موارد پرداختیم؛ بعد از دیدن این دوره نیاز به هیچ
                            آموزش دیگه‌ای نداری.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl bg-white shadow-sm dark:shadow-lg transition-colors duration-300">
                    <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-amber-50 dark:bg-amber-600/30 rounded-full transition-colors duration-300">
                        <i className="fa-solid fa-comment text-amber-400 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 text-3xl"></i>

                    </div>
                    <div className="text-center lg:text-right">
                        <h4 className="lg:text-lg font-danaBold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                            پشتیبانی دائمی
                        </h4>
                        <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی
                            دوره رو کامل کنی.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl bg-white shadow-sm dark:shadow-lg transition-colors duration-300">
                    <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-green-50 dark:bg-green-700/30 rounded-full transition-colors duration-300">
                        <i className="fa-solid fa-clipboard-check text-green-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 text-3xl"></i>

                    </div>
                    <div className="text-center lg:text-right">
                        <h4 className="lg:text-lg font-danaBold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                            پروژه محور در راستای بازار کار
                        </h4>
                        <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام
                            کنه برای کسب درآمد.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl bg-white shadow-sm dark:shadow-lg transition-colors duration-300">
                    <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-red-50 dark:bg-red-700/30 rounded-full transition-colors duration-300">
                        <i className="fa-solid fa-clipboard-check text-red-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 text-3xl"></i>

                    </div>
                    <div className="text-center lg:text-right">
                        <h4 className="lg:text-lg font-danaBold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                            سراغ حرفه ای ها رفتیم
                        </h4>
                        <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان
                            بشه که توی یادگیری به مشکل نخورید.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SupportMessage