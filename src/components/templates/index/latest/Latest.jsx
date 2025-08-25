import Course from '@/components/modules/course/Course'
import React from 'react'

function Latest() {

    const courses = [
        {
            slug: "reactjs",
            title: "آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]",
            description: "حدود 99 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت ReactJS این کتابخانه قدرتمند…",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/58-1-768x432.webp",
            teacher: "محمدامین سعیدی راد",
            rating: "5.0",
            students: 2581,
            price: "1,875,000",
            oldPrice: "6,250,000",
            offer: "70%"
        },
        {
            slug: "blackJavaScript",
            title: "آموزش Next.js از صفر تا پیشرفته",
            description: "یاد بگیرید چطور با Next.js اپلیکیشن‌های حرفه‌ای بسازید و توسعه دهید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/59-1-768x432.webp",
            teacher: "امیر طاهرخانی",
            rating: "5.0",
            students: 1980,
            price: "2,000,000",
            oldPrice: "5,000,000",
            offer: "60%"
        },
        {
            slug: "vuejs",
            title: "آموزش Vue.js برای طراحی رابط کاربری",
            description: "با Vue.js رابط‌های کاربری زیبا و تعاملی بسازید و پروژه‌های واقعی را پیاده کنید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/60-1-768x432.webp",
            teacher: "سارا احمدی",
            rating: "4.9",
            students: 1532,
            price: "1,700,000",
            oldPrice: "4,500,000",
            offer: "62%"
        },
        {
            slug: "nodejs",
            title: "آموزش Node.js و توسعه Backend",
            description: "با Node.js برنامه‌های سمت سرور بسازید و API های حرفه‌ای طراحی کنید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/61-1-768x432.webp",
            teacher: "حسین رضایی",
            rating: "4.8",
            students: 1420,
            price: "2,200,000",
            oldPrice: "5,500,000",
            offer: "60%"
        },
        {
            slug: "python",
            title: "آموزش Python برای علم داده",
            description: "با Python داده‌ها را تحلیل و مصورسازی کنید و پروژه‌های واقعی اجرا کنید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/62-1-768x432.webp",
            teacher: "مریم کریمی",
            rating: "5.0",
            students: 2001,
            price: "2,000,000",
            oldPrice: "5,000,000",
            offer: "60%"
        },
        {
            slug: "django",
            title: "آموزش Django برای وب اپلیکیشن‌های قدرتمند",
            description: "با Django وب اپلیکیشن‌های مقیاس‌پذیر و امن بسازید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/33-1-768x432.webp",
            teacher: "امیر طاهرخانی",
            rating: "4.9",
            students: 1350,
            price: "2,100,000",
            oldPrice: "5,200,000",
            offer: "60%"
        },
        {
            slug: "flask",
            title: "آموزش Flask برای توسعه وب سبک",
            description: "با Flask اپلیکیشن‌های کوچک و سریع بسازید و یادگیری سریع داشته باشید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/64-1-768x432.webp",
            teacher: "سارا احمدی",
            rating: "4.8",
            students: 1205,
            price: "1,500,000",
            oldPrice: "4,000,000",
            offer: "62%"
        },
        {
            slug: "php-mysql",
            title: "آموزش PHP و MySQL برای توسعه فول استک",
            description: "ساخت وبسایت‌های پویا و مدیریت داده با PHP و MySQL.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/65-1-768x432.webp",
            teacher: "حسین رضایی",
            rating: "5.0",
            students: 1480,
            price: "1,600,000",
            oldPrice: "4,200,000",
            offer: "62%"
        },
        {
            slug: "wordpress",
            title: "آموزش طراحی سایت با WordPress",
            description: "با وردپرس سایت‌ها و قالب‌های حرفه‌ای بسازید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/66-1-768x432.webp",
            teacher: "محمدامین سعیدی راد",
            rating: "5.0",
            students: 2580,
            price: "1,900,000",
            oldPrice: "5,000,000",
            offer: "62%"
        },
        {
            slug: "laravel",
            title: "آموزش Laravel برای توسعه PHP",
            description: "با لاراول پروژه‌های PHP حرفه‌ای بسازید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/67-1-768x432.webp",
            teacher: "امیر طاهرخانی",
            rating: "4.9",
            students: 1320,
            price: "2,200,000",
            oldPrice: "5,500,000",
            offer: "60%"
        },
        {
            slug: "flutter",
            title: "آموزش Flutter برای اپلیکیشن موبایل",
            description: "اپلیکیشن‌های iOS و Android بسازید و منتشر کنید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/68-1-768x432.webp",
            teacher: "سارا احمدی",
            rating: "5.0",
            students: 1980,
            price: "2,000,000",
            oldPrice: "5,000,000",
            offer: "60%"
        },
        {
            slug: "telegram-bot",
            title: "آموزش ساخت ربات تلگرام با Python",
            description: "یک ربات تلگرام حرفه‌ای بسازید و خودکارسازی کنید.",
            image: "https://sabzlearn.ir/wp-content/uploads/2025/07/69-1-768x432.webp",
            teacher: "مریم کریمی",
            rating: "5.0",
            students: 1520,
            price: "1,600,000",
            oldPrice: "4,000,000",
            offer: "60%"
        }
    ];

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