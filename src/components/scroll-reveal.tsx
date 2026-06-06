"use client";

import React, { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  fast?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  fast = false,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("in-view"), delay);
          } else {
            el.classList.add("in-view");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = fast ? "reveal-fast" : "reveal";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}
