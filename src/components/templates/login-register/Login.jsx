import Link from 'next/link'
import React from 'react'

function Login({ showRegisterForm }) {


    return (
        <main className="flex flex-col items-center justify-center relative px-4 py-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

            {/* <!-- Logo --> */}
            <a href="https://sabzlearn.ir" className="flex items-center gap-x-3.5 mb-10 px-4 py-2 rounded-md 
          text-green-700 dark:text-green-400 text-2xl font-semibold
          transition-all duration-300 ease-in-out">
                <i className="fas fa-graduation-cap"></i>
                کدپلاس
            </a>

            {/* <!-- Login Box --> */}
            <div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg">

                {/* <!-- Step 1: Phone Input --> */}
                <div className="user-data">
                    <h4 className="font-bold text-xl mb-4">ورود با موبایل</h4>
                    <p className="mb-5 text-gray-600 dark:text-gray-300">
                        حساب کاربری ندارید؟
                        <button onClick={showRegisterForm} className="font-semibold text-green-500 hover:underline">ثبت نام
                            کنید</button>
                    </p>

                    <form className="space-y-5">
                        {/* <!-- Phone Input --> */}
                        <div className="relative">
                            <input type="tel" placeholder="شماره موبایل" className="w-full border border-gray-300 bg-gray-100 rounded-lg px-10 py-2 text-right
                                focus:outline-none
                                dark:bg-gray-700 dark:border-gray-600 dark:text-white
                                transition-colors duration-300 ease-in-out
                                focus:border-green-500
                                focus:shadow-sm focus:shadow-green-500/30" />

                            <i className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 fas fa-phone"></i>

                        </div>

                        {/* <!-- Submit --> */}
                        <button type="submit" className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors">ادامه</button>
                    </form>
                </div>

                {/* <!-- Step 2: OTP --> */}
                <div className="otp hidden mt-6">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-xl">کد تایید</span>
                        <svg className="w-7 h-7 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </div>
                    <span className="block text-center my-4">کد تایید برای <span className="font-semibold text-green-500">09xxxxxxx</span> ارسال شد.</span>

                    <form className="space-y-5">
                        <div className="flex justify-center gap-2" dir="ltr">
                            <input className="w-12 h-12 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="1" type="text" />
                            <input className="w-12 h-12 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="1" type="text" />
                            <input className="w-12 h-12 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="1" type="text" />
                            <input className="w-12 h-12 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="1" type="text" />
                            <input className="w-12 h-12 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="1" type="text" />
                        </div>
                        <button type="submit" className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors">تایید</button>
                    </form>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-5">
                        <a href="https://sabzlearn.ir/terms-conditions/" className="underline underline-offset-2">حریم خصوصی</a>
                        <button type="button" className="user-otp__resend">
                            ارسال دوباره <span className="timer hidden">(<span className="minute">00</span>:<span className="second">00</span>)</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Footer --> */}
            <div className="max-w-[330px] w-full mx-auto text-center mt-7 text-gray-600 dark:text-gray-300 text-sm">
                با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
                <a href="/" className="text-green-500 hover:underline">کدپلاس</a> را پذیرفته‌اید.
            </div>

            {/* <!-- Background Effects --> */}
            <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full">
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full">
            </div>
        </main>
    )
}

export default Login