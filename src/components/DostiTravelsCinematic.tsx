/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bus, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RefreshCw, 
  Heart, 
  Smile, 
  Flame, 
  Coffee, 
  ArrowRight,
  UserCheck
} from "lucide-react";

export default function DostiTravelsCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Define scenes data
  const scenes = [
    {
      id: 1,
      title: "SCENE 1 — THE LAST SEAT",
      lyrics: [
        "Every morning began the same way.",
        "Last seat.",
        "Left side.",
        "Bag beside me.",
        "Waiting."
      ],
      description: "Empty school bus. Soft morning atmosphere. One seat subtly highlighted."
    },
    {
      id: 2,
      title: "SCENE 2 — HER STOP",
      lyrics: [
        "A few stops later,",
        "she would get on.",
        "Before she even entered the bus,",
        "I was already looking outside.",
        "The moment our eyes met,",
        "I knew my morning had started."
      ],
      description: "Bus moving through the route. Bus stop appears."
    },
    {
      id: 3,
      title: "SCENE 3 — THE BAG RITUAL",
      lyrics: [
        "She never asked.",
        "She never needed to.",
        "The bag moved.",
        "The seat was hers."
      ],
      description: "She enters. Moves the bag. Sits down."
    },
    {
      id: 4,
      title: "SCENE 4 — RESERVED SEATS",
      lyrics: [
        "In the morning,",
        "I saved a seat for her.",
        "In the afternoon,",
        "she saved one for me."
      ],
      description: "Afternoon ride home. Different lighting from morning."
    },
    {
      id: 5,
      title: "SCENE 5 — WHEN THE BUS WAS LATE",
      lyrics: [
        "Most people hated",
        "when the bus was late.",
        "We didn't.",
        "More time outside school.",
        "More conversations.",
        "More games.",
        "More memories."
      ],
      description: "School gate. Waiting students. Relaxed atmosphere."
    },
    {
      id: 6,
      title: "SCENE 6 — JF & NG",
      lyrics: [
        "Somewhere between school days,",
        "bus rides,",
        "and random teasing,",
        "JF and NG appeared.",
        "Nobody knows why."
      ],
      description: "Playful typography. Floating initials."
    },
    {
      id: 7,
      title: "SCENE 7 — PROFESSIONAL BULLY",
      lyrics: [
        "If this story is ever fact checked,",
        "Chika will probably tell everyone",
        "that I bullied her constantly.",
        "She would be correct."
      ],
      description: "Light-hearted styling."
    },
    {
      id: 8,
      title: "SCENE 8 — THE APPLE",
      lyrics: [
        "Before there was a relationship,",
        "there was an apple.",
        "We shared it",
        "from opposite sides.",
        "When it finally reached her side...",
        "she threw it away.",
        "I still remember that."
      ],
      description: "Minimal artistic animation."
    },
    {
      id: 9,
      title: "SCENE 9 — HOMEMADE",
      lyrics: [
        "Once she made noodles.",
        "Once she made poha.",
        "At the time",
        "it felt ordinary.",
        "Looking back,",
        "it wasn't."
      ],
      description: "Warm cozy atmosphere."
    },
    {
      id: 10,
      title: "SCENE 10 — THE ENDING",
      lyrics: [
        "At the time,",
        "it was just a school bus.",
        "Just another seat.",
        "Just another friend.",
        "Just another day.",
        "We had no idea",
        "we were building memories",
        "that would survive years."
      ],
      lyricsExtra: [
        "Every morning,",
        "I thought I was saving a seat.",
        "Looking back,",
        "I think I was saving a memory."
      ],
      description: "Empty bus. Sunset. Gradual fade."
    }
  ];

  // Auto playback loop logic
  useEffect(() => {
    let timerID: any;
    if (isPlaying) {
      timerID = setInterval(() => {
        setCurrentScene((prev) => {
          if (prev === scenes.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 7000); // 7 seconds per slide so reading is leisurely and relaxed
    }
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [isPlaying, scenes.length]);

  const next = () => {
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  };

  const prev = () => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  };

  // Render thematic interactive graphics depending on current scene
  const renderVisualStoryteller = () => {
    switch (currentScene) {
      case 0: // Scene 1: The Last Seat
        return (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-900/40">
            {/* Morning blue/starry sky overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Bus layout layout grids */}
            <div className="w-full max-w-[280px] bg-black/60 border border-white/10 rounded-2xl p-6 relative">
              <div className="text-[9px] font-mono tracking-widest text-sky-400 absolute top-3 left-4 uppercase">
                Dosti Travels Interior
              </div>
              
              <div className="grid grid-cols-4 gap-4 mt-6">
                {Array.from({ length: 16 }).map((_, i) => {
                  const isLastRow = i >= 12;
                  const isLeftCol = i % 4 === 0;
                  const isTargetSeat = isLastRow && isLeftCol;

                  return (
                    <motion.div
                      key={i}
                      animate={isTargetSeat ? {
                        backgroundColor: ["rgba(56, 189, 248, 0.15)", "rgba(56, 189, 248, 0.4)", "rgba(56, 189, 248, 0.15)"],
                        borderColor: ["rgba(56, 189, 248, 0.3)", "rgba(56, 189, 248, 0.9)", "rgba(56, 189, 248, 0.3)"],
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`h-9 rounded-lg border flex items-center justify-center relative ${
                        isTargetSeat 
                          ? "border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)] bg-sky-500/20" 
                          : "border-white/5 bg-white/5 opacity-30"
                      }`}
                    >
                      {isTargetSeat ? (
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] scale-90">🎴</span>
                          {/* school bag */}
                          <motion.span 
                            animate={{ rotate: [-2, 2, -2] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -right-2 -bottom-2 text-xs"
                          >
                            🎒
                          </motion.span>
                        </div>
                      ) : (
                        <span className="text-[8px] text-slate-600">Seat</span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Glowing waiting state signal */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-mono text-sky-300">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Last seat, left side - Waiting</span>
              </div>
            </div>
          </div>
        );

      case 1: // Scene 2: Her Stop
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40 overflow-hidden">
            {/* Bus route trail */}
            <div className="relative w-full max-w-[320px] h-32 flex items-center justify-center">
              {/* Dynamic road stripes */}
              <div className="absolute h-[1px] w-full bg-dashed bg-white/20 bottom-1/3 flex justify-between">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ x: [100, -100] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: i * 0.4 }}
                    className="w-6 h-[1.5px] bg-slate-500/50"
                  />
                ))}
              </div>

              {/* Bouncing Bus */}
              <motion.div 
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute left-10 bottom-8 z-10"
              >
                <div className="bg-amber-500 text-slate-950 p-2.5 rounded-xl border-t border-amber-300 shadow-xl font-bold flex items-center gap-1.5 text-xs">
                  <Bus className="w-5 h-5" />
                  <span className="font-mono text-[9px] font-bold tracking-tight">DOSTI</span>
                </div>
              </motion.div>

              {/* Moving Bus Stop Sign indicator */}
              <motion.div 
                animate={{ x: [350, -50] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute bottom-8 right-0 text-center flex flex-col items-center"
              >
                <div className="w-[1.5px] h-14 bg-slate-400 relative">
                  <div className="absolute -top-4 -left-3.5 w-8 h-8 rounded-full bg-slate-850 border border-emerald-400 text-[9px] font-bold font-mono text-emerald-400 flex items-center justify-center shadow-lg">
                    STOP
                  </div>
                </div>
                <span className="text-[8px] uppercase tracking-wider font-mono text-slate-500 mt-1">Andhra School Stop</span>
              </motion.div>
            </div>

            <div className="flex gap-1.5 items-center justify-center mt-3 text-[10px] font-mono text-slate-400">
              <span>Looking outside the window...</span>
            </div>
          </div>
        );

      case 2: // Scene 3: The Bag Ritual
        return (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-black/50 border border-white/15 rounded-2xl p-6 relative flex flex-col items-center">
              {/* Double seat view */}
              <div className="flex gap-8 items-center justify-center mt-4">
                {/* Seat A (My Spot) */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl border border-sky-400/30 bg-sky-950/20 flex items-center justify-center text-xl">
                    👦
                  </div>
                  <span className="text-[9px] font-mono text-sky-400 mt-2">Me</span>
                </div>

                {/* Seat B (Her Spot) with animating bag */}
                <div className="relative flex flex-col items-center">
                  {/* The moving bag representation */}
                  <motion.div
                    animate={{ 
                      x: [0, 48, 0],
                      scale: [1, 0.9, 1],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 text-xl cursor-default"
                  >
                    🎒
                  </motion.div>

                  <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xl relative">
                    <motion.div 
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center text-xl"
                    >
                      👧
                    </motion.div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-2">The Spot</span>
                </div>
              </div>

              {/* Moving text notification */}
              <div className="text-center mt-6 text-[9.5px] font-mono text-emerald-400/90 tracking-wide">
                ✨ "The bag moved. The seat was hers."
              </div>
            </div>
          </div>
        );

      case 3: // Scene 4: Reserved Seats
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Split layout depicting Morning vs Afternoon */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-sky-950/20 border border-sky-500/10 rounded-2xl p-4 text-center flex flex-col items-center justify-between min-h-[140px]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900">
                  Morning
                </span>
                
                <div className="my-2 relative flex items-center justify-center gap-1.5">
                  <span className="text-lg">🎒</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-xs text-amber-400"
                  >
                    💛
                  </motion.div>
                  <span className="text-lg">👧</span>
                </div>

                <span className="text-[10px] font-serif italic text-slate-300">
                  I saved a seat for her.
                </span>
              </div>

              <div className="bg-amber-950/15 border border-amber-500/10 rounded-2xl p-4 text-center flex flex-col items-center justify-between min-h-[140px]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/60">
                  Afternoon
                </span>
                
                <div className="my-2 relative flex items-center justify-center gap-1.5">
                  <span className="text-lg">👧</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                    className="text-xs text-amber-400"
                  >
                    💛
                  </motion.div>
                  <span className="text-lg">🎒</span>
                </div>

                <span className="text-[10px] font-serif italic text-slate-300">
                  she saved one for me.
                </span>
              </div>
            </div>
          </div>
        );

      case 4: // Scene 5: When the Bus Was Late
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* School Gate visual */}
            <div className="w-full max-w-[280px] bg-black/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden flex flex-col items-center">
              {/* Archway gate */}
              <div className="w-40 h-24 border-t-2 border-x-2 border-white/20 rounded-t-3xl relative mt-2">
                <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
                
                {/* Two friends chatting inside gate */}
                <div className="absolute bottom-0 left-6 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="text-lg"
                  >
                    👦
                  </motion.div>
                  <span className="text-[7px] font-mono text-slate-500">NKES</span>
                </div>

                <div className="absolute bottom-0 right-6 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                    className="text-lg"
                  >
                    👧
                  </motion.div>
                  <span className="text-[7px] font-mono text-slate-500">Andhra</span>
                </div>

                {/* Floating notes representing games/conversations */}
                <div className="absolute inset-x-0 top-2 flex justify-around">
                  {["💬", "✨", "🎲"].map((emoji, idx) => (
                    <motion.span
                      key={idx}
                      animate={{ y: [20, -10], opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: idx * 0.8, ease: "easeOut" }}
                      className="text-xs"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Game indicator text */}
              <p className="mt-4 text-[9px] font-mono text-sky-300 text-center tracking-wider">
                "We loved when the bus was late."
              </p>
            </div>
          </div>
        );

      case 5: // Scene 6: JF & NG
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Floating letters of initials */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              
              <div className="absolute w-28 h-28 rounded-full border border-sky-450/10 border-dashed animate-spin pointer-events-none" style={{ animationDuration: '20s' }} />

              <motion.div
                animate={{ 
                  x: [-35, -25, -35],
                  y: [-15, 15, -15],
                  rotate: [-5, 5, -5]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-15 p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-600/5 border border-sky-400/25 shadow-2xl flex flex-col items-center justify-center cursor-default"
              >
                <span className="font-semibold text-3xl md:text-4xl text-sky-300 font-sans tracking-tighter shadow-sm">
                  JF
                </span>
                <span className="text-[8px] uppercase tracking-widest text-sky-450 text-sky-400 mt-1">Me</span>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [35, 25, 35],
                  y: [15, -15, 15],
                  rotate: [5, -5, 5]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute z-15 p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-400/25 shadow-2xl flex flex-col items-center justify-center cursor-default"
              >
                <span className="font-semibold text-3xl md:text-4xl text-indigo-300 font-sans tracking-tighter shadow-sm">
                  NG
                </span>
                <span className="text-[8px] uppercase tracking-widest text-indigo-450 text-indigo-400 mt-1">Chika</span>
              </motion.div>

              {/* Infinite connection line */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none opacity-40">
                <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500">
              *Nobody knows why.
            </span>
          </div>
        );

      case 6: // Scene 7: Professional Bully
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Cute game style telemetry screen */}
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                <span className="text-[8px] uppercase font-mono tracking-widest text-slate-400">Teasing History Log</span>
                <span className="text-[8px] font-mono bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded border border-rose-500/20 font-bold animate-pulse">FACT CHECKED</span>
              </div>

              {/* Status bar */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-300 mb-1">
                    <span>Me (Bullying Frequency)</span>
                    <span className="text-sky-400">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-sky-400 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-300 mb-1">
                    <span>Chika's Complaints</span>
                    <span className="text-amber-400">Constant</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-amber-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                <span className="text-base">📢</span>
                <p className="text-[9.5px] font-serif italic text-slate-350 text-slate-400 leading-normal">
                  "If this story is fact checked, she would be completely correct."
                </p>
              </div>
            </div>
          </div>
        );

      case 7: // Scene 8: The Apple
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-black/50 border border-white/10 rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[160px]">
              
              {/* Minimalist dividing split line representing share */}
              <div className="absolute h-10 w-[1px] bg-dashed bg-white/10 left-1/2 top-11 scale-y-125" />

              <div className="flex justify-between w-full px-6 mb-6">
                <span className="text-[9px] font-mono text-slate-500 uppercase">My Side</span>
                <span className="text-[9px] font-mono text-slate-500 uppercase">Her Side</span>
              </div>

              {/* Shared Apple animation */}
              <div className="relative w-full flex justify-center items-center h-12">
                <motion.div
                  animate={{
                    x: [-45, 45, 45],
                    y: [0, 0, -40],
                    opacity: [1, 1, 0],
                    rotate: [0, 15, 360],
                    scale: [1, 1, 0.5]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.45, 0.65]
                  }}
                  className="text-3xl relative z-10 filter drop-shadow-[0_4px_10px_rgba(244,63,94,0.3)] select-none"
                >
                  🍎
                </motion.div>
              </div>

              {/* Explanatory little notice on timing */}
              <p className="text-[9px] uppercase font-mono tracking-wider text-slate-400 mt-4 text-center">
                *When it reached her side, she threw it away.
              </p>
            </div>
          </div>
        );

      case 8: // Scene 9: Homemade
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-sky-950/10 border border-white/5 rounded-2xl p-6 relative flex flex-col items-center">
              
              {/* Steaming bow visual */}
              <div className="relative my-3 flex flex-col items-center">
                {/* Steaming wisps */}
                <div className="flex gap-2 mb-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -16, 0],
                        opacity: [0.2, 0.8, 0],
                        scale: [1, 1.4, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                      }}
                      className="w-[1.5px] h-6 bg-slate-200/50 blur-[1px] rounded"
                    />
                  ))}
                </div>

                {/* Cozy Bowl */}
                <div className="w-16 h-10 bg-amber-200/90 border border-amber-300 rounded-b-2xl relative shadow-lg flex items-center justify-center">
                  <div className="absolute top-0 inset-x-0 h-1 bg-amber-500 rounded-t" />
                  <span className="text-xl filter drop-shadow-sm select-none">🍜</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 w-full text-center">
                <span className="font-mono text-[9px] uppercase tracking-wider bg-white/5 p-1 rounded border border-white/5 text-slate-300">
                  Noodles 🍝
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider bg-white/5 p-1 rounded border border-white/5 text-slate-300">
                  Poha 🥣
                </span>
              </div>

              <p className="mt-4 text-[9.5px] font-sans text-amber-100/80 text-center italic">
                "At the time it felt ordinary. Looking back, it wasn't."
              </p>
            </div>
          </div>
        );

      case 9: // Scene 10: The Ending
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/90 [background-image:radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:16px_16px] overflow-hidden">
            <div className="text-center max-w-[280px]">
              {/* Micro-scale cute sunset bus departing */}
              <motion.div
                animate={{ x: [-80, 80], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="inline-block text-2xl mb-4"
              >
                🚌💨
              </motion.div>

              <div className="flex justify-center items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-sky-400 mt-2 font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-sky-400 animate-pulse text-sky-400" />
                <span>Our Foundation</span>
              </div>
              <p className="text-[9px] font-mono text-slate-500 leading-normal">
                Dosti Travels school bus archive is fully complete.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const scene = scenes[currentScene];

  return (
    <div id="school-bus-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative Warm Sunset / Morning Sunrise Top Light Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-700 ${
        currentScene === 3 ? "bg-amber-500" : // Scene 4 afternoon saved seat
        currentScene === 8 ? "bg-amber-400" : // Scene 9 homemade cooking
        currentScene === 9 ? "bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600" : // Scene 10 sunset finish
        "bg-sky-400" // Default light blue accents
      }`} />

      {/* Progress Telemetry Index Bars */}
      <div className="px-6 pt-5 grid grid-cols-10 gap-1 md:gap-1.5">
        {scenes.map((sc, i) => (
          <button
            key={sc.id}
            onClick={() => {
              setCurrentScene(i);
              setIsPlaying(false);
            }}
            className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
              i === currentScene 
                ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)] scale-y-110" 
                : i < currentScene 
                  ? "bg-sky-400/30" 
                  : "bg-white/5 hover:bg-white/15"
            }`}
            title={`Go to scene ${sc.id}`}
          />
        ))}
      </div>

      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch justify-between min-h-[440px]">
        
        {/* Left Hand: Cinematic Text Panel */}
        <div className="flex-1 flex flex-col justify-between max-w-md select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-900/50">
                SCENE 0{scene.id} OF 10
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {scene.title.split(" — ")[1]}
              </span>
            </div>

            {/* Cinematic Text Block with Staggered Lines */}
            <div className="my-6 space-y-3 min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, staggerChildren: 0.12 }}
                  className="space-y-2.5"
                >
                  {/* Scene Lyrics */}
                  {scene.lyrics.map((line, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.12 }}
                      className={`font-serif leading-relaxed ${
                        idx === 0 
                          ? "text-slate-100 text-lg md:text-xl font-medium" 
                          : "text-slate-350 text-slate-300 text-sm md:text-base italic pl-3 border-l-[2.5px] border-sky-400/20"
                      }`}
                    >
                      {line}
                    </motion.p>
                  ))}

                  {/* Extra Lyrics block specifically for Scene 10 */}
                  {scene.lyricsExtra && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="mt-6 pt-5 border-t border-white/5 space-y-2.5"
                    >
                      {scene.lyricsExtra.map((line, idx) => (
                        <p
                          key={idx}
                          className="font-serif leading-relaxed text-sky-200 text-sm md:text-base italic pl-3 border-l-[2.5px] border-sky-400/40"
                        >
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Stepper controls */}
          <div className="flex items-center gap-3 border-t border-white/5 pt-5 mt-4">
            <button
              onClick={prev}
              disabled={currentScene === 0}
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              title="Previous Scene"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-slate-950" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
              <span>{isPlaying ? "PAUSE TOUR" : "PLAY TOUR"}</span>
            </button>

            {currentScene === scenes.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentScene(0);
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1 px-3 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-slate-300 cursor-pointer"
                title="Restart"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            ) : (
              <button
                onClick={next}
                className="p-2.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 hover:text-white hover:bg-sky-400/20 transition-all cursor-pointer flex items-center justify-center"
                title="Next Scene"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Hand: Visual Stage Screen */}
        <div className="flex-1 min-h-[280px] lg:min-h-auto rounded-xl border border-white/5 bg-black/30 relative overflow-hidden flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {renderVisualStoryteller()}
            </motion.div>
          </AnimatePresence>

          {/* Sparkles / Atmospheric effects top corners */}
          <div className="absolute top-3 right-4 flex items-center gap-1.5 opacity-40 select-none">
            <span className="text-[10px] font-mono text-sky-400 tracking-wider">ANIMATION ENVIRONMENT</span>
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping" />
          </div>

          {/* Floating dust particles overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [200, -20],
                  x: [i * 30, i * 30 + (i % 2 === 0 ? 15 : -15)],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8
                }}
                className="absolute w-1 h-1 bg-sky-300 rounded-full"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
