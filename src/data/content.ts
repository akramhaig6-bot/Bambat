import { CONTACT } from '../config/site'

export type MarketId = 'sa' | 'ae' | 'kw' | 'usd'

export type Market = {
  id: MarketId
  flag: string
  label: string
  currency: string
  /** رمز العملة المختصر داخل البطاقة */
  symbol: string
  sectionId: string
}

export const MARKETS: Market[] = [
  { id: 'sa', flag: '🇸🇦', label: 'السعودية', currency: 'ريال سعودي', symbol: 'ر.س', sectionId: 'market-sa' },
  { id: 'ae', flag: '🇦🇪', label: 'الإمارات', currency: 'درهم', symbol: 'د.إ', sectionId: 'market-ae' },
  { id: 'kw', flag: '🇰🇼', label: 'الكويت', currency: 'دينار', symbol: 'د.ك', sectionId: 'market-kw' },
  { id: 'usd', flag: '💵', label: 'الدولار', currency: 'دولار أمريكي', symbol: '$', sectionId: 'market-usd' },
]

export type PackageItem = {
  id: string
  /** رأس المال */
  capital: string
  /** العائد المعلن */
  returns: string
  /** مدة الاستثمار */
  duration: string
}

export type MarketGroup = {
  market: MarketId
  /** عروض الاستثمار */
  offers: PackageItem[]
  /** فئة رجال الأعمال */
  business: PackageItem[]
  /** ملاحظة أسفل القسم (اختياري) */
  note?: string
}

const saOffers: PackageItem[] = [
  { id: 'sa-1', capital: '1,000 ريال سعودي', returns: '450 ريال', duration: '7 أيام' },
  { id: 'sa-2', capital: '1,500 ريال سعودي', returns: '560 ريال', duration: '7 أيام' },
  { id: 'sa-3', capital: '2,000 ريال سعودي', returns: '720 ريال', duration: '7 أيام' },
  { id: 'sa-4', capital: '3,000 ريال سعودي', returns: '1,000 ريال', duration: '7 أيام' },
  { id: 'sa-5', capital: '5,000 ريال سعودي', returns: '1,800 ريال', duration: '7 أيام' },
  { id: 'sa-6', capital: '7,000 ريال سعودي', returns: '2,200 ريال', duration: '7 أيام' },
  { id: 'sa-7', capital: '10,000 ريال سعودي', returns: '3,700 ريال', duration: '7 أيام' },
  { id: 'sa-8', capital: '15,000 ريال سعودي', returns: '4,750 ريال', duration: '7 أيام' },
]

const saBusiness: PackageItem[] = [
  { id: 'sa-b1', capital: '5,000 ريال', returns: '2,800 ريال', duration: 'حسب الشروط' },
  { id: 'sa-b2', capital: '10,000 ريال', returns: '5,800 ريال', duration: 'حسب الشروط' },
  { id: 'sa-b3', capital: '15,000 ريال', returns: '7,300 ريال', duration: 'حسب الشروط' },
  { id: 'sa-b4', capital: '20,000 ريال', returns: '11,400 ريال', duration: 'حسب الشروط' },
  { id: 'sa-b5', capital: '30,000 ريال', returns: '17,000 ريال', duration: 'حسب الشروط' },
  { id: 'sa-b6', capital: '50,000 ريال', returns: '28,000 ريال', duration: 'حسب الشروط' },
]

const aeOffers: PackageItem[] = [
  { id: 'ae-1', capital: '1,500 درهم', returns: '550 درهم', duration: '7 أيام' },
  { id: 'ae-2', capital: '3,000 درهم', returns: '1,100 درهم', duration: '7 أيام' },
  { id: 'ae-3', capital: '5,000 درهم', returns: '1,650 درهم', duration: '7 أيام' },
  { id: 'ae-4', capital: '7,000 درهم', returns: '2,000 درهم', duration: '7 أيام' },
  { id: 'ae-5', capital: '10,000 درهم', returns: '3,900 درهم', duration: '7 أيام' },
  { id: 'ae-6', capital: '15,000 درهم', returns: '5,750 درهم', duration: '7 أيام' },
]

