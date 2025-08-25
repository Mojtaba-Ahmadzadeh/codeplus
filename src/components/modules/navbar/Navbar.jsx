"use client"


import Link from 'next/link';
import { GraduationCap, Moon, Sun, ShoppingCart, User, Menu, Trash2 } from 'lucide-react';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <nav className="bg-white dark:bg-gray-800 px-4 md:px-12 py-4 shadow dark:shadow-lg w-full z-50">
            <div className="max-w-7xl mx-auto">

                {/* <!-- ✅ Mobile Only: Special Layout --> */}
                <div className="w-full flex items-center justify-between md:hidden mb-4">

                    {/* Hamburger Menu - Right */}
                    <button
                        aria-label="Open mobile menu"
                        id="mobile-menu-button"
                        className="w-11 h-11 flex items-center justify-center rounded-full
                   bg-gray-200 dark:bg-gray-700
                   text-gray-800 dark:text-gray-100
                   hover:bg-gray-300 dark:hover:bg-gray-600
                   focus:outline-none focus:ring-2 focus:ring-primary p-2 transition"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Logo - Center */}
                    <div className="text-xl font-extrabold text-primary cursor-pointer select-none tracking-wide flex items-center gap-2">
                        <GraduationCap className="text-green-600 dark:text-green-400 w-8 h-8" />
                        کدپلاس
                    </div>

                    {/* Shopping Cart - Left */}
                    <div className="relative group z-20" id="cart">
                        <button
                            type="button"
                            className="w-11 h-11 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-gray-700
                       text-gray-800 dark:text-gray-100
                       hover:bg-gray-300 dark:hover:bg-gray-600
                       focus:outline-none focus:ring-2 focus:ring-primary p-2 transition"
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </button>

                        {/* Cart Badge */}
                        <div
                            id="cart-badge"
                            className="absolute top-2.5 right-2.5 size-1.5 rounded-full bg-green-500"
                        ></div>

                        {/* Cart Dropdown */}
                        <div
                            id="cart-dropdown"
                            className="absolute left-0 top-full pt-4 z-10 opacity-0 scale-95 invisible transition-all duration-300
                       group-hover:opacity-100 group-hover:scale-100 group-hover:visible"
                        >
                            <div className="w-80 xs:w-[362px] bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">

                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 mb-4 rounded-t-2xl">
                                    <span className="font-danaBold text-base">سبد خرید من</span>
                                    <span className="font-danaDemiBold text-sm text-slate-500 dark:text-gray-400">
                                        ۲ دوره
                                    </span>
                                </div>

                                {/* Items */}
                                <div className="cart-body pl-5 pr-2.5 mr-2.5 space-y-3 max-h-64 overflow-y-auto direction-ltr child:direction-rtl">

                                    {/* Item 1 */}
                                    <div className="cart-item flex items-start gap-x-3">
                                        <a href="https://sabzlearn.ir/course/contract-writing-techniques-for-programmers/" className="shrink-0">
                                            <img
                                                className="h-12 w-20 rounded-md object-cover"
                                                src="https://sabzlearn.ir/wp-content/uploads/2025/07/25-1-300x169.webp"
                                                alt="تکنیک های قرارداد نویسی برای برنامه نویسان"
                                            />
                                        </a>
                                        <div className="flex flex-col justify-between text-xs sm:text-sm leading-relaxed">
                                            <a href="https://sabzlearn.ir/course/contract-writing-techniques-for-programmers/" className="line-clamp-2 font-danaMedium text-gray-800 dark:text-gray-100">
                                                تکنیک های قرارداد نویسی برای برنامه نویسان
                                            </a>
                                            <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400 mt-1">
                                                <span className="font-danaMedium">۸۰۰,۰۰۰</span>
                                                <span className="font-danaMedium text-xs">تومان</span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            aria-label="Remove"
                                            className="ml-auto mt-1 flex items-center justify-center w-8 h-8 rounded-full
                                       text-gray-400 dark:text-gray-500
                                       hover:text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700
                                       transition-colors duration-200"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="cart-item flex items-start gap-x-3">
                                        <a href="https://sabzlearn.ir/course/design-pattern/" className="shrink-0">
                                            <img
                                                className="h-12 w-20 rounded-md object-cover"
                                                src="https://sabzlearn.ir/wp-content/uploads/2025/07/4-1-300x169.webp"
                                                alt="آموزش جامع دیزاین پترن ها برای برنامه نویسان"
                                            />
                                        </a>
                                        <div className="flex flex-col justify-between text-xs sm:text-sm leading-relaxed">
                                            <a href="https://sabzlearn.ir/course/design-pattern/" className="line-clamp-2 font-danaMedium text-gray-800 dark:text-gray-100">
                                                آموزش جامع دیزاین پترن ها برای برنامه نویسان
                                            </a>
                                            <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400 mt-1">
                                                <span className="font-danaMedium">۱,۲۰۰,۰۰۰</span>
                                                <span className="font-danaMedium text-xs">تومان</span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            aria-label="Remove"
                                            className="ml-auto mt-1 flex items-center justify-center w-8 h-8 rounded-full
                                       text-gray-400 dark:text-gray-500
                                       hover:text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700
                                       transition-colors duration-200"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="mt-5 px-5 pb-5">
                                    <div className="flex items-center justify-between border-t border-neutral-200 dark:border-white/10 pt-4 mb-4">
                                        <span className="text-sm text-gray-700 dark:text-gray-300">مبلغ قابل پرداخت:</span>
                                        <span className="text-lg font-danaDemiBold text-gray-900 dark:text-white">
                                            ۱,۹۰۰,۰۰۰ <span className="text-base font-danaMedium">تومان</span>
                                        </span>
                                    </div>
                                    <a
                                        href="https://sabzlearn.ir/cart"
                                        className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl transition-colors font-danaBold text-sm"
                                    >
                                        مشاهده سبد خرید
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ✅ ساختار اصلی (برای دسکتاپ و تبلت) --> */}
                <div className="hidden md:flex justify-between items-center">
                    {/* <!-- منوی اصلی + لوگو --> */}
                    <ul className="flex gap-10 items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                        <div className="flex items-center text-2xl font-extrabold text-primary cursor-pointer select-none tracking-wide">
                            <GraduationCap className="w-7 h-7 text-green-600 dark:text-green-400 ml-2 flex-shrink-0" />
                            <span>کدپلاس</span>
                        </div>


                        <li className="relative group/sub-menu">
                            <a href="javascript:void(0)">
                                دوره های آموزشی
                            </a>
                            {/* <!-- Show When Hover - Submenu --> */}
                            <div className="invisible opacity-0 group-hover/sub-menu:visible group-hover/sub-menu:opacity-100  absolute -left-10 top-full pt-7 transition-all z-40">
                                <div className="relative w-44  bg-white text-gray-900 dark:bg-gray-800 dark:text-white text-sm font-danaMedium rounded-l hover:rounded-l-none rounded-r shadow">
                                    {/* <!-- Front-End Group --> */}
                                    <div className="group">
                                        <a href="./frontend-courses.html" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            فرانت اند
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/html-tutorial/">آموزش HTML</a>
                                            <a href="https://sabzlearn.ir/course/css-tutorial/">آموزش CSS</a>
                                            <a href="https://sabzlearn.ir/course/flex-box/">آموزش FlexBox</a>
                                            <a href="https://sabzlearn.ir/course/css-grid/">آموزش CSS Grid</a>
                                            <a href="https://sabzlearn.ir/course/ex-project-with-css/">مینی پروژه های تخصصی
                                                با
                                                Css</a>
                                            <a href="https://sabzlearn.ir/course/tailwind-css/">آموزش Tailwind CSS</a>
                                            <a href="https://sabzlearn.ir/course/advance-template-design-with-html-css-flexbox/">آموزش
                                                اصولی طراحی قالب</a>
                                            <a href="https://sabzlearn.ir/course/bootstrap5/">آموزش بوت استرپ</a>
                                            <a href="https://sabzlearn.ir/course/java-script-zero-to-hero/">آموزش
                                                جاوااسکریپت</a>
                                            <a href="https://sabzlearn.ir/course/js-exp-project/">پروژه های تخصصی با JS</a>
                                            <a href="https://sabzlearn.ir/course/reactjs/">آموزش جامع ری اکت ReactJS</a>
                                            <a href="https://sabzlearn.ir/course/free-vuejs-training/">آموزش ویو جی اس</a>
                                            <a href="https://sabzlearn.ir/course/vscode-tutorial/">آموزش Vscode</a>
                                        </div>
                                    </div>

                                    {/* <!-- Python Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/python/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            پایتون
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/python/">دوره آموزش پایتون</a>
                                            <a href="https://sabzlearn.ir/course/applied-projects-with-python/">پروژه های
                                                کاربردی با پایتون</a>
                                            <a href="https://sabzlearn.ir/course/python-code-optimization/">بهینه نویسی کد
                                                ها در
                                                پایتون</a>
                                            <a href="https://sabzlearn.ir/course/django-ex/">آموزش جنگو</a>
                                            <a href="https://sabzlearn.ir/course/data-visualization-with-python/">مصور سازی
                                                داده
                                                با پایتون</a>
                                        </div>
                                    </div>

                                    {/* <!-- PHP Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/php/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            پی اچ پی
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/php/">آموزش جامع PHP</a>
                                            <a href="https://sabzlearn.ir/course/telegram-bot-php/">ربات تلگرام با PHP</a>
                                            <a href="https://sabzlearn.ir/course/applied-projects-with-php/">پروژه های
                                                کاربردی
                                                با PHP</a>
                                            <a href="https://sabzlearn.ir/course/zero-api/">درک مفاهیم api</a>
                                            <a href="https://sabzlearn.ir/course/php-api-dev/">api نویسی با PHP</a>
                                        </div>
                                    </div>

                                    {/* <!-- NodeJS Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/nodejs/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            نود جی اس
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/node-ex/">متخصص NodeJS</a>
                                            <a href="https://sabzlearn.ir/course/nestjs/">متخصص NestJS</a>
                                            <a href="https://sabzlearn.ir/course/telegram-bot-nodejs/">ربات تلگرام با
                                                NodeJS</a>
                                            <a href="https://sabzlearn.ir/course/api-dev-with-nodejs/">api نویسی با
                                                Nodejs</a>
                                            <a href="https://sabzlearn.ir/course/fastify/">آموزش فریمورک Fastify</a>
                                        </div>
                                    </div>

                                    {/* <!-- Wordpress Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/wordpress/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            وردپرس
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/wp-expert/">آموزش جامع توسعه وردپرس</a>
                                        </div>
                                    </div>

                                    {/* <!-- Skill Up Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/skill-up/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            Skill Up
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/git-github/">گیت و گیت‌هاب از صفر</a>
                                            <a href="https://sabzlearn.ir/course/psd-to-html/">طراحی رابط کاربری</a>
                                            <a href="https://sabzlearn.ir/course/seo/">آموزش سئو</a>
                                            <a href="https://sabzlearn.ir/course/figma/">آموزش فیگما</a>
                                            <a href="https://sabzlearn.ir/course/python-data-science/">علم داده با
                                                پایتون</a>
                                            <a href="https://sabzlearn.ir/course/solidity/">آموزش Solidity</a>
                                            <a href="https://sabzlearn.ir/course/scrum/">مبانی اسکرام و مدیریت پروژه</a>
                                            <a href="https://sabzlearn.ir/course/drawing-course/">طراحی و نقاشی</a>
                                            <a href="https://sabzlearn.ir/course/animation/">انیمیشن سازی</a>
                                            <a href="https://sabzlearn.ir/course/flutter/">آموزش Flutter</a>
                                            <a href="https://sabzlearn.ir/course/devops/">آموزش Devops</a>
                                            <a href="https://sabzlearn.ir/course/java/">آموزش Java</a>
                                            <a href="https://sabzlearn.ir/course/c/">آموزش C و ++C</a>
                                            <a href="https://sabzlearn.ir/course/design-patterns/">الگوهای طراحی نرم
                                                افزار</a>
                                            <a href="https://sabzlearn.ir/course/communication-skills/">مهارت‌های
                                                ارتباطی</a>
                                            <a href="https://sabzlearn.ir/course/production/">آموزش تولید محتوا</a>
                                        </div>
                                    </div>

                                    {/* <!-- Graphic Design Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/graphic-design/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            گرافیک و طراحی
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/photoshop/">آموزش فتوشاپ</a>
                                            <a href="https://sabzlearn.ir/course/illustrator/">آموزش ایلستریتور</a>
                                            <a href="https://sabzlearn.ir/course/premiere/">آموزش پریمیر</a>
                                            <a href="https://sabzlearn.ir/course/after-effect/">آموزش افترافکت</a>
                                        </div>
                                    </div>

                                    {/* <!-- Marketing Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/marketing/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            مارکتینگ
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/google-ads/">آموزش تبلیغات گوگل</a>
                                            <a href="https://sabzlearn.ir/course/digital-marketing/">آموزش دیجیتال
                                                مارکتینگ</a>
                                            <a href="https://sabzlearn.ir/course/instagram-marketing/">آموزش بازاریابی
                                                اینستاگرام</a>
                                            <a href="https://sabzlearn.ir/course/telegram-marketing/">آموزش بازاریابی
                                                تلگرام</a>
                                            <a href="https://sabzlearn.ir/course/marketing-strategy/">استراتژی بازاریابی</a>
                                        </div>
                                    </div>

                                    {/* <!-- Mobile Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/mobile/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            موبایل
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/android/">آموزش اندروید</a>
                                            <a href="https://sabzlearn.ir/course/flutter/">آموزش Flutter</a>
                                            <a href="https://sabzlearn.ir/course/react-native/">آموزش React Native</a>
                                            <a href="https://sabzlearn.ir/course/swift/">آموزش Swift</a>
                                        </div>
                                    </div>

                                    {/* <!-- Game Group --> */}
                                    <div className="group">
                                        <a href="https://sabzlearn.ir/course-cat/game/" className="flex items-center justify-between py-2.5 pr-3 pl-2.5 border-l-2 border-l-transparent group-hover:bg-sky-500/10 group-hover:text-sky-500 group-hover:border-l-sky-500 transition-all">
                                            بازی سازی
                                            <i className="fas fa-chevron-down rotate-90 size-4"></i>
                                        </a>
                                        <div className="group-hover:flex items-start absolute right-full top-0 bottom-0 hidden flex-col gap-y-3 w-56 pr-4 pl-2 border-y-[10px] border-l-8 border-transparent overflow-y-auto bg-zinc-50 dark:bg-gray-700 font-dana child:transition-colors hover:child:text-sky-500 rounded-l shadow app-scrollbar">
                                            <a href="https://sabzlearn.ir/course/unity/">آموزش Unity</a>
                                            <a href="https://sabzlearn.ir/course/unreal-engine/">آموزش Unreal Engine</a>
                                            <a href="https://sabzlearn.ir/course/game-design/">طراحی بازی</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="hover:text-primary transition font-medium">مقالات</a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-primary transition font-medium">تماس با ما</a>
                        </li>

                        {/* <!-- آیتم‌های منو... --> */}
                        {/* <!-- ... (بقیه آیتم‌ها رو اینجا بذار مثل دوره‌ها، مقالات، تماس با ما) --> */}
                    </ul>
                    {/* <!-- آیکن‌ها --> */}
                    <div className="flex items-center gap-6">

                        <button
                            onClick={toggleTheme}
                            aria-label="تغییر حالت شب/روز"
                            className="w-11 h-11 flex items-center justify-center rounded-full 
                bg-gray-200 dark:bg-gray-700 
                text-gray-800 dark:text-gray-100 
                hover:bg-gray-300 dark:hover:bg-gray-600 
                transition transform duration-300 hover:rotate-12 hover:scale-110"
                        >
                            {isDark ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>

                        <div className="flex items-center gap-4 text-xl">
                            <div className="relative group z-20" id="cart">
                                {/* <!-- Cart Button --> */}
                                <button
                                    id="cart-toggle"
                                    type="button"
                                    aria-label="سبد خرید"
                                    className="w-11 h-11 flex items-center justify-center rounded-full 
                bg-gray-200 dark:bg-gray-700 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-300 dark:hover:bg-gray-600 
                focus:outline-none focus:ring-2 focus:ring-primary 
                p-2 transition transform duration-300 hover:scale-110 hover:rotate-6"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                </button>

                                {/* <!-- Badge --> */}
                                <div id="cart-badge" className="absolute top-2.5 right-2.5 size-1.5 rounded-full bg-green-500"></div>

                                {/*  Dropdown  */}
                                <div id="cart-dropdown" className="absolute left-0 top-full pt-4 z-10 transition-all duration-300 
                opacity-0 scale-95 invisible 
                group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:visible">

                                    {/* Dropdown Content  */}
                                    <div className="w-80 xs:w-[362px] bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                                        {/*  Header  */}
                                        <div className="flex items-center justify-between px-5 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 mb-4 rounded-t-2xl">
                                            <span className="font-danaBold text-base">سبد خرید من</span>
                                            <span className="font-danaDemiBold text-sm text-slate-500 dark:text-gray-400">۲ دوره</span>
                                        </div>

                                        {/* Items  */}
                                        <div className="cart-body pl-5 pr-2.5 mr-2.5 space-y-3 max-h-64 overflow-y-auto direction-ltr child:direction-rtl">

                                            {/* آیتم ۱  */}
                                            <div className="cart-item flex items-start gap-x-3">
                                                <a href="https://sabzlearn.ir/course/contract-writing-techniques-for-programmers/" className="shrink-0">
                                                    <img className="h-12 w-20 rounded-md object-cover" src="https://sabzlearn.ir/wp-content/uploads/2025/07/25-1-300x169.webp" alt="تکنیک های قرارداد نویسی برای برنامه نویسان" />
                                                </a>
                                                <div className="flex flex-col justify-between text-xs sm:text-sm leading-relaxed">
                                                    <a href="https://sabzlearn.ir/course/contract-writing-techniques-for-programmers/" className="line-clamp-2 font-danaMedium text-gray-800 dark:text-gray-100">
                                                        تکنیک های قرارداد نویسی برای برنامه نویسان
                                                    </a>
                                                    <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400 mt-1">
                                                        <span className="font-danaMedium">۸۰۰,۰۰۰</span>
                                                        <span className="font-danaMedium text-xs">تومان</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 ml-auto mt-1 transition-colors"
                                                    onClick={() => sthe_remove_item_from_cart(84, "c32af14757")}
                                                >
                                                    <svg className="size-4">
                                                        <use href="#trash"></use>
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* آیتم ۲  */}
                                            <div className="cart-item flex items-start gap-x-3">
                                                <a href="https://sabzlearn.ir/course/design-pattern/" className="shrink-0">
                                                    <img className="h-12 w-20 rounded-md object-cover" src="https://sabzlearn.ir/wp-content/uploads/2025/07/4-1-300x169.webp" alt="آموزش جامع دیزاین پترن ها برای برنامه نویسان" />
                                                </a>
                                                <div className="flex flex-col justify-between text-xs sm:text-sm leading-relaxed">
                                                    <a href="https://sabzlearn.ir/course/design-pattern/" className="line-clamp-2 font-danaMedium text-gray-800 dark:text-gray-100">
                                                        آموزش جامع دیزاین پترن ها برای برنامه نویسان
                                                    </a>
                                                    <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400 mt-1">
                                                        <span className="font-danaMedium">۱,۲۰۰,۰۰۰</span>
                                                        <span className="font-danaMedium text-xs">تومان</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 ml-auto mt-1 transition-colors"
                                                    onClick={() => sthe_remove_item_from_cart(78, "4228c4fd48")}
                                                >
                                                    <svg className="size-4">
                                                        <use href="#trash"></use>
                                                    </svg>
                                                </button>

                                            </div>

                                        </div>

                                        {/* Footer  */}
                                        <div className="mt-5 px-5 pb-5">
                                            <div className="flex items-center justify-between border-t border-neutral-200 dark:border-white/10 pt-4 mb-4">
                                                <span className="text-sm text-gray-700 dark:text-gray-300">مبلغ قابل پرداخت:</span>
                                                <span className="text-lg font-danaDemiBold text-gray-900 dark:text-white">
                                                    ۱,۹۰۰,۰۰۰ <span className="text-base font-danaMedium">تومان</span>
                                                </span>
                                            </div>
                                            <a href="https://sabzlearn.ir/cart" className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl transition-colors font-danaBold text-sm">
                                                مشاهده سبد خرید
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="relative group hidden md:block z-50" id="user-profile">

                                <button
                                    type="button"
                                    aria-label="حساب کاربری"
                                    className="w-11 h-11 flex items-center justify-center rounded-full
                bg-gray-200 dark:bg-gray-700 
                text-gray-800 dark:text-gray-100
                hover:bg-gray-300 dark:hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-primary
                transition transform duration-300 hover:scale-110 hover:rotate-6"
                                >
                                    <User className="w-5 h-5" />
                                </button>

                                <div className="absolute -left-10 top-full pt-3 z-10 transition-all duration-300 
                        opacity-0 invisible translate-y-2 
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" id="user-profile-dropdown">
                                    <div className="w-64 bg-white dark:bg-gray-800 p-4 pb-3 rounded-lg shadow-lg">
                                        {/* User Info  */}
                                        <div className="flex items-center border-b border-neutral-200 dark:border-white/5 pb-3 mb-2">
                                            <a href="https://sabzlearn.ir/my-account" className="shrink-0">
                                                <img src="https://secure.gravatar.com/avatar/221d58ad75e354575e6ded2ee3a6e1a2?s=96&amp;d=mm&amp;r=g" alt="مجتبی احمدزاده" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                                            </a>
                                            <div className="mr-3 flex flex-col gap-y-1 overflow-hidden">
                                                <span className="font-danaDemiBold text-sm truncate">مجتبی احمدزاده</span>
                                                <span className="text-[10px] font-danaMedium text-green-500">موجودی: 0 <span className="slms-price_symbol">تومان</span></span>
                                            </div>
                                        </div>

                                        <a href="https://sabzlearn.ir/my-account" className="flex items-center gap-1.5 px-2.5 h-10 rounded-lg text-sm hover:bg-green-500 hover:text-white ">
                                            <i className="fas fa-home text-sm"></i> پیشخوان
                                        </a>

                                        <a href="https://sabzlearn.ir/my-account/courses" className="flex items-center gap-1.5 px-2.5 h-10 rounded-lg text-sm hover:bg-green-500 hover:text-white ">
                                            <i className="fas fa-folder-open text-sm"></i> دوره های من
                                        </a>

                                        <a href="https://sabzlearn.ir/my-account/tickets" className="flex items-center gap-1.5 px-2.5 h-10 rounded-lg text-sm hover:bg-green-500 hover:text-white ">
                                            <i className="fas fa-comments text-sm"></i> تیکت های من
                                        </a>

                                        <a href="https://sabzlearn.ir/my-account/edit-account" className="flex items-center gap-1.5 px-2.5 h-10 rounded-lg text-sm hover:bg-green-500 hover:text-white ">
                                            <i className="fas fa-user-cog text-sm"></i> جزئیات حساب
                                        </a>


                                        <div className="mt-3 pt-2 border-t border-neutral-200 dark:border-white/5">
                                            <a href="https://sabzlearn.ir/logout" className="flex items-center gap-1.5 px-2.5 h-10 rounded-lg text-sm hover:bg-red-500 hover:text-white">
                                                <i className="fas fa-sign-out-alt text-sm"></i> خروج
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/login"
                                aria-label="ورود و عضویت"
                                className="hidden md:flex items-center gap-2 px-4 py-2 
                rounded-lg font-medium text-sm text-white 
                bg-green-600 hover:bg-green-700 
                dark:bg-green-500 dark:hover:bg-green-400 
                transition duration-200 ease-in-out shadow-md
                hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <User className="w-4 h-4" aria-hidden="true" />
                                <span className="whitespace-nowrap">ورود | عضویت</span>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar