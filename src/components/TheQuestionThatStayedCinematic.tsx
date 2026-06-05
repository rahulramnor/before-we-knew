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
  HelpCircle, 
  MessageSquare, 
  Sparkles,
  Users,
  Eye,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function TheQuestionThatStayedCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    {
      id: 1,
      title: "SCENE 1 — DIFFERENT REOPENING DATES",
      lyrics: [
        "November 2019.",
        "",
        "Diwali vacation has just ended.",
        "My school, NKES, reopened first.",
        "Chika's school, Andhra School, reopened a few days later.",
        "For those few days she was not on the bus.",
        "This is important.",
        "",
        "For more than a year:",
        "Every morning she sat beside me.",
        "Then suddenly:",
        "The seat was empty."
      ],
      description: "November 2019. Diwali vacation ended. NKES reopened first. Andhra School reopened a few days later. Chika was not on the bus."
    },
    {
      id: 2,
      title: "SCENE 2 — NEW PASSENGERS",
      lyrics: [
        "Since Chika was not on the bus:",
        "",
        "Mahima",
        "Ayushi",
        "Akansha",
        "Maria",
        "",
        "started sitting around me.",
        "Talking.",
        "Laughing.",
        "Passing time during the ride.",
        "",
        "Just another normal school morning."
      ],
      description: "Mahima, Ayushi, Akansha, Maria sit around. Light and casual atmosphere."
    },
    {
      id: 3,
      title: "SCENE 3 — THE QUESTION",
      lyrics: [
        "One day they suddenly asked:",
        "",
        "\"Do you and Chika have an affair?\"",
        "",
        "At that moment I rejected it immediately.",
        "Because in my mind:",
        "She was my friend.",
        "That's it.",
        "Nothing more."
      ],
      description: "A sudden turning point in the back of the bus."
    },
    {
      id: 4,
      title: "SCENE 4 — THE THOUGHT STARTS",
      lyrics: [
        "The conversation ended.",
        "But the question didn't.",
        "For the first time:",
        "I started thinking.",
        "Looking at things differently.",
        "Replaying memories.",
        "The seat.",
        "The bus rides.",
        "The conversations.",
        "The waiting.",
        "The routine."
      ],
      description: "Slow reflective visuals. Replaying old school bus memories."
    },
    {
      id: 5,
      title: "SCENE 5 — HER RETURN",
      lyrics: [
        "A few days later.",
        "Her school reopened.",
        "She got on the bus again.",
        "Same bus.",
        "Same seat.",
        "Same routine.",
        "Same friendship.",
        "But not the same perspective.",
        "Because now:",
        "I was looking at her differently."
      ],
      description: "Her school reopens. She returns to her seat, but my view has changed."
    },
    {
      id: 6,
      title: "SCENE 6 — THE QUESTION I ASKED HER",
      lyrics: [
        "One morning while travelling to school:",
        "After gathering courage,",
        "I asked her directly:",
        "",
        "\"Do you like me?\"",
        "",
        "She looked completely confused.",
        "Then I explained:",
        "Those girls had asked if we had an affair."
      ],
      description: "Gathering courage on the morning commute. A direct question."
    },
    {
      id: 7,
      title: "SCENE 7 — HER ANSWER",
      lyrics: [
        "She said something important.",
        "Not a rejection.",
        "Not an acceptance.",
        "Just:",
        "",
        "\"It's a misunderstanding.\"",
        "\"We're just close friends.\"",
        "\"People think things because we're close.\""
      ],
      description: "Not a rejection, not an acceptance. Just a gentle explanation of closeness."
    },
    {
      id: 8,
      title: "SCENE 8 — THE ROUTINE CONTINUES",
      lyrics: [
        "After that conversation:",
        "Nothing changed externally.",
        "The next day:",
        "Same bus.",
        "Same seat.",
        "Same conversations.",
        "Same route.",
        "Everything looked exactly the same.",
        "",
        "But inside my head:",
        "Everything was different."
      ],
      description: "Routine continues while perspective remains fundamentally altered."
    },
    {
      id: 9,
      title: "SCENE 9 — REALIZATION",
      lyrics: [
        "Not instantly.",
        "Not dramatically.",
        "Not love at first sight.",
        "Just gradually.",
        "",
        "Day after day.",
        "Bus ride after bus ride.",
        "",
        "I started liking her more.",
        "And more.",
        "And more."
      ],
      description: "A slow emotional progression of silent affection."
    },
    {
      id: 10,
      title: "SCENE 10 — DETERMINATION",
      lyrics: [
        "By late November:",
        "I already knew what I wanted to say.",
        "The problem wasn't feelings.",
        "The problem was courage.",
        "",
        "I kept trying.",
        "And failing.",
        "Trying again.",
        "And failing again.",
        "",
        "More times than I can count."
      ],
      description: "The persistent battle between unspoken feelings and fragile courage."
    },
    {
      id: 11,
      title: "SCENE 11 — CHAPTER ENDING",
      lyrics: [
        "\"She said we were just friends.",
        "",
        "The strange part was...",
        "",
        "I couldn't stop hoping for more.\"",
        "",
        "Then:",
        "",
        "\"The routine stayed the same.",
        "I didn't.\"",
        "",
        "Final line:",
        "",
        "\"For the first time,",
        "",
        "I wasn't waiting for the bus.",
        "I was waiting for courage.\""
      ],
      description: "Golden visual finish. Waiting not for the bus, but for courage."
    }
  ];

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
      }, 7500); // 7.5 seconds per scene for relaxed comprehension
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

  const renderVisualStoryteller = () => {
    switch (currentScene) {
      case 0: // Scene 1: Different Reopening Dates
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40 relative">
            {/* Split Calendar Illustration */}
            <div className="flex gap-4 mb-4 select-none">
              {/* NKES Calendar Node */}
              <div className="p-3 bg-sky-950/40 border border-sky-400/30 rounded-xl flex flex-col items-center w-24">
                <Calendar className="w-5 h-5 text-sky-400 mb-1" />
                <span className="font-mono text-[9px] text-sky-300 font-bold uppercase">NKES</span>
                <span className="font-sans text-[10px] text-white font-medium mt-1">Reopened</span>
                <span className="font-mono text-[9px] text-emerald-400 mt-1">● Active</span>
              </div>

              {/* Andhra School Calendar Node (Delayed) */}
              <div className="p-3 bg-red-950/10 border border-white/5 rounded-xl flex flex-col items-center w-24 opacity-60">
                <Calendar className="w-5 h-5 text-slate-500 mb-1" />
                <span className="font-mono text-[9px] text-slate-400 font-bold uppercase">Andhra</span>
                <span className="font-sans text-[10px] text-slate-300 mt-1">Closed</span>
                <span className="font-mono text-[9px] text-slate-500 mt-1">Waiting</span>
              </div>
            </div>

            {/* Empty Seat on Bus */}
            <div className="w-full max-w-[240px] bg-black/60 border border-white/10 rounded-2xl p-4 relative text-center">
              <span className="text-[9px] font-mono uppercase text-sky-400 block tracking-widest mb-3">Bus Rear Left Seat</span>
              
              <div className="flex justify-center gap-6 items-center">
                <div className="w-12 h-12 bg-sky-950/20 border border-sky-450/40 border-sky-400/40 rounded-xl flex items-center justify-center text-lg shadow-inner">
                  👦
                </div>
                
                <div className="relative w-12 h-12 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.95, 1.05, 0.95] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 border border-dashed border-sky-400/20 rounded-xl"
                  />
                  <span className="text-xl opacity-30 select-none">🎒</span>
                  <div className="absolute -bottom-1 -right-1 bg-red-500/10 border border-red-500/30 rounded px-1 text-[7px] text-red-400 font-mono">
                    EMPTY
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-[9px] font-mono text-slate-400">
                "For those few days, she was not on the bus."
              </div>
            </div>
          </div>
        );

      case 1: // Scene 2: New Passengers
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Bus Grid Layout showing multiple passenger circles */}
            <div className="w-full max-w-[260px] bg-black/60 border border-white/10 rounded-2xl p-5 relative">
              <span className="text-[8px] font-mono uppercase text-sky-400 block tracking-wider mb-4 text-center">
                New Passengers Around Me
              </span>

              <div className="relative h-28 flex items-center justify-center">
                {/* Me in the center */}
                <div className="absolute z-10 w-11 h-11 bg-sky-900/40 border border-sky-300 rounded-full flex items-center justify-center text-base shadow-[0_0_15px_rgba(56,189,248,0.25)] select-none">
                  👦
                </div>

                {/* Surrounding passengers */}
                {[
                  { name: "Mahima", angle: 0 },
                  { name: "Ayushi", angle: 90 },
                  { name: "Akansha", angle: 180 },
                  { name: "Maria", angle: 270 }
                ].map((girl, idx) => {
                  const rad = (girl.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 60;
                  const y = Math.sin(rad) * 45;

                  return (
                    <motion.div
                      key={idx}
                      style={{ x, y }}
                      animate={{ y: [y - 2, y + 2, y - 2] }}
                      transition={{ repeat: Infinity, duration: 2, delay: idx * 0.4 }}
                      className="absolute w-10 h-10 bg-indigo-950/60 border border-indigo-400/30 rounded-full flex flex-col items-center justify-center shadow-lg"
                    >
                      <span className="text-xs">👧</span>
                      <span className="font-mono text-[7px] text-indigo-300 uppercase scale-90">{girl.name}</span>
                    </motion.div>
                  );
                })}

                {/* Floating laughter text bubbles represent chatter */}
                {["haha!", "laughing", "talking"].map((text, idx) => (
                  <motion.span
                    key={idx}
                    animate={{
                      y: [-10, -40],
                      opacity: [0, 0.9, 0],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      delay: idx * 1.2,
                      ease: "easeOut"
                    }}
                    className="absolute font-serif italic text-[9px] text-amber-200 bg-amber-950/60 pin border border-amber-900/40 rounded px-1.5 py-0.5"
                    style={{
                      left: idx === 0 ? "10%" : idx === 1 ? "75%" : "45%",
                      top: "20%"
                    }}
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Scene 3: The Question
        return (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-900/40">
            {/* Speech bubble highlighting the sudden turning point question */}
            <div className="w-full max-w-[280px] bg-slate-950/90 border border-white/5 rounded-2xl p-5 relative overflow-hidden flex flex-col items-center">
              
              <div className="relative w-14 h-14 bg-amber-500/10 border border-amber-400/40 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-indigo-950/60 border border-indigo-500/20 p-3 rounded-2xl relative text-center mb-3 w-full"
              >
                <div className="text-[9px] uppercase tracking-widest font-mono text-indigo-400 mb-1">
                  The Sudden Question
                </div>
                <p className="font-serif italic text-sm text-slate-100 font-bold leading-normal">
                  "Do you and Chika have an affair?"
                </p>
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-950 border-r border-b border-indigo-500/20 rotate-45" />
              </motion.div>

              {/* Immediate Reject Symbol */}
              <div className="p-2 py-1.5 bg-red-500/15 border border-red-500/30 rounded-lg flex items-center gap-1.5 text-[10px] font-mono text-red-400">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Rejected immediately: "She's just a friend."</span>
              </div>
            </div>
          </div>
        );

      case 3: // Scene 4: The Thought Starts
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Reflective visual of minds replaying memories */}
            <div className="w-full max-w-[260px] bg-black/60 border border-white/10 rounded-2xl p-5 relative overflow-hidden flex flex-col items-center">
              
              <div className="relative w-16 h-16 rounded-full border border-sky-400/25 flex items-center justify-center mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute inset-1 border border-dashed border-sky-400/20 rounded-full"
                />
                <Eye className="w-6 h-6 text-sky-400" />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-2">Thoughts Replaying</span>

              <div className="space-y-1.5 w-full">
                {[
                  "🚌 The bus seat commutes",
                  "🎒 The morning bag moves",
                  "👀 The silent waiting waiting",
                  "💬 The everyday routine conversations"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.4 }}
                    className="p-1.5 px-2 bg-white/5 rounded border border-white/5 text-[9.5px] font-mono text-slate-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4: // Scene 5: Her Return
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Same bus seat but glowing with shifted perspective */}
            <div className="w-full max-w-[260px] bg-slate-950 border border-white/15 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                <span className="text-[8px] uppercase tracking-wider font-mono text-emerald-400">Andhra School Reopened</span>
                <span className="text-[8px] font-mono text-slate-500">Normal Routine</span>
              </div>

              <div className="flex justify-center items-center gap-6 py-2">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-lg relative">
                    👦
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono block mt-1">Me (Looking)</span>
                </div>

                {/* Animated transition indicator */}
                <span className="text-lg text-sky-400 animate-pulse">✨</span>

                <div className="text-center">
                  <motion.div 
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 rounded-xl bg-sky-950/40 border border-sky-400 flex items-center justify-center text-lg relative shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  >
                    👧
                  </motion.div>
                  <span className="text-[8px] text-sky-400 font-mono block mt-1 font-bold">Chika (Returned)</span>
                </div>
              </div>

              <div className="p-2 bg-sky-950/20 rounded border border-sky-400/20 text-center mt-3">
                <p className="text-[9.5px] font-serif italic text-sky-200">
                  "I was looking at her differently."
                </p>
              </div>
            </div>
          </div>
        );

      case 5: // Scene 6: The Question I Asked Her
        return (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-900/40">
            {/* Courageous question speech card */}
            <div className="w-full max-w-[280px] bg-slate-950/90 border border-white/10 rounded-2xl p-5 relative text-center">
              
              <div className="flex justify-center items-center gap-1.5 mb-3 text-[9px] uppercase tracking-widest font-mono text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Morning Commute Courage</span>
              </div>

              <div className="bg-sky-950/40 border border-sky-500/20 rounded-xl p-3 mb-3">
                <p className="text-[10px] font-mono text-sky-300 block mb-1">THE DIRECT QUESTION:</p>
                <p className="font-serif italic text-sm text-white font-bold">
                  "Do you like me?"
                </p>
              </div>

              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <p className="text-[9.5px] font-sans text-slate-400 leading-normal">
                  She looked completely confused as I explained the whispers of those junior girls.
                </p>
              </div>
            </div>
          </div>
        );

      case 6: // Scene 7: Her Answer
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Cards displaying exactly her lines */}
            <div className="w-full max-w-[280px] bg-black/60 border border-white/10 rounded-2xl p-5 relative">
              <span className="text-[8px] uppercase tracking-widest font-mono text-indigo-400 block mb-3 text-center">
                Her Precise Answer
              </span>

              <div className="space-y-2">
                {[
                  "\"It's a misunderstanding.\"",
                  "\"We're just close friends.\"",
                  "\"People think things because we're close.\""
                ].map((quote, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.4 }}
                    className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-center"
                  >
                    <p className="font-serif italic text-xs text-sky-200 leading-relaxed font-semibold">
                      {quote}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 7: // Scene 8: The Routine Continues
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Moving bus landscape but with an active split visual of outside routine vs inside head */}
            <div className="w-full max-w-[280px] bg-slate-950 border border-white/15 rounded-2xl p-4 overflow-hidden">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block text-center mb-2">
                External Reality vs Inner Storm
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-center flex flex-col justify-between min-h-[100px]">
                  <span className="text-[8px] font-mono text-emerald-400 uppercase">EXTERNAL</span>
                  <div className="text-xl">🚌</div>
                  <span className="text-[9px] font-serif text-slate-400 italic">
                    Same bus, same seat, same route.
                  </span>
                </div>

                <div className="p-2 bg-sky-950/30 rounded-xl border border-sky-500/20 text-center flex flex-col justify-between min-h-[100px]">
                  <span className="text-[8px] font-mono text-sky-400 uppercase">INSIDE HEAD</span>
                  <div className="text-xl animate-pulse">⚡</div>
                  <span className="text-[9.5px] font-serif text-sky-200 leading-tight">
                    Everything was completely different.
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 8: // Scene 9: Realization
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Expanding heart constellation representing liking her more and more */}
            <div className="w-full max-w-[260px] bg-black/60 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center relative">
              <span className="text-[8px] font-mono uppercase text-sky-400 tracking-wider block mb-4">
                Slow Gradual Realization
              </span>

              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Visual pulse layers */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border-2 border-sky-400/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
                  className="absolute inset-3 rounded-full border border-sky-400/20"
                />
                
                <Heart className="w-10 h-10 text-sky-400 fill-sky-400/20 relative z-10" />
              </div>

              {/* Incremental meter markers */}
              <div className="flex gap-1.5 mt-5">
                {[1, 2, 3, 4, 5].map((step) => (
                  <motion.div
                    key={step}
                    animate={{ backgroundColor: ["rgba(56, 189, 248, 0.1)", "rgba(56, 189, 248, 0.9)", "rgba(56, 189, 248, 0.1)"] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: step * 0.3 }}
                    className="w-5 h-1 rounded"
                  />
                ))}
              </div>

              <span className="text-[9.5px] font-mono text-slate-400 uppercase mt-3">
                Liking her more & more
              </span>
            </div>
          </div>
        );

      case 9: // Scene 10: Determination
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            {/* Visualizing courage meters */}
            <div className="w-full max-w-[260px] bg-black/60 border border-white/10 rounded-2xl p-5 relative">
              <span className="text-[8px] font-mono uppercase text-sky-400 block tracking-widest mb-3 text-center">
                Trying to Speak
              </span>

              <div className="space-y-4 pt-1">
                <div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>Unspoken Feelings</span>
                    <span className="text-sky-300">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-sky-400 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>Gaining Courage</span>
                    <span className="text-red-400 font-bold animate-pulse">FAILING...</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1 relative">
                    <motion.div
                      animate={{ width: ["0%", "85%", "0%"] }}
                      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-white/5 rounded border border-white/5 text-center">
                <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest">
                  *More times than I can count
                </span>
              </div>
            </div>
          </div>
        );

      case 10: // Scene 11: Chapter Ending
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/90 [background-image:radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="text-center max-w-[280px]">
              
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block text-2xl mb-4"
              >
                🌙
              </motion.div>

              <div className="flex justify-center items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-sky-400 mt-2 font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-sky-400 animate-pulse text-sky-400" />
                <span>The Story Unfolds</span>
              </div>
              <p className="text-[9px] font-mono text-slate-500 leading-normal">
                Chapter 2: The Question That Stayed is fully complete.
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
    <div id="the-question-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative Accent Strip top */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-700 ${
        currentScene === 2 ? "bg-amber-400" : // Scene 3: The question (alert indicator)
        currentScene === 6 ? "bg-indigo-400" : // Scene 7: Her answer (closeness)
        currentScene === 10 ? "bg-gradient-to-r from-sky-400 via-indigo-500 to-rose-500" : // Finale
        "bg-sky-400" // Default light blue accents
      }`} />

      {/* Progress indicators - 11 steps */}
      <div className="px-6 pt-5 grid grid-cols-11 gap-1">
        {scenes.map((sc, i) => (
          <button
            key={sc.id}
            onClick={() => {
              setCurrentScene(i);
              setIsPlaying(false);
            }}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === currentScene 
                ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" 
                : i < currentScene 
                  ? "bg-sky-400/30" 
                  : "bg-white/5 hover:bg-white/15"
            }`}
            title={`Go to Scene ${sc.id}`}
          />
        ))}
      </div>

      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch justify-between min-h-[460px]">
        {/* Left column: Narrative Text Block */}
        <div className="flex-1 flex flex-col justify-between max-w-md select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-900/50">
                SCENE {String(scene.id).padStart(2, "0")} OF 11
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {scene.title.split(" — ")[1]}
              </span>
            </div>

            {/* Core story text lines */}
            <div className="my-6 space-y-2 min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2.5 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar text-left"
                >
                  {scene.lyrics.map((line, idx) => {
                    if (line === "") {
                      return <div key={idx} className="h-2.5" />;
                    }
                    
                    const isQuote = line.startsWith("\"");
                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.8) }}
                        className={`font-serif leading-relaxed ${
                          isQuote 
                            ? "text-sky-300 font-semibold text-[14px] md:text-[15.5px]" 
                            : "text-slate-200 text-slate-300 text-[13.5px] md:text-[14.5px]"
                        }`}
                      >
                        {line}
                      </motion.p>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Nav Controls */}
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

        {/* Right column: Visual Stage Panel */}
        <div className="flex-1 min-h-[300px] lg:min-h-auto rounded-xl border border-white/5 bg-black/30 relative overflow-hidden flex items-center justify-center">
          
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

          {/* Overlay corner label */}
          <div className="absolute top-3 right-4 flex items-center gap-1.5 opacity-40 select-none">
            <span className="text-[10px] font-mono text-indigo-400 tracking-wider">VISUAL ENVIRONMENT</span>
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
          </div>

          {/* Floating starlight dust */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [240, -20],
                  x: [i * 35, i * 35 + (i % 2 === 0 ? 10 : -10)],
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.9
                }}
                className="absolute w-1 h-1 bg-sky-200 rounded-full"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
