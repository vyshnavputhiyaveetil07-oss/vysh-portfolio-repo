import React from 'react';
import { MapPin, GraduationCap, Code, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface RecruiterBarProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
}

export const RecruiterBar: React.FC<RecruiterBarProps> = ({ onNavigate, isDarkMode }) => {
  return (
    <div className={`w-full border-y py-4 px-4 sm:px-6 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/80 border-slate-800/80 text-slate-200' 
        : 'bg-slate-100/90 border-slate-200 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Recruiter Badge Label */}
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
            30-Second Recruiter Snapshot
          </span>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 text-xs font-medium w-full lg:w-auto">
          
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <div>
              <div className="font-semibold">MSc Business Analytics</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Univ. of Greenwich (Merit)</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
            <div>
              <div className="font-semibold">London, UK</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Full UK Work Rights</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <div>
              <div className="font-semibold">SQL · Python · Power BI</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Excel · Tableau</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <div>
              <div className="font-semibold">Targeting UK Roles</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Data Analyst / Business Analyst</div>
            </div>
          </div>

        </div>

        {/* Direct Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => onNavigate('resume')}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1 transition-all cursor-pointer ${
              isDarkMode 
                ? 'border-slate-700 hover:bg-slate-800 text-slate-300' 
                : 'border-slate-300 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>
    </div>
  );
};
