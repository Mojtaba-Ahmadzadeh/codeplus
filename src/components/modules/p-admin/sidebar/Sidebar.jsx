import React from 'react'

function Sidebar() {
    return (
        <aside id="sidebar" className="flex flex-col w-64 fixed inset-y-0 right-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg z-30 
           transform transition-transform duration-300 ease-in-out
           translate-x-full md:translate-x-0">
            {/* <!-- هدر سایدبار --> */}
            <div className="flex items-center justify-center p-6 border-b border-gray-200 dark:border-gray-700 font-extrabold text-2xl select-none">
                🛠 مدیریت
            </div>

            {/* <!-- ناوبری --> */}
            <nav className="flex-1 overflow-y-auto mt-6 px-4 space-y-2 text-gray-800 dark:text-gray-200 font-medium">
                <a href="./p-admin.html" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home w-5 h-5 text-yellow-500 group-hover:text-yellow-600"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span>داشبورد</span>
                </a>
                <a href="./users.html" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users w-5 h-5 text-yellow-500 group-hover:text-yellow-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>کاربران</span>
                </a>
                <a href="./user-tickets.html" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-5 h-5 text-yellow-500 group-hover:text-yellow-600"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    <span>تیکت ها</span>
                </a>
                <a href="./order-tracking.html" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart w-5 h-5 text-yellow-500 group-hover:text-yellow-600"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span>سفارشات</span>
                </a>
                <a href="./product-list.html" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-package w-5 h-5 text-yellow-500 group-hover:text-yellow-600"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <span>محصولات</span>
                </a>
            </nav>

            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ورود به عنوان:</p>
                    <p className="font-bold text-yellow-500">مدیر</p>
                </div>
                <button className="text-red-500 hover:text-red-600 transition" title="خروج">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out w-6 h-6"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar