import React from 'react';

export type PageId = 'home' | 'how-it-works' | 'pricing' | 'about' | 'contact';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ComparisonItem {
  feature: string;
  traditionalSdr: string;
  aixila: string;
}

export interface PricingTier {
  name: string;
  badge: string;
  description: string;
  retainer: string;
  setupFee: string;
  billingModel: string;
  features: string[];
  recommended?: boolean;
}
