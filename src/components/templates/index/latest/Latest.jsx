import Course from '@/components/modules/course/Course'
import React from 'react'
import { courses } from '@/courses/data'

function Latest() {

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13">
                <div className="flex flex-col items-start gap-y-2.5">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        آخـــرین دوره‌های ما</h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">سکوی پرتاپ شما به سمت موفقیت</p>
                </div>
                <a href="https://sabzlearn.ir/courses/" className="flex items-center gap-x-1.5 py-1 text-gray-700 dark:text-gray-400 hover:text-green-500 self-end transition-all">
                    <span className="text-sm font-kalamehMedium">همه دوره‌ها</span>
                    <svg className="size-5">
                        <use href="#arrow-up-left-mini"></use>
                    </svg>
                </a>
            </div>

            {/* <!-- Wrapper گرید --> */}
            <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {
                    courses.map(course => (
                        <Course key={course.slug} course={course} />
                    ))
                }
            </div>


        </section>
    )
}

export default Latest