"use client";

import { useEffect, useRef } from "react";

class Point {
  x: number;
  y: number;
  age: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.age = 0;
  }
}

export default function PaintTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const points: Point[] = [];
    const colors = ["#FF2E7E", "#17C9FF", "#FFD400", "#7B3FF2"];
    let colorIndex = 0;
    
    // Pointer position
    let pointerX = -100;
    let pointerY = -100;
    let isMoving = false;

    const onMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      pointerX = clientX;
      pointerY = clientY;
      isMoving = true;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    let lastTime = performance.now();
    let distanceCounter = 0;
    
    const render = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      // Add points if moving
      if (isMoving) {
        const lastPoint = points[points.length - 1];
        if (!lastPoint) {
          points.push(new Point(pointerX, pointerY));
        } else {
          const dx = pointerX - lastPoint.x;
          const dy = pointerY - lastPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist > 5) { // Only add if moved enough
            points.push(new Point(pointerX, pointerY));
            distanceCounter += dist;
            if (distanceCounter > 150) {
              colorIndex = (colorIndex + 1) % colors.length;
              distanceCounter = 0;
            }
          }
        }
        isMoving = false;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw the trail
      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          
          p1.age += dt;
          
          // Lifespan of 1 second (1000ms)
          const life = 1 - (p1.age / 1000);
          
          if (life > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Tapering width
            ctx.lineWidth = 40 * life * (i / points.length);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            
            // Use current stroke color, fade with life
            // Convert hex to rgba manually for simplicity, or just use globalAlpha
            ctx.globalAlpha = life;
            ctx.strokeStyle = colors[colorIndex];
            ctx.stroke();
          }
        }
      }

      // Remove old points
      while (points.length > 0 && points[0].age > 1000) {
        points.shift();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
    />
  );
}
