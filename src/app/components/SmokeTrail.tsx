"use client";

import { useEffect, useRef } from "react";

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  r: number;
  g: number;
  b: number;
}

export function SmokeTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SmokeParticle[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastPos = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (x: number, y: number) => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        const isCyan = Math.random() > 0.35;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -(Math.random() * 1.5 + 0.4),
          size: Math.random() * 28 + 14,
          opacity: Math.random() * 0.4 + 0.2,
          r: isCyan ? 56 : 99,
          g: isCyan ? 189 : 102,
          b: isCyan ? 248 : 241,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn more when moving fast
      const count = Math.min(Math.floor(speed / 8) + 1, 4);
      for (let s = 0; s < count; s++) {
        const ratio = s / count;
        spawnParticles(
          lastPos.current.x + dx * ratio,
          lastPos.current.y + dy * ratio
        );
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(
        (p) => p.opacity > 0.008
      );

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.98;
        p.vx *= 0.97;
        p.size += 0.5;
        p.opacity *= 0.93;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        gradient.addColorStop(
          0,
          `rgba(${p.r},${p.g},${p.b},${p.opacity})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${p.r},${p.g},${p.b},${p.opacity * 0.4})`
        );
        gradient.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      style={{ zIndex: 9999, mixBlendMode: "screen", position: "fixed", top: 0, left: 0, margin: 0, padding: 0, display: "block" }}
    />
  );
}
