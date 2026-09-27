import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Download, FileText, GraduationCap, Code, Briefcase, MapPin, Eye } from 'lucide-react';

interface ResumeSectionProps {
  isDarkMode: boolean;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ isDarkMode }) => {
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = '/Vyshnav_Puthiyaveetil_CV.pdf';
    a.download = 'Vyshnav_Puthiyaveetil_CV.pdf';
    a.click();
  };

  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
            08 — Curriculum Vitae & Credentials
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional CV & Academic Credentials
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Verified MSc Business Analytics background, core analytical tool competencies, and practical project summaries.
          </p>
        </div>

        {/* Action Header Card */}
        <div className={`p-6 sm:p-8 rounded-3xl border mb-8 flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800 text-white'
            : 'bg-white border-slate-200 text-slate-900 shadow-lg'
        }`}>
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{cvData.header.name}</h3>
              <p className="text-xs font-mono text-blue-500 mt-0.5">{cvData.header.title}</p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {cvData.header.location} • {cvData.header.visaStatus}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Vyshnav_Puthiyaveetil_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>View CV</span>
            </a>

            <button
              onClick={() => setShowFullPreview(!showFullPreview)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
              }`}
            >
              <Eye className="w-4 h-4 text-blue-500" />
              <span>{showFullPreview ? 'Hide Full CV' : 'Preview CV Document'}</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Structured CV View */}
        <div className={`p-6 sm:p-10 rounded-3xl border transition-all ${
          isDarkMode
            ? 'bg-slate-950 border-slate-800 text-slate-200'
            : 'bg-white border-slate-200 text-slate-800 shadow-xl'
        }`}>
          
          {/* Executive Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
              PROFESSIONAL PROFILE
            </h4>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {cvData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              EDUCATION
            </h4>
            <div className="space-y-4">
              {cvData.education.map((edu) => (
                <div key={edu.degree} className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h5 className="font-bold text-base text-blue-400">{edu.degree}</h5>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-300">{edu.institution} • <span className="text-emerald-400">{edu.grade}</span></div>
                  {edu.dissertation && (
                    <p className="text-xs font-mono text-slate-400 mt-2">
                      <span className="text-blue-500 font-bold">Dissertation:</span> {edu.dissertation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Skills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              TECHNICAL & ANALYTICAL SKILLS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-200 block mb-2">BUSINESS & ANALYTICS:</span>
                <div className="flex flex-wrap gap-1">
                  {cvData.skills.business.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-200 block mb-2">TECHNICAL TOOLS:</span>
                <div className="flex flex-wrap gap-1">
                  {cvData.skills.technical.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-200 block mb-2">METHODOLOGIES:</span>
                <div className="flex flex-wrap gap-1">
                  {cvData.skills.analytical.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Case Studies Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              FEATURED ANALYTICS CASE STUDIES
            </h4>
            <div className="space-y-3">
              {cvData.featuredProjects.map(fp => (
                <div key={fp.name} className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                  <div className="font-bold text-sm text-slate-200 mb-1">{fp.name}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{fp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
