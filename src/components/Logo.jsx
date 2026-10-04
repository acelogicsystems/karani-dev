import React from 'react';

export default function Logo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 380 380"
        className="h-full w-auto aspect-square"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical pillar */}
        <path d="M 40 40 H 105 V 340 H 40 Z" fill="#0F172A" />
        {/* Top-right branch */}
        <path d="M 125 175 L 260 40 H 340 L 195 180 Z" fill="#0F172A" />
        {/* Bottom-right leg */}
        <path d="M 175 165 L 345 340 H 265 L 125 195 Z" fill="#0F172A" />
        {/* Negative-space prompt chevron */}
        <polygon points="175,160 230,110 205,85 130,155 205,225 230,200" fill="#059669" />
      </svg>
      <span className="font-bold tracking-tight text-xl text-slate-900">
        karani<span className="text-emerald-600">.dev</span>
      </span>
    </div>
  );
}