import React from 'react';
import Skeleton from './Skeleton';

export function SkeletonCard() {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
      <Skeleton className="h-6 w-3/4 rounded-md" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-5/6 rounded" />
      <div className="pt-4 flex items-center justify-between">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}

export function SkeletonSection({ cardCount = 3 }) {
  return (
    <section className="py-16 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-4 w-40 mx-auto rounded-full" />
          <Skeleton className="h-8 sm:h-10 w-2/3 mx-auto rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(cardCount)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkeletonFAQ() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-10 space-y-3">
          <Skeleton className="h-6 w-48 mx-auto rounded-full" />
          <Skeleton className="h-10 w-80 mx-auto rounded-xl" />
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 rounded-2xl bg-purple-50/40 border-l-4 border-purple-300 p-4 flex items-center justify-between">
            <Skeleton className="h-5 w-3/4 rounded" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkeletonFooter() {
  return (
    <footer className="bg-[#0B1F3A] py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-36 rounded-lg bg-slate-700" />
          <Skeleton className="h-16 w-full rounded-lg bg-slate-700" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-5 w-28 rounded bg-slate-700" />
            <Skeleton className="h-4 w-36 rounded bg-slate-700" />
            <Skeleton className="h-4 w-32 rounded bg-slate-700" />
            <Skeleton className="h-4 w-40 rounded bg-slate-700" />
          </div>
        ))}
      </div>
    </footer>
  );
}
