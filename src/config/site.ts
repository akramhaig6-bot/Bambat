/**
 * إعدادات الموقع المركزية
 * غيّر ما يلي فقط لتحديث الهوية وروابط التواصل في كل الصفحة.
 */

export const BRAND = {
  /** اسم الشركة — يظهر في النافبار والفوتر وكل الأقسام */
  name: 'بن بات',
  nameEn: 'Bambat',
  tagline: 'حلول مالية واستثمارية',
  since: 2026,
}

export const CONTACT = {
  /** رابط واتساب — استبدل الرقم برقم الشركة بصيغة دولية بدون + */
  whatsapp: 'https://wa.me/966500000000',
  whatsappLabel: 'واتساب',
  /** رابط تيليجرام */
  telegram: 'https://t.me/bambat',
  telegramLabel: 'تيليجرام',
}

export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'pamm', label: 'PAMM' },
  { id: 'packages', label: 'الباقات' },
  { id: 'ipo', label: 'الاكتتابات' },
  { id: 'faq', label: 'الأسئلة الشائعة' },
] as const

export const FOOTER_LINKS = {
  تصفح: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'pamm', label: 'PAMM' },
    { id: 'packages', label: 'الباقات' },
    { id: 'ipo', label: 'الاكتتابات' },
    { id: 'durations', label: 'أنظمة الاستثمار' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'تواصل معنا' },
  ],
  قانوني: [
    { id: 'terms', label: 'الشروط والأحكام' },
    { id: 'privacy', label: 'سياسة الخصوصية' },
    { id: 'disclaimer', label: 'إخلاء المسؤولية' },
    { id: 'risk', label: 'تحذير المخاطر' },
  ],
} as const

export const RISK_DISCLAIMER =
  'الاستثمار ينطوي على مخاطر، والعوائد غير مضمونة ما لم ينص على خلاف ذلك بشكل قانوني وواضح.'

export const RISK_FOOTER =
  'تحذير المخاطر: جميع الاستثمارات تنطوي على درجة من المخاطر، وقد يتعرض رأس المال للخسارة. العوائد المعروضة أو المستهدفة لا تمثل ضمانًا للنتائج المستقبلية.'
