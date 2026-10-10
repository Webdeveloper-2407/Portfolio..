import React from 'react';
import { Code2, Layout, Smartphone, Sparkles, Wand2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-[#C5222E]" />;
      case 'uiux':
        return <Layout className="w-5 h-5 text-[#C5222E]" />;
      case 'responsive':
        return <Smartphone className="w-5 h-5 text-[#C5222E]" />;
      case 'interactive':
        return <Sparkles className="w-5 h-5 text-[#C5222E]" />;
      case 'implementation':
        return <Wand2 className="w-5 h-5 text-[#C5222E]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#C5222E]" />;
    }
  };

  return (
    <section id="what-i-do" className="py-16 md:py-20 border-t border-[#2A1A1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-[#F7EFE6]">
              WHAT I DO
            </h2>
            <div className="w-10 h-0.5 bg-[#C5222E] mt-1.5"></div>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#A39B94] font-mono">
            05 Core Capabilities
          </span>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-5 rounded-lg border border-[#2A1A1E] bg-[#140E10]/80 hover:bg-[#181113] hover:border-[#680E18] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top ambient hover glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5222E]/10 rounded-full blur-2xl group-hover:bg-[#C5222E]/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-md bg-[#1E090D] border border-[#680E18] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-[11px] text-[#A39B94] group-hover:text-[#C5222E] transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl tracking-wide uppercase text-[#F7EFE6] group-hover:text-white transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-[#A39B94] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#A39B94] font-mono">
                  Production Grade
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5222E]/40 group-hover:bg-[#C5222E] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
