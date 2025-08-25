import React from 'react'

function TransactionCard() {
    return (
        <>
            {/* <!-- ردیف ۱ --> */}
            < tr className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white rounded-md" >
                <td className="px-2 py-2 md:px-3 md:py-3 font-mono">#3847</td>
                <td className="px-2 py-2 md:px-3 md:py-3">خرید اشتراک سبزلرن</td>
                <td className="hidden sm:table-cell px-2 py-2 md:px-3 md:py-3">۱۴۰۳/۰۵/۰۷</td>
                <td className="px-2 py-2 md:px-3 md:py-3 text-red-500 font-semibold">−۳۰٬۰۰۰ تومان</td>
                <td className="hidden md:table-cell px-2 py-2 md:px-3 md:py-3">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                        موفق
                    </span>
                </td>
            </tr >
        </>

    )
}

export default TransactionCard