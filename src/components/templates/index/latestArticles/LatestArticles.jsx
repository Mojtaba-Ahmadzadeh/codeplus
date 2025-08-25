import React from 'react'
import Article from './article/Article'

function LatestArticles() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-25 sm:mt-40">

            <div className="flex sm:items-end justify-between flex-col sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13 ">
                <div className="flex flex-col items-start gap-y-2.5">
                    <h3 className="section-head__title relative font-kalameh text-base md:text-lg text-gray-700 dark:text-gray-400">
                        آخـــرین مقالات ما</h3>
                    <p className="font-kalamehSemiBold text-xl md:text-2xl">مقاله های بروز برنامه نویسی و تکنولوژی</p>
                </div>
                <a href="https://sabzlearn.ir/courses/" className="flex items-center gap-x-1.5 py-1 text-gray-700 dark:text-gray-400 hover:text-green-500 self-end transition-all">
                    <span className="text-sm font-kalamehMedium">همه دوره‌ها</span>
                    <svg className="size-5">
                        <use href="#arrow-up-left-mini"></use>
                    </svg>
                </a>
            </div>

            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                <Article />
                <Article />
                <Article />
                <Article />
            </div>

        </section>
    )
}

export default LatestArticles