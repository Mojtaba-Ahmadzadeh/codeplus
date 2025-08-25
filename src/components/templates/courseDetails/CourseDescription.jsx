"use client"
import React, { useState } from "react";

function CourseDescription() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4.5 sm:p-5 mt-8">
      {/* Header */}
      <div className="flex items-center justify-start gap-x-2 mb-5 sm:mb-6 relative">
        <span className="absolute -right-6 sm:-left-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-l-sm"></span>
        <i className="fas fa-file-alt text-amber-400 text-[38px] hidden md:inline-block"></i>
        <div className="font-kalamehSemiBold text-xl md:text-2xl">توضیحات</div>
      </div>

      {/* Description content */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-4.5 sm:p-5 mt-8">
        <div
          className={`course-content wp-content transition-all duration-300 ${
            showDescription ? "max-h-[1200px]" : "max-h-[900px] overflow-hidden"
          }`}
        >
          {/* Course content starts */}
          <p>
            <img
              decoding="async"
              loading="lazy"
              className="alignnone size-full wp-image-6291"
              src="https://sabzlearn.ir/wp-content/uploads/2025/04/TELE.webp"
              alt="Course"
              width="1920"
              height="1080"
            />
          </p>

          <h2>دوره ساخت ربات تلگرامی با پایتون</h2>
          <p>
            این دوره به شما کمک می‌کند یک دستیار ربات تلگرامی بسازید که کارهای روزمره شما را خودکار انجام دهد و زمان ارزشمندتان را ذخیره کند.
          </p>

          <h2>چه مطالبی در این دوره یاد می‌گیرید؟</h2>
          <ul>
            <li>مقدمات و نصب ابزارهای مورد نیاز</li>
            <li>آشنایی با API تلگرام و کتابخانه‌ها</li>
            <li>ساخت ربات‌های ساده و تعاملی</li>
            <li>پیاده‌سازی دستورات و پاسخ به پیام‌ها</li>
            <li>کار با دکمه‌های تعاملی و Inline Keyboard</li>
            <li>ساخت ربات‌های کاربردی مانند ربات یادآوری، ربات خبری و ربات مدیریت گروه</li>
            <li>ساخت ربات مینی اپ</li>
            <li>اتصال ربات به دیتابیس و مدیریت کاربران</li>
            <li>پیاده‌سازی پروژه عملی و واقعی برای تمرین</li>
          </ul>

          <h2>ربات تلگرامی چیست؟</h2>
          <p>
            ربات تلگرامی یک برنامه خودکار است که می‌تواند پیام‌ها را مدیریت کند، گروه‌ها را اداره کند و به طور خودکار پاسخ دهد.
          </p>

          <h2>مخاطبان دوره</h2>
          <p>
            همه علاقه‌مندان به برنامه‌نویسی با پایتون و توسعه ربات‌های تلگرامی. حتی مبتدی‌ها می‌توانند از این دوره استفاده کنند.
          </p>

          <h2>مزایای شرکت در دوره</h2>
          <p>
            شرکت در این دوره مهارت شما در ساخت ربات‌های کاربردی را افزایش می‌دهد و فرصت‌های درآمدزایی را باز می‌کند.
          </p>

          <h2>نکات تکمیلی برای بهترین نتیجه</h2>
          <p>
            تمرین مستمر، اجرای پروژه‌های کوچک، یادداشت برداری و کمک گرفتن از تیم پشتیبانی بهترین روش‌ها برای موفقیت هستند.
          </p>

          <h2>درآمدزایی از مهارت ساخت ربات</h2>
          <p>
            با یادگیری این مهارت می‌توانید ربات‌های اختصاصی بسازید، سفارش بگیرید و خدمات ویژه ارائه دهید تا درآمد پایدار داشته باشید.
          </p>

          <h2>مدرس دوره</h2>
          <p>
            تدریس بر عهده استاد مهرشاد براتی است که با تجربه زیاد مفاهیم را به ساده‌ترین شکل آموزش می‌دهند.
          </p>

          <h2>پیش‌نیازها</h2>
          <p>
            تسلط به پایتون ضروری است. افراد مبتدی می‌توانند ابتدا در دوره پایتون شرکت کنند.
          </p>

          <h2>جمع‌بندی</h2>
          <p>
            این دوره فرصتی عالی برای یادگیری ساخت ربات‌های تلگرامی کاربردی با پایتون است و برای مبتدی و حرفه‌ای مناسب است.
          </p>
          {/* Course content ends */}
        </div>

        {/* Gradient shadow at bottom when collapsed */}
        {!showDescription && (
          <div className="course-content-shadow absolute bottom-0 right-0 left-0 h-[200px] bg-gradient-to-t from-white dark:from-darker via-white/[55%] dark:via-darker/[55%] via-70% to-white/0 dark:to-darker/0"></div>
        )}
      </div>

      {/* Toggle button */}
      <div className="flex justify-center">
        <button
          className="mt-4 px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </button>
      </div>
    </div>
  );
}

export default CourseDescription;
