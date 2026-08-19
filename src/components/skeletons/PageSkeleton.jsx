import React from 'react';
import SkeletonNavbar from './SkeletonNavbar';
import SkeletonHero from './SkeletonHero';
import { SkeletonSection, SkeletonFAQ, SkeletonFooter } from './SkeletonSection';

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans animate-pulse">
      <SkeletonNavbar />
      <main className="pt-20">
        <SkeletonHero />
        <SkeletonSection cardCount={3} />
        <SkeletonSection cardCount={4} />
        <SkeletonFAQ />
      </main>
      <SkeletonFooter />
    </div>
  );
}
