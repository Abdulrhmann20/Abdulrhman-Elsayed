import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpLeft, ShieldCheck } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'حلول القطاعات', href: '#industries' },
    { label: 'حاسبة المتطلبات', href: '#calculator' },
    { label: 'الخدمات', href: '#services' },
    { label: 'منهجية التحول', href: '#roadmap' },
    { label: 'شركاء النجاح', href: '#partners' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-[#090D16]/90 border-b border-slate-200 dark:border-violet-900/30 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Zone */}
        <a href="#hero" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-11 h-11 rounded-xl bg-violet-950/20 dark:bg-violet-900/40 p-1.5 border border-violet-500/30 flex items-center justify-center overflow-hidden shadow-sm shadow-violet-500/10">
            <img
              src="/assets/aistudio/405ad79a-2508-4697-ba99-9ebb381fe99e_6211a5b1.png"
              alt="نهم لحلول الأعمال NHM"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-arabic">
                نَهَم
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 flex items-center gap-1 font-display">
                <ShieldCheck className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                Odoo Partner
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-display tracking-wide uppercase">
              NHM Business Solutions
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single-line whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions & Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'التبديل إلى النمط الفاتح' : 'التبديل إلى النمط الداكن'}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-violet-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 shadow-md shadow-violet-600/20 hover:shadow-violet-600/30 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            <span>حجز استشارة مجانية</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
            >
              <span>حجز استشارة مجانية</span>
              <ArrowUpLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
