'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TeklifButton from '../TeklifButton';

// Navigation item type
interface NavItem {
  name: string;
  href: string;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavItem[] = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Paketler', href: '/packages' },
    { name: 'Portfolyo', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hakkımızda', href: '/about' },
  ];

  // Check if a nav item is active
  const isActive = (href: string): boolean => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-lg py-3' 
        : 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-5'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <path fill="none" stroke="white" strokeWidth="2" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
          <path fill="none" stroke="white" strokeWidth="2" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
          <path fill="none" stroke="white" strokeWidth="2" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center">
              <Image 
                src="/images/logo.jpg" 
                alt="DetaySoft Logo" 
                width={40} 
                height={40} 
                className="mr-2 rounded-full"
              />
              <div className="relative">
                <span className="flex text-3xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-400 transition-all duration-300">Detay</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-blue-300 transition-all duration-300">Soft</span>
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 overflow-hidden group
                    ${active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}
                  `}
                >
                  <span className="relative z-10">{item.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></span>
                  )}
                  <span className={`absolute bottom-0 left-0 w-full h-0 bg-gray-800/50 transition-all duration-300 -z-10 ${active ? '' : 'group-hover:h-full'}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <TeklifButton className="group relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Teklif Al
                <svg className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-transform duration-500 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-transform duration-500 group-hover:translate-y-0"></span>
            </TeklifButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Menüyü aç</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-xs w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-xl translate-x-0 transform transition-all ease-in-out duration-300">
            <div className="relative w-full flex flex-col overflow-y-auto">
              <div className="px-5 pt-6 pb-4 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="DetaySoft Logo" 
                    width={30} 
                    height={30} 
                    className="mr-2 rounded-full"
                  />
                  <div className="flex text-2xl font-bold">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Detay</span>
                    <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Soft</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center h-10 w-10 rounded-full text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Menüyü kapat</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 pt-6 pb-8 px-5">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                          ${active
                            ? 'bg-gray-800 text-blue-400'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                          }
                        `}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        {active && (
                          <span className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </Link>
                    );
                  })}
                  <div className="mt-8 rounded-xl overflow-hidden">
                    <TeklifButton className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base font-medium shadow-sm hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex justify-center items-center">
                      <span>Teklif Al</span>
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </TeklifButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
