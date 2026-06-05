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
  BookOpen,
  HelpCircle,
  Sparkles,
  Inbox,
  PenTool,
  Wind,
  ShieldAlert,
  AlertCircle,
  EyeOff,
  Smile
} from "lucide-react";

export default function TheLostChitCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Custom states for each interactive slide
  const [writtenNote, setWrittenNote] = useState(false); // Scene 3 (Pen)
  const [foldedInPocket, setFoldedInPocket] = useState(false); // Scene 5 (The Chit)
  const [strugglesCount, setStrugglesCount] = useState(0); // Scene 7 (Operation: Recover note)
  const [gaveBack, setGaveBack] = useState(false); // Scene 8 (The Swear)
  const [thrownAway, setThrownAway] = useState(false); // Scene 9 (Gone)

  const scenes = [
    {
      id: 0,
      title: "DATE INTRODUCTION",
      lyrics: [
        "13–14 December 2019",
        "",
        "A few days after the rejection.",
        "A day after the letter.",
        "Before the prelim exams.",
        "",
        "Somewhere between those days,",
        "this happened."
      ],
      description: "Setting the coordinates. A moment nestled quietly between rejection and the exams."
    },
    {
      id: 1,
      title: "SCENE 1 — PRELIM SEASON",
      lyrics: [
        "December felt different.",
        "",
        "Prelim exams were approaching.",
        "Holidays were getting closer.",
        "",
        "Everyone seemed to be talking about dates.",
        "Timetables. Holidays.",
        "And reopening schedules."
      ],
      description: "The ticking calendar, timetables in hand, classrooms filled with holiday whispers."
    },
    {
      id: 2,
      title: "SCENE 2 — THE QUESTION",
      lyrics: [
        "Bus Aunty asked:",
        "\"When are your holidays starting?\"",
        "",
        "I answered:",
        "\"After prelims.\"",
        "",
        "That was it.",
        "A normal question.",
        "A normal answer.",
        "",
        "I mentioned the holidays.",
        "But I forgot to mention something important.",
        "",
        "We would be coming back again in January.",
        "",
        "To me,",
        "it was just another conversation.",
        "",
        "I didn't realize someone else was listening."
      ],
      description: "Inside the Dosti Travels bus, bus aunty asks about dates. A casual detail left unsaid."
    },
    {
      id: 3,
      title: "SCENE 3 — THE PEN",
      lyrics: [
        "Saturday Morning — 14 December 2019",
        "",
        "Before getting off near school,",
        "she handed me a pen.",
        "",
        "It wasn't expensive.",
        "It wasn't rare.",
        "It wasn't special.",
        "",
        "But it came from her.",
        "",
        "\"Good luck.\""
      ],
      description: "A simple Pentonic blue ballpoint pen. A gesture of quiet, innocent support."
    },
    {
      id: 4,
      title: "SCENE 4 — RESERVED AS ALWAYS",
      lyrics: [
        "After school,",
        "the bus came as usual.",
        "",
        "And as usual,",
        "our seats were already reserved.",
        "",
        "Even during prelim season,",
        "some traditions survived.",
        "",
        "The route was the same.",
        "The conversations were the same.",
        "",
        "The seat beside me was still waiting."
      ],
      description: "Afternoon returns. A reminder of the quiet, unspoken bond that stayed steady."
    },
    {
      id: 5,
      title: "SCENE 5 — THE CHIT",
      lyrics: [
        "Then she did something unexpected.",
        "",
        "Without explanation,",
        "slides a folded note into my shirt pocket.",
        "",
        "\"Open it when you get home.\"",
        "",
        "Suddenly,",
        "I had something to be curious about."
      ],
      description: "A secret message passed in silence, resting securely inside a shirt pocket."
    },
    {
      id: 6,
      title: "SCENE 6 — THE REALIZATION",
      lyrics: [
        "The ride continued normally.",
        "We talked.",
        "Laughed.",
        "And the bus moved through its usual route.",
        "",
        "Then halfway through the journey,",
        "Bus Aunty asked another question.",
        "",
        "\"When does your school reopen?\"",
        "",
        "I answered:",
        "\"January.\"",
        "",
        "The moment I said it,",
        "she looked at me.",
        "Confused.",
        "",
        "\"You're coming back?\"",
        "",
        "Only then did I realize what had happened.",
        "She thought the holidays meant goodbye.",
        "She didn't know I would be back next month.",
        "",
        "And suddenly,",
        "her expression changed.",
        "",
        "Surprise.",
        "Relief.",
        "Happiness.",
        "Embarrassment.",
        "Confusion.",
        "",
        "It looked like five different emotions arrived at the same time."
      ],
      description: "The sudden realization that goodbye wasn't real yet. Everything grounds to a slow pace."
    },
    {
      id: 7,
      title: "SCENE 7 — OPERATION: RECOVER THE CHIT",
      lyrics: [
        "The moment she realized I was coming back,",
        "she wanted the chit back.",
        "Immediately.",
        "Not later.",
        "Not tomorrow.",
        "Now.",
        "",
        "She reached for my pocket.",
        "I moved away.",
        "",
        "She tried again.",
        "I stopped her.",
        "",
        "She reached again.",
        "I blocked her again.",
        "",
        "At some point,",
        "it stopped being a conversation",
        "and became a mission.",
        "",
        "The more she tried to take it back,",
        "the more I wanted to read it.",
        "",
        "While she was trying to recover the chit,",
        "I was trying to unfold it.",
        "",
        "Neither of us was winning."
      ],
      description: "A lighthearted, playful tug-of-war for the note as the bus moves along."
    },
    {
      id: 8,
      title: "SCENE 8 — THE MAGIC WORD",
      lyrics: [
        "Eventually,",
        "I held both of her hands apart.",
        "",
        "For the first time,",
        "she couldn't take it back.",
        "",
        "Then she leaned forward.",
        "Forehead against forehead.",
        "",
        "And used the one thing that almost always worked.",
        "",
        "\"My swear.\"",
        "",
        "\"Give it back.\"",
        "",
        "And just like that,",
        "the fight was over."
      ],
      description: "The ultimate trump card that could not be broken. Foreheads almost touching."
    },
    {
      id: 9,
      title: "SCENE 9 — GONE",
      lyrics: [
        "I gave it back.",
        "Because a swear was a swear.",
        "",
        "The moment the chit touched her hand,",
        "she didn't hesitate.",
        "Not even for a second.",
        "",
        "Before I could react,",
        "she threw it straight out of the bus window.",
        "",
        "Gone.",
        "Just like that.",
        "",
        "I remember staring at her.",
        "Then at the window.",
        "Then back at her.",
        "",
        "My brain was still trying to process what happened.",
        "",
        "She looked relieved.",
        "I looked betrayed.",
        "",
        "And the chit disappeared forever."
      ],
      description: "Thrown away in the blink of an eye. A comic disbelief."
    },
    {
      id: 10,
      title: "SCENE 10 — THE MYSTERY",
      lyrics: [
        "I never read it.",
        "Not one word.",
        "",
        "For years, I kept asking.",
        "She never told me."
      ],
      description: "A secret sealed in silence. Replaced by an eternal question mark."
    },
    {
      id: 11,
      title: "SCENE 11 — CHAPTER ENDING",
      lyrics: [
        "14 December 2019",
        "",
        "A simple pen. A folded note. A secret I never got to read.",
        "",
        "Some memories fade. Some get lost.",
        "This one was thrown away.",
        "",
        "Maybe it wasn't the words that mattered.",
        "Maybe it was the fact that she wrote them.",
        "",
        "Seven years later,",
        "I still wonder what it said."
      ],
      description: "The beauty of a mystery left unread. Fading gently back into the cosmos."
    }
  ];

  // Auto playbook loop logic
  useEffect(() => {
    let timerID: any;
    if (isPlaying) {
      timerID = setInterval(() => {
        // Halt play tour on interactive action slides if not completed
        if (currentScene === 3 && !writtenNote) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 5 && !foldedInPocket) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 7 && strugglesCount < 3) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 8 && !gaveBack) {
          setIsPlaying(false);
          return;
        }
        if (currentScene === 9 && !thrownAway) {
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
      }, 7500); // 7.5s slides
    }
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [isPlaying, currentScene, writtenNote, foldedInPocket, strugglesCount, gaveBack, thrownAway, scenes.length]);

  // Reset interactive sub-states on scene entry/exit to make it stable
  useEffect(() => {
    if (currentScene === 0) {
      setWrittenNote(false);
      setFoldedInPocket(false);
      setStrugglesCount(0);
      setGaveBack(false);
      setThrownAway(false);
    }
  }, [currentScene]);

  const next = () => {
    if (currentScene === 3 && !writtenNote) {
      setWrittenNote(true);
    }
    if (currentScene === 5 && !foldedInPocket) {
      setFoldedInPocket(true);
    }
    if (currentScene === 7 && strugglesCount < 3) {
      setStrugglesCount(3);
    }
    if (currentScene === 8 && !gaveBack) {
      setGaveBack(true);
    }
    if (currentScene === 9 && !thrownAway) {
      setThrownAway(true);
    }
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  };

  const prev = () => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  };

  // Rendering scene side graphics with high finish and zero slop
  const renderVisuals = () => {
    switch (currentScene) {
      case 0: // Scene 0: Date Introduction
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4 max-w-[280px]"
            >
              <div className="inline-block p-3 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 mb-2">
                <Clock className="w-6 h-6" />
              </div>
              <span className="block font-sans text-[11px] text-sky-400 tracking-[0.25em] uppercase font-bold">
                TIMELINE COORDINATES
              </span>
              <h4 className="font-serif text-2xl font-bold text-white text-slate-100 tracking-wide">
                13–14 December 2019
              </h4>
              <div className="h-[1px] w-8 bg-sky-500/25 mx-auto" />
              <p className="font-serif text-xs italic text-slate-400 leading-relaxed">
                "A day after the letter. Before the prelim exams. Somewhere between those days..."
              </p>
            </motion.div>
          </div>
        );

      case 1: // Scene 1: Prelim Season
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] bg-slate-950/80 border border-white/5 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                DECEMBER CLASSROOM RULES
              </span>

              {/* Animated Calendar Block */}
              <div className="grid grid-cols-5 gap-1.5 p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl relative overflow-hidden">
                {["12 Dec", "13 Dec", "14 Dec", "15 Dec", "16 Dec"].map((day, idx) => (
                  <div 
                    key={day}
                    className={`p-1 text-center rounded border flex flex-col justify-center items-center ${
                      idx === 4 
                        ? "border-rose-500/40 bg-rose-950/20 text-rose-300"
                        : idx === 1 || idx === 2
                          ? "border-sky-400/40 bg-sky-950/20 text-sky-200 font-bold"
                          : "border-slate-800 bg-slate-950 text-slate-500"
                    }`}
                  >
                    <span className="text-[7.5px] font-mono whitespace-nowrap">{day}</span>
                    <span className="text-[5.5px] uppercase tracking-tighter mt-0.5">
                      {idx === 4 ? "EXAM" : idx === 1 || idx === 2 ? "HERE" : "WAIT"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Exam timetable notebook visual */}
              <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 text-left text-slate-350 space-y-1.5">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-sky-400">
                  <BookOpen className="w-3 h-3" />
                  <span>PRELIM TIMETABLE</span>
                </div>
                <p className="text-[9.5px] font-sans text-slate-400">
                  📕 16 Dec 2019: Papers Commence<br />
                  🚌 Bus Reopening: Schedules announced
                </p>
              </div>
            </div>
          </div>
        );

      case 2: // Scene 2: The Question
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/70 border border-slate-850 rounded-2xl p-5 space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block text-center">
                COMMUTE CONVERSATIONAL RULES
              </span>

              {/* Chat bubbles representing the simple dialogues */}
              <div className="space-y-3 font-sans text-xs">
                <div className="text-left">
                  <span className="font-mono text-[7px] text-slate-500 uppercase block mb-0.5 leading-none">BUS AUNTY</span>
                  <div className="inline-block bg-slate-900 border border-slate-850 text-slate-300 px-3 py-2 rounded-2xl rounded-tl-none font-serif italic max-w-[210px]">
                    "When are your holidays starting?"
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[7px] text-sky-400 uppercase block mb-0.5 leading-none">ME (Answering simple)</span>
                  <div className="inline-block bg-sky-950/40 border border-sky-500/20 text-sky-200 px-3 py-2 rounded-2xl rounded-tr-none font-sans max-w-[215px]">
                    "After prelims."
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center font-mono text-[8px] text-slate-400 bg-black/40 py-1.5 rounded-lg border border-white/5"
                >
                  *Forgot to mention we come back again in January.
                </motion.div>
              </div>
            </div>
          </div>
        );

      case 3: // Scene 3: The Pen
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <div className="w-full max-w-[270px] bg-slate-900/60 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                BLUE PENTONIC EXAM PEN
              </span>

              <div className="relative h-16 w-full flex justify-center items-center">
                {/* Visual rendering of a clean pen with subtle metallic sheen */}
                <motion.div
                  animate={{ 
                    rotate: writtenNote ? [12, 18, 12] : 28,
                    y: writtenNote ? [-2, 2, -2] : 0
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  onClick={() => setWrittenNote(true)}
                  className="relative z-10 w-24 h-5 cursor-pointer bg-slate-950 rounded-full border border-sky-400/40 shadow-xl flex items-center justify-between px-1.5"
                >
                  <div className="w-2.5 h-2.5 bg-sky-500 rounded-full" />
                  <div className="h-0.5 flex-1 bg-slate-800 mx-2" />
                  {/* Cap */}
                  <div className="w-4 h-full bg-slate-900 border-l border-sky-400/30 rounded-r-full" />
                </motion.div>
                
                {/* Spark glow */}
                <span className="absolute text-xl animate-pulse top-2 right-12 z-20">🖊️</span>
              </div>

              <AnimatePresence mode="wait">
                {!writtenNote ? (
                  <motion.button
                    key="unclicked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setWrittenNote(true)}
                    className="w-full py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-mono text-[9px] rounded-lg border border-sky-500/20 cursor-pointer"
                  >
                    TAKE THE PEN
                  </motion.button>
                ) : (
                  <motion.div
                    key="clicked"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-sky-950/20 border border-sky-500/15 rounded-xl"
                  >
                    <span className="block text-[8.5px] font-mono text-sky-400">WITH HER BLESSING</span>
                    <p className="font-serif text-sm text-sky-200 mt-1 italic">"Good luck."</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 4: // Scene 4: Reserved as always
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                BUS GEOMETRY
              </span>

              {/* Two adjacent window frames representing our seats */}
              <div className="flex gap-4 justify-center py-2">
                {[1, 2].map((i) => (
                  <div key={i} className="w-16 h-20 bg-slate-900 border-2 border-slate-700/60 rounded-xl relative flex flex-col items-center justify-end p-2 overflow-hidden shadow-inner">
                    <div className="absolute top-0 inset-x-0 h-10 bg-slate-950 text-[10px] text-sky-400/45 text-center flex items-center justify-center border-b border-slate-800">
                      🚌 {i === 1 ? "Me" : "Her"}
                    </div>
                    {/* Small cushion contour */}
                    <div className="w-full h-5 rounded-md bg-sky-950/40 border border-sky-400/20 text-[6px] text-sky-300 text-center font-mono">
                      RESERVED
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-serif text-xs italic text-slate-400">
                "Even during prelim season, some traditions survived."
              </p>
            </div>
          </div>
        );

      case 5: // Scene 5: The Chit
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60">
            <div className="w-full max-w-[270px] text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                THE SECRET CHIT SHIFT
              </span>

              {/* Visual interactive pocket slot */}
              <div className="h-28 w-full border border-white/5 rounded-2xl bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
                
                {/* Pocket contour drawing */}
                <div className="absolute w-20 h-16 border-2 border-slate-700 bg-slate-950 rounded-b-2xl flex items-center justify-center top-1/2 -translate-y-1/2">
                  <span className="text-[7px] font-mono text-slate-500 uppercase">SHIRT POCKET</span>
                  
                  {foldedInPocket && (
                    <motion.div
                      initial={{ y: -45, opacity: 0 }}
                      animate={{ y: -6, opacity: 1 }}
                      className="absolute w-12 h-10 bg-[#f9f8f4] border border-amber-300 rounded shadow-md z-10 flex items-center justify-center"
                    >
                      <span className="text-[7px] font-mono font-bold text-amber-800">NOTE ✉️</span>
                    </motion.div>
                  )}
                </div>

                {!foldedInPocket && (
                  <motion.div
                    animate={{ y: [-15, -25, -15] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    onClick={() => setFoldedInPocket(true)}
                    className="absolute cursor-pointer w-12 h-10 bg-[#f9f8f4] border border-amber-300 rounded shadow-md flex flex-col items-center justify-center top-3"
                  >
                    <span className="text-[6.5px] font-mono text-slate-400 uppercase font-bold">TAP NOTE</span>
                    <span className="text-[10px]">📥</span>
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {foldedInPocket && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-serif text-[11px] text-sky-200 mt-1 italic"
                  >
                    "Open it when you get home."
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 6: // Scene 6: The Realization (Frozen terms)
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-slate-850 p-5 rounded-2xl space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block text-center">
                FIVE SIMULTANEOUS EMOTIONS
              </span>

              {/* Sequenced emotion circles around a freezing clock */}
              <div className="relative h-28 w-full flex items-center justify-center">
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-16 h-16 border-2 border-dashed border-sky-400/20 rounded-full flex items-center justify-center text-slate-500"
                >
                  ❄️
                </motion.div>

                {/* Interactive labels */}
                {[
                  { txt: "Surprise", delay: 0.1, color: "text-amber-300", pos: "-translate-y-10" },
                  { txt: "Relief", delay: 0.4, color: "text-emerald-300", pos: "translate-x-12 -translate-y-4" },
                  { txt: "Happiness", delay: 0.7, color: "text-sky-300", pos: "translate-x-8 translate-y-8" },
                  { txt: "Embarrassment", delay: 1.0, color: "text-rose-300", pos: "-translate-x-8 translate-y-8" },
                  { txt: "Confusion", delay: 1.3, color: "text-plum-300 text-purple-300", pos: "-translate-x-12 -translate-y-4" }
                ].map((emo, index) => (
                  <motion.div
                    key={emo.txt}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: emo.delay }}
                    className={`absolute px-2 py-0.5 rounded-full bg-slate-900/90 border border-white/5 text-[9px] font-mono ${emo.color} ${emo.pos}`}
                  >
                    {emo.txt}
                  </motion.div>
                ))}
              </div>

              <p className="text-center font-serif text-[11px] text-slate-300 italic mt-2">
                "You're coming back?"
              </p>
            </div>
          </div>
        );

      case 7: // Scene 7: Playful Tug-Of-War
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60 select-none">
            <div className="w-full max-w-[270px] bg-slate-900/60 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                OPERATION: RECOVER THE CHIT
              </span>

              {/* Visual container showing note moving back and forth */}
              <div className="h-16 w-full border border-white/5 rounded-xl bg-slate-950/80 relative flex items-center justify-between px-6 overflow-hidden">
                <span className="font-mono text-[9px] text-slate-500">Her Hand</span>
                
                <motion.div
                  animate={{ 
                    x: strugglesCount === 0 
                      ? 20 
                      : strugglesCount === 1 
                        ? -20 
                        : strugglesCount === 2 
                          ? 10 
                          : 0
                  }}
                  className="w-10 h-8 bg-[#fdfdfc] border border-amber-300 rounded shadow flex items-center justify-center text-[10px]"
                >
                  ✉️
                </motion.div>

                <span className="font-mono text-[9px] text-sky-400">Me</span>
              </div>

              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setStrugglesCount(prev => Math.min(prev + 1, 3))}
                  disabled={strugglesCount >= 3}
                  className="px-3 py-1.5 bg-sky-500/10 border border-sky-400/30 hover:bg-sky-500/20 text-sky-300 font-mono text-[10px] rounded cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {strugglesCount >= 3 ? "Blocked!" : strugglesCount === 0 ? "Block pocket reach" : strugglesCount === 1 ? "Move away" : "Block again"}
                </button>
                <button
                  onClick={() => setStrugglesCount(0)}
                  className="px-2 py-1.5 text-slate-500 hover:text-slate-300 font-mono text-[8px] cursor-pointer"
                >
                  Reset
                </button>
              </div>

              <p className="font-sans text-[9px] text-slate-400">
                {strugglesCount >= 3 
                  ? "✓ Blocked! You held both of her hands apart. She couldn't grab it back."
                  : "Tap to block her reach and try to unfold the chit."}
              </p>
            </div>
          </div>
        );

      case 8: // Scene 8: The Magic Word
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[270px] bg-slate-950/85 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                FOREHEAD AGAINST FOREHEAD
              </span>

              {/* Two circles merging representing forehead touching forehead */}
              <div className="h-16 w-full relative flex items-center justify-center">
                <motion.div
                  animate={{ x: gaveBack ? [-45, -6] : -40 }}
                  className="absolute w-12 h-12 rounded-full border border-sky-400/40 bg-sky-950/20 flex items-center justify-center text-xs font-mono text-sky-300 font-bold"
                >
                  Me
                </motion.div>
                <motion.div
                  animate={{ x: gaveBack ? [45, 6] : 40 }}
                  className="absolute w-12 h-12 rounded-full border border-amber-400/40 bg-amber-950/20 flex items-center justify-center text-xs font-mono text-amber-300 font-bold"
                >
                  Her
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                {!gaveBack ? (
                  <motion.button
                    key="trigger-code"
                    onClick={() => setGaveBack(true)}
                    className="w-full py-3 bg-amber-500/15 border border-amber-500/30 text-amber-300 font-serif text-[11px] italic font-bold rounded-lg cursor-pointer hover:bg-amber-500/25 block"
                  >
                    "My swear. Give it back."
                  </motion.button>
                ) : (
                  <motion.div
                    key="code-resolved"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl"
                  >
                    <p className="font-serif text-[11px] text-amber-200 italic">
                      "My swear. Give it back." And just like that, the fight was over.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 9: // Scene 9: Gone
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/60 select-none">
            <div className="w-full max-w-[270.0px] bg-slate-900/65 border border-slate-800 p-5 rounded-2xl text-center space-y-4">
              <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block">
                OUT THE WINDOW
              </span>

              {/* Wind tracks with flying note visual */}
              <div className="h-20 w-full bg-slate-950 rounded-xl relative overflow-hidden border border-white/5 flex items-center">
                
                {/* Wind lines moving */}
                <div className="absolute inset-x-0 inset-y-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(14,165,233,0.1)_50%,transparent_100%)] animate-pulse" />
                
                {thrownAway && (
                  <motion.div
                    initial={{ x: 20, y: 0, rotate: 0, opacity: 1 }}
                    animate={{ x: -280, y: -40, rotate: 360, opacity: 0 }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                    className="absolute right-4 w-10 h-8 bg-[#fdfdfc] border border-amber-300 rounded shadow flex items-center justify-center text-[8.5px] font-bold text-amber-800"
                  >
                    Chit
                  </motion.div>
                )}

                {!thrownAway && (
                  <button
                    onClick={() => setThrownAway(true)}
                    className="mx-auto w-32 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-[9.5px] font-mono rounded cursor-pointer"
                  >
                    Throw out of window!
                  </button>
                )}
              </div>

              <p className="font-serif text-xs italic text-slate-400">
                {thrownAway ? "She looked relieved. I looked betrayed." : "Give it back and let it disappear."}
              </p>
            </div>
          </div>
        );

      case 10: // Scene 10: The Mystery
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40">
            <div className="w-full max-w-[260px] bg-slate-950/70 border border-slate-850 p-6 rounded-2xl text-center space-y-3">
              <div className="inline-block p-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <span className="text-[8.5px] font-mono text-rose-400 uppercase tracking-widest block">
                UNREAD SILENCE
              </span>
              <p className="font-serif text-sm italic text-slate-200">
                "I never read it. <br /> Not one word."
              </p>
              <p className="text-[9.5px] font-sans text-slate-400 italic">
                For years, I kept asking. She never told me.
              </p>
            </div>
          </div>
        );

      case 11: // Scene 11: Chapter Ending
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/80">
            <div className="text-center max-w-[280px] space-y-4">
              
              {/* Moon starry night visual overlay */}
              <div className="flex gap-1.5 justify-center mb-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.9 }}
                    className="w-1.5 h-1.5 bg-sky-200 rounded-full blur-[0.5px]"
                  />
                ))}
              </div>

              <div className="space-y-3.5 p-4 bg-sky-950/15 border border-sky-400/10 rounded-2xl">
                <span className="text-[8.5px] font-mono text-sky-400 uppercase tracking-widest block leading-none">
                  LATE DECEMBER 2019 RESULT
                </span>

                <p className="font-serif text-xs italic text-slate-350 leading-relaxed">
                  "Maybe it wasn't the words that mattered. Maybe it was the fact that she wrote them."
                </p>

                <div className="h-[1.5px] w-6 bg-sky-500/25 mx-auto" />

                <h4 className="font-serif font-black text-sm md:text-md text-sky-300 italic tracking-wide">
                  "Seven years later, I still wonder what it said."
                </h4>
              </div>

              <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                🌊 Ambient Cosmos & Waves Loop
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
    <div id="lost-chit-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative accent top line matching sky color */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400 transition-all duration-700" />

      {/* Progress index bar */}
      <div className="px-6 pt-5 grid grid-cols-12 gap-1">
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
                SCENE {currentScene < 10 ? `0${currentScene}` : currentScene} OF 11
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {currentSceneData.title}
              </span>
            </div>

            {/* Cinematic text scroll */}
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
                    const isDateText = line.includes("December 2019") || line.includes("Saturday Morning");
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
            <span className="text-[9px] font-mono text-sky-400 tracking-wider">CHIT REC ENGINE</span>
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping" />
          </div>

          {/* Floating cosmic background lights */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [240, -20],
                  x: [i * 50, i * 50 + (i % 2 === 0 ? 10 : -10)],
                  opacity: [0, 0.6, 0]
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
