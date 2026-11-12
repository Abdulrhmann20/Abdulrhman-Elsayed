import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building,
  ShieldCheck,
  Clock,
  Sparkles,
  User,
  MessageSquare,
  FileCheck,
} from 'lucide-react';
import { NHM_COMPANY_INFO } from '../data/nhmData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: 'new_odoo',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'يرجى كتابة الاسم الكريم';
    if (!formData.company.trim()) errs.company = 'يرجى إدخال اسم المنشأة أو الشركة';
    if (!formData.phone.trim()) {
      errs.phone = 'يرجى إدخال رقم الجوال';
    } else if (!/^05\d{8}$|^5\d{8}$|^\+9665\d{8}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'يرجى إدخال رقم جوال سعودي صحيح (مثال: 05XXXXXXXX)';
    }
    if (!formData.email.trim()) {
      errs.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'يرجى إدخال بريد إلكتروني صالح';
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
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      serviceType: 'new_odoo',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-50/70 dark:bg-[#0B1120]/70 border-t border-slate-200/80 dark:border-violet-900/20">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-violet-600/10 dark:bg-violet-600/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-48 w-96 h-96 rounded-full bg-indigo-600/10 dark:bg-violet-900/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with PDF Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/60 px-3.5 py-1 rounded-full border border-violet-200 dark:border-violet-800">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>ابدأ الآن خطوتك الأولى</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-arabic tracking-tight">
            لنبني معاً مستقبل أعمالك الرقمي
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
            تواصل مباشرة مع استشاريي نهم بالرياض لدراسة فجوات العمليات لديك، وتحديد الموديولات المناسبة، وتقديم عرض هندسي وتنفيذي يلبي تطلعاتك.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Contact Form Box (Col 1 to 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/30 p-6 sm:p-8 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-arabic">
                    شكراً لتواصلك مع نهم لحلول الأعمال!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    تم استلام استفسارك بنجاح وسيقوم أحد مستشاري Odoo المعتمدين بالتواصل معك خلال ساعات العمل القادمة لمناقشة التفاصيل.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto text-right">
                  <div>الاسم: {formData.name}</div>
                  <div>الشركة: {formData.company}</div>
                  <div>رقم الجوال: {formData.phone}</div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition-colors"
                  >
                    إرسال استفسار جديد
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-arabic">
                    نموذج طلب استشارة وعرض سعر
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    * حقول مطلوبة
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      الاسم الكامل *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                      <input
                        type="text"
                        placeholder="الاسم الكريم"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pr-9 pl-3 py-2.5 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      اسم الشركة أو المؤسسة *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                      <input
                        type="text"
                        placeholder="اسم شركتك"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full pr-9 pl-3 py-2.5 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                          errors.company ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.company && <p className="text-[11px] text-rose-500">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      رقم الجوال *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                      <input
                        type="tel"
                        dir="ltr"
                        placeholder="05XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pr-9 pl-3 py-2.5 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 text-right ${
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
                        placeholder="user@company.sa"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pr-9 pl-3 py-2.5 text-xs rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 text-right ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    الخدمة أو الاحتياج الأساسي
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="new_odoo">تطبيق نظام Odoo ERP جديد للشركة</option>
                    <option value="zatca">الربط مع هيئة الزكاة والضريبة ZATCA المرحلة الثانية</option>
                    <option value="migration">ترحيل بيانات من نظام قديم أو إكسل</option>
                    <option value="custom_dev">تطوير وتخصيص موديولات Odoo خاصة</option>
                    <option value="sla_support">دعم فني وصيانة مستمرة (SLA)</option>
                    <option value="audit">فحص وتقييم نظام Odoo قائم وتحسين أدائه</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    تفاصيل إضافية عن طبيعة عملك واحتياجك (اختياري)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <textarea
                      rows={3}
                      placeholder="اذكر لنا أي تحديات أو موديولات محددة تهتم بها..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pr-9 pl-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-50 shadow-md shadow-violet-600/20 active:scale-[0.98] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'جارٍ إرسال الطلب...' : 'إرسال الطلب وحجز استشارة مجانية'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
                  <span>استشارة أولية مجانية ودراسة فنية متخصصة بدون أي التزام</span>
                </div>
              </form>
            )}
          </div>

          {/* Col 2: Official Headquarters Card & Direct Trust Channels (Col 8 to 12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-violet-900/40 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="w-11 h-11 rounded-xl bg-violet-600/10 dark:bg-violet-500/20 p-2 flex items-center justify-center border border-violet-500/20">
                  <img
                    src="/assets/aistudio/405ad79a-2508-4697-ba99-9ebb381fe99e_6211a5b1.png"
                    alt="نهم"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    شركة نهم لحلول الأعمال
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-display">
                    NHM Business Solutions · Odoo Partner
                  </span>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      المقر الرئيسي:
                    </span>
                    <span className="leading-relaxed">
                      {NHM_COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      البريد الإلكتروني المباشر:
                    </span>
                    <a
                      href={`mailto:${NHM_COMPANY_INFO.email}`}
                      className="text-violet-600 dark:text-violet-400 hover:underline font-display"
                    >
                      {NHM_COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      أوقات العمل والاستشارات:
                    </span>
                    <span>الأحد إلى الخميس (9:00 ص - 6:00 م) بتوقيت الرياض</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">
                      السجل التجاري والبيانات النظامية:
                    </span>
                    <span>
                      سجل تجاري: {NHM_COMPANY_INFO.commercialRegister} · ص.ب: {NHM_COMPANY_INFO.poBox}
                    </span>
                  </div>
                </div>
              </div>

              {/* Assurance banner */}
              <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-violet-700 dark:text-violet-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>شريك معتمد ومسجل لنظام Odoo</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                  تضمن نهم تطبيقاً معيارياً يضمن لك سهولة الترقية في المستقبل وتوافقاً تاماً مع كافة المتطلبات الحكومية السعودية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
