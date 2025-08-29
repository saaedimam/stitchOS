import * as React from "react";

export function Logo({ size = 24 }: { size?: number }) {
  return (
    <div className="inline-flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B1F3A"/>
            <stop offset="1" stopColor="#00BFA6"/>
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="url(#g)" />
        <path d="M12 20h40v4H12zm0 10h28v4H12zm0 10h40v4H12z" fill="white" opacity="0.85"/>
      </svg>
      <span className="font-display text-xl tracking-tight">StitchOS</span>
    </div>
  );
}
