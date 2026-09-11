import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Icon, type IconName } from './Icon'

type SectionHeadingProps = {
  eyebrow?: string
  icon?: IconName
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'start'
  className?: string
}

export function SectionHeading({
  eyebrow,
  icon,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-right'} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <span className={`eyebrow mb-5 ${centered ? '' : ''}`}>
            {icon ? <Icon name={icon} size={16} /> : null}
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="text-balance text-3xl font-extrabold leading-[1.25] sm:text-4xl lg:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-[15px] leading-8 text-white/60 sm:text-base ${
              centered ? 'mx-auto' : ''
            } max-w-2xl`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
