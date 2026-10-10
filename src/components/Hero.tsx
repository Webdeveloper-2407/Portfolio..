import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Layers, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] crimson-glow pointer-events-none -z-10 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Information Row */}
        <div className="flex items-center justify-between border-b border-[#2A1A1E] pb-3 mb-4 text-[11px] sm:text-xs tracking-widest uppercase text-[#A39B94]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5222E]"></span>
            <span className="font-semibold text-[#F7EFE6]">CREATIVE PORTFOLIO</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline">WEB DEVELOPMENT &amp; UI/UX</span>
          </div>
          <div className="flex items-center gap-2">
            <span>AVAILABLE FOR PROJECTS</span>
            <span className="w-2 h-2 rounded-full bg-[#C5222E] animate-pulse"></span>
          </div>
        </div>

        {/* Oversized Dominant Headline: PORTFOLIO */}
        <div className="relative text-center select-none overflow-hidden py-1 sm:py-2">
          <h1 className="font-display text-[19vw] sm:text-[18vw] md:text-[17vw] lg:text-[16.5rem] leading-[0.82] tracking-[0.03em] uppercase text-[#F7EFE6] drop-shadow-sm font-normal text-center m-0 transition-transform">
            PORTFOLIO
          </h1>
        </div>

        {/* 3-Column Hero Content Grid with Centerpiece Portrait */}
        <div className="relative mt-2 sm:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: UI / UX / WEB & Quote */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1 text-left">
            <div>
              <div className="inline-block text-[#C5222E] font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider uppercase mb-2">
                UI / UX / WEB
              </div>
              <div className="w-12 h-0.5 bg-[#C5222E] mb-5"></div>
              
              <ul className="space-y-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#D6CCC2]">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5222E] font-bold">―</span>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5222E] font-bold">―</span>
                  <span>User Interface</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5222E] font-bold">―</span>
                  <span>Responsive Web Design</span>
                </li>
              </ul>
            </div>

            {/* Editorial Statement Card */}
            <div className="p-4 sm:p-5 rounded-lg border border-[#2A1A1E] bg-[#140E10]/80 backdrop-blur-sm relative">
              <span className="text-[#C5222E] text-3xl font-serif leading-none block mb-1">“</span>
              <p className="text-xs sm:text-sm text-[#A39B94] leading-relaxed font-normal">
                {PERSONAL_INFO.heroQuote}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A39B94]">
                <span className="italic font-serif">Rana Ahmad</span>
                <span className="text-[#C5222E]">Creative Code</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A39B94] hover:text-[#F7EFE6] transition-colors"
              >
                <ArrowDown className="w-4 h-4 text-[#C5222E] animate-bounce" />
                <span>Scroll to explore projects</span>
              </a>
            </div>
          </div>

          {/* Center Column: Portrait with Burgundy Circular Backdrop */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 relative py-4">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-[4/5] flex items-center justify-center">
              
              {/* Deep Burgundy Circular Disc Visual Anchor */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] rounded-full crimson-disc -z-10 top-6 sm:top-8" />

              {/* Decorative Circular Text Ring Around Anchor */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <svg className="w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] md:w-[450px] md:h-[450px] animate-[spin_40s_linear_infinite] opacity-40" viewBox="0 0 400 400">
                  <path
                    id="circlePath"
                    d="M 200, 200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
                    fill="none"
                  />
                  <text fill="#F7EFE6" fontSize="10.5" letterSpacing="4.5" className="uppercase font-mono">
                    <textPath href="#circlePath">
                      • RANA AHMAD • FRONTEND DEVELOPER &amp; UI/UX DESIGNER • CREATIVE PORTFOLIO 
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Rana Ahmad Portrait */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center shadow-2xl shadow-black/80">
                <img
                  src={PERSONAL_INFO.portrait}
                  alt="Rana Ahmad — Frontend Developer & UI/UX Designer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Subtle dark vignette blend at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0708] via-[#0B0708]/60 to-transparent pointer-events-none" />

                {/* Corner editorial label */}
                <div className="absolute bottom-3 left-3 bg-[#0B0708]/80 backdrop-blur-md px-3 py-1 rounded border border-[#2A1A1E] text-[10px] tracking-widest uppercase font-mono text-[#F7EFE6]">
                  Rana Ahmad · Portfolio
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Name, Title, Info Blocks, and CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 sm:space-y-7 order-3 text-left">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#C5222E] font-semibold mb-1">
                About The Creator
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-[#F7EFE6] leading-none mb-2">
                RANA AHMAD
              </h2>
              <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C5222E] mb-4">
                FRONTEND DEVELOPER &amp; UI/UX DESIGNER
              </div>
              <p className="text-xs sm:text-sm text-[#A39B94] leading-relaxed font-normal">
                I'm a digital creator crafting clean, modern and user-focused web interfaces. I turn ideas into polished digital experiences through thoughtful design and purposeful interactions.
              </p>
            </div>

            {/* Compact Real Info Blocks */}
            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center gap-3 p-3 rounded-md border border-[#2A1A1E] bg-[#140E10]/70">
                <div className="w-8 h-8 rounded-full bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C5222E]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Location</div>
                  <div className="text-xs font-semibold text-[#F7EFE6]">Rahim Yar Khan, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-md border border-[#2A1A1E] bg-[#140E10]/70">
                <div className="w-8 h-8 rounded-full bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                  <Code className="w-4 h-4 text-[#C5222E]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Core Focus</div>
                  <div className="text-xs font-semibold text-[#F7EFE6]">Frontend Web Development</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-md border border-[#2A1A1E] bg-[#140E10]/70">
                <div className="w-8 h-8 rounded-full bg-[#1E090D] border border-[#680E18] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-[#C5222E]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A39B94]">Design Discipline</div>
                  <div className="text-xs font-semibold text-[#F7EFE6]">UI/UX &amp; Responsive Layouts</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="group flex items-center justify-between w-full px-5 py-3.5 rounded-lg bg-[#C5222E] hover:bg-[#9B1622] text-[#F7EFE6] text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#C5222E]/20 transition-all duration-200"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
