import React from 'react';
import { Building2, ShieldCheck, Mail, Globe, CheckCircle2, ArrowRight, Code, Server, Users } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      
      {/* Breadcrumbs & Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-slate mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-brand-charcoal font-bold">About</span>
        </div>
        
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
            Company & Mission
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-4">
            Engineering-first outbound for technical teams.
          </h1>
          <p className="text-brand-slate text-base sm:text-lg leading-relaxed">
            We bridge the gap between complex software engineering capabilities and consistent B2B commercial pipelines in the UK and US.
          </p>
        </div>
      </div>

      {/* Main Narrative (Trimmed to 2-3 sentences per block) */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-brand-border rounded-2xl p-7 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-brand-charcoal tracking-tight">
                Why Aixila Exists
              </h2>
              <p className="text-brand-slate text-xs sm:text-sm leading-relaxed">
                Most sales agencies fail when prospecting for software development firms. They assign junior SDRs who don't understand software architecture to blast generic templates at busy technical leaders.
              </p>
              <p className="text-brand-slate text-xs sm:text-sm leading-relaxed">
                Aixila was built to treat outbound as a deterministic engineering problem. We compile context-rich outreach based on actual technology stacks, cloud configurations, and verified engineering needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  <Code size={16} />
                </div>
                <h3 className="text-sm font-bold text-brand-charcoal font-mono mb-1">Developer Fluency</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  Every outreach campaign is written to read as an insightful technical audit rather than a noisy pitch.
                </p>
              </div>

              <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  <Server size={16} />
                </div>
                <h3 className="text-sm font-bold text-brand-charcoal font-mono mb-1">Infrastructure Control</h3>
                <p className="text-brand-slate text-xs leading-relaxed">
                  We manage isolated secondary domains with strict email authentication to safeguard your primary domain.
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Corporate Registration Block (THE ONLY BODY INSTANCE) */}
          <div className="lg:col-span-5 bg-white border-2 border-brand-charcoal rounded-2xl p-6 sm:p-7 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-brand-accent" />
                <span className="font-bold text-sm text-brand-charcoal font-mono">Company Information</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-mono">
                <ShieldCheck size={11} /> UK Registered
              </span>
            </div>

            <p className="text-xs text-brand-slate leading-relaxed">
              Aixila Limited is a UK-registered technology and business services company providing AI-powered outbound prospecting, lead generation, sales automation and related marketing services to B2B companies.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2 border-t border-brand-border/60">
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Legal Name:</span>
                <span className="font-bold text-brand-charcoal text-right">Aixila Limited</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Registration Number:</span>
                <span className="font-bold text-brand-charcoal text-right">Company No. 17268919</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Country of Registration:</span>
                <span className="font-bold text-brand-charcoal text-right">United Kingdom</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Business Type:</span>
                <span className="font-bold text-brand-charcoal text-right">Private limited company</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Primary Markets:</span>
                <span className="font-bold text-brand-charcoal text-right">United Kingdom & United States</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/40">
                <span className="text-brand-slate">Direct Contact:</span>
                <a href="mailto:contact@aixila.com" className="font-bold text-brand-accent hover:underline flex items-center gap-1">
                  <Mail size={12} /> contact@aixila.com
                </a>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brand-slate">Website:</span>
                <a href="https://aixila.com" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-charcoal hover:text-brand-accent flex items-center gap-1">
                  <Globe size={12} /> aixila.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="bg-brand-charcoal text-white rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Let's discuss your ideal customer profile.
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Find out how many qualified technology buyers we can target for your agency this quarter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md shadow-brand-accent/20"
            >
              Book a Strategy Call
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-mono text-xs font-bold transition-all"
            >
              Send an Inquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
