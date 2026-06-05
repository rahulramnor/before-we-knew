/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Inbox, Wind, HelpCircle, RefreshCw } from "lucide-react";

export default function TheNoteINeverRead() {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Potential secrets Chika might have written (keeps it highly interactive, nostalgic, and thoughtful)
  const speculations = [
    "I like you too, silly. Don't let the exams make you forget me.",
    "Good luck with your exams! Write with the pen I gave you.",
    "Please wait for me. I'm just afraid of the caste differences and what lies ahead.",
    "Every morning on the Dosti Travels bus, I sit next to you because you make me feel safe.",
    "Don't worry about the papers. You are going to do great. - Chika",
    "I reserved our favorite seat on the school bus. Meet me there."
  ];

  const [currentSpeculation, setCurrentSpeculation] = useState(speculations[0]);

  const cycleSpeculation = () => {
    const currentIndex = speculations.indexOf(currentSpeculation);
    const nextIndex = (currentIndex + 1) % speculations.length;
    setCurrentSpeculation(speculations[nextIndex]);
  };

  return (
    <section id="the-note-section" className="py-20 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">
      {/* Decorative wind tracks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ x: ["-100%", "100%"], y: [100, 150] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-sky-300 to-transparent blur-xs"
        />
        <motion.div 
          animate={{ x: ["-100%", "100%"], y: [220, 180] }}
          transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "linear" }}
          className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-xs"
        />
        <motion.div 
          animate={{ x: ["-100%", "100%"], y: [300, 250] }}
          transition={{ duration: 8, delay: 5, repeat: Infinity, ease: "linear" }}
          className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-xs"
        />
      </div>

      <div className="z-10 relative">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400 block mb-3">
          A Lost Mystery
        </span>
        <h2 className="font-serif text-3xl md:text-5xl italic font-light tracking-tight text-white mb-6">
          The Note I Never Read
        </h2>
        <div className="h-[1px] w-12 bg-sky-400/20 mx-auto mb-8" />
        
        <p className="font-serif text-sm md:text-base italic text-slate-300 max-w-xl mx-auto leading-relaxed mb-12 select-none">
          During prelim exams, she secretly placed a note in my pocket. Later, she tried to take it back. 
          Before I could read it, the note was thrown away. To this day, I never learned what was written inside.
        </p>
      </div>

      {/* Visual Workspace: Folded Note with Soft Glow and Wind Elements */}
      <div className="relative flex flex-col items-center justify-center min-h-[340px] w-full rounded-3xl border border-white/5 bg-black/40 backdrop-blur-md p-8 md:p-12 mb-8 shadow-2xl">
        
        {/* Soft atmospheric background glow */}
        <div className="absolute w-72 h-72 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

        {/* Floating dust/wind particles inside workspace */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 pointer-events-none flex justify-around opacity-40">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 15, 0],
                x: [0, 20, -20, 0],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              className="w-1.5 h-1.5 bg-sky-200 rounded-full blur-[1px]"
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Folded Paper Canvas */}
          <motion.div
            id="folded-note-interactive-container"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setIsRevealed(!isRevealed)}
            animate={{
              y: isHovered ? -12 : [-4, 4, -4],
              rotate: isHovered ? -2 : [1, -1, 1],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="cursor-pointer group relative flex flex-col items-center select-none"
          >
            {/* The folded sheet */}
            <div className="relative w-48 h-32 md:w-56 md:h-36 bg-[#fcfbf7] text-slate-800 rounded-lg shadow-xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-500 preserve-3d group-hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]">
              {/* Coffee stains/textured paper overlay */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#edd3a1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Diagonal Fold Shadows to make it look truly folded */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-black/5 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/[0.03] pointer-events-none" />
              
              {/* Folding creases (vertical & horizontal cross-crease) */}
              <div className="absolute inset-x-1/2 top-0 bottom-0 w-[1px] bg-slate-300/40 shadow-inner" />
              <div className="absolute inset-y-1/2 left-0 right-0 h-[1px] bg-slate-300/40 shadow-inner" />

              {/* Little folded triangle at the corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black/[0.04] border-b border-l border-slate-300/60 rounded-bl-md shadow-sm" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-transparent border-r-[32px] border-r-slate-900/[0.05]" />

              {/* Delicate notebook lines */}
              <div className="absolute inset-x-0 top-6 bottom-0 flex flex-col justify-between py-2 px-4 pointer-events-none">
                <div className="h-[1px] w-full bg-sky-200/40" />
                <div className="h-[1px] w-full bg-sky-200/40" />
                <div className="h-[1px] w-full bg-sky-200/40" />
                <div className="h-[1px] w-full bg-sky-200/40" />
              </div>

              {/* Faint faded text indicating we can't see what's inside */}
              <div className="flex-1 flex flex-col justify-center items-center px-4 relative z-10 text-center">
                <motion.span 
                  animate={{ opacity: isRevealed ? 0 : [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-serif text-slate-400 font-medium italic text-[11px] tracking-wide"
                >
                  {isHovered ? "TAP TO UNFOLD ?" : "SECRET CHIT ✉️"}
                </motion.span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-1 scale-90 opacity-60">
                  Prelim Exams, 2019
                </span>
              </div>
              
              {/* Ambient silver foil gloss effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>

            {/* Glowing pulse underneath */}
            <div className={`absolute -bottom-4 w-32 h-6 bg-sky-400/20 blur-md rounded-full transition-all duration-500 ${isHovered ? "scale-125 opacity-100 bg-sky-400/30" : "scale-100 opacity-60"}`} />
          </motion.div>

          {/* Expanded parchment view if tapped */}
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mt-12 w-full max-w-md p-6 bg-[#fefcf8] text-slate-800 rounded-2xl border border-amber-200/40 shadow-2xl relative text-left"
              >
                {/* Paper header */}
                <div className="flex justify-between items-center border-b border-amber-200/40 pb-2.5 mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                    Imagined Whispers
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      cycleSpeculation();
                    }}
                    className="text-amber-800 hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1 font-mono text-[10px]"
                    title="Cycle through imagined thoughts"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Next speculation</span>
                  </button>
                </div>

                {/* Body written text */}
                <p className="font-serif text-[15px] italic leading-relaxed text-amber-900 pl-3 border-l-[3px] border-sky-300">
                  "{currentSpeculation}"
                </p>

                <p className="text-[10px] text-slate-400 font-sans mt-5 leading-normal italic">
                  *Because the actual note was lost before I could look inside, I can only dream of what might have been stated in that moment.
                </p>

                {/* Decorative sticker */}
                <div className="absolute right-4 bottom-4 text-sky-400 opacity-20">
                  <Wind className="w-8 h-8" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Display Text requested exactly */}
        <div className="mt-12 text-center max-w-lg">
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif text-lg md:text-xl italic text-sky-200 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)] select-none"
          >
            "Even after all these years, <br className="sm:hidden" /> I still wonder what was written on that note."
          </motion.p>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-slate-400 opacity-75">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Click the folded note above to reveal speculations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
