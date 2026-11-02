"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Track clickable / hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        "a, button, input, textarea, select, [role='button'], .ron-card, .cursor-pointer"
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Smooth trailing interpolation
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Smooth Trailing Circle */}
      <div
        className="fixed top-0 left-0 rounded-full border border-[#087E8B]/40 transition-transform ease-out pointer-events-none will-change-transform"
        style={{
          width: isHovered ? 48 : 34,
          height: isHovered ? 48 : 34,
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 17)}px, ${
            trailingPos.y - (isHovered ? 24 : 17)
          }px, 0) scale(${isClicked ? 0.8 : 1})`,
          backgroundColor: isHovered ? "rgba(8, 126, 139, 0.08)" : "transparent",
          backdropFilter: isHovered ? "blur(1px)" : "none",
          transition: "width 0.22s ease, height 0.22s ease, background-color 0.22s ease, transform 0.08s ease-out",
        }}
      />

      {/* Inner Precision Dot */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: isHovered ? 6 : 8,
          height: isHovered ? 6 : 8,
          transform: `translate3d(${position.x - (isHovered ? 3 : 4)}px, ${
            position.y - (isHovered ? 3 : 4)
          }px, 0)`,
          backgroundColor: isHovered ? "#087E8B" : "#0E151B",
          boxShadow: isHovered ? "0 0 10px rgba(8, 126, 139, 0.6)" : "none",
          transition: "width 0.15s ease, height 0.15s ease, background-color 0.15s ease",
        }}
      />
    </div>
  );
}
