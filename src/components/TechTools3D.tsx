import React, { useState } from 'react';
import { verifiedTools } from '../data/skills';
import { Database, Code2, LayoutDashboard, FileSpreadsheet, PieChart, Code, Copy, Check } from 'lucide-react';

interface TechTools3DProps {
  isDarkMode: boolean;
}

export const TechTools3D: React.FC<TechTools3DProps> = ({ isDarkMode }) => {
  const [activeToolIndex, setActiveToolIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'SQL': return Database;
      case 'Python': return Code2;
      case 'Power BI': return LayoutDashboard;
      case 'Microsoft Excel': return FileSpreadsheet;
      case 'Tableau': return PieChart;
      default: return Database;
    }
  };

  const selectedTool = verifiedTools[activeToolIndex];
  const ToolIcon = getToolIcon(selectedTool.name);

  const handleCopyCode = () => {
    if (selectedTool.featuredCode) {
      navigator.clipboard.writeText(selectedTool.featuredCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 block mb-1">
          Interactive Technical Stack Showcase
        </span>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Verified Analytics Tooling & Code Snippets
        </h3>
        <p className={`text-xs sm:text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Select any verified tool to inspect sample queries, DAX calculations, and Python data pipelines.
        </p>
      </div>

      {/* 3D Tool Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {verifiedTools.map((tool, idx) => {
          const Icon = getToolIcon(tool.name);
          const isSelected = activeToolIndex === idx;

          return (
            <button
              key={tool.name}
              onClick={() => setActiveToolIndex(idx)}
              className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-1 ${
                isSelected
                  ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-600/30 scale-105 ring-2 ring-blue-400/50'
                  : isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className={`p-2.5 rounded-xl mb-2.5 ${
                isSelected 
                  ? 'bg-white/20 text-white' 
                  : isDarkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm">{tool.name}</span>
              <span className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                {tool.category.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Tool Code & Details Box */}
      <div className={`p-6 rounded-3xl border shadow-xl transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-950 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
              <ToolIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold">{selectedTool.name}</h4>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Tool
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">{selectedTool.category}</p>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 italic max-w-md">
            "{selectedTool.proficiencyNote}"
          </div>
        </div>

        <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {selectedTool.description}
        </p>

        {/* Code Snippet */}
        {selectedTool.featuredCode && (
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner font-mono text-xs">
            <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-400" />
                Sample {selectedTool.name} Implementation
              </span>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 text-blue-300 overflow-x-auto leading-relaxed">
              <code>{selectedTool.featuredCode}</code>
            </pre>
          </div>
        )}
      </div>

    </div>
  );
};
