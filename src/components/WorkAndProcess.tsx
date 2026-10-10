import React from 'react';
import { Process } from './Process';
import { Projects } from './Projects';

export const WorkAndProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 border-t border-[#2A1A1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: My Process Timeline (4 Cols on desktop) */}
          <div className="lg:col-span-4 sticky top-24">
            <Process />
          </div>

          {/* Right Column: Featured Projects 2x2 Grid (8 Cols on desktop) */}
          <div className="lg:col-span-8">
            <Projects />
          </div>

        </div>
      </div>
    </section>
  );
};
