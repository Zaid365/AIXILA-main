import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight, Menu, X, Calendar } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-border py-3 shadow-sm' : 'bg-brand-cream/80 backdrop-blur-sm py-5 border-b border-brand-border/40'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group text-left"
        >
          <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center rounded-xl group-hover:border-brand-accent transition-all duration-300 shadow-sm">
            <Terminal size={16} className="text-brand-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight uppercase text-brand-charcoal font-mono flex items-center gap-1.5 leading-none">
              AIXILA
              <span className="w-2 h-2 rounded-full bg-brand-accent pulse-neon"></span>
            </span>
            <span className="text-[9px] text-brand-slate font-bold uppercase tracking-wider leading-none mt-1 font-mono">
              Aixila Limited
            </span>
          </div>
        </button>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white border border-brand-border p-1.5 rounded-xl shadow-sm">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all uppercase ${
                  isActive 
                    ? 'bg-brand-charcoal text-white shadow-sm' 
                    : 'text-brand-slate hover:text-brand-charcoal hover:bg-brand-cream'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenModal}
            className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-2.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95 shadow-brand-accent/20"
          >
            <span>Book a Call</span>
            <ChevronRight size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-charcoal shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-6 py-5 shadow-lg space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                  isActive 
                    ? 'bg-brand-charcoal text-white' 
                    : 'text-brand-slate hover:bg-brand-cream'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>}
              </button>
            );
          })}

          <div className="pt-3 mt-3 border-t border-brand-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full bg-brand-accent hover:bg-brand-accentHover text-white py-3 rounded-xl font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar size={14} />
              <span>Book Strategy Session</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
