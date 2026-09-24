/**
 * إعدادات الموقع المركزية
 * غيّر ما يلي فقط لتحديث الهوية وروابط التواصل في كل الصفحة.
 */

export const BRAND = {
  /** اسم الشركة — يظهر في النافبار والفوتر وكل الأقسام */
  name: 'شركة إتقان للإستثمار الحلال',
  nameEn: 'Al-Itqan Digital',
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
  { id: 'advantages', label: 'لماذا شركة إتقان للإستثمار الحلال' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'packages', label: 'الباقات' },
  { id: 'pamm', label: 'Pumps' },
  { id: 'ipo', label: 'الاكتتابات' },
] as const

export const FOOTER_LINKS = {
  تصفح: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'advantages', label: 'لماذا شركة إتقان للإستثمار الحلال' },
    { id: 'about', label: 'من نحن' },
    { id: 'pamm', label: 'Pumps' },
    { id: 'packages', label: 'الباقات' },
    { id: 'ipo', label: 'الاكتتابات' },
    { id: 'contact', label: 'تواصل معنا' },
  ],
} as const

export const RISK_DISCLAIMER =
  'الاستثمار ينطوي على مخاطر، والعوائد غير مضمونة ما لم ينص على خلاف ذلك بشكل قانوني وواضح.'
