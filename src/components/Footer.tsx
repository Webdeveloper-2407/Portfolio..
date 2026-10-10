import React from 'react';
import { ArrowUp, ArrowUpRight, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A1A1E] bg-[#080506] pt-16 pb-12 text-[#A39B94] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Wordmark & Big Closing Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between border-b border-white/5 pb-12">
          
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-display text-4xl sm:text-5xl text-[#F7EFE6] tracking-wider uppercase">
              RANA AHMAD
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#C5222E] font-mono">
              FRONTEND DEVELOPER &amp; UI/UX DESIGNER
            </p>
            <p className="font-display text-xl sm:text-2xl text-[#E5E0D8] tracking-wide uppercase pt-2 max-w-lg leading-snug">
              DESIGNING DIGITAL EXPERIENCES. BUILDING MEANINGFUL CONNECTIONS.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-between lg:justify-end gap-8 sm:gap-12">
            {/* Quick Links */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#F7EFE6]">
                Navigation
              </div>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#F7EFE6] transition-colors">Home</a></li>
                <li><a href="#what-i-do" className="hover:text-[#F7EFE6] transition-colors">What I Do</a></li>
                <li><a href="#process" className="hover:text-[#F7EFE6] transition-colors">Process</a></li>
                <li><a href="#projects" className="hover:text-[#F7EFE6] transition-colors">Featured Projects</a></li>
                <li><a href="#about" className="hover:text-[#F7EFE6] transition-colors">About &amp; Tools</a></li>
                <li><a href="#contact" className="hover:text-[#F7EFE6] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#F7EFE6]">
                Direct Contacts
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#F7EFE6] transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C5222E]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${PERSONAL_INFO.phoneDial}`} className="hover:text-[#F7EFE6] transition-colors flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5222E]" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5222E]" />
                  <span>{PERSONAL_INFO.location}</span>
                </li>
              </ul>
            </div>

            {/* Social channels */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#F7EFE6]">
                Connect
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F7EFE6] transition-colors flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F7EFE6] transition-colors flex items-center gap-1"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F7EFE6] transition-colors flex items-center gap-1"
                  >
                    <span>Discord</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A39B94]" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A39B94]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Rana Ahmad. All rights reserved.</span>
            <span>·</span>
            <span>Rahim Yar Khan, Pakistan</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#F7EFE6] hover:text-[#C5222E] transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
