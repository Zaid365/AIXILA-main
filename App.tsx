import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { PageId } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync route with URL hash on initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'how-it-works', 'pricing', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-accent/25 selection:text-brand-charcoal flex flex-col justify-between">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onOpenModal={openModal} 
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} onOpenModal={openModal} />
        )}
        {currentPage === 'how-it-works' && (
          <HowItWorksPage onNavigate={navigateTo} onOpenModal={openModal} />
        )}
        {currentPage === 'pricing' && (
          <PricingPage onNavigate={navigateTo} onOpenModal={openModal} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} onOpenModal={openModal} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} onOpenModal={openModal} />
        )}
      </main>

      <Footer 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onOpenModal={openModal} 
      />
      
      {isModalOpen && (
        <LeadModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
