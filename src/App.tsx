import { Background3DCanvas } from './components/Background3DCanvas';
import { DigitalResume } from './components/DigitalResume';
import { SEO } from './components/SEO';

export function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 relative selection:bg-blue-200">
      
      {/* Dynamic SEO metadata & Schema.org JSON-LD */}
      <SEO />

      {/* Subtle 3D WebGL Background Canvas */}
      <Background3DCanvas />

      {/* Main Clean Light-Theme Digital Resume Portfolio */}
      <DigitalResume />

    </div>
  );
}

export default App;
