import React from 'react';
import { Briefcase, Database, LayoutDashboard, Lightbulb, CheckCircle2 } from 'lucide-react';

interface SnapshotProps {
  isDarkMode: boolean;
}

export const Snapshot: React.FC<SnapshotProps> = ({ isDarkMode }) => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Business Analytics",
      description: "Turning ambiguous commercial business questions into structured analytical problems and actionable data requirements.",
      points: ["Problem structuring", "Metric definition", "Requirement gathering"]
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Cleaning, exploring, transforming, and interpreting structured datasets to isolate trends and underlying operational drivers.",
      points: ["SQL CTEs & Window Functions", "Python Pandas EDA", "Data cleaning & validation"]
    },
    {
      icon: LayoutDashboard,
      title: "Business Intelligence",
      description: "Building executive dashboards and dynamic reporting views to provide automated single-source-of-truth performance visibility.",
      points: ["Power BI DAX modeling", "Tableau worksheets", "KPI architecture"]
    },
    {
      icon: Lightbulb,
      title: "Decision Support",
      description: "Communicating complex analytical findings cleanly to non-technical stakeholders with clear strategic recommendations.",
      points: ["Actionable insights", "Executive summaries", "Cross-industry research"]
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            02 — Professional Capabilities
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Analytical Focus
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Grounded in MSc Business Analytics training from the University of Greenwich, applying analytical frameworks across 4 primary operational domains.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-slate-900/90 border-slate-800/90 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/30'
                    : 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/60'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isDarkMode ? 'bg-blue-950/80 text-blue-400 border border-blue-800/50' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-lg font-bold mb-2.5 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                  {item.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
