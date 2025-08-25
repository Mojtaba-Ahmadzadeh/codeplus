import Link from "next/link";

export default function Sidebar() {
    return (
        <aside id="sidebar" className="fixed top-0 right-0 bottom-0 z-50
    w-[260px] sm:w-[280px] md:w-[265px] lg:w-[280px]
    bg-white dark:bg-gray-800
    shadow-lg
    overflow-y-auto
    px-7 py-5
    max-md:transition-all max-md:duration-300
    md:border-l md:border-l-black-10
    lg:sticky lg:top-5 lg:h-max
    lg:rounded-lg
    translate-x-full md:translate-x-0
    max-md:fixed max-md:right-0 max-md:top-0 max-md:bottom-0
    max-md:bg-white max-md:dark:bg-gray-800
    max-md:shadow-lg max-md:z-50
    max-md:w-[260px]
    max-md:overflow-y-auto">

            {/* <!-- User info header --> */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-light dark:border-b-gray-700">
                <div className="flex items-center gap-x-2">
                    <img className="size-11 rounded-full" src="https://secure.gravatar.com/avatar/221d58ad75e354575e6ded2ee3a6e1a2?s=96&amp;d=mm&amp;r=g" loading="lazy" alt="avatar" />
                    <div className="flex flex-col text-label">
                        <span className="font-demibold max-w-28 truncate select-none text-black dark:text-white">مجتبی</span>
                        <span className="font-regular text-secondary dark:text-gray-400" data-clarity-mask="true">09167578037</span>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <button className="flex items-center justify-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <i className="fa-solid fa-gear size-4.5" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                    </button>
                    <button className="flex items-center justify-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <i className="fa-solid fa-right-from-bracket size-4.5" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                    </button>
                </div>
            </div>

            {/* <!-- Quick access links --> */}
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2.5">
                    <span className="text-label text-secondary dark:text-gray-400 font-regular select-none">دسترسی
                        سریع</span>
                    <div className="flex flex-col gap-y-2">
                        <a href="/" aria-current="page" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors font-semibold relative">
                            <i className="fa-solid fa-house
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">خانه</span>
                        </a>
                        <a href="/courses" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-bolt
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">دوره های من</span>
                        </a>
                        <a href="/transactions" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-wallet
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">اشتراک و تراکنش‌ها</span>
                        </a>
                        <a href="/tickets" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-message
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">تیکت ها</span>
                        </a>
                        <a href="/p-user/questions" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-question
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">پرسش و پاسخ ها</span>
                        </a>
                        <a href="" className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-bars-progress
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">مشاوره های من</span>
                        </a>
                    </div>
                </div>

                {/* <!-- Premium section --> */}
                <div className="flex flex-col gap-y-2.5">
                    <span className="text-label text-secondary dark:text-gray-400 font-regular select-none">سبزلـرن پرمیوم -
                        بزودی</span>
                    <div className="flex flex-col gap-y-2">
                        <button className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-box
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">دوره های ویژه</span>
                        </button>
                        <button className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-brands fa-youtube
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">وبینار های من</span>
                        </button>
                        <button className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-lightbulb
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">سبزبات (Ai)</span>
                        </button>
                        <button className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-microphone
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">پادکست ها</span>
                        </button>
                        <button className="flex items-center gap-x-2.5 py-1.5 group
                        text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500
                        transition-colors">
                            <span className="active-badge block w-0.5 h-5 ml-1 rounded-full bg-transparent"></span>
                            <i className="fa-solid fa-tv
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                            <span className="text-caption
                            text-gray-700 dark:text-gray-300
                            group-hover:text-green-500 dark:group-hover:text-green-500
                            transition-colors">سبزلرن TV</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
