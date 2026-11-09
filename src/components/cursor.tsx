"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;

    if (!fine || reduced || !dot) return;

    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onPointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest("a, button, [data-cursor]")
      );
      dot.dataset.active = interactive ? "true" : "false";
    };

    const onPointerLeave = () => {
      dot.dataset.active = "false";
    };

    const tick = () => {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.documentElement.classList.add("has-cursor");
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.classList.remove("has-cursor");
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={dotRef} aria-hidden="true" className="cursor-dot" />;
}
