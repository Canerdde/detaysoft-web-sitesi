'use client';

import Footer from '@/components/layout/Footer';

export default function TestFooter() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-10">
        <h1 className="text-3xl font-bold mb-4">Footer Test Page</h1>
        <p>This page is used to test if the Footer component renders properly.</p>
      </div>
      <Footer />
    </div>
  );
} 