import { ArrowRight, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-rose-50 to-emerald-50 opacity-80"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Stay Positive • Holistic Wellness
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Mental Wellness Accessible to Everyone, Everywhere.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Your journey to balance and peace starts here. Discover affirmations,
              journaling, prayer, and meditation in one calming space—designed for
              real life and real people.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Start Your Free Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-emerald-600"/> 100k+ in our community</span>
                <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600"/> Private & Secure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-0 rounded-3xl bg-white/60 backdrop-blur-sm" />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
              alt="Diverse individuals practicing mindfulness and journaling"
              className="relative z-10 aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
