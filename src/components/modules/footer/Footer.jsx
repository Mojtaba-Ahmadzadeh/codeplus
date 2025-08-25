import { GraduationCap, Instagram, Github, Link, List } from 'lucide-react'
import React from 'react'

function Footer() {

  const commonClasses = "w-9 h-9 bg-gray-200 hover:bg-green-500 dark:bg-gray-700 dark:hover:bg-green-500 rounded-full flex items-center justify-center transition duration-300 text-gray-800 dark:text-white";

  return (
    <footer className="mt-25 sm:mt-40 md:pt-16 md:pb-10 
  bg-white dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 
  text-gray-800 dark:text-gray-200 px-6 sm:px-12 lg:px-24 pt-16 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* <!-- برند --> */}
        <div>
          <h2 className="text-2xl font-extrabold text-green-600 dark:text-green-400 mb-4 flex items-center gap-3">
            <GraduationCap className="text-green-600 dark:text-green-400 w-8 h-8" />
            کدپلاس
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            آموزش تخصصی و پروژه‌محور برنامه‌نویسی برای ورود حرفه‌ای به بازار کار. مسیر رشدتو با سبزلرن بساز.
          </p>
        </div>

        {/* <!-- لینک‌ها --> */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Link className='text-green-600 dark:text-green-400' />
            لینک‌های سریع
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-all">صفحه اصلی</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">دوره‌ها</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">مقالات</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">تماس با ما</a></li>
          </ul>
        </div>

        {/* <!-- دسته‌ها --> */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <List className='text-green-600 dark:text-green-400' />
            دسته‌بندی دوره‌ها
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-all">فرانت‌اند</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">بک‌اند</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">هوش مصنوعی</a></li>
            <li><a href="#" className="hover:text-green-500 transition-all">امنیت سایبری</a></li>
          </ul>
        </div>

        {/* <!-- عضویت --> */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <i className="fas fa-envelope-open-text text-green-600 dark:text-green-400"></i>
            عضویت در خبرنامه
          </h3>
          <form className="flex flex-col space-y-3">
            <input type="email" placeholder="ایمیل شما" className="p-2 bg-white dark:bg-[#222] text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white" />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-md transition-all">عضویت</button>
          </form>
          <div className="flex mt-6 space-x-3 ">
            <a href="#" className={commonClasses}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={commonClasses}>
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className={commonClasses}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className={commonClasses}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-500">
        © 2025 سبزلرن - تمامی حقوق محفوظ است.
      </div>
    </footer>
  )
}

export default Footer