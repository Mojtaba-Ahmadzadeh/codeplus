import Sidebar from '@/components/modules/p-admin/sidebar/Sidebar'
import Topbar from '@/components/modules/p-admin/topbar/Topbar'
import React from 'react'

function Users() {
    return (
        <>
            <div className="flex min-h-screen">

                {/* === Sidebar Section === */}
                <Sidebar />
                <div id="sidebarOverlay"></div>

                {/* === Main Content Section === */}
                <div className="flex-1 w-full pr-0 md:pr-64">

                    {/* === Header / Topbar === */}
                    <Topbar />

                    <main className="pt-20 p-6">

                        <div className="container mx-auto px-4 py-6">
                            <h1 className="text-xl font-bold mb-6 text-gray-700 dark:text-gray-100">لیست کاربران</h1>

                            <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-md rounded-xl">
                                <table className="min-w-full text-sm text-right">
                                    {/* <!-- Table Head --> */}
                                    <thead className="bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                                        <tr>
                                            <th className="px-4 py-3">شناسه</th>
                                            <th className="px-4 py-3">نام و نام خانوادگی</th>
                                            <th className="px-4 py-3">ایمیل</th>
                                            <th className="px-4 py-3">نقش</th>
                                            <th className="px-4 py-3">ویرایش</th>
                                            <th className="px-4 py-3">تغییر سطح</th>
                                            <th className="px-4 py-3">حذف</th>
                                            <th className="px-4 py-3">بن</th>
                                        </tr>
                                    </thead>

                                    {/* <!-- Table Body --> */}
                                    <tbody className="text-gray-700 dark:text-gray-200">
                                        <tr className="border-b dark:border-gray-700">
                                            <td className="px-4 py-3">1</td>
                                            <td className="px-4 py-3">علی رضایی</td>
                                            <td className="px-4 py-3">ali@example.com</td>
                                            <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-semibold">کاربر عادی</td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">ویرایش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">تغییر نقش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">حذف</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800">بن</button>
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-gray-700">
                                            <td className="px-4 py-3">2</td>
                                            <td className="px-4 py-3">زهرا محمدی</td>
                                            <td className="px-4 py-3">zahra@example.com</td>
                                            <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">مدیر</td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">ویرایش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">تغییر نقش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">حذف</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800">بن</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-4 py-3">3</td>
                                            <td className="px-4 py-3">مهدی حسینی</td>
                                            <td className="px-4 py-3 text-gray-400 dark:text-gray-500 italic">ایمیل یافت نشد</td>
                                            <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-semibold">کاربر عادی</td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">ویرایش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">تغییر نقش</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">حذف</button>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800">بن</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default Users