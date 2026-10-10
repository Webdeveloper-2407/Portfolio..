import React from 'react';
import { Check, Code2, Cpu, Sparkles, Terminal, Layers, Palette, Monitor } from 'lucide-react';
import { PERSONAL_INFO, TOOLS } from '../data/portfolioData';

export const AboutAndTools: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#2A1A1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: ABOUT ME (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-[#F7EFE6]">
                ABOUT ME
              </h3>
              <div className="w-10 h-0.5 bg-[#C5222E] mt-1.5"></div>
            </div>

            <div className="p-6 sm:p-7 rounded-xl border border-[#2A1A1E] bg-[#140E10]/90 backdrop-blur-sm relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                
                {/* Framed Portrait Crop */}
                <div className="sm:col-span-5 relative group">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#3D1A22] bg-[#1E090D] relative">
                    <img
                      src={PERSONAL_INFO.portrait}
                      alt="Rana Ahmad portrait"
                      className="w-full h-full object-cover object-top filter contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140E10] via-transparent to-transparent opacity-50" />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5222E]">
                      Rahim Yar Khan, PK
                    </span>
                  </div>
                </div>

                {/* Bio Prose & Principles */}
                <div className="sm:col-span-7 space-y-4">
                  <p className="text-xs sm:text-sm text-[#D6CCC2] leading-relaxed">
                    I'm Rana Ahmad, a Frontend Developer and UI/UX Designer from Rahim Yar Khan, Pakistan. I enjoy transforming ideas into clean, modern, responsive websites that balance visual quality with usability.
                  </p>

                  <p className="text-xs sm:text-sm text-[#A39B94] leading-relaxed">
                    My approach combines thoughtful interface design, attention to detail, and practical frontend development. I focus on creating digital experiences that look polished, work smoothly, and remain accessible across different devices.
                  </p>

                  {/* Working Principles */}
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#F7EFE6]">
                      Core Working Principles:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {PERSONAL_INFO.principles.map((principle) => (
                        <li key={principle} className="flex items-center gap-2 text-xs text-[#A39B94]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5222E]"></span>
                          <span className="text-[#D6CCC2]">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: TOOLS I USE & Philosophy (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-[#F7EFE6]">
                TOOLS I USE
              </h3>
              <div className="w-10 h-0.5 bg-[#C5222E] mt-1.5"></div>
            </div>

            {/* Tools Grid */}
            <div className="p-6 rounded-xl border border-[#2A1A1E] bg-[#140E10]/90 space-y-5">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-lg border border-[#2A1A1E] bg-[#181012] hover:border-[#680E18] hover:bg-[#201216] transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#2B1218] border border-[#521622] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <span className="font-mono text-xs font-bold text-[#F7EFE6]">
                        {tool.abbr || tool.name.substring(0, 2)}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#F7EFE6] leading-tight">
                      {tool.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#A39B94] mt-0.5 truncate max-w-full">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Design Philosophy Card */}
              <div className="p-4 rounded-lg border border-[#3D1A22] bg-[#1E090D]/80 relative">
                <span className="text-[#C5222E] text-2xl font-serif leading-none block mb-1">“</span>
                <p className="text-xs text-[#D6CCC2] leading-relaxed italic">
                  Good design is not just what it looks like, but how seamlessly it works for real people. Every interaction should serve a distinct purpose.
                </p>
                <div className="mt-2 text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5222E]">
                    — Rana Ahmad · Design Philosophy
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
