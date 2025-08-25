export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        صفحه پیدا نشد!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        متاسفیم، صفحه‌ای که دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
      </p>

      <div className="flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          بازگشت به صفحه اصلی
        </a>
        <a
          href="/courses"
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          مشاهده دوره‌ها
        </a>
      </div>

      <img
        src="/images/404-illustration.svg"
        alt="404 Illustration"
        className="mt-10 w-80 max-w-full"
      />
    </main>
  );
}
