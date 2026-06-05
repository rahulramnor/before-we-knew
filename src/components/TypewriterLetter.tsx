/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Mail, ChevronLeft, ChevronRight, MailOpen, Volume2, VolumeX, HeartHandshake } from "lucide-react";
import { BIRTHDAY_LETTER_PAGES } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TypewriterLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [ambientSound, setAmbientSound] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const fullText = BIRTHDAY_LETTER_PAGES[currentPage];

  // Simulated soft retro mechanical tick-tack keys
  useEffect(() => {
    let index = 0;
    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 28); // comfortable rapid typing speed

    return () => clearInterval(interval);
  }, [currentPage, fullText, isOpen]);

  // Synthesis of simple retro ambient hum or cozy waves if selected
  const handleToggleAmbient = () => {
    if (!ambientSound) {
      // Start a soft synthesized oceanic white noise generator
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Let's synthesize a very gentle soft wind/ocean wash
        // Create random noise buffer
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Soft filter to make it sound like ocean murmur
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();

        setAudioContext(ctx);
        // Save whiteNoise to stop it later
        (window as any)._ambientSource = whiteNoise;
        setAmbientSound(true);
      } catch (e) {
        console.warn("AudioContext failed to boot:", e);
      }
    } else {
      if ((window as any)._ambientSource) {
        try {
          (window as any)._ambientSource.stop();
        } catch (_) {}
      }
      if (audioContext) {
        audioContext.close();
      }
      setAmbientSound(false);
    }
  };

  // Cleanup synthesizer
  useEffect(() => {
    return () => {
      if ((window as any)._ambientSource) {
        try {
          (window as any)._ambientSource.stop();
        } catch (_) {}
      }
    };
  }, []);

  return (
    <div id="birthday-letter-scroller" className="py-20 px-4 max-w-3xl mx-auto relative">
      {/* Background soft ambient glowing pool */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          The 21st Milestone
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-white mt-1">
          A Moonlit Written Letter
        </h3>
        <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed">
          Passed through years, across distances. Stamped in golden seal. Open when you are ready to read.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Sealed Envelope Screen */
          <motion.div
            key="sealed-envelope"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="flex flex-col items-center"
          >
            <motion.div
              id="wax-envelope-card"
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-md h-64 bg-slate-900 border border-sky-400/20 hover:border-sky-400/60 rounded-2xl shadow-[0_15px_30px_rgba(2,10,30,0.5)] flex flex-col items-center justify-center p-6 cursor-pointer group transitioning-all overflow-hidden"
            >
              {/* Star details on card background */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sky-400/5 to-transparent pointer-events-none" />

              <div className="p-4 rounded-full bg-sky-950/40 border border-sky-500/30 group-hover:bg-sky-900/40 group-hover:border-sky-400/60 mb-4 transition-all">
                <Mail className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform" />
              </div>

              <span className="font-serif text-lg font-medium text-slate-200">
                To: Chika 🌙
              </span>
              <span className="font-sans text-[10px] text-slate-500 uppercase tracking-widest mt-1.5 group-hover:text-sky-300 transition-colors">
                Tap to Break Wax Seal
              </span>

              {/* Fake wax seal button */}
              <div className="absolute -bottom-1 w-10 h-10 rounded-full bg-amber-600/90 border-2 border-amber-500 flex items-center justify-center text-amber-100 shadow-md transform translate-y-1/2 group-hover:bg-amber-500 transition-colors">
                <HeartHandshake className="w-4 h-4" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Unfolded Lined Letter Page */
          <motion.div
            key="unfolded-letter-view"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="w-full bg-[#FAF9F6] text-stone-900 border border-stone-200 rounded-3xl p-6 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            {/* Authentic vertical notebook red margin line */}
            <div className="absolute left-10 md:left-14 top-0 bottom-0 w-[1.5px] bg-red-200/65 pointer-events-none" />

            {/* Faint elegant handwriting guidelines */}
            <div className="absolute inset-0 bg-transparent opacity-80 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 29px, #E2E8F0 30px)" }} />

            {/* Audio Toggle Top Corner */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
              <button
                type="button"
                id="btn-toggle-sound"
                onClick={handleToggleAmbient}
                title="Toggle sea-wind ambient sound generator"
                className="flex items-center gap-1 bg-stone-100 hover:bg-stone-200 border border-stone-200 px-3 py-1.5 rounded-full text-xs font-mono text-stone-800 cursor-pointer transition-colors"
              >
                {ambientSound ? <Volume2 className="w-3.5 h-3.5 text-sky-700 animate-bounce" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
                <span>{ambientSound ? "Mute Ocean" : "Ocean Ambient"}</span>
              </button>
            </div>

            {/* Page Count Header */}
            <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-6 font-mono text-xs text-stone-500">
              <span className="font-semibold uppercase tracking-wider flex items-center gap-2">
                <MailOpen className="w-4 h-4 text-stone-600" /> Letter: Chapter Page
              </span>
              <span>
                Sheet <strong className="text-stone-950">{currentPage + 1}</strong> of <strong className="text-stone-950">{BIRTHDAY_LETTER_PAGES.length}</strong>
              </span>
            </div>

            {/* Substantive letter body area */}
            <div className="min-h-[220px] mb-8 relative pr-4 pt-2">
              <p className="font-serif text-[15px] md:text-lg leading-[30px] text-stone-900 whitespace-pre-line text-left pl-8 md:pl-10 font-medium tracking-wide">
                {typedText}
                {isTyping && (
                  <span className="inline-block w-2 h-4 bg-stone-800 ml-1 animate-pulse" />
                )}
              </p>
            </div>

            {/* Letter Bottom Pagination Nav bar */}
            <div className="flex items-center justify-between border-t border-stone-200 pt-4 mt-6">
              <button
                id="btn-letter-prev"
                disabled={currentPage === 0}
                onClick={() => {
                  if (currentPage > 0) setCurrentPage(currentPage - 1);
                }}
                className={`flex items-center gap-1 bg-stone-100 hover:bg-stone-200 border border-stone-200 px-4 py-1.5 rounded-full text-xs font-semibold text-stone-800 transition-all ${
                  currentPage === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <button
                id="btn-close-envelope"
                onClick={() => {
                  setIsOpen(false);
                  setCurrentPage(0);
                }}
                className="text-xs text-stone-500 hover:text-stone-900 font-sans font-semibold underline cursor-pointer"
              >
                Seal Letter
              </button>

              <button
                id="btn-letter-next"
                disabled={currentPage === BIRTHDAY_LETTER_PAGES.length - 1}
                onClick={() => {
                  if (currentPage < BIRTHDAY_LETTER_PAGES.length - 1) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                className={`flex items-center gap-1 bg-stone-900 text-white hover:bg-stone-800 px-5 py-1.5 rounded-full text-xs font-semibold transition-all shadow-md ${
                  currentPage === BIRTHDAY_LETTER_PAGES.length - 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Next Sheet <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Decorative typewriter paper rollers visually framing the top */}
            <div className="absolute -top-3 left-4 right-4 h-2.5 bg-stone-200 rounded-full blur-[1px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
