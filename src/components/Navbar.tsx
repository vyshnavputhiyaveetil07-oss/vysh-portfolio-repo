import React, { useState, useEffect } from 'react';
import { Menu, X, Send, BarChart2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'insights', label: 'Insights' },
    { id: 'resume', label: 'CV / Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? isDarkMode 
          ? 'bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-white/90 border-b border-slate-200/90 backdrop-blur-md shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-mono transition-transform duration-300 group-hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/20 ring-1 ring-blue-400/30' 
                : 'bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-md shadow-blue-600/30'
            }`}>
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <div className={`font-semibold tracking-tight text-base sm:text-lg ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Vyshnav P. K.
              </div>
              <div className="text-[11px] font-mono text-blue-500 font-medium">
                MSc Business Analytics
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 border rounded-full px-3 py-1.5 backdrop-blur-sm shadow-sm transition-colors duration-300 border-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/50 bg-slate-100/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/40 font-semibold'
                        : 'bg-blue-600 text-white shadow-sm font-semibold'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Dark/Light Toggle */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Dark / Light Mode"
              className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700/70 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? (
                <span className="flex items-center text-xs font-mono gap-1">
                  ☀️ Light
                </span>
              ) : (
                <span className="flex items-center text-xs font-mono gap-1">
                  🌙 Dark
                </span>
              )}
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 shadow-sm cursor-pointer ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 hover:shadow-blue-500/50'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border text-xs font-mono ${
                isDarkMode ? 'border-slate-800 text-amber-400' : 'border-slate-300 text-slate-700'
              }`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b transition-all duration-300 px-4 py-4 space-y-2 ${
          isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  : isDarkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
