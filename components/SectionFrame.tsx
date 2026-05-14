"use client";

import clsx from "clsx";
import { useCallback } from "react";
import { useLenisNav } from "@/context/LenisContext";

type Props = {
  index: number;
  id: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
  domRef?: React.Ref<HTMLElement>;
};

export function SectionFrame({ index, id, ariaLabel, className, children, domRef }: Props) {
  const { registerSection } = useLenisNav();

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSection(index, el);
      if (!domRef) return;
      if (typeof domRef === "function") {
        domRef(el);
      } else {
        (domRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }
    },
    [domRef, index, registerSection]
  );

  return (
    <section
      ref={setRef}
      id={id}
      aria-label={ariaLabel}
      className={clsx(
        "presentation-section relative min-h-screen w-full scroll-snap-start snap-start",
        "px-5 pb-[clamp(5.5rem,14vh,9rem)] pt-12 sm:px-7 sm:pt-14 md:px-10 md:pb-32 md:pt-16 lg:px-12",
        "pr-[max(3.25rem,env(safe-area-inset-right))] md:pr-[max(4.25rem,env(safe-area-inset-right))]",
        className
      )}
    >
      {children}
    </section>
  );
}
