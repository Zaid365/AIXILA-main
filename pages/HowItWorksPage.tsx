import React, { useState } from 'react';
import { Cpu, Code2, Disc, Play, TrendingUp, ShieldCheck, Zap, AlertTriangle, ChevronRight, Calculator, CheckCircle2, XCircle } from 'lucide-react';
import { PageId } from '../types';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenModal }) => {
  // Calculator State
  const [dealLtv, setDealLtv] = useState<number>(35000);
  const [monthlyMeetings, setMonthlyMeetings] = useState<number>(4);
  const [demoCloseRate, setDemoCloseRate] = useState<number>(15);

  // Math Calculations
  const expectedMonthlyCloses = monthlyMeetings * (demoCloseRate / 100);
  const expectedAnnualCloses = expectedMonthlyCloses * 12;
  const estimatedMonthlyRevenue = expectedMonthlyCloses * dealLtv;
  const estimatedAnnualRevenue = expectedAnnualCloses * dealLtv;

  const developerHourlyRate = 125;
  const savedHoursMonthly = monthlyMeetings * 16;
  const savedFounderCapital = savedHoursMonthly * developerHourlyRate;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      
      {/* Breadcrumbs & Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-slate mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-brand-charcoal font-bold">How It Works</span>
        </div>
        
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
            Technical Architecture & Outbound Pipeline
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-4">
            How Aixila generates qualified meetings on demand.
          </h1>
          <p className="text-brand-slate text-base sm:text-lg leading-relaxed">
            A breakdown of our 4-stage compiler pipeline, why the traditional SDR model fails dev agencies, and the mathematics behind our pay-per-meeting system.
          </p>
        </div>
      </div>

      {/* Part 1: The Feast-Famine Dilemma (Concise 3-step narrative) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider block mb-1">
            Problem Analysis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
            The Feast-Famine Cycle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                PHASE 01: FEAST
              </span>
            </div>
            <h3 className="text-base font-bold text-brand-charcoal mb-2">Client Delivery Focus</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              Your engineering team is fully committed to client deliverables. Sales outreach is paused because capacity is tight, creating an invisible future pipeline drought.
            </p>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-100">
                PHASE 02: CLIFF
              </span>
            </div>
            <h3 className="text-base font-bold text-brand-charcoal mb-2">The Empty Calendar</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              Current client contracts reach completion. You look at your upcoming schedule and realize zero new sales discovery meetings are lined up.
            </p>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-100">
                PHASE 03: FAMINE
              </span>
            </div>
            <h3 className="text-base font-bold text-brand-charcoal mb-2">Panic Outreach</h3>
            <p className="text-brand-slate text-xs leading-relaxed">
              Founders lose engineering hours sending generic cold messages on LinkedIn. Conversion is low, brand reputation is risked, and deal closes take weeks to rebuild.
            </p>
          </div>

        </div>

        {/* Aixila Continuous Solution */}
        <div className="bg-brand-charcoal text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider mb-1">The Aixila Fix</div>
            <h3 className="text-xl font-bold text-white mb-2">Continuous Outbound Running in the Background</h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              We maintain a continuous flow of target prospect interactions. When your current client sprint ends, you already have qualified sales discussions scheduled on your calendar.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3 rounded-xl font-bold text-xs font-mono uppercase whitespace-nowrap tracking-wider transition-all"
          >
            Deploy Pipeline
          </button>
        </div>
      </section>

      {/* Part 2: The 4-Stage Outbound Compiler Pipeline */}
      <section className="bg-brand-creamDark border-y border-brand-border py-20 mb-24">
        <div className="container mx-auto px-6">
          
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
              Compiler Workflow
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mb-3">
              The 4-Stage Outbound Pipeline
            </h2>
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
              Every message is crafted with developer-level fluency using calibrated data feeds and dedicated delivery infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stage 1 */}
            <div className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-brand-slate font-bold uppercase tracking-widest bg-brand-creamDark border border-brand-border px-2 py-0.5 rounded">
                    STAGE_01
                  </span>
                  <span className="text-xs text-brand-accent font-mono font-bold">LEXICAL_QUERY</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                  <Cpu size={18} />
                </div>
                <h3 className="text-base font-bold text-brand-charcoal mb-2">Precision ICP Filtering</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  We identify companies running specific technology stacks (React, AWS, Node, Postgres, Python) with verified budgets and active hiring in the UK & US.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-border text-[10px] font-mono text-brand-slate">
                INPUT: Tech Footprint & Funding Signals
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-brand-slate font-bold uppercase tracking-widest bg-brand-creamDark border border-brand-border px-2 py-0.5 rounded">
                    STAGE_02
                  </span>
                  <span className="text-xs text-brand-accent font-mono font-bold">AST_REWRITE</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                  <Code2 size={18} />
                </div>
                <h3 className="text-base font-bold text-brand-charcoal mb-2">Liquid Personalization</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  We compose concise, technical peer-to-peer audits highlighting real architecture bottlenecks or dev velocity opportunities—no generic sales fluff.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-border text-[10px] font-mono text-brand-slate">
                OUTPUT: Context-Rich Technical Copy
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-brand-slate font-bold uppercase tracking-widest bg-brand-creamDark border border-brand-border px-2 py-0.5 rounded">
                    STAGE_03
                  </span>
                  <span className="text-xs text-brand-accent font-mono font-bold">DELIVERY_EMIT</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                  <Disc size={18} />
                </div>
                <h3 className="text-base font-bold text-brand-charcoal mb-2">Domain Compilation</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  We provision and warm isolated secondary domains with strict SPF, DKIM, and DMARC enforcement to protect your primary domain reputation.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-border text-[10px] font-mono text-brand-slate">
                SECURITY: Primary Domain Protected
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-[#E9E5FC] border border-[#7C3AED]/20 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-[#7C3AED] font-bold uppercase tracking-widest bg-white/70 border border-[#7C3AED]/20 px-2 py-0.5 rounded">
                    STAGE_04
                  </span>
                  <span className="text-xs text-[#7C3AED] font-mono font-bold">RUNTIME_CALLED</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#7C3AED] mb-4 shadow-sm">
                  <Play size={18} className="fill-current" />
                </div>
                <h3 className="text-base font-bold text-brand-charcoal mb-2">Qualified Calendar Hooks</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Meetings land straight on your calendar with pre-briefed decision-makers. You only pay for qualified meetings that show up and participate.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#7C3AED]/15 text-[10px] font-mono text-[#7C3AED] font-bold">
                PRICING: £300–£500 / QUALIFIED SHOW
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Part 3: Interactive Math & ROI Simulator */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2 flex items-center gap-2">
            <Calculator size={14} />
            Interactive ROI Calculator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mb-3">
            Simulate your outbound performance.
          </h2>
          <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
            Adjust the sliders to project expected pipeline additions and hours saved by running Aixila's outbound engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Box */}
          <div className="lg:col-span-6 bg-white border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold text-brand-charcoal font-mono border-b border-brand-border pb-3">
              Input Your Unit Economics
            </h3>

            {/* Slider 1: LTV */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider">
                  Average Client LTV / Project Value:
                </label>
                <span className="text-brand-charcoal font-extrabold font-mono text-sm px-2.5 py-1 bg-brand-cream border border-brand-border rounded">
                  {formatCurrency(dealLtv)}
                </span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="150000" 
                step="5000"
                value={dealLtv}
                onChange={(e) => setDealLtv(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-cream border border-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-brand-slate">
                <span>$5,000 (Small Pilot)</span>
                <span>$150,000+ (Retainer / Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Meetings */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider">
                  Target Monthly Qualified Meetings:
                </label>
                <span className="text-brand-charcoal font-extrabold font-mono text-sm px-2.5 py-1 bg-brand-cream border border-brand-border rounded">
                  {monthlyMeetings} / Month
                </span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="10" 
                step="1"
                value={monthlyMeetings}
                onChange={(e) => setMonthlyMeetings(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-cream border border-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-brand-slate">
                <span>2 / mo (Conservative)</span>
                <span>10 / mo (Maximum Flow)</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider">
                  Meeting-to-Close Rate:
                </label>
                <span className="text-brand-charcoal font-extrabold font-mono text-sm px-2.5 py-1 bg-brand-cream border border-brand-border rounded">
                  {demoCloseRate}%
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                step="2.5"
                value={demoCloseRate}
                onChange={(e) => setDemoCloseRate(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-cream border border-brand-border rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-brand-slate">
                <span>5% (Conservative)</span>
                <span>40% (High Conversion)</span>
              </div>
            </div>

          </div>

          {/* Real-time Math Output */}
          <div className="lg:col-span-6 bg-brand-charcoal text-white border border-brand-charcoal rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider">
                Expected Annual Added Pipeline Revenue
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-1">
                {formatCurrency(estimatedAnnualRevenue)}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#34D399] font-mono mt-2">
                <TrendingUp size={14} />
                <span>+{formatCurrency(estimatedMonthlyRevenue)} monthly run-rate</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider">Expected Closes</span>
                <div className="text-xl font-bold font-mono text-white mt-1">
                  {expectedAnnualCloses.toFixed(1)} / year
                </div>
                <span className="text-[11px] font-mono text-brand-lavender block mt-0.5">
                  {expectedMonthlyCloses.toFixed(2)} deals/mo
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider">Founder Hours Saved</span>
                <div className="text-xl font-bold font-mono text-white mt-1">
                  {savedHoursMonthly} hrs / mo
                </div>
                <span className="text-[11px] font-mono text-brand-accent block mt-0.5">
                  Worth ~{formatCurrency(savedFounderCapital)}/mo
                </span>
              </div>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white block font-mono">100% Performance Aligned</strong>
                £500 setup and £200/mo covers all dedicated sending infrastructure and tools. You only pay the £300–£500 GBP per-meeting fee when a qualified prospect attends your meeting.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Part 4: Side-by-Side Comparison (Concise scannable cards) */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
            Model Comparison
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mb-3">
            Traditional Sales Rep vs. Aixila Outbound Engine
          </h2>
          <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
            Hiring a generic SDR to sell complex development services creates high overhead with slow ramps. Here is how the two approaches compare:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Traditional SDR */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal">Traditional SDR Hire</h3>
                  <p className="text-xs text-brand-slate">$5,000 - $8,000 / month flat salary</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                HIGH RISK
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <div className="font-mono font-bold text-brand-charcoal flex items-center gap-1.5">
                  <XCircle size={14} className="text-rose-500" /> 3+ Month Ramp Time
                </div>
                <p className="text-brand-slate leading-relaxed">
                  You spend months training them on tech stacks and scripting before their first meeting is booked.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-brand-charcoal flex items-center gap-1.5">
                  <XCircle size={14} className="text-rose-500" /> Non-Technical Copy
                </div>
                <p className="text-brand-slate leading-relaxed">
                  Junior salespeople write generic pitches that technical decision-makers immediately ignore or filter.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-brand-charcoal flex items-center gap-1.5">
                  <XCircle size={14} className="text-rose-500" /> Expensive Software Overhead
                </div>
                <p className="text-brand-slate leading-relaxed">
                  You pay for sequencers, data scrapers, LinkedIn licenses, and CRM seats ($800+/mo on top of salary).
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-brand-charcoal flex items-center gap-1.5">
                  <XCircle size={14} className="text-rose-500" /> Guaranteed Monthly Drain
                </div>
                <p className="text-brand-slate leading-relaxed">
                  You pay the full salary every month regardless of whether they deliver 1 meeting or 0 meetings.
                </p>
              </div>
            </div>
          </div>

          {/* Aixila Engine */}
          <div className="bg-brand-charcoal text-white border border-brand-charcoal rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Zap size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Aixila Outbound Engine</h3>
                  <p className="text-xs text-brand-accent font-mono">£500 Setup + £200/mo + £300–£500/Meeting</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                LOW OVERHEAD
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <div className="font-mono font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> 48-Hour Deployment
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Pre-configured warming pipelines and calibrated ICP datasets deploy in days, not months.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Developer-Fluent Communication
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Outreach speaks directly to tech stacks, performance bottlenecks, and engineering challenges.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Low Fixed Maintenance
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Just £200/month covers secondary domain renewals, DNS maintenance, scraping, and active data warming.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Pay Only on Qualified Show
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  If a meeting fails to meet criteria or does not show up, you pay £0. Risk is completely aligned.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA to Pricing */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('pricing')}
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-sm transition-all"
          >
            <span>Review Full Pricing & Qualification Rules</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
