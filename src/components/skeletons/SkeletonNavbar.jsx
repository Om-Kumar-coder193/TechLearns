import React from 'react';
import Skeleton from './Skeleton';

export default function SkeletonNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-32 rounded-lg" />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16 rounded" />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-44 rounded-full" />
        </div>
      </div>
    </header>
  );
}
