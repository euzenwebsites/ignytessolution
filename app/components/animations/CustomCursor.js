"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';   

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Initial cursor position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // Mousemove event listener to update cursor position
    const updateCursorPosition = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Add event listener to update cursor position on mousemove
    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      // Remove event listener when the component is unmounted
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
