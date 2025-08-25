import React from 'react'
import CartSection from './CartSection'
import PaymentDetails from './PaymentDetails'

function ShoppingCart() {
    return (
        <>
            <section className="grid grid-cols-12 gap-y-8 gap-x-8 lg:gap-x-10">
                {/* <!-- بخش اصلی سبد خرید --> */}
                <section className="col-span-12 md:col-span-8 space-y-6">
                    <CartSection />
                    {/* <!-- بخش هدایا --> */}
                    <div className="rounded-xl overflow-hidden shadow-md dark:shadow-gray-700">
                        <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
                            <div className="flex items-center gap-x-3">
                                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 20V4" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>هدیه سبزلرن</span>
                            </div>
                        </header>

                        <div className="bg-white dark:bg-gray-800 p-5">
                            <p className="text-sm mb-3">
                                با خرید از سبزلرن یک هدیه ویژه دریافت کنید!
                            </p>
                            <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 transition">
                                مشاهده هدیه
                            </button>
                        </div>
                    </div>
                </section>

                <PaymentDetails />

            </section>
        </>
    )
}

export default ShoppingCart