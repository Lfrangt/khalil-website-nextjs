'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-8xl font-bold text-gray-200 mb-4 animate-pulse">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we could not find the page you are looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all text-sm font-medium card-shadow"
          >
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all text-sm font-medium border border-gray-200 card-shadow"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
