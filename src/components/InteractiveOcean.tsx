/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";

interface Wave {
  y: number;
  length: number;
  amplitude: number;
  speed: number;
  color: string;
}

export default function InteractiveOcean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [starCount, setStarCount] = useState(120);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create stars
    const stars: Array<{ x: number; y: number; size: number; alpha: number; speed: number; phase: number }> = [];
    const initStars = (w: number, h: number) => {
      stars.length = 0;
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * (h * 0.65), // keep stars mostly in upper sky
          size: Math.random() * 2 + 0.5,
          alpha: Math.random(),
          speed: 0.01 + Math.random() * 0.015,
          phase: Math.random() * Math.PI * 2
        });
      }
    };
    initStars(width, height);

    // Create shoals / light glows (bioluminescence)
    const bioGlows: Array<{ x: number; y: number; radius: number; speed: number; alpha: number; angle: number }> = [];
    for (let i = 0; i < 15; i++) {
      bioGlows.push({
        x: Math.random() * width,
        y: height * 0.7 + Math.random() * (height * 0.3),
        radius: Math.random() * 30 + 10,
        speed: 0.1 + Math.random() * 0.3,
        alpha: 0.15 + Math.random() * 0.3,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Gentle waves configurations: high contrast light blue & deep moonlit navy
    const waves: Wave[] = [
      {
        y: height * 0.82,
        length: 220,
        amplitude: 14,
        speed: 0.008,
        color: "rgba(14, 116, 144, 0.15)" // cyan-700
      },
      {
        y: height * 0.85,
        length: 180,
        amplitude: 18,
        speed: -0.006,
        color: "rgba(3, 105, 161, 0.2)" // sky-700
      },
      {
        y: height * 0.88,
        length: 260,
        amplitude: 12,
        speed: 0.005,
        color: "rgba(12, 74, 110, 0.3)" // sky-900
      },
      {
        y: height * 0.92,
        length: 140,
        amplitude: 15,
        speed: -0.01,
        color: "rgba(56, 189, 248, 0.15)" // sky-400
      },
      {
        y: height * 0.95,
        length: 300,
        amplitude: 8,
        speed: 0.004,
        color: "rgba(2, 6, 23, 0.8)" // slate-950
      }
    ];

    let increment = 0;

    const render = () => {
      // 1. Clear background - rich midnight gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, "#010414"); // Dark pitch celestial
      skyGrad.addColorStop(0.5, "#030d2a"); // Deep space navy
      skyGrad.addColorStop(0.8, "#021c3d"); // Ocean horizon
      skyGrad.addColorStop(1, "#010714"); // Deep seabed slate
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Moon (Glowing crescent / full moon with silver dust)
      const moonX = width * 0.82;
      const moonY = height * 0.22;
      const moonRadius = 45;

      // Outer moon glow
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, 140);
      moonGlow.addColorStop(0, "rgba(224, 242, 254, 0.3)");
      moonGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.05)");
      moonGlow.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 140, 0, Math.PI * 2);
      ctx.fill();

      // Silver Moon Sphere
      ctx.fillStyle = "#f0f9ff"; // light blue-50
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      // Crescent shadow overlap (for lovely nostalgic Crescent Moon vibe)
      ctx.fillStyle = "#010714"; // matches background sky
      ctx.beginPath();
      ctx.arc(moonX - 12, moonY - 5, moonRadius + 2, 0, Math.PI * 2);
      ctx.fill();

      // Silver highlight peak
      ctx.fillStyle = "#bae6fd";
      ctx.beginPath();
      ctx.arc(moonX, moonY, 4, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Stars
      stars.forEach((star) => {
        star.phase += star.speed;
        const currentAlpha = 0.2 + (Math.sin(star.phase) + 1) * 0.4;
        ctx.fillStyle = `rgba(224, 242, 254, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Moonlit water reflection shaft
      // Direct vertical path from moon coordinates down to horizon
      const reflectGrad = ctx.createLinearGradient(moonX - 60, height * 0.75, moonX + 60, height * 0.75);
      reflectGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
      reflectGrad.addColorStop(0.5, "rgba(224, 242, 254, 0.22)");
      reflectGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = reflectGrad;
      ctx.fillRect(moonX - 120, height * 0.7, 240, height * 0.3);

      // 5. Draw Bioluminescent lights in deep water
      bioGlows.forEach((glow) => {
        glow.angle += 0.005;
        glow.x += Math.sin(glow.angle) * glow.speed;
        if (glow.x < 0) glow.x = width;
        if (glow.x > width) glow.x = 0;

        const bioGrad = ctx.createRadialGradient(glow.x, glow.y, 1, glow.x, glow.y, glow.radius);
        bioGrad.addColorStop(0, `rgba(14, 165, 233, ${glow.alpha})`);
        bioGrad.addColorStop(0.6, `rgba(14, 165, 233, ${glow.alpha * 0.3})`);
        bioGrad.addColorStop(1, "rgba(14, 165, 233, 0)");
        ctx.fillStyle = bioGrad;
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, glow.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Draw Wave structures
      increment += 0.015;
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x <= width; x += 4) {
          // Combination of sine waves to simulate rich natural chaotic ocean waves
          const wavePhase = (x / wave.length) + (increment * wave.speed * 8);
          const secondaryPhase = (x / (wave.length * 0.5)) - (increment * 0.01);
          const yOffset = Math.sin(wavePhase) * wave.amplitude + Math.cos(secondaryPhase) * (wave.amplitude * 0.35);
          ctx.lineTo(x, wave.y + yOffset);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // 7. Sparkle dust on wave crests
      ctx.fillStyle = "rgba(224, 242, 254, 0.6)";
      for (let s = 0; s < 12; s++) {
        const sx = (Math.sin(increment + s) + 1) * 0.5 * (width * 0.4) + (moonX - width * 0.15);
        const sy = (height * 0.85) + Math.cos(increment * 1.5 + s) * 15;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Responsive window observer
    const handleResize = () => {
      if (!canvasRef.current) return;
      width = canvasRef.current.width = window.innerWidth;
      height = canvasRef.current.height = window.innerHeight;
      initStars(width, height);
      // adjust wave positions dynamically
      waves[0].y = height * 0.82;
      waves[1].y = height * 0.85;
      waves[2].y = height * 0.88;
      waves[3].y = height * 0.92;
      waves[4].y = height * 0.95;
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div id="interactive-ocean-canvas-container" ref={containerRef} className="fixed inset-0 w-full h-full -z-50 overflow-hidden select-none pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
