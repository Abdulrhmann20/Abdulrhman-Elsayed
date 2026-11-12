import React from 'react';
import { Mail, Globe, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { NHM_COMPANY_INFO } from '../data/nhmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Positioning (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-900/40 border border-violet-500/30 p-1.5 flex items-center justify-center">
                <img
                  src="/assets/aistudio/405ad79a-2508-4697-ba99-9ebb381fe99e_6211a5b1.png"
                  alt="نهم لحلول الأعمال NHM"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-arabic block">
                  {NHM_COMPANY_INFO.brandName}
                </span>
                <span className="text-[11px] text-slate-400 font-display">
                  {NHM_COMPANY_INFO.brandNameEn}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-arabic max-w-sm">
              {NHM_COMPANY_INFO.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800/80 text-[11px] font-semibold text-violet-300">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                شريك Odoo المعتمد بالمملكة
              </span>
              <span className="text-[11px] text-slate-400">
                السجل التجاري: {NHM_COMPANY_INFO.commercialRegister}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (Col 6 to 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              أقسام الموقع
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  حلول القطاعات وموديولات Odoo
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  حاسبة المتطلبات والجدول الزمني
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  منظومة الخدمات المتكاملة
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  منهجية التحول الرقمي (6 خطوات)
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  شركاء النجاح والعملاء
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors text-violet-400 font-semibold">
                  تواصل معنا ونموذج الاستشارة
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Address (Col 9 to 12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              بيانات التواصل والمقر الرئيسي
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="leading-normal">
                  {NHM_COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`mailto:${NHM_COMPANY_INFO.email}`} className="hover:text-white font-display">
                  {NHM_COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`https://${NHM_COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-display">
                  {NHM_COMPANY_INFO.website}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                صندوق بريد: {NHM_COMPANY_INFO.poBox} · الرياض 14321
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة نهم لحلول الأعمال (NHM Business Solutions).
          </div>
          <div className="flex items-center gap-4">
            <span>متوافق مع معايير هيئة الزكاة والضريبة والجمارك ZATCA</span>
            <span>·</span>
            <span>المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
