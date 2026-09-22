import { createPortal } from 'react-dom'
import { useDialog } from '../hooks/useDialog'
import { BRAND, RISK_FOOTER } from '../config/site'
import { Icon } from './ui/Icon'

export type LegalKey = 'terms' | 'privacy' | 'disclaimer' | 'risk'

export const LEGAL_CONTENT: Record<LegalKey, { title: string; body: string[] }> = {
  terms: {
    title: 'الشروط والأحكام',
    body: [
      `هذه الصفحة تعريفية بخدمات ${BRAND.name} ولا تمثل عرضًا ملزمًا أو عقدًا استثماريًا.`,
      'تُحدد تفاصيل كل باقة أو فرصة — بما يشمل رأس المال والمدة وآلية التسوية — بشكل منفصل قبل المشاركة، وبعد التواصل المباشر مع فريق الشركة.',
      'لا يتم تنفيذ أي مشاركة إلا بعد موافقة المستثمر على الشروط الخاصة بالمنتج وتوضيح المخاطر المرتبطة به.',
      'يحق للشركة تعديل الباقات أو إيقافها في أي وقت، دون أن يؤثر ذلك على الالتزامات القائمة وفق ما تم الاتفاق عليه.',
    ],
  },
  privacy: {
    title: 'سياسة الخصوصية',
    body: [
      'لا تتطلب هذه الصفحة إنشاء حساب أو تسجيل الدخول، ولا يتم جمع بيانات شخصية عبرها.',
      'عند التواصل عبر واتساب أو تيليجرام، تُستخدم البيانات التي تشاركها طوعًا فقط للرد على استفسارك ومتابعة الطلب.',
      'لا يتم بيع أو مشاركة بياناتك مع أطراف خارجية، باستثناء ما يقتضيه الالتزام القانوني أو التنظيمي.',
      'يمكنك في أي وقت طلب حذف محادثاتك أو بياناتك من سجلاتنا عبر قنوات التواصل الرسمية.',
    ],
  },
  disclaimer: {
    title: 'إخلاء المسؤولية',
    body: [
      'المعلومات المعروضة في هذه الصفحة مقدمة لأغراض تعريفية عامة، ولا تُعد نصيحة استثمارية أو قانونية أو ضريبية.',
      'الأرقام والعوائد المعروضة هي عوائد معلنة أو مستهدفة حسب شروط كل منتج، ولا تمثل التزامًا تعاقديًا بالنتائج.',
      'يتحمل المستثمر مسؤولية مراجعة الشروط والمستندات الخاصة بكل منتج قبل اتخاذ قرار المشاركة.',
      'لا تتحمل الشركة مسؤولية أي تحويل يتم إلى عنوان غير رسمي أو دون تأكيد مسبق من فريقها.',
    ],
  },
  risk: {
    title: 'تحذير المخاطر',
    body: [
      RISK_FOOTER,
      'قد تتأثر قيمة الاستثمار بتقلبات الأسواق والعملات الرقمية والظروف الاقتصادية العامة.',
      'الأداء السابق لا يعكس بالضرورة النتائج المستقبلية، ولا يوجد أي استثمار خالٍ من المخاطر.',
      'يُنصح بعدم استثمار مبالغ لا يمكنك تحمل خسارتها، وبتنويع رأس المال وعدم تركيزه في منتج واحد.',
    ],
  },
}

export function LegalModal({
  doc,
  onClose,
}: {
  doc: LegalKey | null
  onClose: () => void
}) {
  const dialogRef = useDialog(Boolean(doc), onClose)

  if (!doc) return null
  const content = LEGAL_CONTENT[doc]

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true" aria-labelledby="legal-dialog-title"
    >
      <div className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm" onClick={onClose} />
      <div ref={dialogRef} tabIndex={-1} className="card relative z-10 max-h-[calc(100dvh-2rem)] overscroll-contain w-full max-w-2xl animate-fade-up overflow-y-auto p-6 sm:p-9">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-900/10 bg-brand-50/70 text-ink-800 transition hover:text-ink-950"
          aria-label="إغلاق"
        >
          <Icon name="close" size={16} />
        </button>

        <h3 id="legal-dialog-title" className="pl-10 text-xl font-extrabold">{content.title}</h3>
        <div className="mt-5 space-y-4">
          {content.body.map((p, i) => (
            <p key={i} className="text-[14px] leading-8 text-ink-800">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-6 rounded-2xl border border-brand-900/10 bg-brand-50/50 px-4 py-3 text-[12px] leading-6 text-ink-600">
          نص template عام — يُرجى مراجعته مع المستشار القانوني للشركة قبل النشر.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-gradient-to-l from-brand-400 to-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:from-brand-500 hover:to-brand-700"
        >
          إغلاق
        </button>
      </div>
    </div>,
    document.body,
  )
}
