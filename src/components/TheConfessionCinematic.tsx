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
  Sparkles,
  MessageCircle,
  Clock,
  Calendar,
  Compass
} from "lucide-react";

interface GuessBubble {
  name: string;
  popped: boolean;
  message: string;
}

export default function TheConfessionCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Scene 6 Guessing Game State
  const [guesses, setGuesses] = useState<GuessBubble[]>([
    { name: "Akansha", popped: false, message: "No." },
    { name: "Ayushi", popped: false, message: "No." },
    { name: "Mahima", popped: false, message: "No." },
    { name: "Maria", popped: false, message: "No." }
  ]);
  const [gaveUp, setGaveUp] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // Reset reveal when changing scenes
  useEffect(() => {
    if (currentScene !== 6) {
      setIsRevealed(false);
    }
  }, [currentScene]);

  // Scene 11 Waiting Day State
  const [waitingDay, setWaitingDay] = useState(0);
  const totalWaitingDays = [
    { date: "5 Dec 2019", me: "What's your answer?", her: "Wait." },
    { date: "6 Dec 2019", me: "What's your answer?", her: "I'm still thinking." },
    { date: "7 Dec 2019", me: "What's your answer?", her: "Wait." },
    { date: "8 Dec 2019", me: "What's your answer?", her: "I'm still thinking." },
    { date: "9 Dec 2019", me: "What's your answer?", her: "Wait." },
    { date: "10 Dec 2019", me: "What's your answer?", her: "Wait, I'm still thinking." }
  ];

  const scenes = [
    {
      id: 1,
      title: "SCENE 1 — TRYING TO FIND COURAGE",
      lyrics: [
        "For days,",
        "I kept trying.",
        "And failing.",
        "Trying again.",
        "And failing again.",
        "",
        "Eventually,",
        "4 December 2019 arrived."
      ],
      description: "Early December 2019. By now I already knew how I felt. The problem wasn't my feelings. The problem was courage."
    },
    {
      id: 2,
      title: "SCENE 2 — THE BUS RIDE HOME",
      lyrics: [
        "4 December 2019.",
        "After school.",
        "We were travelling home in the Dosti Travels bus.",
        "We were sitting near the front section of the bus, behind the driver's seat."
      ],
      description: "Warm late-afternoon lighting. Bus ambience. Window reflections. A calm atmosphere."
    },
    {
      id: 3,
      title: "SCENE 3 — I LIKE SOMEONE",
      lyrics: [
        "I finally said it.",
        "",
        "\"I like someone.\""
      ],
      description: "A sudden pause. Allowing the afternoon scene to breathe."
    },
    {
      id: 4,
      title: "SCENE 4 — WHO?",
      lyrics: [
        "The moment I said that,",
        "she became interested.",
        "",
        "\"Who?\""
      ],
      description: "The spark of curiosity in her eyes."
    },
    {
      id: 5,
      title: "SCENE 5 — YOU KNOW HER",
      lyrics: [
        "\"You know her.\"",
        "",
        "\"Think.\""
      ],
      description: "She begins looking at me, trying to guess."
    },
    {
      id: 6,
      title: "SCENE 6 — THE GUESSING GAME",
      lyrics: [
        "She started calling out names,",
        "hoping to guess who captured my thoughts..."
      ],
      description: "Recreation of a sweet guessing game memory. Tap the bubbles to pop."
    },
    {
      id: 7,
      title: "SCENE 7 — THE REVEAL",
      lyrics: [
        "So who is it?",
        "",
        "\"It's you.\""
      ],
      description: "The line is spoken. A silence falls on the front seats of the bus."
    },
    {
      id: 8,
      title: "SCENE 8 — THE SILENCE",
      lyrics: [
        "For a moment,",
        "everything became quiet.",
        "",
        "I waited."
      ],
      description: "Immediately after the reveal: She stopped talking. She looked away. Then looked at me. Then looked away again. She looked out of the bus window. She smiled. She froze. She seemed completely surprised."
    },
    {
      id: 9,
      title: "SCENE 9 — HER RESPONSE",
      lyrics: [
        "\"This is sudden.\"",
        "",
        "\"I need some time.\"",
        "",
        "\"Let me think.\""
      ],
      description: "No rejection, no acceptance. Just a soft need to understand her own heart."
    },
    {
      id: 10,
      title: "SCENE 10 — MY ANSWER",
      lyrics: [
        "\"Okay.\"",
        "",
        "\"But not more than a week.\""
      ],
      description: "A small quote of nervous confidence, spoken with a light heart."
    },
    {
      id: 11,
      title: "SCENE 11 — THE WEEK OF WAITING",
      lyrics: [
        "The bus rides continued.",
        "The conversations continued.",
        "Life looked normal.",
        "But now there was a question between us.",
        "",
        "Every day,",
        "I asked the same thing:",
        "\"What's your answer?\"",
        "",
        "And you would smile and say:",
        "\"Wait.\"",
        "\"I'm still thinking.\""
      ],
      description: "Passing days, unchanged routine, but the unspoken question lingering on every ride."
    },
    {
      id: 12,
      title: "SCENE 12 — CHAPTER ENDING",
      lyrics: [
        "The answer wasn't here yet.",
        "",
        "But for the first time,",
        "it felt possible.",
        "",
        "Now all I had to do",
        "was wait."
      ],
      description: "Ending on a note of beautiful starlit anticipation. The routine stayed, but everything was changed."
    }
  ];

  // Auto-play timer
  useEffect(() => {
    let timerID: any;
    if (isPlaying) {
      timerID = setInterval(() => {
        // If we are at scene 6 (guessing game), do not auto-advance unless they "gave up"
        if (currentScene === 5 && !gaveUp) {
          return;
        }
        // If we are at scene 7, do not auto-advance until they reveal "It's you"
        if (currentScene === 6 && !isRevealed) {
          setIsRevealed(true);
          return;
        }
        setCurrentScene((prev) => {
          if (prev === scenes.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 7500);
    }
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [isPlaying, currentScene, gaveUp, isRevealed]);

  // Scene 11 Days Ticker Effect
  useEffect(() => {
    let ticker: any;
    if (currentScene === 10) {
      ticker = setInterval(() => {
        setWaitingDay((prev) => (prev + 1) % totalWaitingDays.length);
      }, 3000);
    }
    return () => clearInterval(ticker);
  }, [currentScene]);

  const handlePop = (index: number) => {
    const updated = [...guesses];
    updated[index].popped = true;
    setGuesses(updated);

    // If all are popped, give up is unlocked
    const allPopped = updated.every(g => g.popped);
    if (allPopped) {
      // Allow a brief delay before showing give-up button clearly
    }
  };

  const handleGiveUpClick = () => {
    setGaveUp(true);
    setCurrentScene(6); // Go to Scene 7 (Index 6)
  };

  const next = () => {
    if (currentScene === 5 && !gaveUp) {
      // Force them to complete the interactive bubble popping first
      return;
    }
    if (currentScene === 6 && !isRevealed) {
      setIsRevealed(true);
      return;
    }
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  };

  const prev = () => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  };

  const resetGuessingGame = () => {
    setGuesses([
      { name: "Akansha", popped: false, message: "No." },
      { name: "Ayushi", popped: false, message: "No." },
      { name: "Mahima", popped: false, message: "No." },
      { name: "Maria", popped: false, message: "No." }
    ]);
    setGaveUp(false);
  };

  const renderVisualStage = () => {
    switch (currentScene) {
      case 0: // Scene 1: Trying to Find Courage
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[250px] text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 mx-auto rounded-full border border-sky-400/35 flex items-center justify-center mb-6"
              >
                <Compass className="w-6 h-6 text-sky-400" />
              </motion.div>
              
              <div className="space-y-3.5">
                <div className="flex justify-between items-center bg-slate-900/60 border border-white/5 rounded-xl p-2.5 text-xs font-mono text-slate-400">
                  <span>Heart's Intention</span>
                  <span className="text-emerald-400 font-bold">100% Ready</span>
                </div>
                
                <div className="flex justify-between items-center bg-slate-900/60 border border-white/5 rounded-xl p-2.5 text-xs font-mono text-slate-400">
                  <span>Inherent Courage</span>
                  <motion.span 
                    animate={{ color: ["#f87171", "#38bdf8", "#f87171"] }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-bold"
                  >
                    Faltering...
                  </motion.span>
                </div>
              </div>

              <div className="mt-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                ● Waiting for December 4th
              </div>
            </div>
          </div>
        );

      case 1: // Scene 2: The Bus Ride Home
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40 relative">
            {/* Front Bus Cabin Illustration */}
            <div className="w-full max-w-[280px] bg-slate-950/80 border border-white/10 rounded-2xl p-4 text-center relative overflow-hidden">
              <span className="text-[8px] font-mono uppercase text-sky-450 text-sky-400 tracking-wider block mb-3">
                Bus Interior Front • Behind Driver
              </span>

              {/* Late-afternoon Window effect */}
              <div className="h-16 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/20 rounded-xl relative overflow-hidden mb-4">
                <div className="absolute top-1 left-2 text-[8px] font-mono text-amber-500/60">WINDOW REFLECTION</div>
                
                {/* Rolling sunset beams */}
                <motion.div 
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-amber-450/15 via-amber-400/20 to-transparent skew-x-12"
                />
              </div>

              <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-900 border border-sky-400/40 rounded-lg flex items-center justify-center text-lg shadow-[0_0_10px_rgba(56,189,248,0.15)]">
                    👦
                  </div>
                  <span className="text-[8px] font-mono text-slate-500 mt-1">Front Seat</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-900 border border-sky-400/40 rounded-lg flex items-center justify-center text-lg shadow-[0_0_10px_rgba(56,189,248,0.15)]">
                    👧
                  </div>
                  <span className="text-[8px] font-mono text-slate-500 mt-1">Beside Me</span>
                </div>
              </div>

              <div className="mt-4 text-[9px] font-mono text-amber-400/70">
                "Warm late-afternoon school bus atmosphere."
              </div>
            </div>
          </div>
        );

      case 2: // Scene 3: I Like Someone
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[240px] text-center">
              <div className="w-12 h-12 bg-sky-950/40 border border-sky-550/20 border-sky-400/30 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-300">
                💬
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-slate-900/80 border border-white/5 rounded-2xl"
              >
                <div className="text-[7.5px] font-mono uppercase tracking-widest text-[#38bdf8] mb-1">UNSPOKEN TRUTH</div>
                <p className="font-serif italic text-base text-white">
                  "I like someone."
                </p>
              </motion.div>
            </div>
          </div>
        );

      case 3: // Scene 4: Who?
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[240px] text-center">
              <div className="w-12 h-12 bg-amber-950/30 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400 animate-pulse">
                ❓
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-slate-900/80 border border-white/5 rounded-2xl relative"
              >
                <div className="text-[8px] font-mono uppercase tracking-widest text-amber-400 mb-1">HER INSTANT INTRIGUE</div>
                <p className="font-serif italic text-[17px] text-amber-200 font-bold">
                  "Who?"
                </p>
              </motion.div>
            </div>
          </div>
        );

      case 4: // Scene 5: You know her
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[240px] text-center space-y-3">
              <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl">
                <p className="font-serif italic text-[14px] text-slate-100">
                  "You know her."
                </p>
              </div>

              <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl">
                <p className="font-serif italic text-[14px] text-slate-100">
                  "Think."
                </p>
              </div>
            </div>
          </div>
        );

      case 5: // Scene 6: The Guessing Game
        const allGuessesPopped = guesses.every(g => g.popped);
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-950/40">
            <div className="w-full max-w-[280px] bg-black/60 border border-white/10 rounded-2xl p-4 text-center">
              <span className="text-[8.5px] font-mono text-sky-400 block tracking-widest mb-1.5">REPLAY COMMUTE MEMORY</span>
              <p className="text-[10px] text-slate-400 mb-4 font-sans">
                {allGuessesPopped 
                  ? "She tried every helper friend she knew. Tap 'I Give Up' below." 
                  : "Tap each floating card to listen to the guesses she made:"}
              </p>

              {/* Floating Name Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {guesses.map((item, idx) => (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.93 }}
                    onClick={() => handlePop(idx)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      item.popped 
                        ? "bg-slate-900/20 border-red-500/40 text-red-400 opacity-60"
                        : "bg-slate-900 border-white/5 text-slate-200 hover:border-sky-400/40 cursor-pointer shadow-lg"
                    }`}
                  >
                    <span className="font-mono text-xs block font-semibold">{item.name}</span>
                    {item.popped && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[9px] font-mono font-bold block mt-0.5"
                      >
                        {item.message}
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Unlock Give Up once all are popped */}
              <AnimatePresence>
                {allGuessesPopped && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={handleGiveUpClick}
                    className="w-full p-2.5 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-mono text-[10px] font-bold rounded-xl tracking-widest uppercase hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                  >
                    I Give Up 💔
                  </motion.button>
                )}
              </AnimatePresence>

              {allGuessesPopped && (
                <div className="mt-3">
                  <button 
                    onClick={resetGuessingGame}
                    className="text-[8px] font-mono text-slate-500 underline uppercase"
                  >
                    Replay Guess Stage
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 6: // Scene 7: The Reveal
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="text-center max-w-[280px] w-full">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
                The Decisive Seconds
              </span>

              <AnimatePresence mode="wait">
                {!isRevealed ? (
                  <motion.button
                    key="question-pop"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsRevealed(true)}
                    className="w-full p-6 bg-slate-900/90 border border-amber-400/40 hover:border-amber-400/70 text-amber-200 rounded-2xl shadow-xl cursor-pointer text-center group transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[9px] font-mono text-amber-500/70 tracking-widest block mb-2 uppercase">CHIKKA ASKS</span>
                    <p className="font-serif text-lg italic font-medium">"So who is it?"</p>
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[8.5px] font-mono uppercase text-slate-400 tracking-wider">
                      <span>Click to Ask</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="reveal-it-is-you"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    className="bg-sky-950/20 border border-sky-400/40 p-6 rounded-3xl shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                  >
                    <motion.h4
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="font-serif font-black text-3xl md:text-4xl text-sky-300 italic tracking-wide"
                    >
                      "It's you."
                    </motion.h4>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 7: // Scene 8: The Silence
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40 relative">
            <div className="w-full max-w-[260px] bg-slate-950/80 border border-white/5 rounded-2xl p-5 text-center">
              <span className="text-[8px] font-mono text-slate-500 uppercase block tracking-wider mb-4">
                The Quiet Sequence
              </span>

              <div className="space-y-2 text-left relative h-[140px] flex flex-col justify-center">
                {[
                  "● Stopped talking...",
                  "● Looked away...",
                  "● Then looked at me...",
                  "● Then looked away again...",
                  "● Smiled out the window...",
                  "● Completely surprised..."
                ].map((act, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 1.5, duration: 0.8 }}
                    className="p-1 px-2.5 bg-white/5 rounded border border-white/5 text-[10px] font-mono text-slate-300"
                  >
                    {act}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-[9px] font-serif text-sky-200 italic">
                "For a moment, everything became quiet."
              </div>
            </div>
          </div>
        );

      case 8: // Scene 9: Her Response
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[260px] space-y-2.5">
              <span className="text-[8px] uppercase tracking-widest font-mono text-amber-400 block text-center mb-1">
                Her Precise Words
              </span>

              {[
                "\"This is sudden.\"",
                "\"I need some time.\"",
                "\"Let me think.\""
              ].map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.4 }}
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center shadow-lg"
                >
                  <p className="font-serif italic text-xs text-sky-200 font-bold">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 9: // Scene 10: My Answer
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[250px] bg-black/60 border border-white/10 rounded-2xl p-5 text-center">
              <span className="text-[8px] uppercase tracking-widest font-mono text-sky-400 block mb-4">
                A Touch of Confidence
              </span>

              <div className="space-y-3">
                <div className="p-2.5 bg-slate-900 border border-white/10 rounded-xl">
                  <span className="text-[7.5px] font-mono text-slate-500 uppercase block">ME:</span>
                  <p className="font-serif text-sm font-semibold text-white mt-0.5">"Okay."</p>
                </div>

                <div className="p-2.5 bg-sky-950/40 border border-sky-400/30 rounded-xl">
                  <span className="text-[7.5px] font-mono text-sky-300 uppercase block">Nervous Add-on:</span>
                  <p className="font-serif text-sm font-bold text-sky-200 mt-0.5">"But not more than a week."</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 10: // Scene 11: The Week of Waiting
        const currentTick = totalWaitingDays[waitingDay];
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/40">
            <div className="w-full max-w-[270px] bg-slate-950 border border-sky-500/20 rounded-2xl p-5 text-center relative overflow-hidden">
              <span className="text-[8px] font-mono text-sky-400 uppercase tracking-widest block mb-1">
                The Loop of Waiting Ends
              </span>
              <span className="text-[9px] font-mono text-slate-500 block mb-4">
                December 2019 Passing...
              </span>

              {/* Micro interactive slider of dates */}
              <div className="flex gap-1.5 justify-center mb-4">
                {totalWaitingDays.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i === waitingDay ? "bg-sky-400" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* Changing dialog states based on waiting loop */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={waitingDay}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="space-y-2.5"
                >
                  <div className="bg-slate-900 border border-white/5 p-2 rounded-lg">
                    <span className="text-[7.5px] font-mono text-sky-400 uppercase tracking-wider block">
                      {currentTick.date}
                    </span>
                  </div>

                  <div className="p-2 bg-sky-900/10 border border-sky-500/10 rounded-lg text-left">
                    <span className="text-[7px] font-mono text-slate-400 uppercase">JF:</span>
                    <p className="text-[11px] font-sans text-slate-200">
                      "{currentTick.me}"
                    </p>
                  </div>

                  <div className="p-2 bg-indigo-950/20 border border-indigo-500/10 rounded-lg text-left">
                    <span className="text-[7px] font-mono text-indigo-400 uppercase">CHIKKA:</span>
                    <p className="text-[11px] font-serif italic text-indigo-300 font-bold">
                      "{currentTick.her}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 text-[7px] font-mono text-slate-500 uppercase">
                *DIALOG INTERACTION PASSING SECONDS...
              </div>
            </div>
          </div>
        );

      case 11: // Scene 12: Chapter Ending
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/90 [background-image:radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="text-center max-w-[280px]">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block text-2xl mb-4"
              >
                🎒
              </motion.div>

              <div className="flex justify-center items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-sky-400 mt-2 font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-sky-400 animate-pulse text-sky-400" />
                <span>Anticipation Alive</span>
              </div>
              <p className="text-[9px] font-mono text-slate-500 leading-normal">
                "But for the first time, it felt possible."
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
    <div id="the-confession-storyteller-widget" className="w-full flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden relative shadow-2xl">
      
      {/* Decorative Accent Strip top */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-700 ${
        currentScene === 5 ? "bg-amber-400" : // Scene 6: Guessing game (game mode)
        currentScene === 6 ? "bg-emerald-400" : // Scene 7: Reveal
        currentScene === 10 ? "bg-indigo-400" : // Scene 11: Waiting
        "bg-sky-400" // Default light blue accents
      }`} />

      {/* Progress indicators - 12 steps */}
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
                SCENE {String(scene.id).padStart(2, "0")} OF 12
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                • {scene.title.split(" — ")[1]}
              </span>
            </div>

            {/* Core story text lines */}
            <div className="my-6 space-y-2.5 min-h-[220px] flex flex-col justify-center">
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
                    
                    const isQuote = line.startsWith("\"") || (line.includes("\"") && line.length < 50);
                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.8) }}
                        className={`font-serif leading-relaxed ${
                          isQuote 
                            ? "text-sky-300 font-semibold text-[15px] md:text-[16.5px]" 
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

            {/* Disable auto-play during Scene 6 until all popped */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={currentScene === 5 && !guesses.every(g => g.popped)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-slate-950" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
              <span>{isPlaying ? "PAUSE TOUR" : "PLAY TOUR"}</span>
            </button>

            {currentScene === scenes.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentScene(0);
                  setIsPlaying(false);
                  resetGuessingGame();
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
                disabled={currentScene === 5 && !guesses.every(g => g.popped)}
                className="p-2.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 hover:text-white hover:bg-sky-400/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center"
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
              {renderVisualStage()}
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
