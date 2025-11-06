'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900">중기기업지원단</h1>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">정부정책자금</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">법인지원</a>
            <a href="#consulting" className="text-gray-700 hover:text-blue-600 transition-colors">기업인증</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">ISO(4스탭인증)</a>
          </nav> */}

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
          {/* <nav className="px-4 pt-2 pb-4 space-y-2">
            <a href="#programs" className="block py-2 text-gray-700 hover:text-blue-600">정부정책자금</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">법인지원</a>
            <a href="#consulting" className="block py-2 text-gray-700 hover:text-blue-600">기업인증</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">ISO(4스탭인증)</a>
          </nav> */}
        </div>
      )}
    </header>
  );
}
