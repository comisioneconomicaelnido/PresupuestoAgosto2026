import { CalendarClock } from 'lucide-react'
import { Section } from './section'

const reviews = [
  {
    date: 'Revisión Mayo 2026',
    status: 'Completada',
    tone: 'done',
    text: 'Se revisó el primer trimestre, de Marzo a Mayo, y se definió el nuevo aporte mínimo operativo para los meses de Junio hasta Agosto.',
  },
  {
    date: 'Revisión Agosto 2026',
    status: 'Actual',
    tone: 'current',
    text: 'Revisamos la situación económica y el aporte mínimo necesario para sostener la estructura de costos hasta Febrero 2027, y comunicamos el valor de la matrícula para el ciclo 2027/2028.',
  },
  {
    date: 'Revisión Marzo 2027',
    status: 'Próxima',
    tone: 'next',
    text: 'Iniciaremos Marzo 2027 con el mismo aporte mínimo y, a fines de ese mes, comunicaremos el aporte necesario desde Abril a Junio 2027.',
  },
]

const badgeTone: Record<string, string> = {
  done: 'bg-brand-green/15 text-brand-green',
  current: 'bg-primary/15 text-primary',
  next: 'bg-brand-gold/20 text-brand-brown',
}

export function NextReviews() {
  return (
    <Section
      icon={CalendarClock}
      title="Próximas Revisiones Presupuestarias"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.date}
            className={`rounded-2xl bg-card p-5 ring-1 ${
              r.tone === 'current' ? 'ring-primary/40' : 'ring-border'
            }`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${badgeTone[r.tone]}`}
            >
              {r.status}
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-brand-brown">{r.date}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{r.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
