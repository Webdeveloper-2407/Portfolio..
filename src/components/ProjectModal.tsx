import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Layers, Globe } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#3D1A22] bg-[#120B0D] p-5 sm:p-7 shadow-2xl z-10 space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C5222E] font-mono mb-1">
              {project.category}
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-[#F7EFE6] tracking-wide">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A39B94]">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 bg-[#1E090D] text-[#A39B94] hover:text-white hover:border-[#C5222E] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Preview Image with direct clickable link */}
        <div className="relative rounded-lg overflow-hidden border border-[#2A1A1E] group">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.title} live preview`}
              className="w-full aspect-[16/9] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5222E] text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
                <span>Open Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>

        {/* Project Description & Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A39B94] mb-1">
                Project Overview
              </h4>
              <p className="text-sm text-[#D6CCC2] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A39B94] mb-2">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A39B94]">
                    <Check className="w-3.5 h-3.5 text-[#C5222E] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 p-4 rounded-lg border border-[#2A1A1E] bg-[#181012]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#A39B94] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C5222E]" />
                <span>Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#241317] border border-[#4A1721] text-[11px] font-medium text-[#F7EFE6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#C5222E] hover:bg-[#9B1622] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#C5222E]/20"
              >
                <Globe className="w-4 h-4" />
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
