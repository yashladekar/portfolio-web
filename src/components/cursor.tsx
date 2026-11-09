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
    let scale = 1;
    let targetScale = 1;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onPointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      targetScale = target?.closest("a, button, [data-cursor]") ? 3.25 : 1;
    };

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      scale += (targetScale - scale) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.documentElement.classList.add("has-cursor");
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.documentElement.classList.remove("has-cursor");
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={dotRef} aria-hidden="true" className="cursor-dot" />;
}
