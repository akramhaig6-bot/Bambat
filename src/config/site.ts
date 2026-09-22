/**
 * إعدادات الموقع المركزية
 * غيّر ما يلي فقط لتحديث الهوية وروابط التواصل في كل الصفحة.
 */

export const BRAND = {
  /** اسم الشركة — يظهر في النافبار والفوتر وكل الأقسام */
  name: 'بامبات',
  nameEn: 'Bambat',
  tagline: 'حلول مالية واستثمارية',
  since: 2026,
}

export const CONTACT = {
  /** رابط تيليجرام */
  telegram: 'https://t.me/Rashedalmotairi',
  telegramLabel: 'تيليجرام',
}

export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'packages', label: 'الباقات' },
  { id: 'pamm', label: 'PAMM' },
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
} as const

export const RISK_DISCLAIMER =
  'الاستثمار ينطوي على مخاطر، والعوائد غير مضمونة ما لم ينص على خلاف ذلك بشكل قانوني وواضح.'
