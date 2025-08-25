import React from 'react'

function RecentlyViewedBox() {
    return (
        <div className="col-span-6 sm:col-span-4 xl:col-span-3 shadow-normal overflow-hidden group rounded-md bg-white dark:bg-gray-700 transition-colors duration-300">

            {/* <!-- Video thumbnail with play button overlay --> */}
            <div className="relative aspect-video overflow-hidden rounded-md">
                <div className="absolute inset-0 flex items-center justify-center rounded-md z-20 bg-black/30">
                    <a
                        href="https://sabzlearn.ir/lesson/45-29216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-10 xs:size-12 xl:size-15"
                    >
                        <span
                            className="iconify i-bold:play size-full text-white dark:text-white/80"
                            aria-hidden="true"
                            style={{ fontSize: '1rem' }}
                        ></span>
                    </a>
                </div>
                <img
                    className="size-full rounded-md group-hover:scale-105 transition-all"
                    src="https://sabzlearn.ir/wp-content/uploads/2025/07/29-1-768x432.webp"
                    alt="آموزش Next.js بصورت پروژه محور"
                />
            </div>

            {/* <!-- Course title and progress bar --> */}
            <div className="p-3">
                {/* <!-- Course title --> */}
                <div className="pb-4 mb-4 border-b border-gray-300 dark:border-gray-600">
                    <a
                        href="https://sabzlearn.ir/lesson/45-29216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-label xl:text-caption h-12 xl:h-14 line-clamp-2 text-black dark:text-white"
                    >
                        آموزش Next.js بصورت پروژه محور
                    </a>
                </div>

                {/* <!-- Progress bar --> */}
                <div className="flex items-center justify-center gap-x-1 text-brand">
                    <div className="w-17 shrink-0 text-label font-light select-none text-black dark:text-white">
                        91% مشاهده
                    </div>
                    <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div className="bg-brand h-full rounded-full" style={{ width: '91%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentlyViewedBox
