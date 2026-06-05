/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import {
  Bus,
  Users,
  FileSignature,
  Compass,
  MapPin,
  HeartHandshake,
  Anchor,
  Moon,
  FileText,
  Sparkles,
  Volume2,
  VolumeX,
  CheckCircle,
  ChevronDown,
  Gift,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Chapter } from "./types";
import { CHAPTERS } from "./data";

import InteractiveOcean from "./components/InteractiveOcean";
import MemoryObjects from "./components/MemoryObjects";
import TheNoteINeverRead from "./components/TheNoteINeverRead";
import NicknameShowcase from "./components/NicknameShowcase";
import TypewriterLetter from "./components/TypewriterLetter";
import GrandFinale from "./components/GrandFinale";
import DostiTravelsCinematic from "./components/DostiTravelsCinematic";
import TheQuestionThatStayedCinematic from "./components/TheQuestionThatStayedCinematic";
import TheConfessionCinematic from "./components/TheConfessionCinematic";
import TheUnfinishedPathCinematic from "./components/TheUnfinishedPathCinematic";
import TheLostChitCinematic from "./components/TheLostChitCinematic";
import ILikeYouTooCinematic from "./components/ILikeYouTooCinematic";

export default function App() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [toastText, setToastText] = useState<string | null>(null);
  const [bgMusic, setBgMusic] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const mainPortalRef = useRef<HTMLDivElement>(null);

  // Helper to trigger custom beautiful notification popups
  const showToast = (message: string) => {
    setToastText(message);
    setTimeout(() => {
      setToastText(null);
    }, 4500);
  };

  // Smooth scroll down to first chapter
  const exploreJourney = () => {
    mainPortalRef.current?.scrollIntoView({ behavior: "smooth" });

    // Lazy activate synthesized hum or sound context if not already active
    if (!audioCtx) {
      try {
        const ctx = new (
          window.AudioContext || (window as any).webkitAudioContext
        )();
        setAudioCtx(ctx);
      } catch (e) {
        console.warn(e);
      }
    }
  };

  // Retrieve matching icon for chapters
  const getChapterIcon = (number: number) => {
    switch (number) {
      case 1:
        return <Bus className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Users className="w-5 h-5 text-sky-450 text-sky-400" />;
      case 3:
        return <FileSignature className="w-5 h-5 text-sky-400" />;
      case 4:
        return <Compass className="w-5 h-5 text-sky-450 text-sky-400" />;
      case 5:
        return <MapPin className="w-5 h-5 text-sky-400" />;
      case 6:
        return <HeartHandshake className="w-5 h-5 text-sky-450 text-sky-400" />;
      case 7:
        return <Anchor className="w-5 h-5 text-sky-400" />;
      case 8:
        return <Moon className="w-5 h-5 text-sky-450 text-sky-400" />;
      case 9:
        return <FileText className="w-5 h-5 text-sky-400" />;
      case 10:
        return <Gift className="w-5 h-5 text-sky-450 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div
      id="website-root-container"
      className="min-h-screen bg-[#020617] text-[#f8fafc] flex flex-col font-sans select-none overflow-x-hidden relative"
    >
      {/* 1. Global Interactive Ocean Background Animation */}
      <InteractiveOcean />

      {/* Atmospheric Media Background Glows */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#0ea5e9] rounded-full filter blur-[120px] mix-blend-screen opacity-20"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#22d3ee] rounded-full filter blur-[100px] mix-blend-screen opacity-10"></div>
      </div>

      {/* Top Atmospheric Navigation Bar */}
      <nav className="z-30 px-6 md:px-8 py-5 flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-sky-455 text-sky-400">
            Established June 2026
          </span>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-white/60">
            JF & NG Archive 🌙
          </span>
        </div>
        <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase font-sans font-bold">
          <button
            onClick={() =>
              mainPortalRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-sky-300 transition-colors bg-transparent border-none py-1"
          >
            The Journey
          </button>
          <button
            onClick={() =>
              document
                .getElementById("memory-objects-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-sky-300 transition-colors bg-transparent border-none py-1"
          >
            Keepsakes
          </button>
          <button
            onClick={() =>
              document
                .getElementById("the-note-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-sky-300 transition-colors bg-transparent border-none py-1"
          >
            The Note
          </button>
        </div>
      </nav>

      {/* 2. Audio Hum Controller (Synthesizer Chords) */}
      <div id="ambient-audio-floater" className="fixed top-24 right-6 z-40">
        <button
          type="button"
          id="btn-trigger-chords"
          onClick={() => {
            if (!bgMusic) {
              setBgMusic(true);
              showToast(
                "🎵 Synthesized starlight chords initialized. Wave sounds toggle on in the letter scroll below.",
              );
              // Create a very soft stellar drone
              if (audioCtx) {
                try {
                  const droneOsc = audioCtx.createOscillator();
                  const droneGain = audioCtx.createGain();
                  droneOsc.frequency.setValueAtTime(220, audioCtx.currentTime); // low warm A note
                  droneOsc.type = "triangle";
                  droneGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
                  droneOsc.connect(droneGain);
                  droneGain.connect(audioCtx.destination);
                  droneOsc.start();
                  // save drone to let us stop it
                  (window as any)._droneOsc = droneOsc;
                } catch (e) {
                  console.warn(e);
                }
              }
            } else {
              setBgMusic(false);
              if ((window as any)._droneOsc) {
                try {
                  (window as any)._droneOsc.stop();
                } catch (_) {}
              }
            }
          }}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 backdrop-blur border border-sky-500/20 hover:border-sky-400/60 rounded-full text-xs font-mono font-medium tracking-wide text-sky-300 cursor-pointer shadow-lg"
        >
          {bgMusic ? (
            <Volume2 className="w-3.5 h-3.5 text-sky-300 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          )}
          <span>{bgMusic ? "Music: On" : "Music: Mute"}</span>
        </button>
      </div>

      {/* 4. Elegant Toast Toast Overlay */}
      <AnimatePresence>
        {toastText && (
          <motion.div
            id="toast-notification-banner"
            initial={{ opacity: 0, y: -45 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-slate-900/95 backdrop-blur border-2 border-sky-400/40 rounded-full py-3 px-5 shadow-2xl flex items-center gap-3.5 text-left">
              <div className="bg-sky-500/10 p-1.5 rounded-full">
                <CheckCircle className="w-4.5 h-4.5 text-sky-300 animate-pulse" />
              </div>
              <p className="font-display text-xs text-slate-100 font-semibold flex-1">
                {toastText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. HERO SECTION (Full-Screen Landing) */}
      <section
        id="homepage-hero-section"
        className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 relative max-w-5xl mx-auto text-center py-12"
      >
        <motion.div
          id="hero-header-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 w-full"
        >
          {/* Moon/Core Immersive Visualization */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center mx-auto mb-10 animate-float">
            <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-[60px] animate-pulse"></div>
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-sky-100 to-white shadow-[0_0_80px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center text-slate-900 overflow-hidden relative select-none">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
              <span className="text-5xl md:text-6xl font-black italic tracking-tighter font-display leading-none">
                21
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold opacity-70 mt-2">
                June 8, 2026
              </span>
            </div>
            {/* Orbiting Elements */}
            <div className="absolute w-4 h-4 bg-sky-300 rounded-full blur-xs top-2 left-20 animate-pulse"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full blur-[1px] bottom-10 right-10"></div>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400 text-center mb-4 block animate-pulse">
            Happy 21st Birthday, Chika 🌙
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6.5xl italic font-light tracking-tight text-white mb-6">
            Happy Birthday,{" "}
            <span className="font-display not-italic font-bold bg-gradient-to-r from-sky-200 via-sky-400 to-white bg-clip-text text-transparent">
              Chika
            </span>{" "}
            🌙
          </h1>

          <div className="h-[1px] w-20 bg-sky-400/30 mx-auto mb-8 rounded-full" />

          <p className="font-serif text-base sm:text-lg italic text-slate-300 max-w-xl mx-auto leading-relaxed select-none px-4">
            "Some stories begin with grand gestures.
            <br />
            Ours began with a school bus seat."
          </p>

          <p className="text-xs text-white/50 max-w-sm mx-auto mt-4 leading-relaxed italic">
            A journey through starlight, ocean tides, and the small moments that
            became everything.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <motion.button
              id="btn-embark-journey"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={exploreJourney}
              className="px-8 py-3 bg-white text-slate-950 font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-xl shadow-sky-900/40 hover:bg-sky-100 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Journey</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </motion.button>
            <button
              onClick={() =>
                document
                  .getElementById("birthday-letter-scroller")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border border-white/20 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/5 transition-all text-white cursor-pointer"
            >
              Birthday Letter
            </button>
          </div>
        </motion.div>
      </section>

      {/* 6. MAIN STORY PORTAL (Ref for scrolling) */}
      <div
        id="storytelling-ocean-gate"
        ref={mainPortalRef}
        className="w-full relative z-10 pt-20 pb-16 bg-gradient-to-b from-transparent via-slate-950/85 to-slate-950"
      >
        {/* Compass Intro Text */}
        <div className="text-center px-4 max-w-xl mx-auto mb-20 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
            Chapter Index
          </span>
          <h2 className="font-serif text-3xl md:text-5xl italic font-light tracking-tight text-white mt-1">
            Where It All Began
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400/80 block mt-2">
            Volume I
          </span>
          <div className="h-[1px] w-12 bg-sky-400/20 mx-auto mt-6 mb-4" />
          <p className="font-serif text-sm italic text-slate-300 mt-3 leading-relaxed">
            Six chapters, milestones, and shared constellations. Tap any node to
            unfold the physical scroll and read the historic stories.
          </p>
        </div>

        {/* Timeline Stack */}
        <div
          id="narrative-timeline-view"
          className="max-w-4xl mx-auto px-4 relative"
        >
          {/* Vertical Center Track Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-400/30 via-sky-500/10 to-slate-800 transform md:-translate-x-1/2 pointer-events-none" />

          {/* Chapters loop */}
          <div className="space-y-12">
            {CHAPTERS.map((chap) => {
              const isOpen = expandedChapter === chap.id;
              const isDostiTravels = chap.id === "dosti-travels";
              const isTheGirls = chap.id === "the-girls";
              const isTheConfession = chap.id === "the-confession";
              const isTheUnfinishedPath = chap.id === "the-unfinished-path";
              const isTheLostChit = chap.id === "the-lost-chit";
              const isLikeYouToo = chap.id === "i-like-you-too";
              const isCinematic =
                isDostiTravels ||
                isTheGirls ||
                isTheConfession ||
                isTheUnfinishedPath ||
                isTheLostChit ||
                isLikeYouToo;

              return (
                <div
                  key={chap.id}
                  id={`chapter-row-node-${chap.id}`}
                  className={`flex flex-col relative ${
                    isLikeYouToo
                      ? "w-full md:flex-col md:items-center pt-12 md:pt-14"
                      : isOpen && isCinematic
                        ? "w-full md:flex-col"
                        : "md:flex-row items-stretch " +
                          (chap.number % 2 === 0 ? "md:flex-row-reverse" : "")
                  }`}
                >
                  {/* Timeline Badge Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400/40 transform -translate-x-1/2 flex items-center justify-center z-20 shadow-lg font-mono text-xs text-sky-300 font-bold">
                    {chap.number}
                  </div>

                  {/* Left spacer for centered grid on Desktop */}
                  {!(isOpen && isCinematic) && !isLikeYouToo && (
                    <div className="hidden md:block w-1/2 px-8" />
                  )}

                  {/* Chapter Interactive Card */}
                  <div
                    className={`w-full pl-12 md:pl-0 ${
                      isLikeYouToo
                        ? "md:w-full md:max-w-2xl md:px-4"
                        : isOpen && isCinematic
                          ? "md:w-full md:px-0"
                          : "md:w-1/2 md:px-8"
                    }`}
                  >
                    <motion.div
                      id={`chapter-card-container-${chap.id}`}
                      layout
                      className={`p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border hover:border-sky-400/40 transition-shadow duration-300 relative ${
                        isOpen
                          ? "border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.1)]"
                          : "border-sky-500/10"
                      }`}
                    >
                      {/* Left vertical tag light-blue accent accent lines */}
                      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-sky-400/40 rounded-r" />

                      {/* Header row */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase text-sky-400 tracking-widest flex items-center gap-1.5">
                          {getChapterIcon(chap.number)}
                          Chapter 0{chap.number}
                        </span>
                      </div>

                      <h3 className="font-display text-lg md:text-xl font-bold text-white mt-1">
                        {chap.title}
                      </h3>
                      <p className="font-serif text-[12.5px] italic text-sky-200/80 mt-0.5">
                        "{chap.subtitle}"
                      </p>

                      <p className="font-sans text-xs text-slate-400 mt-3 leading-relaxed">
                        {chap.description}
                      </p>

                      {/* Expanded Narrative Prose Block */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={`expanded-prose-${chap.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 pt-4 border-t border-slate-800 overflow-hidden text-left animate-fade-in"
                          >
                            {isDostiTravels ? (
                              <div className="mt-2">
                                <DostiTravelsCinematic />
                              </div>
                            ) : isTheGirls ? (
                              <div className="mt-2">
                                <TheQuestionThatStayedCinematic />
                              </div>
                            ) : isTheConfession ? (
                              <div className="mt-2">
                                <TheConfessionCinematic />
                              </div>
                            ) : isTheUnfinishedPath ? (
                              <div className="mt-2">
                                <TheUnfinishedPathCinematic />
                              </div>
                            ) : isTheLostChit ? (
                              <div className="mt-2 font-sans text-left">
                                <TheLostChitCinematic />
                              </div>
                            ) : isLikeYouToo ? (
                              <div className="mt-2 font-sans text-left">
                                <ILikeYouTooCinematic />
                              </div>
                            ) : (
                              <>
                                <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 mb-1.5">
                                  Visual Scene & Illustration:
                                </span>
                                <p className="font-mono text-[10.5px] leading-relaxed text-slate-300 p-2.5 bg-slate-950/80 rounded-xl mb-4 border border-slate-800">
                                  {chap.illustration}
                                </p>

                                <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 mb-1.5">
                                  Narrative Passage:
                                </span>
                                <p className="font-serif text-sm text-slate-200 leading-relaxed pl-3 border-l-2 border-sky-400/40">
                                  {chap.extraDetail}
                                </p>

                                {/* Section closing static quote */}
                                <p className="font-serif text-xs italic text-amber-100/90 mt-5 text-right font-medium">
                                  — {chap.quote}
                                </p>
                              </>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand / Collapse bottom toggle */}
                      <button
                        id={`btn-expand-chap-${chap.id}`}
                        onClick={() =>
                          setExpandedChapter(isOpen ? null : chap.id)
                        }
                        className="w-full mt-4 flex items-center justify-center gap-1.5 font-display text-xs font-semibold text-sky-300 hover:text-white pt-2.5 border-t border-slate-800/60 cursor-pointer transition-colors"
                      >
                        <span>
                          {isOpen ? "Close Scroll" : "Read Chapter Scroll"}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. LITTLE THINGS THAT BECAME MEMORIES */}
        <hr className="border-slate-800/20 max-w-5xl mx-auto my-24 bg-gradient-to-r from-transparent via-slate-800/10 to-transparent" />
        <MemoryObjects />

        {/* 8. THE NOTE I NEVER READ */}
        <hr className="border-slate-800/20 max-w-5xl mx-auto my-24 bg-gradient-to-r from-transparent via-slate-800/10 to-transparent" />
        <TheNoteINeverRead />

        {/* 9. NICKNAMES SHOWCASE WRAPPER */}
        <hr className="border-slate-900 max-w-5xl mx-auto my-24" />
        <NicknameShowcase />

        {/* 10. TYPEWRITER MILESTONE LETTER */}
        <hr className="border-slate-900 max-w-5xl mx-auto my-24" />
        <TypewriterLetter />

        {/* 11. CELLULAR CELEBRATION CLIMAX GRAND FINALE */}
        <hr className="border-slate-900 max-w-5xl mx-auto my-24" />
        <GrandFinale />
      </div>

      {/* 11. Humble footer credit text */}
      <footer
        id="birthday-gift-bottom-footer"
        className="w-full text-center py-12 relative z-10 border-t border-slate-900 text-slate-600 font-mono text-[10px] uppercase tracking-widest mt-auto select-none bg-slate-950/60"
      >
        <p>STORY CONCEPT EXCLUSIVELY DESIGNED FOR CHIKKA'S 21ST YEAR</p>
        <p className="text-slate-700 font-sans italic mt-1.5 normal-case text-xs">
          "The ocean remembers every note parsed behind biology classes."
        </p>
      </footer>
    </div>
  );
}
