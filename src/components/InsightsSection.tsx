import React, { useState } from 'react';
import { insightsData } from '../data/insights';
import type { InsightArticle } from '../types/portfolio';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

interface InsightsSectionProps {
  isDarkMode: boolean;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ isDarkMode }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            07 — Analytics Case Insights
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Business Analytics Insights & Technical Articles
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Technical write-ups detailing SQL window functions, Power BI dashboard architecture, XAI research takeaways, and business decision frameworks.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insightsData.map((article) => (
            <div
              key={article.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/50 shadow-lg hover:shadow-2xl'
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl'
              }`}
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-500 font-semibold border border-blue-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-3 group-hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {article.title}
                </h3>

                {/* Summary */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-blue-500 font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Article
                </span>
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <div className="fixed inset-0" onClick={() => setSelectedArticle(null)} />
            <div className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 z-10 ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-600/10 text-blue-500 border border-blue-500/20">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-2xl font-extrabold tracking-tight mt-2">{selectedArticle.title}</h2>
                  <div className="text-xs font-mono text-slate-400 mt-1">{selectedArticle.date} • {selectedArticle.readTime}</div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-xl border hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-300">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
