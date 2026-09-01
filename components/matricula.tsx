import { GraduationCap, Check, Info } from 'lucide-react'
import { Section } from './section'

const tiers = [
  {
    title: 'Familias actuales del nido',
    price: 'ARS 100.000',
    highlight: true,
    details: [
      'Pago único o en 4 cuotas de ARS 25.000.',
      'Desde el 1 de Septiembre hasta el 15 de Diciembre 2026.',
      'Asegura el lugar del alumno en el ciclo siguiente.',
      'Si no se cancela en el período indicado, sube a ARS 130.000 y el lugar queda sujeto a disponibilidad.',
    ],
  },
  {
    title: 'Nuevos alumnos 2027',
    price: 'ARS 200.000',
    highlight: false,
    details: [
      'Puede abonarse hasta en 4 cuotas.',
      'El pago no puede extenderse más allá de Junio 2027.',
      'En Junio 2027 debe estar cancelada en su totalidad.',
    ],
  },
]

const notes = [
  'Las familias que ingresen hasta Marzo 2027 abonarán la matrícula completa. Las que se incorporen en los meses siguientes pagarán el costo proporcional por los meses restantes hasta terminar el ciclo (Marzo 2027 a Febrero 2028), reduciendo la carga para quienes ingresen más tarde.',
  'La matrícula abonada en las fechas indicadas nos permite tener visibilidad de los alumnos, de los recursos pedagógicos y del espacio físico necesario para mantener la calidad educativa, planificar y organizarnos correctamente.',
]

export function Matricula() {
  return (
    <Section
      icon={GraduationCap}
      title="Matrícula 2027"
      subtitle="Ciclo 2027 / 2028"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className={`rounded-2xl p-6 ring-1 ${
              tier.highlight
                ? 'bg-card ring-primary/40'
                : 'bg-card ring-border'
            }`}
          >
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              {tier.title}
            </p>
            <p className="mt-1 text-3xl font-extrabold text-primary">{tier.price}</p>
            <ul className="mt-4 grid gap-2.5">
              {tier.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3">
        {notes.map((text, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl bg-brand-tan/40 p-4"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown" aria-hidden="true" />
            <p className="leading-relaxed text-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
