import React from 'react'

function PaymentDetails() {
    return (
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
    )
}

export default PaymentDetails