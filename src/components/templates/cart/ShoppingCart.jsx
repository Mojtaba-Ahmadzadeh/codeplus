import React from 'react'

function ShoppingCart() {
    return (
        <>
            <section className="grid grid-cols-12 gap-y-8 gap-x-8 lg:gap-x-10">
                {/* <!-- بخش اصلی سبد خرید --> */}
                <section className="col-span-12 md:col-span-8 space-y-6">
                    <div className="rounded-xl overflow-hidden shadow-md dark:shadow-gray-700">
                        <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
                            <div className="flex items-center gap-x-3">
                                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3h18l-1.68 9.39a3 3 0 01-3 2.61H9.68a3 3 0 01-3-2.61L5 6H3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                </svg>
                                <span>سبد خرید</span>
                            </div>
                        </header>

                        <div className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" style={{ minHeight: '300px' }}>
                            {/* <!-- آیتم اول --> */}
                            <article className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-5">
                                <a href="#" className="relative w-full sm:w-auto block rounded-xl overflow-hidden">
                                    <button className="absolute top-1 right-1 p-1 text-red-500 hover:text-red-700 z-10" aria-label="حذف">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/25-1-300x169.webp" alt="تکنیک های قرارداد نویسی" className="w-full sm:w-48 rounded-xl object-cover aspect-video" />
                                </a>
                                <div className="flex-1 flex flex-col max-w-xl">
                                    <a href="#" className="text-base font-medium line-clamp-2" title="تکنیک های قرارداد نویسی برای برنامه نویسان">تکنیک های قرارداد نویسی برای برنامه نویسان</a>
                                    <a href="#" className="text-sm text-gray-500 dark:text-gray-400 mt-1">محمدامین سعیدی راد</a>
                                </div>
                                <div className="flex items-center gap-x-5 mt-3 sm:mt-0 whitespace-nowrap">
                                    <span className="text-green-600 font-semibold text-lg">800,000 <span className="text-base font-normal">تومان</span></span>
                                    <button className="hidden sm:flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500" aria-label="حذف">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </article>

                            {/* <!-- آیتم دوم --> */}
                            <article className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-5">
                                <a href="#" className="relative w-full sm:w-auto block rounded-xl overflow-hidden">
                                    <button className="absolute top-1 right-1 p-1 text-red-500 hover:text-red-700 z-10" aria-label="حذف">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/4-1-300x169.webp" alt="آموزش جامع دیزاین پترن ها" className="w-full sm:w-48 rounded-xl object-cover aspect-video" />
                                </a>
                                <div className="flex-1 flex flex-col max-w-xl">
                                    <a href="#" className="text-base font-medium line-clamp-2" title="آموزش جامع دیزاین پترن ها برای برنامه نویسان">آموزش جامع دیزاین پترن ها برای برنامه نویسان</a>
                                    <a href="#" className="text-sm text-gray-500 dark:text-gray-400 mt-1">محمدامین سعیدی راد</a>
                                </div>
                                <div className="flex items-center gap-x-5 mt-3 sm:mt-0 whitespace-nowrap">
                                    <span className="text-green-600 font-semibold text-lg">1,200,000 <span className="text-base font-normal">تومان</span></span>
                                    <button className="hidden sm:flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500" aria-label="حذف">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* <!-- بخش هدایا --> */}
                    <div className="rounded-xl overflow-hidden shadow-md dark:shadow-gray-700">
                        <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
                            <div className="flex items-center gap-x-3">
                                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 20V4" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>هدیه سبزلرن</span>
                            </div>
                        </header>

                        <div className="bg-white dark:bg-gray-800 p-5">
                            <p className="text-sm mb-3">
                                با خرید از سبزلرن یک هدیه ویژه دریافت کنید!
                            </p>
                            <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 transition">
                                مشاهده هدیه
                            </button>
                        </div>
                    </div>
                </section>

                <aside className="col-span-full md:col-span-4 space-y-5 md:space-y-6">
                    <div className="rounded-xl overflow-hidden">
                        {/* <!-- هدر بخش پرداخت --> */}
                        <div className="flex items-center justify-between px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
                            <svg className="w-7 h-7 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"></path>
                            </svg>
                            <span className="md:text-xl font-danaBold">جزئیات پرداخت</span>
                        </div>

                        {/* <!-- بدنه بخش پرداخت --> */}
                        <div className="bg-white dark:bg-gray-800 py-6 px-5 md:px-7 text-slate-600 dark:text-white">
                            <div className="space-y-5 border-b border-b-neutral-200 dark:border-b-white/20 pb-5 mb-5">
                                <div className="flex items-center justify-between">
                                    <span className="font-danaMedium">مبلغ کل سفارش</span>
                                    <div className="flex items-center gap-x-1">
                                        <span className="font-danaDemiBold text-lg">2,000,000</span>
                                        <span className="font-dana">تومان</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-red-600">
                                    <span className="font-danaMedium">تخفیف پلکانی</span>
                                    <div className="flex items-center gap-x-1">
                                        <div>
                                            <span className="text-sm">(۵٪)</span>
                                            <span className="font-danaDemiBold">100,000</span>
                                        </div>
                                        <span className="font-dana">تومان</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="font-danaMedium">موجودی کیف پول</span>
                                    <div className="flex items-center gap-x-1">
                                        <span className="font-danaDemiBold">0</span>
                                        <span className="font-dana">تومان</span>
                                    </div>
                                </div>

                                <div className="offer-item hidden flex items-center justify-between text-sm sm:text-base">
                                    <div className="flex items-center gap-x-2">
                                        <span className="font-danaMedium">کوپن تخفیف <span className="offer-percent"></span></span>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <span className="offer-total font-danaDemiBold"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-3">
                                <span className="font-danaDemiBold text-base text-green-700 dark:text-green-400">مبلغ قابل پرداخت:</span>
                                <div className="flex items-center gap-x-1">
                                    <span className="font-danaDemiBold text-xl text-green-800 dark:text-green-500 grand-total">
                                        1,900,000 <span className="font-dana text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>

                            {/* <!-- فرم پرداخت --> */}
                            <form id="pay_form" method="post" action="https://sabzlearn.ir/checkout?nonce=236757a34b" >
                                <div className="flex items-center gap-x-2 mb-4">
                                    <label className="checkbox flex items-center cursor-pointer select-none">
                                        <input id="approve_privacy_policy" className="checkbox__input" name="approve_privacy_policy" value="yes" type="checkbox" required="" />
                                        <span className="checkbox__marker ml-2"></span>
                                        <span className="text-xs text-slate-600 dark:text-gray-400">قوانین سایت را خوانده و می‌پذیرم.</span>
                                    </label>
                                    <a href="https://sabzlearn.ir/terms-conditions/" className="text-xs text-sky-500 hover:underline">(مشاهده
                                        قوانین)</a>
                                </div>

                                <input type="hidden" name="pay" value="true" />
                                <input type="hidden" name="coupon_code" value="" />

                                <button id="complete-order" className="btn w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled="">
                                    تکمیل خرید و پرداخت امن
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* <!-- بخش کد تخفیف --> */}
                    <div className="bg-white dark:bg-gray-900 px-5 md:px-7 py-6 overflow-hidden rounded-xl shadow-md dark:shadow-lg" id="discountcode-collapse">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
                            <span className="font-danaDemiBold text-gray-600 dark:text-gray-400 text-base">کد تخفیف دارید؟</span>
                            <button type="button" data-collapse="#discountcode-collapse" data-height="h-16" aria-label="باز/بسته کردن کد تخفیف">
                                <svg className="w-6 h-6 rotate-180 text-gray-600 dark:text-gray-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="offer-form">
                            <div className="relative">
                                <input id="coupon-input" type="text" className="w-full h-14 pr-3.5 pl-32 text-sm rounded-xl
               bg-gray-100 dark:bg-gray-800 
               text-gray-900 dark:text-gray-100
               placeholder-gray-400 dark:placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition" placeholder="کد تخفیف را وارد کنید" aria-label="کد تخفیف" />
                                <button className="btn btn-secondary btn-tiny absolute left-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors" type="button">
                                    اعمال
                                </button>
                            </div>
                        </div>

                        {/* <!-- پیام موفقیت کد تخفیف --> */}
                        <div className="offer-success hidden flex items-center gap-x-2 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 py-3 px-4 rounded-xl mt-5 shadow-sm">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                            </svg>
                            <span><span className="offer-code-notice"></span> اعمال شد، <span className="offer-remove underline cursor-pointer text-rose-500">حذف؟</span></span>
                        </div>
                    </div>

                </aside>

            </section>
        </>
    )
}

export default ShoppingCart