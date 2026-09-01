import Image from 'next/image'
import { CalendarDays } from 'lucide-react'

export function SiteHeader() {
  return (
    <header>
      <div className="w-full bg-[oklch(0.95_0.03_86)]">
        <Image
          src="/el-nido-banner.png"
          alt="El Nido - Escuela Waldorf"
          width={2064}
          height={512}
          priority
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="bg-brand-brown px-6 py-8 text-center text-[oklch(0.97_0.02_84)]">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight md:text-4xl">
          Revisión Presupuestaria
        </h1>
        <p className="mt-1 text-base font-medium opacity-90 md:text-lg">
          Comisión Económica &ldquo;El Nido&rdquo;
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          Agosto 2026
        </div>
      </div>
    </header>
  )
}
