'use client';
import { useState } from 'react';

const FEATURES = ['Instantly highlight risky clauses with AI-powered analysis', 'Get plain‑English summaries in under 60 seconds', 'Collaborate with roommates or advisors in real‑time'];
const PRICING = [{'name': 'Starter', 'price': 'Free', 'features': ['Basic contract upload', 'AI summary', 'Clause highlighting']}, {'name': 'Pro', 'price': '$12/mo', 'features': ['Everything in Starter', 'Unlimited contracts', 'Team sharing', 'PDF export', 'Priority support'], 'highlighted': True}, {'name': 'Enterprise', 'price': 'Custom', 'features': ['Everything in Pro', 'SSO & SAML login', 'API access', 'Dedicated account manager', 'Custom integrations']}];
const PAIN_POINTS = ['Current solutions are too expensive for growing teams', 'Manual processes that should be automated', 'Lack of real personalization and intelligence'];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen" style={{background: '#0a0a0f'}} >

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #2563eb, #f59e0b)'}}></div>
            <span className="text-xl font-bold">LexiMate</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <button
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{background: 'linear-gradient(135deg, #2563eb, #0d9488)'}}
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{background: `radial-gradient(ellipse 80% 50% at 50% -20%, #2563eb40, transparent)`}}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 text-white/70">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{background: '#f59e0b'}}></span>
            Now in Early Access — Join 2,000+ teams
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">LexiMate</span>
            <br />
            <span className="text-white/90">Read contracts in minutes, not weeks</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            LexiMate uses AI to instantly scan housing and academic contracts, turning dense legalese into clear, actionable insights. Students get plain‑English summaries, risk highlights, and real‑time collaboration tools—all in under ten minutes of setup. As teams grow, the platform scales from a free tier to enterprise‑grade features without switching providers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3 rounded-xl glass text-white placeholder:text-white/30 outline-none focus:border-[#2563eb] border border-white/10"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 whitespace-nowrap"
              style={{background: 'linear-gradient(135deg, #2563eb, #0d9488)'}}
            >
              {submitted ? '🎉 You're in!' : 'Start Free'}
            </button>
          </form>

          <p className="text-sm text-white/30 mt-4">No credit card required · Cancel anytime</p>

          {/* Floating orbs */}
          <div className="absolute -left-20 top-20 w-72 h-72 rounded-full opacity-10 float" style={{background: `radial-gradient(circle, #2563eb, transparent)`}}></div>
          <div className="absolute -right-20 bottom-0 w-96 h-96 rounded-full opacity-10 float" style={{background: `radial-gradient(circle, #f59e0b, transparent)`, animationDelay: '3s'}}></div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-10">
              Sound familiar? <span className="gradient-text">We fix this.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {PAIN_POINTS.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl mt-1">😤</span>
                  <p className="text-white/70">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Everything you need, <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Built for teams that move fast and demand results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: '#2563eb20'}}>
                  <span className="text-2xl">{['🚀','⚡','🎯','💡','🔥','✨'][i % 6]}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feat}</h3>
                <p className="text-white/50 text-sm leading-relaxed">Powered by advanced AI to transform how you work.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{background: 'rgba(255,255,255,0.01)'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">
            Loved by <span className="gradient-text">forward-thinking teams</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name: 'Sarah K.', role: 'CTO at Nexus', quote: 'This transformed our entire workflow. ROI was visible within the first week.'},
              {name: 'Marcus T.', role: 'Founder, FlowCo', quote: 'Finally, an AI tool that actually delivers. Our team is 3x more productive.'},
              {name: 'Priya M.', role: 'Head of Ops, Vertex', quote: 'The automation alone saved us 20 hours per week. Absolutely game-changing.'},
            ]].map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <p className="text-white/70 mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{background: 'linear-gradient(135deg, #2563eb, #0d9488)'}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h2>
            <p className="text-white/50 text-lg">Start free. Scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((tier, i) => (
              <div key={i} className={'glass rounded-2xl p-8 transition-all duration-300 relative ' + (tier.highlighted ? 'glow' : 'hover:border-white/20')}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{background: '#2563eb'}}>
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="text-3xl font-black gradient-text">{tier.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features?.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <span style={{color: '#2563eb'}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-semibold transition-all hover:scale-105"
                  style={{background: tier.highlighted ? 'linear-gradient(135deg, #2563eb, #0d9488)' : 'rgba(255,255,255,0.08)'}}
                >
                  {tier.price === 'Free' ? 'Start Free' : tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16" style={{background: `linear-gradient(135deg, #2563eb15, #f59e0b10)`}}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Ready to <span className="gradient-text">transform</span> your workflow?
            </h2>
            <p className="text-white/60 text-xl mb-10">Join thousands of teams already using LexiMate.</p>
            <button
              className="px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 glow"
              style={{background: 'linear-gradient(135deg, #2563eb, #0d9488)'}}
              onClick={() => window.scrollTo(0,0)}
            >
              Get Started for Free →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded" style={{background: 'linear-gradient(135deg, #2563eb, #f59e0b)'}}></div>
            <span className="font-bold">LexiMate</span>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} LexiMate. Built with AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
