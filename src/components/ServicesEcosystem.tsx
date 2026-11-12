import React from 'react';
import { Lightbulb, Cpu, Rocket, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/nhmData';

interface ServicesEcosystemProps {
  onOpenConsultation: () => void;
}

export const ServicesEcosystem: React.FC<ServicesEcosystemProps> = ({
  onOpenConsultation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-500" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-indigo-500" />;
      default:
        return <Cpu className="w-6 h-6 text-violet-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#090D16] border-t border-slate-200/80 dark:border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <span>منظومة الخدمات المتكاملة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            ركائز التحول الرقمي الشامل مع نهم
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic">
            رحلتنا معك تتجاوز مجرد تركيب برنامج؛ نحن شركاؤك التشغيليون في بناء بنية تحتية رقمية تضمن التوسع المستدام.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all group hover:shadow-lg hover:shadow-violet-950/10"
            >
              <div className="space-y-6">
                {/* Header of Pillar Card */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-display">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 font-display">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-arabic">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-arabic">
                    {pillar.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-8 mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <span>استفسر عن خدمات {pillar.title}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
