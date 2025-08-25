"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SalesChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

        const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
        gradient2.addColorStop(0, "rgba(16, 185, 129, 0.25)");
        gradient2.addColorStop(1, "rgba(16, 185, 129, 0)");

        const dashboardChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
                datasets: [
                    {
                        label: "تعداد فروش",
                        data: [120, 150, 180, 90, 160, 130],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: "#6366F1",
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 6,
                        pointHoverRadius: 9,
                        pointBackgroundColor: "#6366F1",
                        pointBorderColor: "#fff",
                        pointBorderWidth: 2,
                    },
                    {
                        label: "سود خالص",
                        data: [80, 110, 140, 70, 100, 90],
                        fill: true,
                        backgroundColor: gradient2,
                        borderColor: "#10B981",
                        borderDash: [5, 5],
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: "#10B981",
                        pointBorderColor: "#fff",
                        pointBorderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: "#9ca3af",
                            font: { family: "IRANSans, sans-serif", size: 13 },
                        },
                    },
                    y: {
                        grid: { color: "rgba(200,200,200,0.15)" },
                        ticks: {
                            color: "#9ca3af",
                            font: { family: "IRANSans, sans-serif", size: 13 },
                            callback: (value) => value.toLocaleString("fa-IR"),
                        },
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            color: "#6b7280",
                            font: { size: 14, family: "IRANSans" },
                            boxWidth: 15,
                        },
                        position: "top",
                        align: "end",
                    },
                    tooltip: {
                        backgroundColor: "#1f2937",
                        titleColor: "#fff",
                        bodyColor: "#d1d5db",
                        cornerRadius: 8,
                        padding: 12,
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: (ctx) => {
                                const label = ctx.dataset.label || "";
                                const val = ctx.parsed.y.toLocaleString("fa-IR");
                                return ` ${label}: ${val}`;
                            },
                        },
                    },
                },
                interaction: {
                    mode: "nearest",
                    intersect: false,
                },
            },
        });

        return () => dashboardChart.destroy();
    }, []);

    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl px-4 py-6 sm:p-6 md:p-8 my-8 w-full transition-all duration-300 hover:shadow-3xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 15a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-3a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-zinc-800 dark:text-white">
                        آمار فروش ۶ ماه اخیر
                    </h2>
                </div>
                <span className="text-green-600 dark:text-green-400 text-sm sm:text-base font-semibold bg-green-100 dark:bg-green-900 px-3 py-1 rounded-xl w-max">
                    +۸.۲٪ رشد
                </span>
            </div>

            {/* Chart */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80">
                <canvas ref={chartRef} className="w-full h-full"></canvas>
            </div>
        </section>
    );
}
