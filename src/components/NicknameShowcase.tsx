/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Smile, Sparkles, HelpCircle, FlameKindling, Info } from "lucide-react";
import { NICKNAMES } from "../data";
import { motion } from "motion/react";

export default function NicknameShowcase() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="nickname-showcase-wrapper" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Editorial Title Block */}
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          The Hidden Glossary
        </span>
        <h2 className="font-serif text-3xl md:text-5xl italic font-light tracking-tight text-white mt-1">
          The Names We Never Needed To Explain
        </h2>
        <div className="h-[1px] w-12 bg-sky-400/20 mx-auto mt-6 mb-4" />
        
        <p className="font-serif text-base md:text-lg italic text-sky-200/80 max-w-lg mx-auto mt-4 leading-relaxed">
          "Some names make sense.<br />
          Some names don't.<br />
          Ours never needed to."
        </p>
      </div>

      {/* Grid of Interactive Hover Flip Cards */}
      <motion.div
        id="nickname-cards-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {NICKNAMES.map((nick, idx) => {
          const isFlipped = flippedIndex === idx;

          return (
            <motion.div
              id={`nickname-container-${idx}`}
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onClick={() => setFlippedIndex(isFlipped ? null : idx)}
              className="relative h-32 w-full cursor-pointer perspective-1000 group"
            >
              {/* Inner flippable element */}
              <div
                id={`nickname-card-inner-${idx}`}
                className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border ${
                    nick.name === "My Everything" || nick.name === "Love" 
                      ? "border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]" 
                      : "border-sky-500/10"
                  } rounded-2xl p-4 flex flex-col items-center justify-center backface-hidden group-hover:border-sky-400/40 transition-colors`}
                >
                  {/* Subtle top indicator */}
                  <span className="absolute top-2 right-2.5">
                    <Info className="w-3 h-3 text-slate-600 group-hover:text-sky-400/60 transition-colors" />
                  </span>

                  <span className={`font-display font-bold tracking-tight ${
                    nick.name === "My Everything" || nick.name === "Love" 
                      ? "text-sky-300 text-base md:text-lg" 
                      : "text-white text-sm md:text-base"
                  }`}>
                    {nick.name}
                  </span>
                  
                  <span className="font-mono text-[9px] text-slate-500 mt-2 uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                    Click to unfold
                  </span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full bg-slate-900 border border-sky-400/40 rounded-2xl p-4 flex flex-col items-center justify-center rotate-y-180 backface-hidden text-slate-100">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> Inside Reason
                  </span>
                  <p className="font-sans text-[10.5px] leading-relaxed text-slate-300 text-center line-clamp-4">
                    {nick.meaning}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Responsive layout CSS helper classes for Card flipping */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Helpful bottom status indicator */}
      <div className="mt-8 flex justify-center items-center gap-2">
        <FlameKindling className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
          Tap any nickname card to unveil its private meaning
        </span>
      </div>
    </div>
  );
}
