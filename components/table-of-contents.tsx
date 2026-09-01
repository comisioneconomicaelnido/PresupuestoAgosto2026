import { ClipboardList } from 'lucide-react'
import { Section } from './section'

const items = [
  'Resumen Presupuesto 2026 — Actualizado',
  'Estimación de Aporte mínimo (Septiembre 2026 a Febrero 2027)',
  'Matrícula 2027',
  'Próximas revisiones presupuestarias',
]

export function TableOfContents() {
  return (
    <Section icon={ClipboardList} title="Contenido">
      <ul className="grid gap-2">
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 ring-1 ring-border"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="font-semibold text-brand-brown">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
