"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const trailingPos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isClickedRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isClickedRef.current = isClicked;
  }, [isClicked]);

  useEffect(() => {
    // Only run if device supports fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        const offset = isHoveredRef.current ? 3 : 4;
        dotRef.current.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest(
        "a, button, input, textarea, select, [role='button'], .ron-card, .cursor-pointer"
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // 60-120fps smooth interpolation loop with 0 React re-renders
    const loop = () => {
      const dx = mousePos.current.x - trailingPos.current.x;
      const dy = mousePos.current.y - trailingPos.current.y;
      trailingPos.current.x += dx * 0.18;
      trailingPos.current.y += dy * 0.18;

      if (circleRef.current) {
        const radius = isHoveredRef.current ? 24 : 17;
        const scale = isClickedRef.current ? 0.8 : 1;
        circleRef.current.style.transform = `translate3d(${trailingPos.current.x - radius}px, ${trailingPos.current.y - radius}px, 0) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Smooth Trailing Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 rounded-full border border-[#087E8B]/40 pointer-events-none will-change-transform"
        style={{
          width: isHovered ? 48 : 34,
          height: isHovered ? 48 : 34,
          backgroundColor: isHovered ? "rgba(8, 126, 139, 0.08)" : "transparent",
          backdropFilter: isHovered ? "blur(1px)" : "none",
          transition: "width 0.22s ease, height 0.22s ease, background-color 0.22s ease",
        }}
      />

      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: isHovered ? 6 : 8,
          height: isHovered ? 6 : 8,
          backgroundColor: isHovered ? "#087E8B" : "#0E151B",
          boxShadow: isHovered ? "0 0 10px rgba(8, 126, 139, 0.6)" : "none",
          transition: "width 0.15s ease, height 0.15s ease, background-color 0.15s ease",
        }}
      />
    </div>
  );
}
