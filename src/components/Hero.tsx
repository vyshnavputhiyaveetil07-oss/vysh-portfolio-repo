import React from 'react';
import { MapPin, ArrowRight, Download, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, isDarkMode }) => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                isDarkMode 
                  ? 'bg-blue-950/60 border-blue-800/60 text-blue-300' 
                  : 'bg-blue-50 border-blue-200 text-blue-800'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {profileData.degreeBadge}
              </span>
              
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-300' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {profileData.location}
              </span>
            </div>

            {/* Candidate Full Name */}
            <div>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {profileData.fullName}
              </h1>
              
              {/* Target Role Headline */}
              <div className="mt-2.5 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                {profileData.title}
              </div>
            </div>

            {/* Supporting Statement */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {profileData.headline}
            </p>

            <p className={`text-sm leading-relaxed max-w-2xl border-l-2 pl-3 py-0.5 ${
              isDarkMode ? 'border-blue-500/50 text-slate-400' : 'border-blue-600 text-slate-500'
            }`}>
              {profileData.heroSummary}
            </p>

            {/* Core Tools Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core Verified Tech Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {["SQL", "Python", "Power BI", "Excel", "Tableau"].map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold border transition-all ${
                      isDarkMode
                        ? 'bg-slate-900/90 border-slate-700/80 text-blue-300 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-800 shadow-sm'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('resume')}
                className={`px-5 py-3.5 rounded-xl font-semibold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`px-5 py-3.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Let's Connect</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Interactive WebGL Canvas */}
          <div className="lg:col-span-5">
            <Hero3DCanvas />
          </div>

        </div>

      </div>
    </section>
  );
};
