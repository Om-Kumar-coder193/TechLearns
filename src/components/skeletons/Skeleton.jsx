import React from 'react';

export default function Skeleton({ className = '', style = {} }) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-200/70 rounded-lg ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-purple-100/40 to-transparent" />
    </div>
  );
}
