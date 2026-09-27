import React from 'react';
import { GraduationCap, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface FeaturedProjectsProps {
  academicProjects: Project[];
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  academicProjects,
  onSelectProject,
  isDarkMode,
}) => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
              03 — Academic & Research Portfolio
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Case Studies & Academic Research
            </h2>
            <p className={`mt-2 text-sm max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Rigorous research projects evaluating Explainable AI (XAI) in financial risk decision-making and operational stress indicators in healthcare.
            </p>
          </div>
        </div>

        {/* 2 Featured Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {academicProjects.map((project) => {
            const isXAI = project.id.includes('xai');
            const Icon = isXAI ? ShieldCheck : HeartPulse;

            return (
              <div
                key={project.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative group ${
                  isDarkMode
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-slate-800 hover:border-blue-500/50 shadow-xl shadow-blue-950/20'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-xl shadow-slate-200/50'
                }`}
              >
                
                {/* Top Tags */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {project.academicTag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                      isDarkMode ? 'bg-blue-950 text-blue-400 border border-blue-800/60' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-mono mt-1 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.shortDescription}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Tools & Domains:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight box */}
                  <div className={`p-4 rounded-xl text-xs leading-relaxed border mb-6 ${
                    isDarkMode
                      ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-bold text-blue-500 font-mono block mb-1">Key Research Highlight:</span>
                    {project.impactHighlight}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    6-Step Case Study Available
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                  >
                    <span>View Academic Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
