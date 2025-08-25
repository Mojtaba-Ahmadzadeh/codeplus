"use client"
import TypewriterClient from "@/utils/TypewriterClient";
import React from "react";
import CountUp from "react-countup";

function Banner() {
  return (
    <header className="relative w-full min-h-[400px] sm:min-h-[600px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/images/Gemini_Generated_Image_z137iiz137iiz137.png)",
          zIndex: -2,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/55"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 md:px-8 text-center text-white">
        {/* Title with typewriter effect */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center drop-shadow-md">
          <TypewriterClient text="جایی برای ساختن آینده برنامه‌نویسی‌ات" />
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl font-medium max-w-3xl mx-auto text-gray-200">
          با آکادمی خصوصی سبزلرن، علم برنامه‌نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن.
        </p>

        {/* Search box */}
        <div className="mt-10 max-w-lg mx-auto">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-300 dark:border-gray-700 px-3 py-2">
            {/* Search icon */}
            <div className="bg-primary p-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                />
              </svg>
            </div>
            {/* Input field */}
            <input
              type="text"
              placeholder="جستجوی دوره‌ها..."
              className="flex-grow px-4 py-2 text-sm bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none"
              aria-label="جستجوی دوره‌ها"
            />
          </div>
        </div>

        {/* Stats section */}
        <div className="flex justify-center gap-x-6 sm:gap-x-10 lg:gap-x-20 mt-12 text-yellow-100">
          {/* Total training hours */}
          <div className="flex flex-col items-center w-24 sm:w-36">
            <img
              alt="Training hours"
              className="w-8 sm:w-12 lg:w-16 mb-2"
              loading="lazy"
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/clock-min.webp"
            />
            <span className="font-danaExtraBlack text-xl sm:text-2xl lg:text-3xl">
              <CountUp start={0} end={1701} duration={2} separator="," />
            </span>
            <p className="font-danaExtraBold text-xs sm:text-sm lg:text-lg mt-1">
              ساعت آموزش
            </p>
          </div>

          {/* Total courses */}
          <div className="flex flex-col items-center w-24 sm:w-36">
            <img
              alt="Courses"
              className="w-8 sm:w-12 lg:w-16 mb-2"
              loading="lazy"
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/book-min.webp"
            />
            <span className="font-danaExtraBlack text-xl sm:text-2xl lg:text-3xl">
              <CountUp start={0} end={74} duration={2} separator="," />
            </span>
            <p className="font-danaExtraBold text-xs sm:text-sm lg:text-lg mt-1">
              دوره آموزشی
            </p>
          </div>

          {/* Total students */}
          <div className="flex flex-col items-center w-24 sm:w-36">
            <img
              alt="Students"
              className="w-8 sm:w-12 lg:w-16 mb-2"
              loading="lazy"
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/conversation-min.webp"
            />
            <span className="font-danaExtraBlack text-xl sm:text-2xl lg:text-3xl">
              <CountUp start={0} end={183125} duration={2} separator="," />
            </span>
            <p className="font-danaExtraBold text-xs sm:text-sm lg:text-lg mt-1">
              دانشجو
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;