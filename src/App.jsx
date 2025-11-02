import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import HowItWorks from "./components/HowItWorks";
import CommunityAndSupport from "./components/CommunityAndSupport";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold">SP</span>
            <span className="text-lg font-semibold">Stay Positive</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#signup" className="rounded-lg bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800">Start Free</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features">
          <FeatureShowcase />
        </div>
        <div id="how">
          <HowItWorks />
        </div>
        <CommunityAndSupport />
      </main>
    </div>
  );
}

export default App;
