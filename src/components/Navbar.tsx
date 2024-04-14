'use client'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="lg:hidden">
          <button
            type="button"
            className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            title='Toggle Menu'
            
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? '' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}>
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}