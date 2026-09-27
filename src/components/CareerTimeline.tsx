import React from 'react';
import { timelineData } from '../data/timeline';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

interface CareerTimelineProps {
  isDarkMode: boolean;
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ isDarkMode }) => {
  return (
    <section id="timeline" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            06 — Verified Career & Academic Journey
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Capability Timeline
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Academic foundations from University of Greenwich through to current self-directed Business Analytics development in London, UK.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={item.period} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-600/40 z-10 ring-4 ring-slate-100 dark:ring-slate-950">
                    {item.isSelfDirected ? (
                      <Sparkles className="w-4 h-4 text-white" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'
                  }`}>
                    <div className={`p-6 rounded-3xl border transition-all duration-300 shadow-xl ${
                      item.isCurrent
                        ? isDarkMode
                          ? 'bg-slate-900 border-blue-500/60 ring-1 ring-blue-500/30'
                          : 'bg-white border-blue-400 ring-2 ring-blue-500/20'
                        : isDarkMode
                          ? 'bg-slate-900/80 border-slate-800'
                          : 'bg-white border-slate-200'
                    }`}>

                      {/* Period & Badges */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-600/10 text-blue-500 border border-blue-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        
                        {item.isSelfDirected && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Self-Directed Development
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          {item.gradeOrType}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className={`text-xl font-bold tracking-tight mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-blue-500 mb-2">
                        {item.institution}
                      </div>

                      <div className={`flex items-center gap-1 text-xs font-mono mb-4 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      } ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        {item.location}
                      </div>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-200/50 dark:border-slate-800/80">
                        {item.highlights.map((h, i) => (
                          <div key={i} className={`flex items-start gap-2 text-xs font-mono ${
                            isEven ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'
                          }`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
