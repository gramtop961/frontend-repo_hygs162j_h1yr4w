import { ArrowRight, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient backdrop that doesn't block 3D interaction */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-sky-50 to-emerald-50"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Stay Positive • Holistic Wellness
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Mental Wellness, Reimagined in 3D.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Immerse yourself in a calming, interactive space. Explore affirmations,
              journaling, prayer, and meditation—guided by a minimalist, futuristic
              3D experience designed for focus and peace.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#signup"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-emerald-600"/> 100k+ in our community</span>
                <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600"/> Private & Secure</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Spline Scene */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[500px] lg:h-[560px]">
              {/* Subtle card chrome behind the canvas */}
              <div className="absolute inset-0 rounded-3xl bg-white/60 backdrop-blur-sm" />
              <div className="absolute inset-0">
                <Spline
                  scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              {/* Glow + gradient overlays that won't block pointer events */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-200/10 via-sky-200/10 to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
