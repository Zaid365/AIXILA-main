import React from 'react';
import { ArrowRight, Zap, Target, ShieldCheck, Cpu, CreditCard, ChevronRight, MessageSquare } from 'lucide-react';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden tech-grid">
        <div className="absolute inset-0 radial-glow pointer-events-none opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-brand-border mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent pulse-neon"></span>
              <span className="text-xs font-mono font-bold text-brand-slate uppercase tracking-wider">
                Performance-Based Outbound
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-charcoal tracking-tight leading-[1.08] mb-6">
              You built standard-setting tech.<br />
              <span className="text-brand-accent">
                We fill your calendar with qualified buyers.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-brand-slate max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              B2B AI-powered outbound lead generation and sales automation for software dev agencies and tech startups in the UK and US.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-xl font-extrabold text-base flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(255,79,0,0.2)] hover:shadow-[0_6px_25px_rgba(255,79,0,0.3)] active:scale-98 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('how-it-works')}
                className="w-full sm:w-auto bg-white hover:bg-brand-creamDark border border-brand-border text-brand-charcoal px-7 py-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm"
              >
                <span>Explore How It Works</span>
                <ChevronRight size={15} />
              </button>
            </div>

            {/* 3 Core Proof Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto pt-8 border-t border-brand-border text-left">
              <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  <Target size={16} />
                </div>
                <div className="text-sm font-bold text-brand-charcoal font-mono mb-1">UK & US Markets</div>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Targeting verified CTOs, VP Engineering, and technical founders with relevant project budgets.
                </p>
              </div>

              <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  <CreditCard size={16} />
                </div>
                <div className="text-sm font-bold text-brand-charcoal font-mono mb-1">£0 Retainer Model</div>
                <p className="text-brand-slate text-xs leading-relaxed">
                  £500 setup & £200/mo tool cost, followed by £300–£500 GBP per qualified meeting that shows up.
                </p>
              </div>

              <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-sm font-bold text-brand-charcoal font-mono mb-1">Guaranteed Shows</div>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Zero meeting charge on no-shows or prospects outside your agreed technical ICP.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guided Pathways Section */}
      <section className="py-20 bg-white border-t border-brand-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
              Explore Aixila
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Designed for technical teams who need consistent deal flow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pathway 1: How It Works */}
            <div 
              onClick={() => onNavigate('how-it-works')}
              className="bg-brand-cream hover:bg-white border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent mb-5 group-hover:scale-105 transition-transform">
                  <Cpu size={18} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 flex items-center justify-between">
                  How It Works
                  <ArrowRight size={16} className="text-brand-slate group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  See the 4-stage outbound compiler pipeline, the feast-famine analysis, and simulate your ROI with our live calculator.
                </p>
              </div>
              <span className="font-mono text-[11px] font-bold text-brand-accent mt-6 block">
                View Pipeline & Math →
              </span>
            </div>

            {/* Pathway 2: Pricing */}
            <div 
              onClick={() => onNavigate('pricing')}
              className="bg-brand-cream hover:bg-white border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent mb-5 group-hover:scale-105 transition-transform">
                  <CreditCard size={18} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 flex items-center justify-between">
                  Pricing & Terms
                  <ArrowRight size={16} className="text-brand-slate group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  £500 setup, £200/mo tool costs, and transparent £300–£500 GBP per-meeting rates with zero charge on no-shows.
                </p>
              </div>
              <span className="font-mono text-[11px] font-bold text-brand-accent mt-6 block">
                View Pricing Breakdown →
              </span>
            </div>

            {/* Pathway 3: About */}
            <div 
              onClick={() => onNavigate('about')}
              className="bg-brand-cream hover:bg-white border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent mb-5 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 flex items-center justify-between">
                  About Aixila Limited
                  <ArrowRight size={16} className="text-brand-slate group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Learn about our company background, UK limited company registration details, and our developer-first approach.
                </p>
              </div>
              <span className="font-mono text-[11px] font-bold text-brand-accent mt-6 block">
                View Company Info →
              </span>
            </div>

            {/* Pathway 4: Contact */}
            <div 
              onClick={() => onNavigate('contact')}
              className="bg-brand-cream hover:bg-white border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent mb-5 group-hover:scale-105 transition-transform">
                  <MessageSquare size={18} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 flex items-center justify-between">
                  Contact & Booking
                  <ArrowRight size={18} className="text-brand-slate group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Submit a structured inquiry, reach out via direct business email, or schedule a 30-minute campaign consultation.
                </p>
              </div>
              <span className="font-mono text-[11px] font-bold text-brand-accent mt-6 block">
                Get in Touch →
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Final Banner */}
      <section className="py-16 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Stop relying on word-of-mouth luck.
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Deploy an automated, peer-to-peer outbound pipeline that runs constantly while you build.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all"
            >
              Deploy Outbound Engine
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-mono text-xs font-bold transition-all"
            >
              See Pricing Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
