import { Heart, BookOpen, Sparkles, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Affirmations",
    description: "Daily positive messages that build resilience and self-belief.",
    icon: Heart,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Journaling",
    description: "A private space for reflection, clarity, and self-discovery.",
    icon: BookOpen,
    img: "https://images.unsplash.com/photo-1513491718-1fa3a9be6b1b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Prayer",
    description: "Spiritual wellness tools to nurture faith and gratitude.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Meditation",
    description: "Guided sessions to calm the mind and center the heart.",
    icon: Headphones,
    img: "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Four pillars for daily growth
          </h2>
          <p className="mt-3 text-slate-600">
            Choose what fits your season. Mix and match practices at your pace.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                  <f.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-medium text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
              <div className="mt-3 overflow-hidden rounded-xl">
                <img
                  src={f.img}
                  alt={`${f.title} preview screenshot`}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
