"use client";

import React, { useEffect, useState, useRef } from "react";
import "../styles/globals.css";

const CustomCursor: React.FC = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  const requestRef = useRef<number | null>(null); // For smooth animation
  const mousePosition = useRef({ x: 0, y: 0 }); // To store mouse position

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      // Store the latest mouse position
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Update dotPosition instantly
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // Smooth animation for the outer circle using requestAnimationFrame
    const animateOutline = () => {
      setOutlinePosition((prev) => {
        const dx = mousePosition.current.x - prev.x;
        const dy = mousePosition.current.y - prev.y;

        // Smooth interpolation: adjust the "0.1" to control smoothness
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });

      requestRef.current = requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Start the animation loop
    requestRef.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />

      {/* Outer Circle */}
      <div
        className={`cursor-outline ${isMouseDown ? "shrunk" : ""}`}
        style={{
          left: `${outlinePosition.x}px`,
          top: `${outlinePosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
