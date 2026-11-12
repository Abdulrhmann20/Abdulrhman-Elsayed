import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowLeft, Phone, Mail, Building, User, FileText } from 'lucide-react';
import { SAUDI_INDUSTRIES } from '../data/nhmData';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    industryName?: string;
    teamSize?: number;
    timelineWeeks?: string;
    tierName?: string;
    modulesCount?: number;
    modulesList?: string[];
  } | null;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  prefillData,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState(prefillData?.industryName || SAUDI_INDUSTRIES[0].name);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefillData?.industryName) {
      setIndustry(prefillData.industryName);
    }
  }, [prefillData]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'يرجى إدخال الاسم الكريم';
    if (!companyName.trim()) errs.companyName = 'يرجى إدخال اسم الشركة أو المؤسسة';
    if (!phone.trim()) {
      errs.phone = 'يرجى إدخال رقم الجوال';
    } else if (!/^05\d{8}$|^5\d{8}$|^\+9665\d{8}$/.test(phone.replace(/\s+/g, ''))) {
      errs.phone = 'يرجى إدخال رقم جوال سعودي صحيح (مثال: 05XXXXXXXX)';
    }
    if (!email.trim()) {
      errs.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'يرجى إدخال بريد إلكتروني صالح للعمل';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompanyName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/40 p-6 sm:p-8 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-arabic">
                تم استلام طلب الاستشارة بنجاح!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                شكراً لتواصلكم مع <strong className="text-violet-600">نهم لحلول الأعمال</strong>. تم إسناد طلبكم لأحد مهندسي Odoo المتخصصين في قطاعكم وسيتم التواصل معكم خلال 24 ساعة عمل لتحديد موعد الجلسة ومناقشة نطاق العمل.
              </p>
            </div>

            {prefillData && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto text-right space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">
                  ملخص النطاق المحسوب:
                </span>
                <div>الباقة المقترحة: {prefillData.tierName || 'مخصص'}</div>
                <div>المدة التقديرية: {prefillData.timelineWeeks}</div>
                <div>عدد المستخدمين: {prefillData.teamSize} مستخدم</div>
              </div>
            )}

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition-colors"
              >
                العودة لتصفح الموقع
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-violet-600 dark:text-violet-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>جلسة تحليل فجوات واستشارة مجانية (بدون التزام)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-arabic">
                احجز استشارة Odoo المتخصصة مع نهم
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                دعنا ندرس الدورة المستندية لشركتك ونقدم لك تصميماً معمارياً مفصلاً يضمن استقرار أعمالك.
              </p>
            </div>

            {/* If came from calculator, show quick summary banner */}
            {prefillData && (
              <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 text-xs text-violet-900 dark:text-violet-200 flex items-center justify-between">
                <span>
                  نطاق محسوب: باقة {prefillData.tierName} · {prefillData.teamSize} مستخدم
                </span>
                <span className="font-display font-bold">{prefillData.timelineWeeks}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    الاسم الكامل *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="text"
                      placeholder="مثال: م. فهد العتيبي"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pr-9 pl-3 py-2 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-500">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    اسم الشركة أو المؤسسة *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="text"
                      placeholder="مثال: شركة الإنشاءات الحديثة"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={`w-full pr-9 pl-3 py-2 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                        errors.companyName ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.companyName && <p className="text-[11px] text-rose-500">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    رقم الجوال السعودي *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pr-9 pl-3 py-2 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 text-right ${
                        errors.phone ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    البريد الإلكتروني للعمل *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="email"
                      dir="ltr"
                      placeholder="name@company.sa"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pr-9 pl-3 py-2 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 text-right ${
                        errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                </div>
              </div>

              {/* Industry Select */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  مجال أو قطاع النشاط
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {SAUDI_INDUSTRIES.map((ind) => (
                    <option key={ind.id} value={ind.name}>
                      {ind.name}
                    </option>
                  ))}
                  <option value="other">قطاع آخر</option>
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  ملاحظات أو تحديات تشغيلية ترغب في حلها (اختياري)
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: نحتاج للربط مع زاتكا المرحلة 2 وضبط تكلفة مشاريع المقاولات..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-50 transition-all shadow-md shadow-violet-600/20"
                >
                  <span>{isSubmitting ? 'جارٍ إرسال الطلب...' : 'تأكيد وحجز موعد الجلسة الاستشارية'}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                بياناتكم مشفرة ومحمية وفق سياسة خصوصية الشركات في المملكة العربية السعودية.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
