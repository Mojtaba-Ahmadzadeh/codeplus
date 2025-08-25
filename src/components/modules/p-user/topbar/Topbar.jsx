"use client"
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Topbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isDark, setIsDark] = useState(theme === "dark");

    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    return (
        <header className="flex items-center justify-between shrink-0 w-full h-22 px-5 py-4 sm:px-7 bg-white dark:bg-gray-800 lg:rounded-lg">
            {/* دکمه منو (برای موبایل) */}
            <button id="burger-btn" className="btn-icon-area md:!hidden text-primary dark:text-indigo-400" aria-label="باز کردن منو">
                <i className="fa-solid fa-bars" style={{ fontSize: '1rem' }}></i>
            </button>

            {/* جستجو */}
            <div className="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85 bg-gray-100 dark:bg-gray-700 rounded-lg py-1 px-4 h-12">
                <input type="text" placeholder="دوره های من، تیکت ها، مالی ..." className="w-full bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none" />
                <i className="fa-solid fa-magnifying-glass text-gray-500 dark:text-gray-400 shrink-0" style={{ fontSize: '1rem' }}></i>
            </div>

            <div className="flex items-center gap-x-5">
                {/* دکمه تم، سبد خرید، اعلان */}
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={toggleTheme}
                        className="btn-icon-area text-primary dark:text-indigo-400 flex items-center justify-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        aria-label="تغییر تم"
                    >
                        {isDark ? (
                            <i className="fa-solid fa-sun" style={{ fontSize: '1.2rem' }}></i>
                        ) : (
                            <i className="fa-solid fa-moon" style={{ fontSize: '1.2rem' }}></i>
                        )}
                    </button>

                    <a href="https://sabzlearn.ir/cart/" target="_blank" className="btn-icon-area text-primary dark:text-indigo-400 flex items-center justify-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="سبد خرید">
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: '1.2rem' }}></i>
                    </a>

                    <button className="btn-icon-area text-primary dark:text-indigo-400 flex items-center justify-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="اعلان‌ها">
                        <i className="fa-solid fa-bell" style={{ fontSize: '1.2rem' }}></i>
                    </button>
                </div>

                {/* تاریخ */}
                <div className="max-lg:hidden flex items-center gap-x-4 text-label text-secondary dark:text-gray-400 select-none">
                    <time dateTime="2025-08-06T07:25:53.344Z" className="text-gray-700 dark:text-gray-400">
                        چهارشنبه ۱۵ مرداد
                    </time>
                    <i className="fa-solid fa-calendar" style={{ fontSize: '1rem' }}></i>
                </div>
            </div>
        </header>
    );
}
