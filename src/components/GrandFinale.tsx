/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { Sparkles, Star, Heart, Flame } from "lucide-react";
import { motion } from "motion/react";

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  size: number;
}

interface DriftingFlower {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  color: string;
}

export default function GrandFinale() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [explosionCount, setExplosionCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.height = 450;

    const particles: FireworkParticle[] = [];
    const flowers: DriftingFlower[] = [];

    // Sparkle colors matches user guidelines: Light blue, Ocean cyan, Moonlight silver, Soft white, Midnight blue
    const colors = [
      "#38bdf8", // light blue (sky-400)
      "#0ea5e9", // ocean cyan (sky-500)
      "#e0f2fe", // moonlight silver (sky-100)
      "#ffffff", // soft white
      "#bae6fd"  // baby sky-200
    ];

    // Initialize some floating flower petals
    for (let i = 0; i < 20; i++) {
      flowers.push({
        x: Math.random() * width,
        y: height + Math.random() * 100,
        speedY: -0.4 - Math.random() * 0.8,
        speedX: Math.sin(Math.random() * Math.PI) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: -0.01 + Math.random() * 0.02,
        size: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const createExplosion = (x: number, y: number) => {
      setExplosionCount((prev) => prev + 1);
      const particleCount = 65;
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 4.5;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.7, // slightly heading up
          color: Math.random() > 0.4 ? baseColor : colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
          gravity: 0.04 + Math.random() * 0.03,
          size: Math.random() * 2.5 + 1
        });
      }
    };

    // Automatically trigger background peaceful fireworks randomly
    let autoLaunchTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw active fireworks particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        
        // draw beautiful star/diamond shapes for premium starry sparkles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw drifting flowers & petals
      flowers.forEach((f) => {
        f.y += f.speedY;
        f.x += f.speedX;
        f.rotation += f.rotSpeed;

        if (f.y < -20) {
          f.y = height + 10;
          f.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.rotation);
        ctx.globalAlpha = 0.55;
        
        // Draw elegant stylized five-petal light blue hydrangea geometry
        ctx.fillStyle = f.color;
        ctx.beginPath();
        for (let j = 0; j < 5; j++) {
          ctx.rotate((Math.PI * 2) / 5);
          ctx.arc(f.size * 0.4, 0, f.size * 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
        // Center yellow pollen dot
        ctx.fillStyle = "#fef08a"; // yellow-200
        ctx.beginPath();
        ctx.arc(0, 0, f.size * 0.12, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Periodic gentle sparks triggering automatically
      autoLaunchTimer++;
      if (autoLaunchTimer % 110 === 0 && particles.length < 150) {
        createExplosion(
          Math.random() * width,
          100 + Math.random() * 150
        );
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Canvas click interaction to detonate custom fireworks
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      createExplosion(clickX, clickY);
    };

    canvas.addEventListener("click", handleCanvasClick);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = 450;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleCanvasClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div 
      id="grand-finale-interactive-container" 
      ref={containerRef} 
      className="py-16 text-center text-white relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-950 via-sky-950/20 to-slate-950 border border-sky-400/10 shadow-2xl mx-4 my-10 max-w-5xl md:mx-auto"
    >
      {/* Decorative stars and lighting glow layers */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/5 to-transparent pointer-events-none" />

      {/* Main Interactive Stage */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 pointer-events-none">
        <span className="font-mono text-xs text-sky-400 uppercase tracking-widest flex items-center justify-center gap-1.5 animate-pulse mb-3">
          <Sparkles className="w-4 h-4 text-sky-300" />
          Happy Birthday June 8, 2026
        </span>

        <h2 className="font-serif text-3xl md:text-5xl italic font-medium leading-tight text-white select-none">
          Happy 21st Birthday, <br />
          <span className="font-display not-italic font-extrabold tracking-tight bg-gradient-to-r from-sky-200 via-sky-400 to-white bg-clip-text text-transparent">
            Chika 🌙
          </span>
        </h2>

        <p className="font-sans text-xs text-slate-400 max-w-sm mx-auto mt-4 leading-relaxed">
          The stars are aligned, the blue flower petals are drifting across the shoreline, and the moon is singing a sweet melody.
        </p>
      </div>

      {/* Floating Sparkles Canvas */}
      <div className="relative h-[280px] w-full mt-4 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 block w-full h-full cursor-crosshair"
          title="Click the twilight sky canvas here to trigger stardust fireworks!"
        />
        
        {/* Floating guidance label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/85 backdrop-blur border border-sky-400/20 rounded-full px-5 py-2 text-xs font-mono font-medium tracking-wide text-sky-300 pointer-events-none flex items-center gap-1.5 shadow-xl">
          <Star className="w-3.5 h-3.5 animate-spin" />
          <span>Tap the sky above to ignite stardust fireworks</span>
        </div>
      </div>

      {/* Celebratory milestone counter */}
      <div className="mt-8 relative z-20 flex flex-wrap justify-center gap-4 text-slate-100 font-mono text-xs px-4">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-3 text-center min-w-[110px]">
          <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Age</span>
          <strong className="text-sky-300 text-lg">21</strong>
        </div>
        
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-3 text-center min-w-[110px]">
          <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Milestone</span>
          <strong className="text-cyan-300 text-lg">June 8</strong>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-3 text-center min-w-[110px]">
          <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Ignited</span>
          <strong className="text-amber-400 text-lg">{explosionCount} ★</strong>
        </div>
      </div>
    </div>
  );
}
