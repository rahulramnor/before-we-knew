/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RefreshCw,
  Heart,
  Calendar,
  Lock,
  Mail,
  HelpCircle,
  Sparkles,
  Smile,
  Compass,
  CheckCircle,
  FileText
} from "lucide-react";

export default function TheUnfinishedPathCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLetterOpened, setIsLetterOpened] = useState(false);

  // Scenes matching user constraints exactly
  const scenes = [
    {
      id: 1,
      title: "SCENE 1 — A WEEK OF WAITING",
      lyrics: [
        "For a week,",
        "I asked the same question.",
        "",
        "Every day,",
        "the answer stayed the same.",
        "",
        "\"Wait.\"",
        "\"I'm still thinking.\""
      ],
      description: "Anticipation, ticking days, bus rides, and life continuing under a gentle question mark."
    },
    {
      id: 2,
      title: "SCENE 2 — THE ANSWER",
      lyrics: [
        "A week later,",
        "I finally got my answer.",
        "",
        "It was no."
      ],
      description: "Inside the Dosti Travels bus. Simple, quiet. No dramatic effects, just a heartfelt reality."
    },
    {
      id: 3,
      title: "SCENE 3 — WHY?",
      lyrics: [
        "I wanted to know why.",
        "",
        "She explained that we belonged to different castes.",
        "In her mind, there was no future for us.",
        "",
        "Presented respectfully—each of us simply believed our path.",
        "A concern born out of family and societal rules."
      ],
      description: "Two different worlds, social structures. Presented with empathy and mutual respect."
    },
    {
      id: 4,
      title: "SCENE 4 — MY FIRST REACTION",
      lyrics: [
        "I was disappointed.",
        "",
        "But I wasn't convinced.",
        "",
        "The answer was no.",
        "My brain immediately started searching for reasons why it shouldn't be."
      ],
      description: "A slightly light-hearted moment of youth. Looking for possibilities."
    },
    {
      id: 5,
      title: "SCENE 5 — TRYING TO CONVINCE HER",
      lyrics: [
        "I tried explaining:",
        "• Times were changing.",
        "• The future wasn't decided yet.",
        "• We should at least try.",
        "",
        "The more she said no,",
        "the more reasons I found."
      ],
      description: "Passionate memories, returning thoughts. A quiet mental list of why we shouldn't submit to caste borders."
    },
    {
      id: 6,
      title: "SCENE 6 — THE LETTER",
      lyrics: [
        "The next day, after school, on the bus.",
        "I brought a letter.",
        "",
        "Not because I had accepted the answer.",
        "Because I hadn't."
      ],
      description: "A handwritten note of youthful conviction. Open the envelope to read what it meant."
    },
    {
      id: 7,
      title: "SCENE 7 — THE FEELING",
      lyrics: [
        "I wasn't angry.",
        "I wasn't giving up.",
        "",
        "I genuinely believed",
        "there had to be a way."
      ],
      description: "An atmosphere filled with hope rather than sorrow. Believing in a bridge across the differences."
    },
    {
      id: 8,
      title: "SCENE 8 — CHAPTER ENDING",
      lyrics: [
        "She had given her answer.",
        "I had already decided mine.",
        "",
        "I wasn't giving up yet."
      ],
      description: "A quiet, powerful resolve. End of chapter. The journey of determination begins."
    }
  ];

  // Auto playback loop logic
  useEffect(() => {
    let timerID: any;
    if (isPlaying) {
      timerID = setInterval(() => {
        // If we're at scene 6 (Letter) and it's not opened, pause play tour to allow interaction
        if (currentScene === 5 && !isLetterOpened) {
          setIsPlaying(false);
          return;
        }

        setCurrentScene((prev) => {
          if (prev === scenes.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 7000); // 7s per slide
    }
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [isPlaying, currentScene, isLetterOpened, scenes.length]);

  // Reset letter states when scene changes away from 6
  useEffect(() => {
    if (currentScene !== 5) {
      setIsLetterOpened(false);
    }
  }, [currentScene]);

  const next = () => {
    if (currentScene === 5 && !isLetterOpened) {
      // Prompt option or open letter
      setIsLetterOpened(true);
    }
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  };

  const prev = () => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  };

  // Rendering visual graphics for Stage side
  const renderVisualStoryteller = () => {
    switch (currentScene) {
      case 0: // Scene 1: A Week of Waiting
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-sky-950/20 border border-sky-400/15 rounded-2xl p-6 relative flex flex-col items-center">
              
              {/* Daily waiting ticking effect */}
              <div className="flex gap-1.5 justify-center mb-6">
                {["5 Dec", "6 Dec", "7 Dec", "8 Dec", "9 Dec", "10 Dec", "11 Dec"].map((day, idx) => (
                  <motion.div
                    key={day}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: idx * 0.35,
                    }}
                    className={`p-1 flex flex-col items-center rounded border text-center ${
                      idx === 6 
                        ? "bg-sky-500/25 border-sky-400 text-sky-200" 
                        : "bg-white/5 border-white/5 text-slate-400"
                    }`}
                  >
                    <span className="text-[7.5px] font-mono whitespace-nowrap">{day}</span>
                    <span className="text-[7px] text-slate-500 mt-0.5 font-sans">Wait</span>
                  </motion.div>
                ))}
              </div>

              {/* Fictional double check waiting bubbles */}
              <div className="space-y-3 w-full">
                <div className="text-right">
                  <div className="inline-block bg-sky-950/40 border border-sky-500/20 text-sky-200 text-[10.5px] px-3 py-1.5 rounded-2xl rounded-tr-none font-serif">
                    "What's your answer?"
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-left"
                >
                  <div className="inline-block bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[10.5px] px-3 py-1.5 rounded-2xl rounded-tl-none font-sans">
                    "Wait. I'm still thinking."
                  </div>
                </motion.div>
              </div>

              <p className="mt-6 text-[9px] font-mono text-slate-500 text-center uppercase tracking-wider">
                🚌 Daily school commutes continue
              </p>
            </div>
          </div>
        );

      case 1: // Scene 2: The Answer
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/50">
            <div className="w-full max-w-[260px] p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center">
              
              {/* Inside Bus Window outline representation */}
              <div className="w-24 h-16 border-2 border-slate-700 rounded-lg flex items-center justify-center relative bg-slate-950 overflow-hidden mb-5 shadow-inner">
                {/* Minimalist mountain or tree moving */}
                <motion.div
                  animate={{ x: [40, -40] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute w-1.5 h-6 bg-slate-800 rounded transform rotate-12"
                />
                <span className="text-2xl filter drop-shadow z-10">🚌</span>
              </div>

              <div className="space-y-1 mt-1">
                <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                  11 DECEMBER 2019
                </span>
                <p className="font-serif text-sm italic text-slate-300">
                  "A week later..."
                </p>
                <div className="h-[1px] w-6 bg-slate-800 my-2 mx-auto" />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="block font-serif font-bold text-xl text-rose-400 mt-2 tracking-wide"
                >
                  "It was no."
                </motion.span>
              </div>

              <p className="mt-5 text-[8.5px] font-sans text-slate-500 italic max-w-xs">
                A simple moment on the bus. Quiet, respectful.
              </p>
            </div>
          </div>
        );

      case 2: // Scene 3: Why? (Respectful Caste presentation)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-slate-850 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                  HONEST BARRIERS
                </span>
              </div>

              {/* Two paths visual */}
              <div className="h-20 w-full relative overflow-hidden mb-4 border border-white/5 rounded-lg bg-black/40 flex items-center justify-center">
                {/* Path 1 */}
                <div className="absolute left-6 inset-y-0 w-[1px] bg-sky-400/25" />
                <div className="absolute right-6 inset-y-0 w-[1px] bg-amber-400/25" />
                
                {/* Horizontal line representing Caste / Social differences */}
                <div className="absolute inset-x-0 h-[1.5px] bg-red-500/20 flex items-center justify-center">
                  <span className="text-[8px] font-mono uppercase bg-slate-950 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">
                    Caste Differences
                  </span>
                </div>

                <div className="absolute left-6 bottom-4 w-1.5 h-1.5 bg-sky-400/80 rounded-full" />
                <div className="absolute right-6 top-4 w-1.5 h-1.5 bg-amber-400/80 rounded-full" />
              </div>

              <p className="font-serif text-[11px] leading-relaxed text-slate-450 text-slate-300 italic">
                "She explained that we belonged to different castes. In her mind, there was no future for us."
              </p>
              
              <p className="text-[8.5px] font-sans text-slate-550 text-slate-400 leading-normal mt-3">
                *Presented respectfully. Neither was wrong, neither was right. Just a heavy societal rule we both faced.
              </p>
            </div>
          </div>
        );

      case 3: // Scene 4: My First Reaction (Light-hearted mind search)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/75 border border-white/5 p-6 rounded-2xl text-center">
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[8px] font-mono uppercase tracking-widest mb-4">
                MY MIND IN MOTION
              </span>

              {/* Whimsical Search Screen box */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-left font-mono text-[9px] relative overflow-hidden shadow-lg">
                <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-slate-500 font-sans text-[8.5px] ml-1">mind_lookup.exe</span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-slate-400">&gt; Query: "Accept rejection?"</p>
                  <p className="text-rose-400">&gt; State: Disappointed</p>
                  <motion.p
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-sky-400"
                  >
                    &gt; Searching for solutions...
                  </motion.p>
                  <p className="text-emerald-400 font-bold mt-2">&gt; FOUND: Castes shouldn't decide everything! 💡</p>
                </div>
              </div>

              <p className="mt-4 font-serif text-[11px] text-slate-300 italic">
                Disappointed, but simply unable to accept that 'no' was the permanent end.
              </p>
            </div>
          </div>
        );

      case 4: // Scene 5: Trying to Convince Her
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] space-y-2.5">
              <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest text-center mb-1">
                MEMORIES OF QUIET EXPLANATIONS
              </span>

              {[
                { title: "Times were changing", desc: "The old world was slowly giving way to something new." },
                { title: "The future wasn't decided yet", desc: "No social rule had written our entire lives in stone." },
                { title: "We should at least try", desc: "Giving up without a fight felt entirely wrong." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="p-3 bg-slate-900/60 border border-white/5 rounded-xl flex items-start gap-2.5"
                >
                  <div className="w-4 h-4 rounded-full bg-sky-500/10 flex items-center justify-center mt-0.5 border border-sky-400/20 text-[9px] text-sky-400 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="block font-semibold text-[11px] text-white font-sans">{item.title}</span>
                    <span className="block text-[9px] text-slate-400 mt-0.5 leading-normal">{item.desc}</span>
                  </div>
                </motion.div>
              ))}

              <p className="text-center text-[9px] italic text-sky-200 mt-2 font-serif">
                "The more she said no, the more reasons I found."
              </p>
            </div>
          </div>
        );

      case 5: // Scene 6: The Letter (Interactive Envelope)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40 select-none">
            
            <AnimatePresence mode="wait">
              {!isLetterOpened ? (
                <motion.div
                  key="envelope"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setIsLetterOpened(true)}
                  className="w-full max-w-[240px] aspect-video bg-[#fffdfa] text-slate-800 rounded-xl border border-amber-200 shadow-2xl cursor-pointer p-4 overflow-hidden flex flex-col items-center justify-center relative group"
                >
                  {/* Stamp */}
                  <div className="absolute top-2 right-2 w-7 h-8 bg-sky-500/20 border-2 border-dashed border-sky-400/40 rounded flex items-center justify-center text-[10px] text-sky-500/70 select-none font-bold">
                    12th
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Envelope folds */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-100/50 border-t border-slate-200/60 pointer-events-none" />
                  
                  <Mail className="w-8 h-8 text-sky-500 mb-2 group-hover:animate-bounce" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                    A HANDWRITTEN LETTER
                  </span>
                  <div className="flex items-center gap-1 text-[8.5px] font-mono text-slate-400 mt-2">
                    <span>Click to read</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >                    
                      →
                    </motion.span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="letter-content"
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-[280px] p-5 bg-[#fbf9f4] text-slate-800 rounded-xl border border-amber-205/50 shadow-2xl relative text-left"
                >
                  {/* Paper head */}
                  <div className="flex justify-between items-center border-b border-amber-200/40 pb-2 mb-3">
                    <span className="text-[9px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/30 uppercase tracking-widest">
                      12 Dec 2019
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLetterOpened(false);
                      }}
                      className="text-[9px] font-mono text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Close Letter
                    </button>
                  </div>

                  {/* Envelope text exact requested quotes */}
                  <div className="space-y-2 font-serif text-[11px] leading-relaxed text-slate-700 italic">
                    <p>
                      "I don't remember every word anymore. Almost seven years is a long time."
                    </p>
                    <p>
                      "But I remember what it meant."
                    </p>
                    <p className="pl-2.5 border-l-2 border-sky-400">
                      "It was my attempt to explain why I thought caste shouldn't decide everything."
                    </p>
                    <p>
                      "Why I thought we should at least try."
                    </p>
                    <p className="text-sky-600 font-bold">
                      "Why I wasn't ready to give up."
                    </p>
                  </div>

                  {/* Stamp background */}
                  <div className="absolute right-3 bottom-2 text-sky-400 opacity-10">
                    <FileText className="w-8 h-8" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        );

      case 6: // Scene 7: The Feeling (Hopeful, not sad)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/20">
            <div className="w-full max-w-[260px] text-center">
              
              {/* Uplifting glowing micro particles */}
              <div className="relative h-16 w-full flex justify-center items-center mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [12, -28],
                      x: [i * 12 - 30, i * 12 - 25],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-t from-sky-400 to-sky-300 rounded-full blur-[1px]"
                  />
                ))}
                <Compass className="w-8 h-8 text-sky-400 opacity-60 animate-spin-slow" />
              </div>

              <div className="p-4 bg-sky-950/20 border border-sky-500/15 rounded-2xl relative">
                <span className="text-[8.5px] font-mono text-sky-400 uppercase tracking-widest block mb-2">
                  HOPEFUL RESOLVE
                </span>
                <p className="font-serif text-[11.5px] text-slate-200 leading-relaxed italic mb-1">
                  "I wasn't angry. <br /> I wasn't giving up."
                </p>
                <p className="font-serif text-[12.5px] font-semibold text-sky-300 italic">
                  "I genuinely believed there had to be a way."
                </p>
              </div>
            </div>
          </div>
        );

      case 7: // Scene 8: Chapter Ending
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/80">
            <div className="text-center max-w-[280px]">
              
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block p-3 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 mb-4"
              >
                <Heart className="w-6 h-6 fill-sky-400 text-sky-400" />
              </motion.div>

              <div className="space-y-4">
                <p className="font-serif text-sm italic text-slate-400 leading-relaxed">
                  "She had given her answer. <br />
                  I had already decided mine."
                </p>

                <div className="h-[1px] w-8 bg-sky-500/20 mx-auto" />

                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-serif font-bold text-lg md:text-xl text-sky-300 italic tracking-wide"
                >
                  "I wasn't giving up yet."
                </motion.h4>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const scene = scenes[currentScene];

  return (
    <div id="unfinished-path-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative accent top line */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-700 bg-sky-400`} />

      {/* Progress index bar */}
      <div className="px-6 pt-5 grid grid-cols-8 gap-1 md:gap-1.5">
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
        
        {/* Left Side: Cinematic lyrics/text */}
        <div className="flex-1 flex flex-col justify-between max-w-md select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-900/50">
                SCENE 0{scene.id} OF 08
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {scene.title.split(" — ")[1]}
              </span>
            </div>

            {/* Cinematic text scroll */}
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
                  {scene.lyrics.map((line, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.12 }}
                      className={`font-serif leading-relaxed ${
                        idx === 0 
                          ? "text-slate-100 text-lg md:text-xl font-medium" 
                          : "text-slate-300 text-sm md:text-base italic pl-3 border-l-[2.5px] border-sky-400/20"
                      }`}
                    >
                      {line}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
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
                className="p-2.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 hover:text-white hover:bg-sky-400/20 transition-all cursor-pointer flex items-center justify-center font-bold"
                title="Next Scene"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Graphic Visual Canvas */}
        <div className="flex-1 min-h-[290px] lg:min-h-auto rounded-xl border border-white/5 bg-black/30 relative overflow-hidden flex items-center justify-center">
          
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

          <div className="absolute top-3 right-4 flex items-center gap-1.5 opacity-40 select-none">
            <span className="text-[9px] font-mono text-sky-400 tracking-wider">ACTIVE SCENE ENGINE</span>
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping" />
          </div>

          {/* Floating stardust overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [240, -20],
                  x: [i * 45, i * 45 + (i % 2 === 0 ? 10 : -10)],
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
