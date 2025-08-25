"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ correct import for modules
import "swiper/css";
import "swiper/css/navigation";

export default function newCourses() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 pt-25 md:pt-40">
            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13">
                <div className="flex flex-col items-start gap-y-2.5">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        جدیدتریــن ها
                    </h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">
                        دوره‌های جدید، فرصت‌های نو
                    </p>
                </div>

                <div className="flex justify-end gap-4 mb-4">
                    <button id="swiper-prev" className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                        قبلی
                    </button>
                    <button id="swiper-next" className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                        بعدی
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]} // اضافه کردن Autoplay
                navigation={{
                    prevEl: "#swiper-prev",
                    nextEl: "#swiper-next",
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{
                    delay: 3000, // هر 3 ثانیه اسلاید بعدی
                    disableOnInteraction: false, // کاربر هم میتونه اسلاید رو عوض کنه
                }}
                loop={true} // برای / برای تکرار بی‌نهایت
            >
                {/* اسلاید 1 */}
                <SwiperSlide>
                    <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                        <a href="#" className="block aspect-[16/9] rounded-xl overflow-hidden">
                            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp" alt="دوره 1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </a>
                        <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                            <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                    آموزش جامع توسعه وردپرس
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است...
                            </p>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                    <a href="#" className="hover:underline">امیر طاهرخانی</a>
                                </div>
                                <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-white/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                    86 دانشجو
                                </span>
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">5,000,000 تومان</span>
                                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                        4,000,000 <span className="font-danaMedium text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* اسلاید 2 */}
                <SwiperSlide>
                    <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                        <a href="#" className="block aspect-[16/9] rounded-xl overflow-hidden">
                            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp" alt="دوره 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </a>
                        <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                            <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                    آموزش مقدماتی جاوااسکریپت
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                یادگیری جاوااسکریپت برای ورود به دنیای وب ضروری است...
                            </p>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                    <a href="#" className="hover:underline">سارا رضایی</a>
                                </div>
                                <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-white/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                    120 دانشجو
                                </span>
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">3,500,000 تومان</span>
                                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                        2,800,000 <span className="font-danaMedium text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                        <a href="#" className="block aspect-[16/9] rounded-xl overflow-hidden">
                            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp" alt="دوره 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </a>
                        <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                            <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                    آموزش مقدماتی جاوااسکریپت
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                یادگیری جاوااسکریپت برای ورود به دنیای وب ضروری است...
                            </p>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                    <a href="#" className="hover:underline">سارا رضایی</a>
                                </div>
                                <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-white/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                    120 دانشجو
                                </span>
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">3,500,000 تومان</span>
                                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                        2,800,000 <span className="font-danaMedium text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                        <a href="#" className="block aspect-[16/9] rounded-xl overflow-hidden">
                            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp" alt="دوره 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </a>
                        <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                            <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                    آموزش مقدماتی جاوااسکریپت
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                یادگیری جاوااسکریپت برای ورود به دنیای وب ضروری است...
                            </p>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                    <a href="#" className="hover:underline">سارا رضایی</a>
                                </div>
                                <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-white/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                    120 دانشجو
                                </span>
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">3,500,000 تومان</span>
                                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                        2,800,000 <span className="font-danaMedium text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300">
                        <a href="#" className="block aspect-[16/9] rounded-xl overflow-hidden">
                            <img src="https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp" alt="دوره 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </a>
                        <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                            <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                                <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                                    آموزش مقدماتی جاوااسکریپت
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                یادگیری جاوااسکریپت برای ورود به دنیای وب ضروری است...
                            </p>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex items-center gap-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
                                    <a href="#" className="hover:underline">سارا رضایی</a>
                                </div>
                                <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-white/20"></div>
                            <div className="flex justify-between items-end">
                                <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 text-sm">
                                    120 دانشجو
                                </span>
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 dark:text-gray-500 line-through">3,500,000 تومان</span>
                                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                                        2,800,000 <span className="font-danaMedium text-sm">تومان</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}
