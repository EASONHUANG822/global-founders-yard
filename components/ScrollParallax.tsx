"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/components/LandingPrimitives";

type ScrollParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  disabledOnMobile?: boolean;
};

type ParallaxStyle = CSSProperties & {
  "--scroll-y"?: string;
};

export function ScrollParallax({
  children,
  className,
  speed = 24,
  disabledOnMobile = true,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const element = node;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 767px)");

    function shouldDisable() {
      return reduceMotion.matches || (disabledOnMobile && smallScreen.matches);
    }

    function update() {
      frameRef.current = null;

      if (shouldDisable()) {
        element.style.setProperty("--scroll-y", "0px");
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const offset = (clampedProgress - 0.5) * speed;

      element.style.setProperty("--scroll-y", `${offset.toFixed(2)}px`);
    }

    function requestUpdate() {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(update);
      }
    }

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", requestUpdate);
    smallScreen.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);
      smallScreen.removeEventListener("change", requestUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [disabledOnMobile, speed]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={
        {
          "--scroll-y": "0px",
          transform: "translate3d(0, var(--scroll-y), 0)",
        } as ParallaxStyle
      }
    >
      {children}
    </div>
  );
}
