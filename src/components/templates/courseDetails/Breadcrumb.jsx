import React from 'react'

function Breadcrumb() {
    return (
        <div className=" px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-1 rtl:space-x-reverse" aria-label="breadcrumb">

                {/* <!-- خانه --> */}
                <a href="https://sabzlearn.ir" className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-home text-base"></i>
                    <span>خانه</span>
                </a>

                {/* <!-- جداکننده --> */}
                <span className="mx-2 text-gray-400">/</span>

                {/* <!-- دوره‌ها --> */}
                <a href="https://sabzlearn.ir/courses/" className="hover:text-primary transition-colors duration-200">
                    دوره‌ها
                </a>

                <span className="mx-2 text-gray-400">/</span>

                {/* <!-- دسته پایتون --> */}
                <a href="https://sabzlearn.ir/course-cat/python/" className="hover:text-primary transition-colors duration-200">
                    پایتون
                </a>

                <span className="mx-2 text-gray-400">/</span>

                {/* <!-- نام دوره --> */}
                <span className="text-gray-900 dark:text-white font-semibold truncate max-w-[220px]">
                    آموزش ساخت ربات تلگرام با پایتون
                </span>

            </nav>
        </div>
    )
}

export default Breadcrumb