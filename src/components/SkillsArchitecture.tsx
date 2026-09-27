import React from 'react';
import { skillCategories } from '../data/skills';
import { TechTools3D } from './TechTools3D';
import { Briefcase, Database, BarChart3, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

interface SkillsArchitectureProps {
  isDarkMode: boolean;
}

export const SkillsArchitecture: React.FC<SkillsArchitectureProps> = ({ isDarkMode }) => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return Briefcase;
      case 'Database': return Database;
      case 'BarChart3': return BarChart3;
      case 'FileSpreadsheet': return FileSpreadsheet;
      default: return Briefcase;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            05 — Technical & Functional Competencies
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Visual Skills & Tooling Architecture
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Verified competencies across Business Analytics, Database Querying, BI Visualization, and Quantitative Research.
          </p>
        </div>

        {/* 4 Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <div
                key={cat.title}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/50 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isDarkMode ? 'bg-blue-950/80 text-blue-400 border border-blue-800/60' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cat.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className={`text-xs font-mono font-medium ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive 3D Tool Showcase */}
        <TechTools3D isDarkMode={isDarkMode} />

      </div>
    </section>
  );
};
