import React, { useState } from 'react';
import {
  Calculator,
  Clock,
  Sparkles,
  Layers,
  ArrowLeft,
  RefreshCw,
  Coins,
  ShieldCheck,
} from 'lucide-react';
import { SAUDI_INDUSTRIES, ODOO_MODULES } from '../data/nhmData';

interface OdooScopeCalculatorProps {
  initialIndustry?: string;
  onConfirmAndBook: (summary: {
    industryName: string;
    teamSize: number;
    timelineWeeks: string;
    tierName: string;
    modulesCount: number;
    modulesList: string[];
    currentSystem: string;
  }) => void;
}

export const OdooScopeCalculator: React.FC<OdooScopeCalculatorProps> = ({
  initialIndustry,
  onConfirmAndBook,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    initialIndustry || SAUDI_INDUSTRIES[0].id
  );
  const [teamSize, setTeamSize] = useState<number>(15);
  const [currentSystem, setCurrentSystem] = useState<string>('excel');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'accounting',
    'sales',
    'inventory',
    'purchase',
  ]);
  const [needsZatca, setNeedsZatca] = useState<boolean>(true);
  const [needsCustomDev, setNeedsCustomDev] = useState<boolean>(false);

  // Toggle module selection
  const toggleModule = (moduleId: string) => {
    if (selectedModules.includes(moduleId)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((id) => id !== moduleId));
      }
    } else {
      setSelectedModules([...selectedModules, moduleId]);
    }
  };

  // Calculate scope metrics based on inputs
  const calculateTimeline = () => {
    let baseWeeks = 4;
    // Add weeks based on module count
    baseWeeks += Math.ceil(selectedModules.length * 0.8);
    // Add weeks based on team size
    if (teamSize > 50) baseWeeks += 3;
    else if (teamSize > 20) baseWeeks += 2;
    // Current system migration complexity
    if (currentSystem === 'multiple') baseWeeks += 2;
    else if (currentSystem === 'legacy') baseWeeks += 1.5;
    // Custom dev
    if (needsCustomDev) baseWeeks += 2;

    const minWeeks = Math.max(4, Math.floor(baseWeeks));
    const maxWeeks = minWeeks + 3;
    return `${minWeeks} - ${maxWeeks} أسبوع`;
  };

  const getTier = () => {
    if (teamSize > 50 || selectedModules.length >= 7 || needsCustomDev) {
      return {
        name: 'Enterprise Transformation',
        arabicName: 'المؤسسي الشامل',
        description: 'تطبيق متقدم للشركات والمصانع الكبرى مع بيئة متعددة الشركات وتكاملات API مخصصة ودعم SLA ذهبي.',
      };
    }
    if (teamSize > 15 || selectedModules.length >= 4) {
      return {
        name: 'Professional Scale',
        arabicName: 'الاحترافي المتكامل',
        description: 'الخيار الأكثر طلباً للشركات المتوسطة والمتنامية مع ربط زاتكا ومزامنة المخزون وتدريب الكادر.',
      };
    }
    return {
      name: 'Essential Growth',
      arabicName: 'الأساسي السريع',
      description: 'إطلاق سريع يركز على المحاسبة والفوترة وزاتكا والمبيعات لتمكين المنشأة في وقت قياسي.',
    };
  };

  const calculateSavingsPercentage = () => {
    let pct = 25;
    if (selectedModules.includes('mrp')) pct += 7;
    if (selectedModules.includes('inventory')) pct += 6;
    if (selectedModules.includes('accounting')) pct += 5;
    if (currentSystem === 'excel') pct += 8;
    return Math.min(45, pct);
  };

  const handleReset = () => {
    setSelectedIndustry(SAUDI_INDUSTRIES[0].id);
    setTeamSize(15);
    setCurrentSystem('excel');
    setSelectedModules(['accounting', 'sales', 'inventory', 'purchase']);
    setNeedsZatca(true);
    setNeedsCustomDev(false);
  };

  const handleBookWithSummary = () => {
    const currentIndObj = SAUDI_INDUSTRIES.find((i) => i.id === selectedIndustry);
    const tier = getTier();
    const modulesNames = selectedModules
      .map((id) => ODOO_MODULES.find((m) => m.id === id)?.name || id)
      .slice(0, 5);

    onConfirmAndBook({
      industryName: currentIndObj ? currentIndObj.name : selectedIndustry,
      teamSize,
      timelineWeeks: calculateTimeline(),
      tierName: tier.arabicName,
      modulesCount: selectedModules.length,
      modulesList: modulesNames,
      currentSystem,
    });
  };

  const tier = getTier();
  const timeline = calculateTimeline();
  const savingsPct = calculateSavingsPercentage();

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <Calculator className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>حاسبة المتطلبات والجدول الزمني التقديري</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            قدّر نطاق تطبيق Odoo ومكاسبك التشغيلية
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic">
            أداة هندسية تفاعلية تحسب لك المدة المتوقعة للتنفيذ وحجم المنظومة المناسبة لشركتك خلال ثوانٍ.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section (Col 1 to 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
            {/* Step 1: Industry Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                01. ما هو قطاع أعمال شركتك؟
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SAUDI_INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                      selectedIndustry === ind.id
                        ? 'border-violet-600 bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {ind.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Team Size (Slider) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  02. عدد مستخدمي النظام المتوقع في شركتك
                </label>
                <span className="text-sm font-extrabold text-violet-600 dark:text-violet-400 font-display tabular-nums">
                  {teamSize} مستخدم
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="150"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-violet-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-display">
                <span>3 مستخدمين</span>
                <span>25 مستخدم</span>
                <span>75 مستخدم</span>
                <span>150+ مستخدم</span>
              </div>
            </div>

            {/* Step 3: Current State */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                03. كيف تدير أعمالك حالياً؟ (لتقدير ترحيل البيانات)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'excel', label: 'ملفات إكسل والدفاتر اليدوية' },
                  { id: 'legacy', label: 'برنامج محاسبي قديم محلي' },
                  { id: 'multiple', label: 'عدة برامج منفصلة لكل قسم' },
                  { id: 'new', label: 'شركة جديدة نبدأ من الصفر' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSystem(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-right border transition-all ${
                      currentSystem === item.id
                        ? 'border-violet-600 bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Modules Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  04. الموديولات المطلوبة في النظام ({selectedModules.length} محددة)
                </label>
                <span className="text-[11px] text-slate-500">
                  انقر للاختيار أو الإلغاء
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ODOO_MODULES.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-right border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-violet-600 bg-violet-600/10 text-violet-700 dark:text-violet-300 font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate">{mod.name.split('(')[0]}</span>
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mr-1.5 ${
                          isChecked
                            ? 'bg-violet-600 border-violet-600 text-white'
                            : 'border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        {isChecked && '✓'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Advanced Addons */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={needsZatca}
                  onChange={(e) => setNeedsZatca(e.target.checked)}
                  className="rounded text-violet-600 accent-violet-600"
                />
                <span>تضمين الربط مع هيئة الزكاة والضريبة ZATCA (المرحلة 2)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={needsCustomDev}
                  onChange={(e) => setNeedsCustomDev(e.target.checked)}
                  className="rounded text-violet-600 accent-violet-600"
                />
                <span>الحاجة لبرمجة إضافات خاصة وربط API مخصص</span>
              </label>
            </div>
          </div>

          {/* Results Summary Box (Col 8 to 12) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#0F172A] border border-violet-200 dark:border-violet-900/50 p-6 sm:p-8 shadow-lg shadow-violet-950/10 space-y-6">
              {/* Box Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    التقرير التقديري لنظامك
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-violet-600 flex items-center gap-1"
                  title="إعادة التعيين"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>إعادة ضبط</span>
                </button>
              </div>

              {/* Tier Badge & Info */}
              <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 space-y-1">
                <span className="text-[11px] font-semibold text-violet-700 dark:text-violet-400 block uppercase">
                  المستوى المقترح لشركتك
                </span>
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  باقة التحول {tier.arabicName}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  {tier.description}
                </p>
              </div>

              {/* Calculated Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-violet-500" />
                    <span>المدة التقديرية</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-display tabular-nums">
                    {timeline}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Coins className="w-4 h-4 text-emerald-500" />
                    <span>تقليص الهدر المالي</span>
                  </div>
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-display tabular-nums">
                    حتى ~{savingsPct}%
                  </div>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>الموديولات المشمولة:</span>
                  <span className="font-bold text-slate-900 dark:text-white font-display">
                    {selectedModules.length} موديول متكامل
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>المستخدمين المعتمدين:</span>
                  <span className="font-bold text-slate-900 dark:text-white font-display">
                    {teamSize} مستخدم
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>ربط زاتكا Fatoora:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {needsZatca ? 'مشمول ومعتمد' : 'غير مطلوب'}
                  </span>
                </div>
              </div>

              {/* Main Action to convert */}
              <button
                onClick={handleBookWithSummary}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/25 active:scale-[0.98] transition-all"
              >
                <span>تأكيد النطاق وحجز جلسة استشارة مجانية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
                <span>جلسة استشارية مجانية تماماً مع مهندس استشاري معتمد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