const aeBusiness: PackageItem[] = [
  { id: 'ae-b1', capital: '5,000 درهم', returns: '3,000 درهم', duration: 'حسب الشروط' },
  { id: 'ae-b2', capital: '10,000 درهم', returns: '6,000 درهم', duration: 'حسب الشروط' },
  { id: 'ae-b3', capital: '20,000 درهم', returns: '12,000 درهم', duration: 'حسب الشروط' },
  { id: 'ae-b4', capital: '30,000 درهم', returns: '17,000 درهم', duration: 'حسب الشروط' },
  { id: 'ae-b5', capital: '40,000 درهم', returns: '24,000 درهم', duration: 'حسب الشروط' },
  { id: 'ae-b6', capital: '50,000 درهم', returns: '30,000 درهم', duration: 'حسب الشروط' },
]

const kwOffers: PackageItem[] = [
  { id: 'kw-1', capital: '410 دينار', returns: '180 دينار', duration: '7 أيام' },
  { id: 'kw-2', capital: '575 دينار', returns: '210 دينار', duration: '7 أيام' },
  { id: 'kw-3', capital: '822 دينار', returns: '350 دينار', duration: '7 أيام' },
  { id: 'kw-4', capital: '1,230 دينار', returns: '500 دينار', duration: '7 أيام' },
]

const kwBusiness: PackageItem[] = [
  { id: 'kw-b1', capital: '1,000 دينار', returns: '600 دينار', duration: 'حسب الشروط' },
  { id: 'kw-b2', capital: '2,000 دينار', returns: '1,200 دينار', duration: 'حسب الشروط' },
  { id: 'kw-b3', capital: '3,000 دينار', returns: '1,700 دينار', duration: 'حسب الشروط' },
  { id: 'kw-b4', capital: '5,000 دينار', returns: '2,300 دينار', duration: 'حسب الشروط' },
]

const usdPackages: PackageItem[] = [
  { id: 'usd-1', capital: '$300', returns: '$600', duration: '7 أيام' },
  { id: 'usd-2', capital: '$400', returns: '$800', duration: '7 أيام' },
  { id: 'usd-3', capital: '$500', returns: '$1,000', duration: '7 أيام' },
  { id: 'usd-4', capital: '$600', returns: '$1,200', duration: '7 أيام' },
  { id: 'usd-5', capital: '$700', returns: '$1,400', duration: '7 أيام' },
  { id: 'usd-6', capital: '$800', returns: '$1,600', duration: '7 أيام' },
  { id: 'usd-7', capital: '$900', returns: '$1,800', duration: '7 أيام' },
  { id: 'usd-8', capital: '$1,000', returns: '$2,000', duration: '7 أيام' },
  { id: 'usd-9', capital: '$2,000', returns: '$4,000', duration: '7 أيام' },
  { id: 'usd-10', capital: '$3,000', returns: '$6,000', duration: '7 أيام' },
  { id: 'usd-11', capital: '$4,000', returns: '$8,000', duration: '7 أيام' },
  { id: 'usd-12', capital: '$5,000', returns: '$10,000', duration: '7 أيام' },
  { id: 'usd-13', capital: '$10,000', returns: '$20,000', duration: '7 أيام' },
  { id: 'usd-14', capital: '$20,000', returns: '$40,000', duration: '7 أيام' },
]

export const MARKET_GROUPS: MarketGroup[] = [
  {
    market: 'sa',
    offers: saOffers,
    business: saBusiness,
    note: 'الحد الأقصى للاشتراك وفق الشروط المعلنة: 5,000 ريال داخل البلد.',
  },
  {
    market: 'ae',
    offers: aeOffers,
    business: aeBusiness,
  },
  {
    market: 'kw',
    offers: kwOffers,
    business: kwBusiness,
    note: 'الحد الأقصى للاشتراك: 5,000 دينار وفق الشروط المعلنة.',
  },
]

export const USD_PACKAGES = usdPackages

