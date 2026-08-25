import React from 'react';
import { Check, ShieldCheck, HelpCircle, XCircle, ArrowRight, Sparkles, CreditCard } from 'lucide-react';
import { PageId } from '../types';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      
      {/* Breadcrumbs & Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-slate mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-brand-charcoal font-bold">Pricing</span>
        </div>
        
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
            Transparent Commercial Model
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-4">
            Zero retainers. Pay per qualified meeting.
          </h1>
          <p className="text-brand-slate text-base sm:text-lg leading-relaxed">
            Simple, honest pricing. A one-time setup fee of £500, a £200/mo tool and domain cost, followed by £300–£500 GBP per qualified meeting that shows up.
          </p>
        </div>
      </div>

      {/* Overview Metric Bar */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-brand-border rounded-2xl p-6 shadow-sm">
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-slate uppercase tracking-wider block">One-Time Setup</span>
            <span className="text-2xl font-mono font-extrabold text-brand-charcoal mt-1 block">£500</span>
            <span className="text-[11px] text-brand-slate font-medium">Domain & warming setup</span>
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-slate uppercase tracking-wider block">Tool & Domain Cost</span>
            <span className="text-2xl font-mono font-extrabold text-brand-charcoal mt-1 block">£200 / mo</span>
            <span className="text-[11px] text-brand-slate font-medium">Secondary domains & data</span>
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-slate uppercase tracking-wider block">Management Retainer</span>
            <span className="text-2xl font-mono font-extrabold text-emerald-700 mt-1 block">£0 / mo</span>
            <span className="text-[11px] text-emerald-700 font-medium">No monthly agency retainer</span>
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-slate uppercase tracking-wider block">Pay Per Meeting</span>
            <span className="text-2xl font-mono font-extrabold text-brand-accent mt-1 block">£300–£500</span>
            <span className="text-[11px] text-brand-slate font-medium">Only for qualified shows</span>
          </div>
        </div>
      </section>

      {/* Pricing Tier Cards */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider block mb-1">
            Deployment Options
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
            Select Your Outbound Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Niche Outbound */}
          <div className="bg-white border border-brand-border rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider bg-brand-cream border border-brand-border px-2.5 py-1 rounded">
                  Targeted
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">Niche Outbound</h3>
              <p className="text-brand-slate text-xs leading-relaxed mb-6">
                Best for boutique agencies targeting a tightly defined tech niche or local market in the UK or US.
              </p>

              <div className="py-4 border-y border-brand-border mb-6">
                <div className="text-xs font-mono text-brand-slate">Cost Structure</div>
                <div className="text-2xl font-mono font-bold text-brand-charcoal mt-0.5">£500 / meeting</div>
                <div className="text-xs font-mono text-brand-accent font-bold mt-1">£500 setup + £200/mo tools</div>
                <div className="text-[11px] text-brand-slate font-mono mt-1">Target: 2–4 meetings / month</div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>1 Core ICP (e.g. React/Node shops or FinTech)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Verified CTO / VP Engineering titles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Dedicated secondary sending domains</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Full no-show & non-qualification protection</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="mt-8 w-full bg-brand-cream hover:bg-brand-creamDark border border-brand-border text-brand-charcoal py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider transition-all"
            >
              Configure Niche Plan
            </button>
          </div>

          {/* Card 2: Agency Growth (Featured) */}
          <div className="bg-brand-charcoal text-white border-2 border-brand-charcoal rounded-2xl p-7 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3.5 right-6 bg-brand-accent text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded">
                  Scale Engine
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Agency Growth Engine</h3>
              <p className="text-neutral-300 text-xs leading-relaxed mb-6">
                For custom development agencies ready to consistently maintain 4 to 8 qualified client calls monthly.
              </p>

              <div className="py-4 border-y border-white/15 mb-6">
                <div className="text-xs font-mono text-neutral-400">Cost Structure</div>
                <div className="text-2xl font-mono font-bold text-white mt-0.5">£400 / meeting</div>
                <div className="text-xs font-mono text-brand-accent font-bold mt-1">£500 setup + £200/mo tools</div>
                <div className="text-[11px] text-neutral-300 font-mono mt-1">Target: 4–8 meetings / month</div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Multi-ICP segmentation (UK + US cross-border)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Custom engineering audits & personalized copy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>High-volume warmed sending servers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Direct calendar integration & CRM webhook feed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Full no-show & non-qualification protection</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="mt-8 w-full bg-brand-accent hover:bg-brand-accentHover text-white py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md shadow-brand-accent/20"
            >
              Deploy Growth Engine
            </button>
          </div>

          {/* Card 3: Custom Enterprise */}
          <div className="bg-white border border-brand-border rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider bg-brand-cream border border-brand-border px-2.5 py-1 rounded">
                  High Volume
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">Custom / Scale</h3>
              <p className="text-brand-slate text-xs leading-relaxed mb-6">
                For established tech firms needing high-volume TAM sweeps, multi-tier decision-maker routing, or dedicated setups.
              </p>

              <div className="py-4 border-y border-brand-border mb-6">
                <div className="text-xs font-mono text-brand-slate">Cost Structure</div>
                <div className="text-2xl font-mono font-bold text-brand-charcoal mt-0.5">£300 / meeting</div>
                <div className="text-xs font-mono text-brand-accent font-bold mt-1">£500 setup + £200/mo tools</div>
                <div className="text-[11px] text-brand-slate font-mono mt-1">Target: 8+ meetings / month</div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Unlimited TAM enrichment & data coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Bespoke technical proof-of-concept sequences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Dedicated Slack communication conduit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span>Custom lead pre-screening questionnaires</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 w-full bg-brand-cream hover:bg-brand-creamDark border border-brand-border text-brand-charcoal py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider transition-all"
            >
              Inquire Enterprise
            </button>
          </div>

        </div>
      </section>

      {/* Section: Deposit Terms & Qualification Rules */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: What "Qualified" Means */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border pb-3">
              <ShieldCheck size={16} className="text-brand-accent" />
              What Counts as a "Qualified Meeting"?
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <div>
                  <strong className="text-brand-charcoal block">1. Verified Decision-Maker Authority</strong>
                  <p className="text-brand-slate mt-0.5 leading-relaxed">
                    The attendee holds an approved senior title (e.g. CTO, VP Engineering, Head of Product, Chief Architect, or Founder/CEO).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <div>
                  <strong className="text-brand-charcoal block">2. Strict ICP Match</strong>
                  <p className="text-brand-slate mt-0.5 leading-relaxed">
                    The prospect company fits the agreed criteria (company size, technology stacks, and geography in the UK or US).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <div>
                  <strong className="text-brand-charcoal block">3. Completed Attendance & Show Rate</strong>
                  <p className="text-brand-slate mt-0.5 leading-relaxed">
                    The prospect shows up to the scheduled video call and actively participates in the conversation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <div>
                  <strong className="text-brand-charcoal block">4. Relevant Project or Solution Context</strong>
                  <p className="text-brand-slate mt-0.5 leading-relaxed">
                    The lead agreed to the discussion based on the technical value proposition presented in outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: What Happens If a Meeting Doesn't Qualify or Doesn't Show */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border pb-3">
              <HelpCircle size={16} className="text-brand-accent" />
              What If a Lead Doesn't Qualify or No-Shows?
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
                <div className="font-bold text-rose-700 font-mono flex items-center gap-1.5 mb-1">
                  <XCircle size={14} /> Zero Charge on No-Shows
                </div>
                <p className="text-brand-slate leading-relaxed">
                  If a prospect fails to attend the scheduled video meeting, you are charged <strong>£0 / $0</strong>. The meeting credit remains untouched on your balance.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <div className="font-bold text-amber-700 font-mono flex items-center gap-1.5 mb-1">
                  <XCircle size={14} /> Instant Disqualification Credit
                </div>
                <p className="text-brand-slate leading-relaxed">
                  If an attendee turns out to be outside your agreed ICP (e.g. wrong department, student, job seeker), the call is instantly marked disqualified at zero fee.
                </p>
              </div>

              <div className="p-2 space-y-2">
                <strong className="text-brand-charcoal block font-mono text-[11px] uppercase">
                  Commercial Structure Summary:
                </strong>
                <p className="text-brand-slate leading-relaxed">
                  Campaign setup requires a <strong>£500 one-time setup fee</strong> for domain provisioning and infrastructure ramp, and <strong>£200/month</strong> for continuous tool and sending domain maintenance. You then pay <strong>£300–£500 GBP per qualified meeting</strong> only when prospects successfully attend.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="container mx-auto px-6">
        <div className="bg-brand-charcoal text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to test our pay-per-meeting pipeline?
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-medium">
            Schedule a 30-minute campaign briefing. We will review your target tech stacks and establish your custom qualified criteria.
          </p>
          <button
            onClick={onOpenModal}
            className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 mx-auto transition-all shadow-md shadow-brand-accent/20"
          >
            <span>Book Outbound Strategy Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
