'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/modules/navbar/Navbar';
import Footer from '@/components/modules/footer/Footer';
import { courses } from '@/courses/data';
import NotFound from '@/app/not-found';
import { ThemeProvider } from '@/context/ThemeContext';

export default function ClientWrapper({ children }) {
    const pathname = usePathname();

    // مسیرهایی که Navbar و Footer همیشه مخفی باشند
    const noLayoutRoutes = [
        '/login-register',
        '/p-user',
        '/p-admin',
    ];

    let hideLayout = noLayoutRoutes.some((route) => pathname.startsWith(route));

    // بررسی مسیرهای اشتباه / دوره‌ها
    let invalidRoute = false;
    let errorTitle = 'صفحه پیدا نشد!';
    let errorMessage = 'مسیر وارد شده معتبر نیست یا ممکن است حذف شده باشد.';

    if (pathname.startsWith('/course/')) {
        const slug = pathname.split('/')[2]; // گرفتن slug
        const courseExists = courses.some(course => course.slug === slug);
        if (!slug || !courseExists) {
            invalidRoute = true;
            hideLayout = true; // برای صفحه خطای دوره هم Navbar/​Footer مخفی شود
            errorTitle = 'دوره پیدا نشد!';
            errorMessage = 'این دوره موجود نیست یا ممکن است حذف شده باشد.';
        }
    }

    // بررسی مسیرهای دوره‌ها
    if (pathname.startsWith('/course')) {
        const slug = pathname.split('/')[2];
        const courseExists = courses.some(course => course.slug === slug);
        if (!slug || !courseExists) {
            // مسیر اشتباه یا دوره وجود ندارد → نمایش NotFound
            return <NotFound />;
        }
    }

    if (invalidRoute) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">{errorTitle}</h1>
                <p className="text-gray-700 mb-6">{errorMessage}</p>
                <a
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    بازگشت به صفحه اصلی
                </a>
            </main>
        );
    }

    return (
        <>
            {!hideLayout && (
                <ThemeProvider>
                    <header className="container max-w-screen-2xl">
                        <Navbar />
                    </header>
                </ThemeProvider>
            )}

            <main>{children}</main>

            {!hideLayout && <Footer />}
        </>
    );
}
