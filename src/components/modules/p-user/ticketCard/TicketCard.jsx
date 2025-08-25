import React from 'react'

function TicketCard() {
    return (
        <>
            {/* <!-- Single ticket item --> */}
            <div className="p-5 border border-gray-300 hover:border-blue-600 rounded-md transition-transform hover:-translate-x-1 bg-white dark:bg-gray-800 dark:border-gray-700">

                {/* Ticket header: title & details button */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 w-full">
                        <div className="w-6 h-6 bg-secondary rounded-full shrink-0"></div>
                        <a
                            href="/tickets/19329"
                            className="text-base max-w-xs line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            مشکل در دیدن ویدیو
                        </a>
                    </div>
                    <a
                        href="/tickets/19329"
                        className="btn-sm btn-outline-primary flex items-center gap-1 shrink-0"
                    >
                        <span className="hidden max-sm:inline">مشاهده جزییات</span>
                        <i className="fas fa-arrow-left" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                    </a>
                </div>

                {/* Ticket metadata: number, department, date, status */}
                <div className="flex flex-wrap gap-x-8 gap-y-3.5 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2 select-none">
                        <i className="fas fa-folder-minus" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                        <span>شماره تیکت:</span>
                        <span className="text-blue-600 dark:text-blue-400">19329</span>
                    </div>
                    <div className="flex items-center gap-2 select-none">
                        <i className="fas fa-file-alt" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                        <span>دپارتمان:</span>
                        <span className="text-blue-600 dark:text-blue-400">پشتیبانی</span>
                    </div>
                    <div className="flex items-center gap-2 select-none">
                        <i className="fas fa-clock" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                        <span>تاریخ ثبت:</span>
                        <time dateTime="2025-05-01T09:48:25.000Z" className="text-blue-600 dark:text-blue-400">
                            ۱۱ اردیبهشت ۱۴۰۴
                        </time>
                    </div>
                    <div className="flex items-center gap-2 select-none">
                        <i className="fas fa-redo-alt" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                        <span>وضعیت:</span>
                        <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">بسته شده</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketCard