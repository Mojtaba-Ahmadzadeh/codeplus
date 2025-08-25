"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'

function Topbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="fixed top-0 left-0 right-0 md:right-64 bg-white dark:bg-gray-900 shadow-lg px-4 sm:px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between max-w-7xl mx-auto">

                {/* <!-- عنوان پنل --> */}
                <h1 className="flex items-center text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white whitespace-nowrap gap-2 select-none">
                    <span className="text-indigo-600 dark:text-indigo-400 text-3xl">📋</span>
                    پنل مدیریت
                </h1>

                {/* <!-- ناحیه ابزارها --> */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5">

                    {/* <!-- تغییر زبان --> */}
                    <div className="relative">
                        <button id="languageToggle" className="w-8 h-6 rounded-md overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600 hover:ring-indigo-500 focus:outline-none transition">
                            <img id="selectedFlag" src="https://flagcdn.com/w40/ir.png" alt="زبان فعلی" className="w-full h-full object-cover" title="فارسی" />
                        </button>
                        <div id="flagMenu" className="absolute top-9 right-0 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md shadow-xl p-2 space-y-1 w-28 hidden z-50">
                            <button data-flag="ir" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
                                <img src="https://flagcdn.com/w40/ir.png" className="w-6 h-4 object-cover rounded" />
                                <span className="text-sm text-gray-700 dark:text-gray-200">فارسی</span>
                            </button>
                            <button data-flag="us" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
                                <img src="https://flagcdn.com/w40/us.png" className="w-6 h-4 object-cover rounded" />
                                <span className="text-sm text-gray-700 dark:text-gray-200">English</span>
                            </button>
                            <button data-flag="sa" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
                                <img src="https://flagcdn.com/w40/sa.png" className="w-6 h-4 object-cover rounded" />
                                <span className="text-sm text-gray-700 dark:text-gray-200">العربية</span>
                            </button>
                        </div>
                    </div>

                    {/* <!-- اعلان‌ها --> */}
                    <button className="relative p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" aria-label="اعلان‌ها">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
                    </button>

                    {/* <!-- دکمه تم --> */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition"
                        aria-label="تغییر تم"
                    >
                        {theme === "light" ? (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M20 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7"></path>
                                <circle cx="12" cy="12" r="5"></circle>
                            </svg>
                        ) : (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    {/* <!-- پروفایل --> */}
                    <div className="flex items-center gap-3 cursor-pointer group relative">
                        <div className="text-right hidden sm:block leading-tight">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                                امیرحسین</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-indigo-400 transition">
                                مدیر</p>
                        </div>
                        <img src="https://i.pravatar.cc/40" alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-indigo-500 shadow-md group-hover:ring-indigo-600 transition" />
                    </div>

                    {/* <!-- منوی موبایل --> */}
                    <button id="mobileMenuBtn" className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition" aria-label="منوی موبایل">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Topbar