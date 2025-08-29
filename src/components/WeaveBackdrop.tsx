import * as React from "react";

export function WeaveBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={"absolute inset-0 bg-weave " + className}
    />
  );
}
