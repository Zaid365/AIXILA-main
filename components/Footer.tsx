import React from 'react';
import { Terminal, ArrowRight, Mail } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate, onOpenModal }) => {
  return (
    <footer className="bg-brand-creamDark border-t border-brand-border py-12">
      <div className="container mx-auto px-6">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-brand-border/80">
          
          {/* Brand Identity */}
          <div className="md:col-span-4 space-y-2">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2.5 cursor-pointer inline-flex"
            >
              <div className="w-8 h-8 bg-white border border-brand-border flex items-center justify-center rounded-lg shadow-sm">
                <Terminal size={14} className="text-brand-accent" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-brand-charcoal font-mono">
                AIXILA
              </span>
            </div>
            <p className="text-brand-slate text-xs max-w-sm leading-relaxed">
              Performance-based B2B outbound lead generation for software development agencies and SaaS startups.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-8 md:text-right">
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-xs font-mono font-bold text-brand-slate">
              <button 
                onClick={() => onNavigate('home')} 
                className={`hover:text-brand-accent transition-colors uppercase ${currentPage === 'home' ? 'text-brand-accent' : ''}`}
              >
                Home
              </button>
              <span className="text-neutral-300 font-normal">//</span>
              <button 
                onClick={() => onNavigate('how-it-works')} 
                className={`hover:text-brand-accent transition-colors uppercase ${currentPage === 'how-it-works' ? 'text-brand-accent' : ''}`}
              >
                How It Works
              </button>
              <span className="text-neutral-300 font-normal">//</span>
              <button 
                onClick={() => onNavigate('pricing')} 
                className={`hover:text-brand-accent transition-colors uppercase ${currentPage === 'pricing' ? 'text-brand-accent' : ''}`}
              >
                Pricing
              </button>
              <span className="text-neutral-300 font-normal">//</span>
              <button 
                onClick={() => onNavigate('about')} 
                className={`hover:text-brand-accent transition-colors uppercase ${currentPage === 'about' ? 'text-brand-accent' : ''}`}
              >
                About
              </button>
              <span className="text-neutral-300 font-normal">//</span>
              <button 
                onClick={() => onNavigate('contact')} 
                className={`hover:text-brand-accent transition-colors uppercase ${currentPage === 'contact' ? 'text-brand-accent' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>

        </div>

        {/* Compact Single Line Legal & Copyright Notice */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-slate">
          <p className="font-medium text-center sm:text-left">
            Aixila Limited is a company registered in the United Kingdom. Company No. 17268919.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="mailto:contact@aixila.com" 
              className="text-brand-slate hover:text-brand-accent transition-colors font-mono text-xs flex items-center gap-1"
            >
              <Mail size={12} /> contact@aixila.com
            </a>
            <span className="text-neutral-300">|</span>
            <span className="text-[11px] text-brand-slate">
              © 2026 Aixila Limited
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
