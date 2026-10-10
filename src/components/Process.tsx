import React from 'react';
import { Search, Map, Palette, Terminal, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-4 h-4 text-[#C5222E]" />;
      case '02':
        return <Map className="w-4 h-4 text-[#C5222E]" />;
      case '03':
        return <Palette className="w-4 h-4 text-[#C5222E]" />;
      case '04':
        return <Terminal className="w-4 h-4 text-[#C5222E]" />;
      case '05':
        return <CheckCircle2 className="w-4 h-4 text-[#C5222E]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#C5222E]" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#F7EFE6]">
          MY PROCESS
        </h3>
        <div className="w-8 h-0.5 bg-[#C5222E] mt-1"></div>
        <p className="text-xs text-[#A39B94] mt-2">
          A disciplined 5-stage workflow from discovery to deployment.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#C5222E] before:via-[#680E18] before:to-white/10">
        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#140E10] border border-[#680E18] flex items-center justify-center -translate-x-1/2 group-hover:border-[#C5222E] group-hover:scale-110 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5222E]"></span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-lg border border-[#2A1A1E] bg-[#140E10]/90 hover:border-[#680E18] transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#C5222E]">
                    {step.number}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="w-5 h-5 rounded bg-[#1E090D] flex items-center justify-center">
                    {getStepIcon(step.number)}
                  </span>
                  <h4 className="font-display text-lg tracking-wide uppercase text-[#F7EFE6]">
                    {step.title}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#A39B94] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
