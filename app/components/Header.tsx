'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer hover:text-blue-700 transition-colors">제이에스에너지</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">홈</Link>
            <Link href="/service" className="text-gray-700 hover:text-blue-600 transition-colors">서비스</Link>
            <Link href="/#programs" className="text-gray-700 hover:text-blue-600 transition-colors">정부정책자금</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">상담신청</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">홈</Link>
            <Link href="/service" className="block py-2 text-gray-700 hover:text-blue-600">서비스</Link>
            <Link href="/#programs" className="block py-2 text-gray-700 hover:text-blue-600">정부정책자금</Link>
            <Link href="/#contact" className="block py-2 text-gray-700 hover:text-blue-600">상담신청</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
