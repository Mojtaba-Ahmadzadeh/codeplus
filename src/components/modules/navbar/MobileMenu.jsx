"use client"
import { GraduationCap, Menu, ShoppingCart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="w-full flex items-center justify-between md:hidden mb-4">

            {/* Hamburger Menu - Right */}
            <button
                aria-label="Open mobile menu"
                id="mobile-menu-button"
                onClick={toggleMenu}
                className="w-11 h-11 flex items-center justify-center rounded-full
                   bg-gray-200 dark:bg-gray-700
                   text-gray-800 dark:text-gray-100
                   hover:bg-gray-300 dark:hover:bg-gray-600
                   focus:outline-none focus:ring-2 focus:ring-primary p-2 transition"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Logo - Center */}
            <div className="text-xl font-extrabold text-primary cursor-pointer select-none tracking-wide flex items-center gap-2">
                <GraduationCap className="text-green-600 dark:text-green-400 w-8 h-8" />
                کدپلاس
            </div>

            {/* Shopping Cart - Left */}
            <div className="relative group z-20" id="cart">
                <Link href={''}
                    type="button"
                    className="w-11 h-11 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-gray-700
                       text-gray-800 dark:text-gray-100
                       hover:bg-gray-300 dark:hover:bg-gray-600
                       focus:outline-none focus:ring-2 focus:ring-primary p-2 transition"
                >
                    <ShoppingCart className="w-5 h-5" />
                </Link>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md rounded-b-xl mt-2 p-4 z-30 transition-all">
                    <ul className="flex flex-col gap-3">
                        <li><Link href="/courses" className="block text-gray-700 dark:text-gray-200">دوره‌ها</Link></li>
                        <li><Link href="/about" className="block text-gray-700 dark:text-gray-200">درباره ما</Link></li>
                        <li><Link href="/contact" className="block text-gray-700 dark:text-gray-200">تماس با ما</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MobileMenu;
