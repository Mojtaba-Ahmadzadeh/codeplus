import React from "react";
import CourseDetails from "@/components/templates/courseDetails/CourseDetails"; // صفحه جزئیات دوره
import { courses } from "@/courses/data"; // آرایه‌ای که 12 دوره رو ساختیم

export default function Page({ params }) {
  const { slug } = params;

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-red-600 mb-4">دوره پیدا نشد!</h1>
        <p className="text-gray-700 mb-6">این دوره وجود ندارد یا حذف شده است.</p>
      </main>
    );
  }

  return <CourseDetails course={course} />;
}
