"use client"
import { useRouter } from "next/navigation";
import React from "react";

function Course({ course }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/course/${course.slug}`);
    };

    return (
        <div
            className="course flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg transition-colors duration-300 cursor-pointer"
            onClick={handleClick} // وقتی روی کل کارت کلیک شد
        >
            {/* تصویر دوره */}
            <div className="block aspect-[16/9] rounded-xl overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* محتوا */}
            <div className="flex flex-col justify-between flex-grow px-5 pt-5 pb-4 space-y-3">
                {/* عنوان */}
                <h3 className="font-danaDemiBold text-base sm:text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                    {course.title}
                </h3>

                {/* توضیح */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {course.description}
                </p>

                {/* مدرس و امتیاز */}
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="flex items-center gap-x-1 text-green-600 dark:text-green-400">
                        {course.teacher}
                    </div>
                    <div className="flex items-center gap-x-1 text-amber-500 font-danaMedium">
                        <span>{course.rating}</span>
                    </div>
                </div>

                {/* دانشجو و قیمت */}
                <div className="flex justify-between items-end">
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {course.students} دانشجو
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-danaDemiBold text-base">
                        {course.price} تومان
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Course;
