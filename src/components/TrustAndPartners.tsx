import React, { useState } from 'react';
import { Building, Award, ShieldCheck, ArrowLeft, Star, Quote } from 'lucide-react';
import { SUCCESS_PARTNERS } from '../data/nhmData';

interface TrustAndPartnersProps {
  onOpenConsultation: () => void;
}

export const TrustAndPartners: React.FC<TrustAndPartnersProps> = ({
  onOpenConsultation,
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <section id="partners" className="py-20 bg-white dark:bg-[#090D16] border-t border-slate-200/80 dark:border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <Award className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>نفتخر بثقة شركائنا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            شركاء رحلة التحول الرقمي مع نهم
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic">
            مجموعة من أبرز الشركات والعلامات التجارية الرائدة في المملكة التي اعتمدت على مهندسي نهم في تمكين عملياتها بنظام Odoo ERP.
          </p>
        </div>

        {/* Partners Grid with Clean Glass Cards (inspired by NHM Brand Deck Page 8) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {SUCCESS_PARTNERS.map((partner) => {
            const isHovered = selectedPartner === partner.name;
            return (
              <div
                key={partner.name}
                onMouseEnter={() => setSelectedPartner(partner.name)}
                onMouseLeave={() => setSelectedPartner(null)}
                className="relative rounded-2xl p-5 bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all group flex flex-col justify-between cursor-pointer min-h-[140px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 font-arabic">
                      {partner.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-violet-500/40 group-hover:bg-violet-500 transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-white font-display tracking-tight">
                    {partner.logoText}
                  </h4>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal pt-2 border-t border-slate-200/60 dark:border-slate-800/80 mt-2">
                  {partner.outcome}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Banner */}
        <div className="rounded-2xl bg-gradient-to-l from-violet-950/20 via-violet-900/10 to-transparent border border-violet-500/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <Quote className="w-8 h-8 text-violet-500/60" />
            <blockquote className="text-base sm:text-xl font-medium text-slate-900 dark:text-slate-100 font-arabic leading-relaxed">
              "التحول مع نهم لم يكن مجرد استبدال برنامج، بل كان إعادة هندسة كاملة لدورة التكاليف وسلاسل التوريد وربطاً سلساً مع هيئة الزكاة بدون يوم واحد من التعطيل."
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center font-display text-sm">
                AR
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  المدير التنفيذي للعمليات (COO)
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  شركة مقاولات وصناعة معيارية - عميل نهم بالرياض
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-0 sm:absolute sm:bottom-12 sm:left-12">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/20"
            >
              <span>انضم إلى شركاء نهم</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
