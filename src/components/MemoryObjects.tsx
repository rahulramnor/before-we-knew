/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MEMORY_OBJECTS } from "../data";
import { MemoryObject } from "../types";
import { Sparkles, Calendar, BookOpen, X, Heart, MessageSquare } from "lucide-react";

export default function MemoryObjects() {
  const [selectedObject, setSelectedObject] = useState<MemoryObject | null>(null);

  return (
    <section id="memory-objects-section" className="py-20 px-6 max-w-6xl mx-auto relative">
      {/* Visual Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-24 h-24 bg-sky-400/5 rounded-full blur-2xl" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-450 text-sky-400 block mb-3">
          The Keepsake Chest
        </span>
        <h2 className="font-serif text-3xl md:text-5xl italic font-light tracking-tight text-white">
          Little Things That Became Memories
        </h2>
        <div className="h-[1px] w-16 bg-sky-400/25 mx-auto mt-6 mb-4" />
        <p className="font-sans text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Physical anchors of a celestial story. Click each keepsake below to read the quiet tales behind them.
        </p>
      </div>

      {/* Grid of Interactive Memory Objects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {MEMORY_OBJECTS.map((obj) => (
          <motion.div
            key={obj.id}
            layoutId={`card-container-${obj.id}`}
            whileHover={{ 
              scale: 1.04, 
              y: -4,
              boxShadow: obj.shadowColor ? `0 15px 30px ${obj.shadowColor}` : "0 10px 20px rgba(14,165,233,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedObject(obj)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/5 bg-black/30 backdrop-blur-md p-6 flex flex-col justify-between min-h-[180px] transition-all duration-300"
          >
            {/* Background Radial Glow */}
            <div 
              className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: obj.shadowColor || 'rgba(14,165,233,0.2)' }}
            />

            {/* Keeping it simple, elegant (Not over-decorated) */}
            <div className="flex justify-between items-start">
              <span className="text-3.5xl md:text-4xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] select-none">
                {obj.emoji}
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                Keepsake
              </span>
            </div>

            <div className="mt-6">
              <span className="text-[10px] font-mono font-medium text-sky-400 tracking-wider block mb-1">
                {obj.date}
              </span>
              <h3 className="font-serif text-base font-semibold text-slate-250 text-slate-200 group-hover:text-white transition-colors duration-200">
                {obj.name}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 lines-clamp-2 italic leading-relaxed font-serif opacity-0 group-hover:opacity-100 transition-all duration-350 transform translate-y-1 group-hover:translate-y-0">
                {obj.story}
              </p>
            </div>
            
            {/* Quick action button inside card */}
            <div className="mt-4 flex items-center gap-1 text-[9px] font-mono uppercase text-sky-400 tracking-widest opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <span>Read Story</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Immersive Keepsake Modal Drawer/Envelope */}
      <AnimatePresence>
        {selectedObject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur-overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedObject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs"
            />

            {/* The Floating Letter Envelope Popup */}
            <motion.div
              layoutId={`card-container-${selectedObject.id}`}
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 text-slate-100 p-6 md:p-8 shadow-2xl z-10"
              style={{
                boxShadow: selectedObject.shadowColor 
                  ? `0 25px 60px -15px ${selectedObject.shadowColor}, 0 0 40px rgba(0,0,0,0.6)` 
                  : "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
            >
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-600 opacity-80" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedObject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Envelope Header info */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl md:text-5xl filter drop-shadow-md select-none bg-white/5 p-3 rounded-2xl border border-white/5">
                  {selectedObject.emoji}
                </span>
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-sky-400 uppercase tracking-widest font-bold">
                    <Calendar className="w-3 h-3" />
                    <span>{selectedObject.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    {selectedObject.name}
                  </h3>
                </div>
              </div>

              {/* Parchment letter content */}
              <div className="bg-[#fcfbf9] text-slate-800 rounded-2xl p-5 md:p-6 shadow-inner relative border border-amber-100 overflow-hidden mb-6">
                {/* Textured background lines */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#edd3a1_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                
                <h4 className="font-mono text-[9px] uppercase tracking-wider text-amber-700/80 mb-3 block">
                  Archive Transcript:
                </h4>

                <p className="font-serif text-base italic leading-relaxed text-slate-900 pl-3 border-l-2 border-sky-300 mb-4">
                  "{selectedObject.story}"
                </p>

                {selectedObject.details && (
                  <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-250/20">
                    {selectedObject.details}
                  </p>
                )}
                
                <div className="absolute right-4 bottom-4 text-emerald-800/10 select-none">
                  <Heart className="w-16 h-16 fill-emerald-800/10" />
                </div>
              </div>

              {/* Dialogue Footer */}
              <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Always Remembered</span>
                </span>
                <button
                  onClick={() => setSelectedObject(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold cursor-pointer transition-all"
                >
                  Close Keep
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
