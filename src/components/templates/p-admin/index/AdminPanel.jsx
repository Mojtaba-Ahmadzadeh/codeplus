import React from "react"

// Local Components
import Sidebar from "@/components/modules/p-admin/sidebar/Sidebar"
import Topbar from "@/components/modules/p-admin/topbar/Topbar"
import SalesChart from "./SalesChart"
import Box from "./Box"
import BreadCrumb from "./BreadCrumb"

function AdminPanel() {
    return (
        <div className="flex min-h-screen">

            {/* === Sidebar Section === */}
            <Sidebar />
            <div id="sidebarOverlay"></div>

            {/* === Main Content Section === */}
            <div className="flex-1 w-full pr-0 md:pr-64">

                {/* === Header / Topbar === */}
                <Topbar />

                <main className="pt-20 p-6">

                    {/* Breadcrumb Navigation */}
                    <BreadCrumb />

                    {/* Dashboard Statistic Boxes */}
                    <Box />

                    {/* Sales Chart Section */}
                    <SalesChart />

                    {/* Recent Messages Section */}
                    <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-8xl mx-auto">
                        <h2 className="text-lg font-bold mb-4">📨 پیام‌های جدید</h2>

                        <ul className="space-y-4 max-h-48 overflow-y-auto">

                            {/* Message Item */}
                            <li className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/40?u=1"
                                    alt="user1"
                                    className="rounded-full w-10 h-10 ring-2 ring-indigo-500"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">مهدی</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                        سلام، لطفا گزارش فروش ماه رو ارسال کنید.
                                    </p>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                                    ۵ دقیقه پیش
                                </span>
                            </li>

                            {/* Message Item */}
                            <li className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/40?u=2"
                                    alt="user2"
                                    className="rounded-full w-10 h-10 ring-2 ring-green-500"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">سارا</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                        مشکل ورود به حساب کاربری داشتم.
                                    </p>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                                    ۲۰ دقیقه پیش
                                </span>
                            </li>

                            {/* Message Item */}
                            <li className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/40?u=3"
                                    alt="user3"
                                    className="rounded-full w-10 h-10 ring-2 ring-pink-500"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">علیرضا</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                        درخواست اضافه شدن ویژگی جدید.
                                    </p>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                                    ۱ ساعت پیش
                                </span>
                            </li>

                        </ul>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AdminPanel
