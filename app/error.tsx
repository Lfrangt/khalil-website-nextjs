'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl mb-4 animate-bounce">⚠️</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Do not worry, we have been notified and are working on it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all text-sm font-medium card-shadow"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all text-sm font-medium border border-gray-200 card-shadow"
          >
            Go home
          </Link>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-gray-100 rounded-lg p-4">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
              Error details (dev only)
            </summary>
            <pre className="text-xs text-gray-600 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