export const HERO_STATS = [
  { title: 'PAMM', desc: 'إدارة واستراتيجيات استثمارية' },
  { title: 'اكتتابات', desc: 'فرص استثمارية مختارة' },
  { title: 'باقات متعددة', desc: 'خيارات حسب رأس المال والعملة' },
]

export const SERVICES = [
  {
    icon: 'chart',
    title: 'PAMM',
    desc: 'حلول لإدارة رأس المال من خلال استراتيجيات ومديرين متخصصين.',
    cta: 'استكشف PAMM',
    target: 'pamm',
  },
  {
    icon: 'document',
    title: 'الاكتتابات',
    desc: 'التعرف على الفرص المطروحة وشروط المشاركة والحد الأدنى للاكتتاب.',
    cta: 'عرض الاكتتابات',
    target: 'ipo',
  },
  {
    icon: 'wallet',
    title: 'الباقات الاستثمارية',
    desc: 'مجموعة من الباقات بمبالغ وعملات ومدة مختلفة.',
    cta: 'عرض الباقات',
    target: 'packages',
  },
  {
    icon: 'gem',
    title: 'فئة رجال الأعمال',
    desc: 'باقات مخصصة لرؤوس الأموال الأعلى وفق الشروط المتاحة.',
    cta: 'استعرض الفئة',
    target: 'business-sa',
  },
]

export const HERO_COPY = {
  /** السطر الأول من العنوان الرئيسي */
  titleLead: 'بوابتك الأولى لأقوى الاكتتابات',
  /** السطر الثاني من العنوان الرئيسي */
  titleHighlight: 'وأسرع البامبات الرقمية!',
  /** النص التعريفي أسفل العنوان */
  intro:
    'لا تكن مجرد مشاهد في سوق الكريبتو بعد اليوم. انضم الآن إلى مجتمعنا الحصري لتلقي إشارات البامب المدروسة والدخول في أقوى الاكتتابات الرقمية قبل الجميع، مدعومًا بأدوات التحليل الحجمي وخبرة صائدي الفرص.',
}

/** ركائز التفوق — تظهر في قسم «كيف نضمن تفوقك في السوق؟» */
export const ADVANTAGES = [
  {
    icon: 'gem',
    title: 'اكتتابات منتقاة بعناية',
    desc: 'نصل إلى المشاريع الناشئة القوية في مراحلها الأولى لضمان الشراء بأقل سعر ممكن قبل الطرح العام وإدراج العملة في المنصات الكبرى.',
  },
  {
    icon: 'trendUp',
    title: 'إشارات بامب مدروسة',
    desc: 'لا نعتمد على الحظ أو العشوائية، بل نستخدم خوارزميات متطورة لتحليل السيولة الفورية، ونحدد لك بدقة وقت الدخول والخروج للحصول على أقصى عائد.',
  },
  {
    icon: 'shield',
    title: 'نظام حماية متكامل',
    desc: 'يقوم خبراؤنا بفحص العقود الذكية للعملات بدقة للتأكد من أمان المشروع وخلوه من الثغرات أو الاحتيال قبل إعلان أي توصية للمجتمع.',
  },
] as const

export const ADVANTAGES_NOTE =
  'التوصيات والإشارات تُشارَك لأغراض الاستعراض والمتابعة، وسوق العملات الرقمية عالي التقلب ويتضمن مخاطر خسارة رأس المال.'

export const PAMM_STEPS = [
  { n: '01', title: 'اختر الاستراتيجية', desc: 'استعرض الخيارات المتاحة.' },
  { n: '02', title: 'تعرف على الشروط', desc: 'راجع الحد الأدنى والرسوم والمخاطر.' },
  { n: '03', title: 'حدد المبلغ', desc: 'اختر رأس المال المناسب لك.' },
  { n: '04', title: 'تواصل معنا', desc: 'أرسل طلبك مباشرة عبر تيليجرام.' },
]

