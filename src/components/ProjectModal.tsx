import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Code2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDarkMode,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const steps = [
    project.caseStudy.problem,
    project.caseStudy.dataset,
    project.caseStudy.approach,
    project.caseStudy.visualisation,
    project.caseStudy.insight,
    project.caseStudy.recommendation,
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Drawer */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 p-6 sm:p-8 md:p-10 ${
        isDarkMode 
          ? 'bg-slate-900 border-slate-800 text-slate-100' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Sticky Header Close Bar */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
                {project.category}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${
                project.status === 'COMPLETED'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : project.status === 'IN PROGRESS'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}>
                {project.status}
              </span>
              {project.isFeaturedAcademic && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {project.academicTag}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h2>
            <p className={`text-sm font-mono mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isDarkMode 
                ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tools & External Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl mb-8 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-1">VERIFIED TECH STACK:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-blue-600/10 text-blue-500 border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.dashboardUrl && (
              <a
                href={project.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Dashboard</span>
              </a>
            )}
          </div>
        </div>

        {/* 6-Step Signature Case Study Breakdown */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`p-6 rounded-2xl border ${
                isDarkMode 
                  ? 'bg-slate-950/60 border-slate-800/80' 
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500">
                  {step.title}
                </span>
                <span className="text-xs font-mono text-slate-400">Step 0{idx + 1} of 06</span>
              </div>

              <h3 className="text-lg font-bold mb-2">{step.subtitle}</h3>

              <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {step.content}
              </p>

              {/* Bullet Points */}
              {step.bullets && step.bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {step.bullets.map((bullet, i) => {
                    const isPlaceholder = bullet.includes('[DETAILS TO BE ADDED');
                    return (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        {isPlaceholder ? (
                          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={isPlaceholder ? 'text-amber-400 font-mono italic' : isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                          {bullet}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Code Snippet Box if available */}
              {step.codeSnippet && (
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs">
                  <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      {step.codeSnippet.language.toUpperCase()} Snippet
                    </span>
                    <span className="text-[11px] text-slate-500">Verified Query</span>
                  </div>
                  <pre className="p-4 text-blue-300 overflow-x-auto leading-relaxed">
                    <code>{step.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Portfolio Case Study • Vyshnav P. K.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-semibold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
