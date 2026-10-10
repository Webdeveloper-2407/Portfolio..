import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide uppercase text-[#F7EFE6]">
            FEATURED WORK
          </h3>
          <div className="w-10 h-0.5 bg-[#C5222E] mt-1.5"></div>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#A39B94] font-mono">
          04 Selected Works
        </span>
      </div>

      {/* 2-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl border border-[#2A1A1E] bg-[#140E10]/90 hover:border-[#680E18] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Clickable Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/60 border-b border-[#2A1A1E]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                title={`Visit ${project.title} live website`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140E10] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />
              </a>

              {/* Quick modal inspect button on top right */}
              <button
                onClick={() => setSelectedProject(project)}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#0B0708]/80 backdrop-blur-md border border-white/10 text-[#A39B94] hover:text-white hover:border-[#C5222E] transition-all"
                title="View project details"
                aria-label={`View details for ${project.title}`}
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Category pill-free text label on bottom left */}
              <div className="absolute bottom-3 left-3 bg-[#0B0708]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-[#2A1A1E] text-[10px] font-mono tracking-wider uppercase text-[#E5E0D8]">
                {project.category}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-flex items-center gap-2"
                >
                  <h4 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#F7EFE6] group-hover/title:text-[#C5222E] transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 text-[#A39B94] group-hover/title:text-[#C5222E] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                </a>

                <p className="text-xs text-[#A39B94] leading-relaxed mt-2 font-normal line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags and Live Demo Button */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[#A39B94] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-2.5 py-1.5 rounded text-[11px] font-medium uppercase tracking-wider text-[#A39B94] hover:text-[#F7EFE6] transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1E090D] border border-[#680E18] hover:bg-[#C5222E] hover:border-[#C5222E] text-xs font-semibold uppercase tracking-wider text-[#F7EFE6] transition-all group/btn"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
