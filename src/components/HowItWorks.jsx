import { CheckCircle, Calendar, Sparkles, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up",
    desc: "Create a secure account or continue with Google or Apple.",
    icon: CheckCircle,
  },
  {
    title: "Choose Your Wellness Path",
    desc: "Affirmations, journaling, prayer, meditation—or blend them.",
    icon: Sparkles,
  },
  {
    title: "Daily Practice",
    desc: "Build gentle habits with reminders and a calming interface.",
    icon: Calendar,
  },
  {
    title: "Track Growth",
    desc: "See streaks, reflections, and time spent in mindful practice.",
    icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-slate-600">
            A simple flow that supports your rhythm and respects your time.
          </p>
        </motion.div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.li
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-sky-100 p-2 text-sky-700">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-medium text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
