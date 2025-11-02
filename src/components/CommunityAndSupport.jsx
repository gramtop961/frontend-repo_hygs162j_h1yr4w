import { useState } from "react";
import { Users, Star, Shield, Mail, Lock, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Metric({ label, value }) {
  return (
    <motion.div
      className="rounded-2xl bg-white p-6 text-center shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "The daily affirmations helped me reframe tough days. I feel supported, not alone.",
    name: "Amara",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Journaling here became my safe ritual. The design is so calming and inviting.",
    name: "Luis",
    role: "Community Organizer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "The prayer and meditation library is a gift. I finally found a holistic space.",
    name: "Priya",
    role: "Nurse",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
  },
];

function TestimonialCard({ t, idx }) {
  return (
    <motion.figure
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
    >
      <blockquote className="text-slate-700">“{t.quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <img
          src={t.avatar}
          alt={`Photo of ${t.name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="font-medium text-slate-900">{t.name}</div>
          <div className="text-sm text-slate-600">{t.role}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

function Plan({ name, price, features, highlighted, idx }) {
  return (
    <motion.div
      className={`flex flex-1 flex-col rounded-2xl border p-6 shadow-sm ${
        highlighted
          ? "border-emerald-300 bg-emerald-50/50"
          : "border-slate-100 bg-white"
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className="text-2xl font-bold text-slate-900">{price}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#signup"
        className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          highlighted
            ? "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500"
            : "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-700"
        }`}
      >
        {highlighted ? "Start Free" : "Unlock Premium Growth"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
}

export default function CommunityAndSupport() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Community & Impact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Community, impact, and support
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Built for inclusivity and care. We believe wellness should be accessible—
            and that growth is better together.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Metric label="Lives touched" value="120,000+" />
          <Metric label="Daily practitioners" value="38,000" />
          <Metric label="Hours of guided content" value="1,500+" />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.name} t={t} idx={idx} />
          ))}
        </div>

        {/* Freemium Pricing */}
        <motion.div
          id="pricing"
          className="mt-16 rounded-3xl bg-white p-6 shadow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-slate-900">Freemium pricing</h3>
              <p className="text-slate-600">Start free and grow at your pace. Cancel anytime.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className={!annual ? "font-medium text-slate-900" : "text-slate-600"}>Monthly</span>
              <button
                type="button"
                onClick={() => setAnnual((v) => !v)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition"
                aria-pressed={annual}
                aria-label="Toggle billing cycle"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                    annual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={annual ? "font-medium text-slate-900" : "text-slate-600"}>Annual</span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Plan
              idx={0}
              name="Free"
              price={annual ? "$0" : "$0"}
              highlighted
              features={[
                "Daily affirmations",
                "Basic journaling",
                "3 guided meditations",
                "Privacy-first design",
              ]}
            />
            <Plan
              idx={1}
              name="Premium"
              price={annual ? "$59/yr" : "$6/mo"}
              features={[
                "Unlimited access",
                "Personalized recommendations",
                "Prayer library & community support",
                "Advanced insights & reminders",
              ]}
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">Annual plan includes 2 months free.</p>
        </motion.div>

        {/* Content Hub / Blog link */}
        <motion.div
          className="mt-14 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-xl font-semibold text-slate-900">Wellness insights</h3>
          <p className="mt-2 text-slate-600">Explore articles, guides, and reflections for encouragement and education.</p>
          <a href="#blog" className="mt-3 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
            Read More Wellness Insights
          </a>
        </motion.div>

        {/* Join Our Movement */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-2xl bg-white p-6 shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center gap-2 text-slate-900">
              <Users className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Join our movement</h3>
            </div>
            <p className="mt-2 text-slate-600">
              We serve those without access to traditional mental health care. Follow,
              share, and add your voice to a compassionate community.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-emerald-600"/> 250k followers</span>
              <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-emerald-600"/> Evidence-informed content</span>
            </div>
          </motion.div>

          {/* Contact & Support + Auth */}
          <motion.div
            id="signup"
            className="rounded-2xl bg-white p-6 shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="flex items-center gap-2 text-slate-900">
              <Mail className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Contact & Support</h3>
            </div>
            <p className="mt-2 text-slate-600">We reply within 1–2 business days. Your privacy matters.</p>
            <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input id="name" type="text" required placeholder="Your name" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea id="message" rows={3} placeholder="How can we help?" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
                Send message
              </button>
            </form>

            <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-900">
                <Lock className="h-4 w-4 text-emerald-600" />
                <p className="text-sm font-medium">Secure authentication</p>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Log in with email, Google, or Apple. We use encryption to protect your data.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                  Continue with Google
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                  Continue with Apple
                </button>
              </div>
            </div>

            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="text-sm font-medium text-slate-900">Get weekly wellness tips</label>
              <div className="mt-2 flex gap-2">
                <input id="newsletter" type="email" required placeholder="Email address" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Subscribe</button>
              </div>
            </form>
          </motion.div>
        </div>

        <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>
            Designed to complement—not replace—professional care. If you are in crisis,
            please seek immediate help in your area.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Stay Positive. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
