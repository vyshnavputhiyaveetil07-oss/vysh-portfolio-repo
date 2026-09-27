import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { cvData } from '../data/cvData';
import { projectsData } from '../data/projects';
import { verifiedTools } from '../data/skills';
import { timelineData } from '../data/timeline';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { 
  Download, Mail, MapPin, GraduationCap, Briefcase, Code, CheckCircle2, 
  ChevronDown, ChevronUp, Send, Sparkles, AlertCircle, FileText, Database, Copy, Check, Target, Phone
} from 'lucide-react';

export const DigitalResume: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('retail-sales-performance');
  const [selectedToolIndex, setSelectedToolIndex] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = '/Vyshnav_Puthiyaveetil_CV.pdf';
    a.download = 'Vyshnav_Puthiyaveetil_CV.pdf';
    a.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    const subject = encodeURIComponent(`Analytics Opportunity - ${formState.company || formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getToolBadgeColor = (name: string) => {
    switch (name) {
      case 'SQL': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Python': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Power BI': return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'Microsoft Excel': case 'Excel': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Tableau': return 'bg-purple-50 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-slate-800 font-sans">
      
      {/* Floating Header Navigation Bar */}
      <header className="sticky top-4 z-40 mb-8 p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-200/50 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white font-extrabold font-mono text-base flex items-center justify-center shadow-md shadow-slate-900/20">
            VP
          </div>
          <div>
            <div className="font-extrabold text-sm text-slate-900 leading-none tracking-tight">Vyshnav P. K.</div>
            <div className="text-[11px] font-mono text-teal-700 font-semibold mt-0.5">MSc Business Analytics Portfolio</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="/Vyshnav_Puthiyaveetil_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>View CV</span>
          </a>
          <button
            onClick={handleDownloadCV}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white flex items-center gap-1.5 shadow-md shadow-blue-700/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>
      </header>

      {/* Main Digital Resume Paper Card Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-300/40 p-6 sm:p-10 md:p-12 space-y-10">
        
        {/* RESUME HEADER */}
        <div className="border-b border-slate-200 pb-8 space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                MSc Business Analytics Graduate (Pass with Merit)
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {profileData.fullName}
              </h1>

              <div className="text-lg font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 bg-clip-text text-transparent mt-1">
                {profileData.title}
              </div>
            </div>

            {/* Quick Action Social Badges */}
            <div className="flex sm:flex-col gap-2">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Top Skills Badges from PDF */}
          <div className="pt-1">
            <div className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-indigo-600" />
              Core Competencies:
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.topSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 shadow-2xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact & Availability Details Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-600 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{profileData.contact.location}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <a href="tel:07349237233" className="hover:text-emerald-700 font-semibold">{profileData.contact.phone}</a>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <a href={`mailto:${profileData.contact.email}`} className="hover:text-blue-700 font-semibold underline">
                {profileData.contact.email}
              </a>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full UK Work Rights</span>
            </div>
          </div>

        </div>

        {/* 1. EXECUTIVE SUMMARY */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            01. Professional Summary
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            {cvData.summary}
          </p>
        </section>

        {/* 2. TECHNICAL & ANALYTICAL SKILLS */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <Code className="w-4 h-4 text-indigo-600" />
            02. Core Skills & Tech Stack Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4.5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 tracking-wider">BUSINESS & ANALYTICS</div>
              <div className="flex flex-wrap gap-1.5">
                {cvData.skills.business.map(s => (
                  <span key={s} className="px-2 py-1 rounded bg-white text-slate-800 border border-slate-200/90 shadow-2xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-4.5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="font-bold text-indigo-950 tracking-wider">TECHNICAL TOOLS</div>
              <div className="flex flex-wrap gap-1.5">
                {cvData.skills.technical.map(s => (
                  <span key={s} className="px-2 py-1 rounded bg-white text-indigo-900 border border-indigo-200 font-semibold shadow-2xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-4.5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 tracking-wider">METHODOLOGIES</div>
              <div className="flex flex-wrap gap-1.5">
                {cvData.skills.analytical.map(s => (
                  <span key={s} className="px-2 py-1 rounded bg-white text-slate-800 border border-slate-200/90 shadow-2xs">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Tool Code Snippets */}
          <div className="pt-2">
            <div className="text-[11px] font-mono text-slate-500 font-semibold mb-2">Inspect verified query implementations (Select tool below):</div>
            <div className="flex flex-wrap gap-2">
              {verifiedTools.map((tool, idx) => (
                <button
                  key={tool.name}
                  onClick={() => setSelectedToolIndex(selectedToolIndex === idx ? null : idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedToolIndex === idx
                      ? 'bg-indigo-700 text-white border-indigo-700 shadow-md shadow-indigo-700/20'
                      : `${getToolBadgeColor(tool.name)} hover:opacity-80`
                  }`}
                >
                  {tool.name}
                </button>
              ))}
            </div>

            {selectedToolIndex !== null && (
              <div className="mt-3 p-4.5 rounded-2xl bg-slate-950 text-blue-300 font-mono text-xs overflow-x-auto shadow-xl border border-slate-800">
                <div className="text-slate-400 text-[11px] mb-2 flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-slate-200">{verifiedTools[selectedToolIndex].name} — {verifiedTools[selectedToolIndex].category}</span>
                  <button
                    onClick={() => handleCopyCode(verifiedTools[selectedToolIndex].featuredCode || '')}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-indigo-200 leading-relaxed"><code>{verifiedTools[selectedToolIndex].featuredCode}</code></pre>
              </div>
            )}
          </div>
        </section>

        {/* 3. EDUCATION & ACADEMIC RESEARCH */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            03. Education & Academic Research
          </h2>

          <div className="space-y-4">
            
            {/* MSc Greenwich */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-extrabold text-base text-slate-950">MSc Business Analytics</h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 w-fit">
                  Pass with Merit (Completed)
                </span>
              </div>
              <div className="text-xs font-bold text-indigo-700 font-mono">University of Greenwich, London, UK • January 2025 – February 2026</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Comprehensive Master's degree curriculum in Business Analytics focused on data analysis, business intelligence, data preparation, reporting, dashboard development and business-focused analysis.
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 font-mono text-indigo-700 block">MSc Dissertation Research:</span>
                <p className="text-slate-800 font-medium italic">
                  "Evaluating the Impact of Explainable AI (XAI) on Decision-Making Effectiveness in Financial Services: A Cross-Industry Comparative Analysis"
                </p>
              </div>
            </div>

            {/* BCom Degree */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-extrabold text-base text-slate-950">Bachelor of Commerce - BCom, Computer Systems Networking and Telecommunications</h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-800 w-fit">
                  Bachelor's Degree (September 2021 – May 2024)
                </span>
              </div>
              <div className="text-xs font-bold text-slate-600 font-mono">College of Applied Science - Neruvambram - Payyanur</div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 font-mono text-indigo-700 block">Undergraduate Research Project:</span>
                <p className="text-slate-800 font-medium italic">
                  "A Study on the Work Stress Among Private Hospital Nurses with Special Reference to Kannur District"
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. CAREER JOURNEY & EXPERIENCE */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            04. Experience & Project Timeline
          </h2>

          <div className="space-y-4">
            {timelineData.map((item) => (
              <div key={item.period} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-extrabold text-sm text-slate-950">{item.title}</h3>
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">{item.period}</span>
                </div>
                <div className="text-xs font-bold text-slate-700">{item.institution} • <span className="text-slate-500 font-normal">{item.location}</span></div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{item.description}</p>
                <div className="space-y-1.5 pt-1">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FEATURED PRACTICAL ANALYTICS PROJECTS */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-600" />
              05. Practical Business Analytics Portfolio (8 Projects)
            </h2>
            <span className="text-[11px] font-mono text-slate-500 font-semibold">Click to expand case study</span>
          </div>

          <div className="space-y-3">
            {projectsData.map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                <div
                  key={project.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'border-indigo-600 shadow-md bg-white' : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                  }`}
                >
                  {/* Summary Bar */}
                  <div
                    onClick={() => toggleProject(project.id)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 border border-indigo-200">
                          {project.category}
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${
                          project.status === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : project.status === 'IN PROGRESS'
                              ? 'bg-amber-100 text-amber-800 border border-amber-200'
                              : 'bg-slate-200 text-slate-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-slate-950">{project.title}</h3>
                      <p className="text-xs font-mono text-slate-600">{project.subtitle}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="hidden sm:flex flex-wrap gap-1">
                        {project.tools.map(t => (
                          <span key={t} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getToolBadgeColor(t)}`}>{t}</span>
                        ))}
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-200/80 text-slate-700">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded 6-Step Case Study View */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-slate-200 bg-slate-50/40 space-y-5">
                      <p className="text-xs text-slate-800 leading-relaxed font-semibold">{project.shortDescription}</p>

                      <div className="space-y-3">
                        {[
                          project.caseStudy.problem,
                          project.caseStudy.dataset,
                          project.caseStudy.approach,
                          project.caseStudy.visualisation,
                          project.caseStudy.insight,
                          project.caseStudy.recommendation
                        ].map((step) => (
                          <div key={step.title} className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2 shadow-2xs">
                            <div className="font-mono font-bold text-indigo-700">{step.title} — {step.subtitle}</div>
                            <p className="text-slate-700 leading-relaxed">{step.content}</p>

                            {step.bullets && (
                              <ul className="space-y-1 pt-1">
                                {step.bullets.map((b, i) => {
                                  const isPlaceholder = b.includes('[DETAILS TO BE ADDED');
                                  return (
                                    <li key={i} className={`flex items-start gap-1.5 ${isPlaceholder ? 'text-amber-700 font-mono italic' : 'text-slate-600'}`}>
                                      {isPlaceholder ? <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" /> : <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />}
                                      <span>{b}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}

                            {step.codeSnippet && (
                              <div className="mt-2 p-3 rounded-lg bg-slate-950 text-indigo-200 font-mono text-[11px] overflow-x-auto shadow-inner border border-slate-800">
                                <pre><code>{step.codeSnippet.code}</code></pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </section>

        {/* 6. RECRUITER CONTACT FORM */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-600" />
            06. Direct Recruiter Contact
          </h2>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
            <h3 className="font-bold text-base text-slate-950">Interested in discussing an analytics opportunity?</h3>
            <p className="text-xs text-slate-600">
              Open to Data Analyst, Business Analyst, and BI Analyst roles across London and the UK. Contact directly at <span className="font-mono text-indigo-700 font-bold">{profileData.contact.email}</span>.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                Your email client has opened with your inquiry draft. Thank you!
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sans"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sans"
                  />
                  <input
                    type="text"
                    placeholder="Company / Agency"
                    value={formState.company}
                    onChange={e => setFormState({ ...formState, company: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sans"
                  />
                </div>

                <textarea
                  placeholder="Inquiry or message details... *"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sans"
                />

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white flex items-center gap-2 shadow-md shadow-blue-700/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry →</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* RESUME FOOTER */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs font-mono text-slate-500">
          © {new Date().getFullYear()} Vyshnav Puthiyaveetil Kurikkalkandi • MSc Business Analytics Portfolio • London, UK
        </div>

      </div>
    </div>
  );
};