export const DURATIONS = [
  {
    title: '24 ساعة',
    subtitle: 'اشتراك قصير المدى',
    desc: 'تعرف على شروط الباقة وآلية التسوية والدفعات قبل المشاركة.',
  },
  {
    title: '7 أيام',
    subtitle: 'اشتراك أسبوعي',
    desc: 'مدة الاستثمار حسب شروط الباقة، مع توضيح موعد التسوية وآلية صرف المستحقات.',
    featured: true,
  },
  {
    title: '30 يومًا',
    subtitle: 'اشتراك شهري',
    desc: 'مدة استثمار شهرية مع جدول دفعات يتم تحديده وفق شروط المنتج.',
  },
]

export const PAYMENT_METHODS = [
  { title: 'USDT', desc: 'التحويل بالعملة الرقمية', icon: 'usdt' },
  { title: 'Bitcoin', desc: 'الإيداع عبر محفظة Bitcoin', icon: 'btc' },
]

export const JOURNEY_STEPS = [
  { n: '01', title: 'استعرض الباقات', desc: 'اختر الدولة والعملة ورأس المال.' },
  { n: '02', title: 'اختر العرض', desc: 'اطلع على تفاصيل الباقة ومدتها وشروطها.' },
  { n: '03', title: 'تواصل معنا', desc: 'اضغط على زر تيليجرام.' },
  { n: '04', title: 'احصل على التفاصيل', desc: 'سيقوم فريقنا بتوضيح خطوات المشاركة وبيانات الدفع الرسمية.' },
  { n: '05', title: 'ابدأ وفق الشروط', desc: 'بعد مراجعة المعلومات والمخاطر والشروط، يتم استكمال المشاركة عبر القنوات الرسمية.' },
]

export const IPO_FIELDS = [
  { label: 'الحالة', value: 'متاح' },
  { label: 'قيمة المشاركة', value: 'تحدد لاحقًا' },
  { label: 'المدة', value: 'تحدد لاحقًا' },
  { label: 'الحد الأدنى', value: 'تحدد لاحقًا' },
]

export const FAQ_ITEMS = [
  {
    q: 'هل أحتاج إلى التسجيل؟',
    a: 'لا. الصفحة مخصصة لاستعراض الخدمات والباقات، ويمكنك التواصل معنا مباشرة عبر تيليجرام.',
  },
  {
    q: 'كيف أعرف الباقة المناسبة لي؟',
    a: 'اختر الدولة والعملة ثم قارن رأس المال والمدة والشروط. ويمكنك التواصل مع الفريق للحصول على التفاصيل.',
  },
  {
    q: 'هل العوائد مضمونة؟',
    a: 'الاستثمار ينطوي على مخاطر، ولا ينبغي اعتبار أي عائد مضمونًا إلا إذا كان هناك أساس قانوني ووثائق واضحة تثبت ذلك.',
  },
  {
    q: 'ما هو PAMM؟',
    a: 'هو نموذج لإدارة رأس المال ضمن حساب أو استراتيجية يديرها مدير/متداول وفق شروط محددة.',
  },
  {
    q: 'كيف أشارك في الاكتتاب؟',
    a: 'تواصل معنا لمعرفة الفرص المتاحة وشروط المشاركة والوثائق الخاصة بكل اكتتاب.',
  },
  {
    q: 'ما طرق الدفع؟',
    a: 'تختلف حسب المنتج، وتشمل الوسائل المتاحة للشركة مثل USDT وBitcoin إذا كانت معتمدة ومفعلة.',
  },
  {
    q: 'هل يمكن التواصل بدون تسجيل؟',
    a: 'نعم، جميع إجراءات الاستفسار الأولي تتم مباشرة من خلال تيليجرام.',
  },
]

/** رسالة تيليجرام مبدئية تُبنى حسب الباقة */
export const buildInquiry = (label?: string) =>
  label
    ? `مرحبًا، أرغب بالاستفسار عن: ${label} — يرجى تزويدي بالتفاصيل والشروط.`
    : 'مرحبًا، أرغب بالاستفسار عن الخدمات والباقات الاستثمارية المتاحة.'

export const telegramLink = (label?: string) =>
  `${CONTACT.telegram}?text=${encodeURIComponent(buildInquiry(label))}`
