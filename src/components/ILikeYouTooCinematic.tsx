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
  Clock,
  Heart,
  Calendar,
  Sparkles,
  MapPin,
  Compass,
  Smile,
  LogOut,
  Moon,
  MessageCircle
} from "lucide-react";

export default function ILikeYouTooCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Interactive states for Chapter 6 scenes
  const [busBoarded, setBusBoarded] = useState(false);        // Scene 2
  const [grabbedHand, setGrabbedHand] = useState(false);      // Scene 3
  const [outsideStanding, setOutsideStanding] = useState(false); // Scene 4
  const [revealedAnswer, setRevealedAnswer] = useState(false);  // Scene 5
  const [feltRefinement, setFeltRefinement] = useState(false);  // Scene 6

  const scenes = [
    {
      id: 0,
      title: "SCENE 1 — WAITING",
      lyrics: [
        "16 December 2019",
        "",
        "Prelim exam day.",
        "",
        "My exam ended much earlier than normal school hours.",
        "Going home wasn't an option.",
        "",
        "My mother didn't allow me to travel alone.",
        "So I waited for the bus.",
        "",
        "Just another afternoon.",
        "Just another bus ride.",
        "",
        "Or so I thought."
      ],
      description: "Quiet afternoon waiting inside the half-empty bus, school hours still running."
    },
    {
      id: 1,
      title: "SCENE 2 — SHE GETS ON",
      lyrics: [
        "A few minutes later,",
        "her school ended too.",
        "",
        "Then she saw me.",
        "",
        "And suddenly,",
        "she looked unbelievably excited.",
        "",
        "Not nervous.",
        "Not shy.",
        "Excited."
      ],
      description: "She boards the bus, scans the rows, and spots you with immediate joy."
    },
    {
      id: 2,
      title: "SCENE 3 — COME WITH ME",
      lyrics: [
        "She didn't sit.",
        "She didn't start a conversation.",
        "",
        "Instead,",
        "she grabbed my hand.",
        "",
        "\"Come with me.\"",
        "",
        "This is significant because throughout the story I was usually the one taking initiative.",
        "This time it was her."
      ],
      description: "An unexpected step. She reaches for your hand and guides you off the steps."
    },
    {
      id: 3,
      title: "SCENE 4 — OUTSIDE THE BUS",
      lyrics: [
        "She took me outside the bus.",
        "",
        "Not far.",
        "Just a few steps away.",
        "Near a parked car.",
        "",
        "Everything around us was completely normal.",
        "But this would become one of the most important memories of my life."
      ],
      description: "Stepping onto the quiet pavement under the winter afternoon sun near a parked car."
    },
    {
      id: 4,
      title: "SCENE 5 — THE ANSWER",
      lyrics: [
        "For days, I had been waiting.",
        "Every day, I asked the same question.",
        "\"What's your answer?\"",
        "",
        "Every day, the answer was the same.",
        "\"I'm still thinking.\"",
        "",
        "One day became two.",
        "Two became three. Then four. Then five.",
        "",
        "I had imagined every possible outcome.",
        "Except this one.",
        "",
        "We stood there.",
        "Just a few steps away from the bus.",
        "Near a parked car.",
        "She looked at me.",
        "",
        "\"I like you too.\""
      ],
      description: "Standing still as she delivers the words that erase all chapters of waiting."
    },
    {
      id: 5,
      title: "SCENE 6 — WHAT I FELT",
      lyrics: [
        "For a moment, I didn't know what to say.",
        "I had spent days worrying.",
        "Days wondering if I had ruined a friendship.",
        "Days trying to convince her.",
        "Days waiting for an answer.",
        "",
        "And suddenly, the waiting was over.",
        "I wasn't prepared for that.",
        "Not because I didn't want that answer.",
        "Because I had stopped expecting it.",
        "",
        "A few days earlier, she had said no.",
        "Now she was standing in front of me, saying yes.",
        "I still remember how impossible that felt.",
        "",
        "We walked back toward the bus.",
        "Everything around us looked exactly the same.",
        "But it didn't feel the same anymore."
      ],
      description: "The contrast between the fear of rejection and the simple truth standardizing everything."
    },
    {
      id: 6,
      title: "SCENE 7 — BACK TO THE BUS",
      lyrics: [
        "Then we went back.",
        "",
        "Same bus.",
        "Same seats.",
        "Same route.",
        "",
        "Nothing had changed.",
        "",
        "But somehow,",
        "everything felt different."
      ],
      description: "Re-entering the cabin. The physics same, but the inner landscape changed."
    },
    {
      id: 7,
      title: "SCENE 8 — A NEW PERSPECTIVE",
      lyrics: [
        "Before this, we were just friends.",
        "",
        "We teased each other.",
        "Judged couples from bus windows.",
        "Made fun of random things.",
        "Argued. Laughed.",
        "",
        "We didn't even notice we had different genders.",
        "",
        "Now suddenly, it was different.",
        "",
        "It was Me.",
        "And her.",
        "",
        "We became aware of every word.",
        "Every silence.",
        "Every glance."
      ],
      description: "Looking at each other with fresh eyes. A quiet weight behind every joke."
    },
    {
      id: 8,
      title: "SCENE 9 — END OF VOLUME I",
      lyrics: [
        "The bus was the same.",
        "The road was the same.",
        "The seats were the same.",
        "But.",
        "We weren't.",
        "",
        "For more than a year,",
        "I waited for her to sit beside me.",
        "",
        "That day,",
        "she asked me to follow her instead.",
        "",
        "And just like that,",
        "a friendship became something more.",
        "",
        "16 December 2019",
        "✨ I Like You Too",
        "",
        "End of Volume I"
      ],
      description: "The twilight of school life drawing to a perfect close under the stars."
    }
  ];

  // Auto playbook tour simulation
  useEffect(() => {
    let timerID: any;
    if (isPlaying) {
      timerID = setInterval(() => {
        // Enforce interaction buffers on key slides
        if (currentScene === 1 && !busBoarded) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 2 && !grabbedHand) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 4 && !revealedAnswer) {
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
      }, 8000); // 8s slides due to rich narrative text
    }
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [isPlaying, currentScene, busBoarded, grabbedHand, revealedAnswer, scenes.length]);

  // Reset interactive sub-states on scene 0
  useEffect(() => {
    if (currentScene === 0) {
      setBusBoarded(false);
      setGrabbedHand(false);
      setOutsideStanding(false);
      setRevealedAnswer(false);
      setFeltRefinement(false);
    }
  }, [currentScene]);

  const next = () => {
    if (currentScene === 1 && !busBoarded) {
      setBusBoarded(true);
    }
    if (currentScene === 2 && !grabbedHand) {
      setGrabbedHand(true);
    }
    if (currentScene === 3 && !outsideStanding) {
      setOutsideStanding(true);
    }
    if (currentScene === 4 && !revealedAnswer) {
      setRevealedAnswer(true);
    }
    if (currentScene === 5 && !feltRefinement) {
      setFeltRefinement(true);
    }
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  };

  const prev = () => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  };

  const renderVisuals = () => {
    switch (currentScene) {
      case 0: // Scene 1 — Waiting
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <div className="w-full max-w-[270px] bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                PRELIM AFTERNOON • 16 DEC
              </span>

              {/* Silent Empty Bus Seat */}
              <div className="h-28 w-full border border-white/5 rounded-xl bg-slate-950/60 relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky-950/20" />
                {/* Sunlight beams cast obliquely on seat */}
                <div className="absolute -top-10 -left-6 w-32 h-44 bg-amber-500/5 rotate-45 pointer-events-none blur-sm" />
                
                <span className="text-2xl opacity-65 mb-1">🚌</span>
                <p className="font-mono text-[9px] text-slate-400">Empty Cabin • Waiting</p>
                <p className="font-serif text-[10px] text-slate-500 italic mt-1">
                  "So I waited for the bus."
                </p>
              </div>
            </div>
          </div>
        );

      case 1: // Scene 2 — She Gets On
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                CABIN ENTRANCE
              </span>

              <div className="h-24 w-full flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {!busBoarded ? (
                    <motion.div
                      key="unboarded"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="space-y-2.5"
                    >
                      <div className="text-xl animate-bounce">🎒</div>
                      <button
                        onClick={() => setBusBoarded(true)}
                        className="py-1.5 px-3 bg-sky-500/15 border border-sky-500/20 text-sky-300 font-mono text-[9.5px] rounded-lg cursor-pointer hover:bg-sky-500/25"
                      >
                        SHE STEPS ON
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="boarded"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg">🧑‍💼</span>
                        <motion.span 
                          animate={{ scale: [1, 1.2, 1] }} 
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="text-lg"
                        >
                          🌟
                        </motion.span>
                      </div>
                      <span className="block text-[9.5px] font-mono text-sky-400">SHE FOUND YOU</span>
                      <p className="font-serif text-xs italic text-sky-200">
                        "Unbelievably excited."
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );

      case 2: // Scene 3 — Come With Me
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <div className="w-full max-w-[270px] bg-slate-900/60 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                THE HAND GRAB
              </span>

              <div className="h-24 w-full border border-white/5 bg-slate-950/40 rounded-xl relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!grabbedHand ? (
                    <motion.button
                      key="grab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => setGrabbedHand(true)}
                      className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 rounded-lg text-[10px] font-mono cursor-pointer"
                    >
                      🤝 LET HER GRAB YOUR HAND
                    </motion.button>
                  ) : (
                    <motion.div
                      key="grabbed"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-1"
                    >
                      <div className="text-xl">👉</div>
                      <span className="font-serif text-sm italic font-bold text-amber-200">
                        "Come with me."
                      </span>
                      <p className="text-[8px] font-mono text-slate-500 uppercase">
                        This time, it was her.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );

      case 3: // Scene 4 — Outside the Bus
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                OUTSIDE PAVEMENT • DEPARTURE AREA
              </span>

              {/* Minimalist layout with bus symbol, car symbol and steps */}
              <div className="h-28 w-full border border-white/5 bg-slate-900/40 rounded-xl relative overflow-hidden flex items-center justify-around">
                <div className="flex flex-col items-center opacity-40">
                  <span className="text-xl">🚌</span>
                  <span className="text-[7.5px] font-mono text-slate-500">Bus Parked</span>
                </div>

                <div className="h-8 w-[1px] bg-slate-800" />

                <div className="flex flex-col items-center text-sky-400">
                  <span className="text-xl animate-pulse">🚗</span>
                  <span className="text-[7.5px] font-mono text-sky-400 font-bold">Near Parked Car</span>
                </div>
              </div>

              <p className="font-serif text-xs italic text-slate-400">
                "Not far. Just a few steps away."
              </p>
            </div>
          </div>
        );

      case 4: // Scene 5 — The Answer (No effects, pure carrying text)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60 transition-all">
            <div className="w-full max-w-[270px] bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                THE FINAL ANSWER
              </span>

              <div className="py-2">
                <AnimatePresence mode="wait">
                  {!revealedAnswer ? (
                    <motion.button
                      key="ask"
                      onClick={() => setRevealedAnswer(true)}
                      className="px-4 py-2 bg-sky-500/10 border border-sky-400/30 hover:bg-sky-500/20 text-sky-300 text-[10.5px] font-mono rounded-lg cursor-pointer"
                    >
                      "What's your answer?"
                    </motion.button>
                  ) : (
                    <motion.div
                      key="ans"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      className="space-y-2.5"
                    >
                      <span className="block text-[8px] font-mono text-amber-400">SHE LOOKS AT YOU</span>
                      <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                        "I like you too."
                      </h3>
                      <div className="h-[1px] w-6 bg-amber-400/30 mx-auto" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );

      case 5: // Scene 6 — What I Felt
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl space-y-4 text-center">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                IMPOSSIBLE REVERSAL
              </span>

              <div className="grid grid-cols-2 gap-4 py-1.5 font-mono text-[9px]">
                <div className="p-3 bg-rose-950/10 border border-rose-500/20 rounded-xl opacity-50">
                  <span className="block text-rose-400 font-bold mb-1">FEW DAYS AGO</span>
                  <p className="font-serif italic text-[10px] text-rose-300">"She said no."</p>
                </div>

                <div className="p-3 bg-emerald-950/10 border border-emerald-500/20 rounded-xl">
                  <span className="block text-emerald-400 font-bold mb-1">STANDS NOW</span>
                  <p className="font-serif italic text-[10px] text-emerald-300">"Saying yes."</p>
                </div>
              </div>

              <p className="font-serif text-xs italic text-slate-300">
                "We walked back. Everything looked same, but didn't feel same."
              </p>
            </div>
          </div>
        );

      case 6: // Scene 7 — Back to the Bus
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <div className="w-full max-w-[270px] bg-slate-900/60 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                CABIN RE-ENTRY
              </span>

              <div className="h-20 w-full bg-slate-950 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute left-6 w-2 h-2 bg-sky-400 rounded-full animate-ping" />
                <span className="text-xl">🚌</span>
                <p className="font-serif text-xs text-slate-350 italic ml-2">
                  "Same bus. Same seats. Same route."
                </p>
              </div>
            </div>
          </div>
        );

      case 7: // Scene 8 — A New Perspective
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                THE SHIFT IN PERCEPTION
              </span>

              {/* Two circles representing separate vs unified orbits */}
              <div className="flex justify-center gap-10 py-1">
                <div className="text-center font-mono text-[9px] text-slate-500">
                  <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center mx-auto mb-1">
                    👥
                  </div>
                  "Friends"
                </div>

                <div className="h-10 w-[1px] bg-slate-800 self-center" />

                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="text-center font-mono text-[9px] text-sky-400"
                >
                  <div className="w-10 h-10 rounded-full border border-sky-500/20 bg-sky-950/20 flex items-center justify-center mx-auto mb-1">
                    💖
                  </div>
                  "Something More"
                </motion.div>
              </div>

              <p className="font-serif text-[11px] text-slate-300 italic">
                "Not because the bus changed. Because we did."
              </p>
            </div>
          </div>
        );

      case 8: // Scene 9 — End of Volume I
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/80">
            <div className="text-center max-w-[280px] space-y-4">
              <div className="flex gap-1.5 justify-center">
                <Moon className="w-5 h-5 text-sky-200 fill-sky-200/20" />
              </div>

              <div className="p-4 bg-sky-950/15 border border-sky-400/10 rounded-2xl space-y-3">
                <span className="text-[8.5px] font-mono text-sky-400 uppercase tracking-widest block">
                  VOLUME I CONCLUDED
                </span>

                <p className="font-serif text-xs italic text-slate-350 leading-relaxed">
                  "For more than a year, I waited for her to sit beside me. That day, she asked me to follow her instead."
                </p>

                <div className="h-[1.5px] w-6 bg-sky-500/25 mx-auto" />

                <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-sky-300">
                  END OF VOLUME I
                </h4>
              </div>

              <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                🌊 Soft ocean atmospheric waves
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div id="i-like-you-too-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400 transition-all duration-700" />

      {/* Progress index bar */}
      <div className="px-6 pt-5 grid grid-cols-9 gap-1">
        {scenes.map((sc, i) => (
          <button
            key={sc.id}
            onClick={() => {
              setCurrentScene(i);
              setIsPlaying(false);
            }}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
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

      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch justify-between min-h-[460px]">
        
        {/* Left Side: Cinematic lyrics/text */}
        <div className="flex-1 flex flex-col justify-between max-w-md select-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-900/50">
                SCENE 0{currentScene + 1} OF 09
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {currentSceneData.title}
              </span>
            </div>

            {/* Cinematic text scroll - scrollable for long dialogues */}
            <div className="my-5 min-h-[170px] max-h-[240px] overflow-y-auto pr-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, staggerChildren: 0.12 }}
                  className="space-y-2.5"
                >
                  {currentSceneData.lyrics.map((line, idx) => {
                    const isDateText = line.includes("December 2019") || line.includes("End of Volume");
                    return (
                      <motion.p
                        key={idx}
                        className={`font-serif leading-relaxed ${
                          isDateText
                            ? "text-slate-100 text-lg font-bold tracking-wide border-b border-white/5 pb-1.5"
                            : line.startsWith(">") || line.startsWith("\"")
                              ? "text-sky-300 text-base italic pl-3 border-l-2 border-sky-400/40"
                              : "text-slate-300 text-sm italic"
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
              {renderVisuals()}
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-3 right-4 flex items-center gap-1.5 opacity-40 select-none">
            <span className="text-[9px] font-mono text-sky-400 tracking-wider">CONFESSION REC</span>
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping" />
          </div>

          {/* Floating starry particles */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [240, -20],
                  x: [i * 60, i * 60 + (i % 2 === 0 ? 12 : -12)],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 7 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.9
                }}
                className="absolute w-1.5 h-1.5 bg-sky-200 rounded-full"
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
