import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export function Section({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: LucideIcon
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section className="min-w-0 scroll-mt-6">
      <div className="mb-5 flex items-center gap-3 border-b-2 border-brand-tan pb-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-pretty text-xl font-extrabold text-brand-brown md:text-2xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  )
}
