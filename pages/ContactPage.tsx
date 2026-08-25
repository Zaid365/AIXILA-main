import React, { useState } from 'react';
import { Mail, Calendar, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Book a Strategy Call',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-20">
      
      {/* Breadcrumbs & Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-slate mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-brand-charcoal font-bold">Contact</span>
        </div>
        
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-4">
            Start a conversation with Aixila.
          </h1>
          <p className="text-brand-slate text-base leading-relaxed">
            Schedule a calendar briefing directly or submit a message below. We respond within one business day.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Calendar & Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Instant Booking Card */}
            <div className="bg-brand-charcoal text-white rounded-2xl p-7 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Direct Calendar Booking</h3>
                  <p className="text-xs text-neutral-300">Fastest way to get started</p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Pick a 30-minute slot directly on our calendar to discuss your agency's tech stack, ICP criteria, and target monthly meeting goals.
              </p>

              <button
                onClick={onOpenModal}
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-accent/25 active:scale-98"
              >
                <span>Open Booking Calendar</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Email Fallback Card */}
            <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center text-brand-accent">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-brand-slate font-bold block">Direct Email</span>
                  <a href="mailto:contact@aixila.com" className="font-bold text-sm text-brand-charcoal hover:text-brand-accent transition-colors">
                    contact@aixila.com
                  </a>
                </div>
              </div>
              <p className="text-brand-slate text-xs leading-relaxed">
                For RFP submissions, NDA requests, or general technical questions.
              </p>
            </div>

            {/* Response Time Promise */}
            <div className="bg-brand-creamDark border border-brand-border rounded-2xl p-5 text-xs text-brand-slate space-y-1 font-mono">
              <div className="font-bold text-brand-charcoal flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-accent" /> Guaranteed SLA
              </div>
              <p className="text-[11px] leading-relaxed">
                We review inbound inquiries within 24 hours during standard UK and US business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-brand-border rounded-2xl p-7 sm:p-9 shadow-sm">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal">Message Received</h3>
                <p className="text-brand-slate text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry and our team will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Book a Strategy Call',
                      message: '',
                    });
                  }}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-brand-border pb-3">
                  <h3 className="font-bold text-base text-brand-charcoal">Send Us an Inquiry</h3>
                  <p className="text-xs text-brand-slate mt-0.5">Fill out the fields below and we'll reply promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                      Your Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Wright"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                      Company / Agency <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Vector Labs Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                      Work Email <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 or +1 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                    What are you looking for?
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40"
                  >
                    <option value="Book a Strategy Call">Book a Strategy Call</option>
                    <option value="Pricing & Qualification Question">Pricing & Qualification Question</option>
                    <option value="Agency Partnership">Agency Partnership</option>
                    <option value="General Inquiry">General Inquiry / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-slate uppercase mb-1">
                    Message / Project Details <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your core technical services, target industry, or desired meeting volume..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border text-xs text-brand-charcoal focus:outline-none focus:border-brand-accent bg-brand-cream/40 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-charcoal hover:bg-black text-white py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-sm active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactPage;
