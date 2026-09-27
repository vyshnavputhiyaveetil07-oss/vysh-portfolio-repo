import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    // Mailto fallback link trigger
    const subject = encodeURIComponent(`Analytics Opportunity - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRole Target: ${formData.role}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Recruiter Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 mb-2">
                09 — Professional Contact
              </div>
              <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Let's Connect
              </h2>
              <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Interested in discussing a Data Analyst, Business Analyst, or Business Intelligence opportunity or project across the UK? Get in touch directly.
              </p>
            </div>

            {/* Direct Verified Contact Details */}
            <div className="space-y-4 pt-2">
              
              <a
                href={`mailto:${profileData.contact.email}`}
                className={`p-4 rounded-2xl border flex items-center gap-4 transition-all hover:scale-[1.02] cursor-pointer ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {profileData.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-4 transition-all hover:scale-[1.02] cursor-pointer ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                  <div className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    linkedin.com/in/vyshnav-pk-analytics
                  </div>
                </div>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-4 transition-all hover:scale-[1.02] cursor-pointer ${
                  isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GitHub Repositories</div>
                  <div className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    github.com/vyshnav-analytics
                  </div>
                </div>
              </a>

              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location & Availability</div>
                  <div className="font-semibold text-sm">{profileData.contact.location}</div>
                  <div className="text-xs text-emerald-400 font-mono mt-0.5">{profileData.contact.availability}</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Recruiter Messaging Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Message or Opportunity Inquiry
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill in the details below to open a direct email draft formatted for Vyshnav.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                  <h4 className="font-bold text-lg">Message Client Opened!</h4>
                  <p className="text-xs text-emerald-300">
                    Your default email application has opened with your inquiry draft addressed to <span className="font-mono">{profileData.contact.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. s.jenkins@recruitment.co.uk"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Company / Agency</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Analytics Recruitment UK"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Target Role Type</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Data Analyst / BI Analyst"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Inquiry *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Vyshnav, I saw your MSc Business Analytics portfolio and wanted to discuss a Data Analyst opportunity in London..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get in Touch →</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
