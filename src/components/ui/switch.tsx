'use client';
import * as React from "react";

export function Switch({
  checked,
  onCheckedChange,
  label
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <span className="text-sm">{label}</span>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        className={"relative w-12 h-6 rounded-full transition " + (checked ? "bg-teal" : "bg-navy/30")}
        onClick={() => onCheckedChange(!checked)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onCheckedChange(!checked)}
      >
        <span
          className={"absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition " + (checked ? "translate-x-6" : "")}
        />
      </span>
    </label>
  );
}
