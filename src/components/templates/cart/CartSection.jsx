import React from 'react'

function CartSection() {
  return (
    <div className="rounded-xl overflow-hidden shadow-md dark:shadow-gray-700">
      <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
        <div className="flex items-center gap-x-3">
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3h18l-1.68 9.39a3 3 0 01-3 2.61H9.68a3 3 0 01-3-2.61L5 6H3" strokeLinecap="round" strokeLinejoin="round"></path>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
          </svg>
          <span>سبد خرید</span>
        </div>
      </header>

      <div className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" style={{ minHeight: '300px' }}>
        {/* <!-- آیتم اول --> */}
        <article className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-5">
          <a href="#" className="relative w-full sm:w-auto block rounded-xl overflow-hidden">
            <button className="absolute top-1 right-1 p-1 text-red-500 hover:text-red-700 z-10" aria-label="حذف">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd"></path>
              </svg>
            </button>
            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/25-1-300x169.webp" alt="تکنیک های قرارداد نویسی" className="w-full sm:w-48 rounded-xl object-cover aspect-video" />
          </a>
          <div className="flex-1 flex flex-col max-w-xl">
            <a href="#" className="text-base font-medium line-clamp-2" title="تکنیک های قرارداد نویسی برای برنامه نویسان">تکنیک های قرارداد نویسی برای برنامه نویسان</a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 mt-1">محمدامین سعیدی راد</a>
          </div>
          <div className="flex items-center gap-x-5 mt-3 sm:mt-0 whitespace-nowrap">
            <span className="text-green-600 font-semibold text-lg">800,000 <span className="text-base font-normal">تومان</span></span>
            <button className="hidden sm:flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500" aria-label="حذف">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </article>

        {/* <!-- آیتم دوم --> */}
        <article className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-5">
          <a href="#" className="relative w-full sm:w-auto block rounded-xl overflow-hidden">
            <button className="absolute top-1 right-1 p-1 text-red-500 hover:text-red-700 z-10" aria-label="حذف">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd"></path>
              </svg>
            </button>
            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/4-1-300x169.webp" alt="آموزش جامع دیزاین پترن ها" className="w-full sm:w-48 rounded-xl object-cover aspect-video" />
          </a>
          <div className="flex-1 flex flex-col max-w-xl">
            <a href="#" className="text-base font-medium line-clamp-2" title="آموزش جامع دیزاین پترن ها برای برنامه نویسان">آموزش جامع دیزاین پترن ها برای برنامه نویسان</a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 mt-1">محمدامین سعیدی راد</a>
          </div>
          <div className="flex items-center gap-x-5 mt-3 sm:mt-0 whitespace-nowrap">
            <span className="text-green-600 font-semibold text-lg">1,200,000 <span className="text-base font-normal">تومان</span></span>
            <button className="hidden sm:flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500" aria-label="حذف">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>

  )
}

export default CartSection