'use client'
import React, { useState } from 'react'

function CommentForm() {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4.5 sm:p-5 mt-8">
            <div className="flex items-center justify-between mb-6 sm:mb-7">
                <div className="flex items-center justify-between gap-x-3 relative flex-row-reverse">
                    <span className="absolute -right-6 sm:-left-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-l-sm"></span>
                    <h2 className="font-kalamehSemiBold text-xl md:text-2xl">نظرات</h2>
                    <i className="fas fa-comments text-green-500 text-2xl md:text-3xl hidden md:inline-block"></i>
                </div>

                {/* دکمه باز و بسته شدن فرم */}
                <button
                    className="btn btn-primary btn-tiny flex items-center gap-1 px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition"
                    onClick={() => setShowForm(!showForm)}
                    type="button"
                >
                    {showForm ? "بستن فرم" : "ایجاد نظر جدید"}
                    <i className="fa fas fa-comment w-5 h-5"></i>
                </button>
            </div>

            {showForm && (
                <div className="p-4 border border-gray-300 rounded-lg mb-6 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

                    {/* User Info */}
                    <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
                        <div className="flex-center p-1.5 border rounded-full border-gray-100 dark:border-gray-700">
                            <div className="flex-center w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500 dark:text-slate-400">
                                    <use href="#user-mini"></use>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-danaMedium">مجتبی احمدزاده</span>
                            <span className="font-danaLight text-sm text-gray-700 dark:text-gray-400" id="comment-to">
                                ثبت نظر جدید
                            </span>
                        </div>
                    </div>

                    {/* Warning Box */}
                    <div className="flex items-center gap-x-1.5 md:gap-x-1 bg-red-500 text-white px-4 py-3 rounded-xl mb-3">
                        <svg className="size-6 shrink-0">
                            <use href="#exclamation-triangle"></use>
                        </svg>
                        <p className="text-sm md:font-danaMedium">
                            لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح کنید.
                        </p>
                    </div>

                    {/* Comment Textarea */}
                    <textarea
                        rows="6"
                        className="w-full block p-4.5 md:p-4 rounded-lg 
                        bg-gray-100 dark:bg-gray-800 
                        text-gray-900 dark:text-white 
                        placeholder:text-slate-500/70 dark:placeholder:text-slate-400/60 
                        font-danaMedium text-sm transition-colors duration-300"
                        placeholder="نظر خود را بنویسید ..."
                    ></textarea>

                    {/* Action Buttons */}
                    <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
                        <button
                            className="flex-grow sm:grow-0 sm:w-36 btn btn-primary btn-outline 
                            border border-green-500 text-green-500 
                            hover:bg-green-500 hover:text-white transition 
                            rounded-md shadow-sm"
                            onClick={() => setShowForm(false)}
                            type="button"
                        >
                            لغو
                        </button>
                        <button
                            className="flex-grow sm:grow-0 sm:w-36 btn btn-primary 
                            bg-green-500 text-white 
                            hover:bg-green-600 transition 
                            rounded-md shadow-md"
                            type="button"
                        >
                            ارسال
                        </button>
                    </div>
                </div>
            )}

            {/* 👇 بخش دو نظر استاتیک */}
            <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                    <div className="flex items-start gap-3">
                        <div className="flex-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700">
                            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400">
                                <use href="#user-mini"></use>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-danaMedium">کاربر اول</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">۲۵ مرداد ۱۴۰۴</span>
                            <p className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed">
                                خیلی دوره خوبی بود 👌 توضیحات کامل و عالی.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                    <div className="flex items-start gap-3">
                        <div className="flex-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700">
                            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400">
                                <use href="#user-mini"></use>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-danaMedium">کاربر دوم</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">۲۶ مرداد ۱۴۰۴</span>
                            <p className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed">
                                طراحی سایت خیلی خوبه ولی اگر سرعتش بیشتر بشه عالی‌تر میشه 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentForm
