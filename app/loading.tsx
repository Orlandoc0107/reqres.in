import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-700"></div>
      <p className="mt-4 text-gray-200 text-lg">Loading...</p>
    </div>
  );
}