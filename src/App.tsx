import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IndustryOdooMatrix } from './components/IndustryOdooMatrix';
import { OdooScopeCalculator } from './components/OdooScopeCalculator';
import { ServicesEcosystem } from './components/ServicesEcosystem';
import { TransformationRoadmap } from './components/TransformationRoadmap';
import { TrustAndPartners } from './components/TrustAndPartners';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('nhm_theme');
    return (saved as ThemeMode) || 'dark';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefillScope, setPrefillScope] = useState<{
    industryName?: string;
    teamSize?: number;
    timelineWeeks?: string;
    tierName?: string;
    modulesCount?: number;
    modulesList?: string[];
  } | null>(null);

  const [calcIndustryId, setCalcIndustryId] = useState<string>('contracting');

  // Sync theme changes with DOM
  useEffect(() => {
    localStorage.setItem('nhm_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('bg-[#090D16]', 'text-[#F8F7FA]');
      document.body.classList.remove('bg-[#F8F9FC]', 'text-[#0F172A]');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('bg-[#090D16]', 'text-[#F8F7FA]');
      document.body.classList.add('bg-[#F8F9FC]', 'text-[#0F172A]');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenConsultation = () => {
    setPrefillScope(null);
    setIsConsultationOpen(true);
  };

  const handleSelectIndustryForCalc = (industryId: string) => {
    setCalcIndustryId(industryId);
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfirmScopeAndBook = (summary: {
    industryName: string;
    teamSize: number;
    timelineWeeks: string;
    tierName: string;
    modulesCount: number;
    modulesList: string[];
    currentSystem: string;
  }) => {
    setPrefillScope(summary);
    setIsConsultationOpen(true);
  };

  const handleScrollToCalculator = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-arabic transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenConsultation={handleOpenConsultation}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* 2. Saudi Industry & Odoo Matrix */}
        <IndustryOdooMatrix
          onSelectIndustryForCalc={handleSelectIndustryForCalc}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. Interactive Scope & Cost Calculator */}
        <OdooScopeCalculator
          initialIndustry={calcIndustryId}
          onConfirmAndBook={handleConfirmScopeAndBook}
        />

        {/* 4. Integrated Services Ecosystem (3 Pillars) */}
        <ServicesEcosystem onOpenConsultation={handleOpenConsultation} />

        {/* 5. Safe Transformation Methodology (6 Steps) */}
        <TransformationRoadmap onOpenConsultation={handleOpenConsultation} />

        {/* 6. Success Partners & Verified Clients */}
        <TrustAndPartners onOpenConsultation={handleOpenConsultation} />

        {/* 7. Contact & Direct Consultation Form (As in the original website) */}
        <ContactSection />
      </main>

      {/* Footer with Registered Corporate Info */}
      <Footer />

      {/* Consultation Booking Modal */}
      <ConsultationBookingModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillData={prefillScope}
      />
    </div>
  );
}
