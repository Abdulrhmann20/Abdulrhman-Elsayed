import React, { useState } from 'react';
import {
  Building2,
  Store,
  Factory,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  ReceiptText,
  PackageSearch,
  ShoppingCart,
  Users,
  Trello,
  Cog,
  CreditCard,
  FolderLock,
  Code2,
} from 'lucide-react';
import { SAUDI_INDUSTRIES, ODOO_MODULES } from '../data/nhmData';

interface IndustryOdooMatrixProps {
  onSelectIndustryForCalc: (industryId: string) => void;
  onOpenConsultation: () => void;
}

export const IndustryOdooMatrix: React.FC<IndustryOdooMatrixProps> = ({
  onSelectIndustryForCalc,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<string>(SAUDI_INDUSTRIES[0].id);
  const currentIndustry = SAUDI_INDUSTRIES.find((ind) => ind.id === activeTab) || SAUDI_INDUSTRIES[0];

  // Helper to map icon names
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'ReceiptText': return <ReceiptText className="w-4 h-4" />;
      case 'PackageSearch': return <PackageSearch className="w-4 h-4" />;
      case 'ShoppingCart': return <ShoppingCart className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Trello': return <Trello className="w-4 h-4" />;
      case 'Cog': return <Cog className="w-4 h-4" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4" />;
      case 'FolderLock': return <FolderLock className="w-4 h-4" />;
      case 'Code2': return <Code2 className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  const activeModules = ODOO_MODULES.filter((mod) =>
    currentIndustry.recommendedModules.includes(mod.id)
  );

  return (
    <section id="industries" className="py-20 bg-slate-50/70 dark:bg-[#0B1120]/50 border-y border-slate-200/80 dark:border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <span>مصفوفة القطاعات وحلول Odoo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            حلول Odoo مصممة خصيصاً لواقع السوق السعودي
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic">
            لا نقدّم نظاماً معلباً؛ بل نهندس موديولات Odoo لتلائم الدورة المستندية والتشغيلية المعتمدة في قطاعك بدقة.
          </p>
        </div>

        {/* Interactive Segmented Tabs (Buttons with click handlers) */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto mb-10">
          {SAUDI_INDUSTRIES.map((industry) => {
            const isActive = industry.id === activeTab;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {getIcon(industry.icon)}
                <span>{industry.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Active Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Industry Operational Overview (Col 1 to 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/30 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                  {currentIndustry.tagline}
                </span>
                {currentIndustry.clientExample && (
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    شريك موثق: {currentIndustry.clientExample}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-arabic">
                {currentIndustry.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-arabic">
                {currentIndustry.description}
              </p>
            </div>

            {/* Key Benefits List */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                المكاسب التشغيلية المباشرة مع نهم:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentIndustry.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                    <span className="leading-normal">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Highlight Strip */}
            <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  الأثر القابل للقياس:
                </span>
                <span className="text-xs sm:text-sm font-medium text-violet-700 dark:text-violet-300">
                  {currentIndustry.kpiHighlight}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>ZATCA 100%</span>
              </div>
            </div>

            {/* Action for this Industry */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onSelectIndustryForCalc(currentIndustry.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition-colors"
              >
                <span>احسب تكلفة قطاع {currentIndustry.shortName}</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                طلب استشارة متخصصة
              </button>
            </div>
          </div>

          {/* Connected Odoo Modules for this Industry (Col 8 to 12) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                الموديولات الموصى بها لهذا القطاع ({activeModules.length})
              </h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                مربوطة ومتزامنة لحظياً
              </span>
            </div>

            <div className="space-y-3">
              {activeModules.map((mod) => (
                <div
                  key={mod.id}
                  className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                      {getIcon(mod.icon)}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {mod.name}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                        {mod.description}
                      </p>
                      <div className="text-[11px] text-violet-700 dark:text-violet-300 pt-1 font-medium">
                        الخاصية السعودية: {mod.saudiFeature}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
