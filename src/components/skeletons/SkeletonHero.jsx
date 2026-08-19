import React from 'react';
import Skeleton from './Skeleton';

export default function SkeletonHero() {
  return (
    <section className="pt-24 pb-10 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-4 w-64 mx-auto mb-4 rounded-full" />
        <Skeleton className="h-12 sm:h-16 w-3/4 mx-auto mb-6 rounded-2xl" />
        <Skeleton className="h-5 w-1/2 mx-auto mb-8 rounded-lg" />

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-40 rounded-xl" />
          ))}
        </div>

        <div className="max-w-2xl mx-auto h-64 sm:h-80 bg-slate-100 rounded-3xl p-4 flex items-center justify-center">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
