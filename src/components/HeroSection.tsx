import React from 'react';
import { ArrowLeft, Calculator, CheckCircle2, ShieldCheck, Sparkles, Building, Layers, Zap } from 'lucide-react';
import { NHM_COMPANY_INFO } from '../data/nhmData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToCalculator,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Violet Glow Gradients inspired by NHM Brand Guidelines */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-violet-600/15 dark:bg-violet-600/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-indigo-600/10 dark:bg-violet-900/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Trust Kicker - Clean unboxed text with dot separator */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 px-3.5 py-1.5 rounded-lg">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>شريك أودو المعتمد في السعودية</span>
              <span aria-hidden="true">·</span>
              <span>مطابق 100% مع هيئة الزكاة والضريبة ZATCA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] font-arabic [text-wrap:balance]">
              مهندسو التحول الرقمي الشامل لأنظمة{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-purple-300">
                Odoo ERP
              </span>{' '}
              في المملكة
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-arabic">
              نحن في <strong className="text-slate-900 dark:text-white font-semibold">نهم لحلول الأعمال</strong> ندمج الرؤية الاستراتيجية بالهندسة الدقيقة، لنحوّل العمليات المعقدة إلى منظومات رقمية مرنة ومترابطة ترفع كفاءتك التشغيلية وتدعم قراراتك الاستثمارية.
            </p>

            {/* Key Assurance Bulletins */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>ربط فوري وتكامل مع منصة فاتورة (Fatoora)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>ترحيل آمن لبياناتك القديمة دون تعطيل العمليات</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>فريق استشاري وهندسي متفرغ بالرياض</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>اتفاقيات مستوى خدمة (SLA) ودعم فني استباقي</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-600/25 active:scale-[0.98] transition-all"
              >
                <span>حجز جلسة استشارية مجانية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 active:scale-[0.98] transition-all"
              >
                <Calculator className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>احسب متطلبات وتكلفة نظامك</span>
              </button>
            </div>
          </div>

          {/* Interactive Live Simulation / Odoo Nerve Center Card (Col 8 to 12) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient decorative glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-purple-500/10 rounded-3xl blur-xl" />

            <div className="relative rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/40 p-6 shadow-2xl shadow-violet-950/20 space-y-5">
              {/* Header of Simulated ERP Center */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-600/10 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                      مركز عمليات Odoo ERP
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      بيئة متكاملة مهندسة من نهم
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ZATCA متصل لحظياً</span>
                </div>
              </div>

              {/* Real-time Simulated Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    كفاءة العمليات التشغيلية
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-slate-900 dark:text-white font-display tabular-nums">
                      +38.5%
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      ارتفاع شهري
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    الفواتير المعتمدة من زاتكا
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-slate-900 dark:text-white font-display tabular-nums">
                      1,482
                    </span>
                    <span className="text-[11px] text-violet-600 dark:text-violet-400 font-medium">
                      فاتورة / اليوم
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Synced Modules Mini-strip */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  الموديولات المترابطة قيد العمل
                </span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-violet-500" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        المحاسبة والربط مع Fatoora ZATCA
                      </span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-display text-[11px]">
                      تشفير نشط
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-indigo-500" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        المخزون وسلاسل التوريد (Multi-Warehouses)
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 font-display text-[11px]">
                      مزامنة 100%
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/15 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0" />
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  فريق نهم يضمن تطبيقاً سلساً خالياً من الأخطاء مع تدريب شامل لكافة موظفيك.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Trust KPI Row directly adjacent to Hero claims */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-violet-900/30 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {NHM_COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/60 dark:bg-[#0F172A]/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400 font-display tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
