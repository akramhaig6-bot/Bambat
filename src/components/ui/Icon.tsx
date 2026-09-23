import type { SVGProps } from 'react'

export type IconName =
  | 'chart'
  | 'document'
  | 'wallet'
  | 'gem'
  | 'usdt'
  | 'btc'
  | 'whatsapp'
  | 'telegram'
  | 'shield'
  | 'clock'
  | 'check'
  | 'chevronDown'
  | 'menu'
  | 'close'
  | 'arrowLeft'
  | 'sparkle'
  | 'globe'
  | 'handshake'
  | 'trendUp'
  | 'rocket'
  | 'pin'

const paths: Record<IconName, JSX.Element> = {
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M16 12h3M3 8V6.5A1.5 1.5 0 0 1 4.5 5H17" />
    </>
  ),
  gem: (
    <>
      <path d="M12 3l6 4-6 14L6 7z" />
      <path d="M6 7h12M9.5 7l2.5 4 2.5-4" />
    </>
  ),
  usdt: (
    <>
      <path d="M12 3v18M12 6.5c3.2 0 5.5 1.6 5.5 3.6 0 2.2-3 3.1-5.5 3.1S6.5 12.3 6.5 10.1C6.5 8.1 8.8 6.5 12 6.5z" />
      <path d="M9 9.5h6" />
    </>
  ),
  btc: (
    <>
      <path d="M9 5v14M13 5v14M9 9h5a3 3 0 0 1 0 6H9M9 19h6.5" />
      <path d="M6.5 5h9M6.5 19h9" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7A8.5 8.5 0 0 1 8.3 18.4L4 20l1.7-4A8.4 8.4 0 1 1 20.5 11.7z" />
      <path d="M9.2 8.6c.2-.4.4-.4.7-.4h.6c.3 0 .5.1.7.5l.8 1.9c.1.3 0 .5-.1.7l-.4.6c-.1.2-.2.3-.1.5.4.8 1 1.4 1.8 1.8.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.8.9c.3.2.4.3.4.6 0 .3-.3.7-.7.8-.9.3-1.9.2-2.8-.2a7.6 7.6 0 0 1-4-4c-.4-.9-.5-1.9-.2-2.8z" />
    </>
  ),
  telegram: (
    <>
      <path d="M21 5L3 11.5l5.5 2L18 7.5l-7.2 7.2.3 4.3 2.4-3.2 4.3 3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: (
    <>
      <path d="M5 13l4 4L19 7" />
    </>
  ),
  chevronDown: (
    <>
      <path d="M6 9.5l6 6 6-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l3-3 4 4 4-4 4 4 3-3" />
      <path d="M4 9l2.5-2.5a2 2 0 0 1 2.8 0L11 8M20 9l-2.5-2.5a2 2 0 0 0-2.8 0L13 8" />
      <path d="M7 12l5 5 5-5" />
    </>
  ),
  trendUp: (
    <>
      <path d="M4 17l6-6 4 4 6-6" />
      <path d="M20 9V4m0 5h-5" />
    </>
  ),
  rocket: (
    <>
      <path d="M13 4c4 1 7 4 7 8-1 3-4 5-7 6l-3-3-4-1c1-3 3-6 6-7z" />
      <path d="M9.5 14.5L5 19M6.5 17.5l-2 2M9 12l3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
}

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = 20, strokeWidth = 1.6, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}

/** أيقونة واتساب ممتلئة */
export function WhatsAppGlyph({ size = 20, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.73.45 3.42 1.31 4.91L2 22l5.36-1.4a9.83 9.83 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19.44 5.5 9.79 9.79 0 0 0 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.16 8.16 0 0 1-1.26-4.33c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.22c0 4.54-3.7 8.17-8.31 8.17z" />
    </svg>
  )
}

/** أيقونة تيليجرام ممتلئة */
export function TelegramGlyph({ size = 20, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M21.94 4.3 19.2 19.06c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.93c-.22.22-.4.4-.82.4l.29-4.16 7.57-6.84c.33-.29-.07-.45-.51-.16l-9.35 5.89-4.03-1.26c-.88-.27-.89-.88.18-1.3l15.74-6.07c.73-.27 1.36.17 1.12 1.3z" />
    </svg>
  )
}
