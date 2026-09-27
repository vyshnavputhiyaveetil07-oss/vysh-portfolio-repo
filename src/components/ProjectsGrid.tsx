import React, { useState } from 'react';
import type { Project } from '../types/portfolio';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

interface ProjectsGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  isDarkMode: boolean;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  onSelectProject,
  isDarkMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business Analytics', 'Data Analysis', 'Business Intelligence', 'Financial Services', 'Healthcare Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle className="w-3 h-3" />
            COMPLETED
          </span>
        );
      case 'IN PROGRESS':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Clock className="w-3 h-3 animate-spin" />
            IN PROGRESS
          </span>
        );
      case 'PLANNED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
            PLANNED / COMING SOON
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            04 — Practical Analytics Portfolio
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Practical Business Analytics & BI Projects
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A structured portfolio of 8 recruiter-friendly case studies demonstrating practical SQL querying, Python exploratory data analysis, Power BI DAX modeling, and Excel business analysis.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold scale-105'
                  : isDarkMode
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-6 relative group ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/60 shadow-lg hover:shadow-2xl hover:shadow-blue-950/40'
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl hover:shadow-slate-200/70'
              }`}
            >
              
              <div>
                {/* Header: Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-500">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-xl font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-xs font-mono mb-4 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.shortDescription}
                </p>

                {/* Tools Strip */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Tools Used:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-blue-300'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Analyse → Visualise → Act
                </span>

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
