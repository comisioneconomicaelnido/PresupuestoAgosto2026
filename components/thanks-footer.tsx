import { Heart } from 'lucide-react'

export function ThanksFooter() {
  return (
    <footer className="mt-4 rounded-2xl bg-brand-brown px-6 py-12 text-center text-[oklch(0.97_0.02_84)]">
      <Heart className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
        ¡¡MUCHAS GRACIAS!!
      </h2>
      <p className="mt-3 font-semibold opacity-90">
        Comisión Económica &ldquo;El Nido&rdquo;
      </p>
      <p className="text-sm opacity-75">
       
      </p>
    </footer>
  )
}
