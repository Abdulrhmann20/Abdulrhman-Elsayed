import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowLeft, ChevronRight } from 'lucide-react';
import { TRANSFORMATION_STEPS } from '../data/nhmData';

interface TransformationRoadmapProps {
  onOpenConsultation: () => void;
}

export const TransformationRoadmap: React.FC<TransformationRoadmapProps> = ({
  onOpenConsultation,
}) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const current = TRANSFORMATION_STEPS[selectedStep];

  return (
    <section id="roadmap" className="py-20 bg-slate-50/70 dark:bg-[#0B1120]/60 border-t border-slate-200/80 dark:border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <span>منهجية العمل الهندسية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            رحلة التحول الآمنة: 6 محطات هندسية مدروسة
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic">
            نعتمد منهجية دقيقة تضمن تسليم مشاريع Odoo ERP في الوقت المحدد والميزانية المعتمدة وبأعلى معايير الجودة.
          </p>
        </div>

        {/* Step Selector Horizontal / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {TRANSFORMATION_STEPS.map((s, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl text-right transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/20'
                    : 'bg-white dark:bg-[#0F172A] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-400'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-lg font-black font-display ${
                      isSelected ? 'text-white' : 'text-violet-600 dark:text-violet-400'
                    }`}
                  >
                    {s.step}
                  </span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {idx + 1}
                  </span>
                </div>
                <div className="text-xs font-bold leading-snug font-arabic">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Spotlight */}
        <div className="rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/40 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-violet-600 dark:text-violet-400 font-display">
                  {current.step}
                </span>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-display block uppercase">
                    المرحلة {selectedStep + 1} من 6 · {current.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-arabic">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-arabic">
                {current.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 hover:underline"
                >
                  <span>استكشف تفاصيل مرحلة {current.title} لمشروعك</span>
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  مخرجات المرحلة المعتمدة (Deliverables):
                </h4>
              </div>

              <div className="space-y-2.5">
                {current.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✓
                    </span>
                    <span className="leading-normal">{del}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500">
                تسليم رسمي بتوقيع استشاري نهم ومسؤول المشروع في شركتكم.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
