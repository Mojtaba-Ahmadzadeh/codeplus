import React from 'react'

function BreadCrumb() {
    return (
        <nav className="mb-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md px-6 py-3 w-full select-none" aria-label="مسیر سایت">
            <ol className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-400 text-sm font-medium" role="list">
                <li>
                    <a href="#" className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" aria-label="خانه">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12"></path>
                        </svg>
                        خانه
                    </a>
                </li>

                <li aria-hidden="true" className="text-gray-400 dark:text-gray-600 select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                </li>

                <li aria-current="page" className="text-gray-900 dark:text-white font-semibold" aria-label="صفحه فعلی" style={{marginLeft: '0'}}>داشبورد</li>

            </ol>
        </nav>
    )
}

export default BreadCrumb