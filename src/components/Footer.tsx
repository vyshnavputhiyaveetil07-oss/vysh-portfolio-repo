import React from 'react';
import { profileData } from '../data/profile';
import { BarChart2, Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 px-4 sm:px-6 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Positioning */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              <BarChart2 className="w-4 h-4" />
            </div>
            <span className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {profileData.fullName}
            </span>
          </div>
          <p className="text-xs font-mono text-blue-500">{profileData.title}</p>
          <p className="text-xs text-slate-500">{profileData.degreeBadge} • London, UK</p>
        </div>

        {/* Quick Social & Direct Links */}
        <div className="flex items-center space-x-4">
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2.5 rounded-xl border transition-colors ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-2.5 rounded-xl border transition-colors ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.contact.email}`}
            aria-label="Email Contact"
            className={`p-2.5 rounded-xl border transition-colors ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/80 text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} Vyshnav Puthiyaveetil Kurikkalkandi. All rights reserved. • Built with React, TypeScript, Tailwind CSS & 3D WebGL Canvas.
      </div>
    </footer>
  );
};
