import { BarChart3 } from 'lucide-react'
import { Section } from './section'
import { ProjectionTable, ProjectionSummary } from './excel-tables'

const bars = [
  { label: 'Aportes (ciclo)', value: 20, display: '< 20%', tone: 'bg-brand-green' },
  { label: 'Salarios', value: 28, display: '+28%', tone: 'bg-brand-gold' },
  { label: 'Alquiler', value: 40, display: '+40%', tone: 'bg-primary' },
]

export function MinContribution() {
  return (
    <Section
      icon={BarChart3}
      title="Variación del Aporte Mínimo Operativo Promedio"
      subtitle="Proyección del aporte necesario para sostener la estructura de gastos"
    >
      <div className="grid min-w-0 gap-5">
        <ProjectionTable />
        <div className="md:max-w-md">
          <ProjectionSummary />
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl bg-card p-5 ring-1 ring-border">
          <p className="leading-relaxed text-foreground">
            Esta es la proyección de aporte mínimo requerido para soportar toda la
            estructura de gastos. Con el ajuste propuesto para el mes de Octubre, el total
            de incremento en los aportes en este ciclo{' '}
            <strong className="text-brand-brown">no llega al 20%</strong>, mientras que
            los salarios proyectan un ajuste del{' '}
            <strong className="text-brand-brown">28%</strong> y el alquiler un{' '}
            <strong className="text-brand-brown">40%</strong> en el mismo período.
          </p>
          <div className="mt-4 rounded-lg bg-brand-tan/50 px-4 py-3 text-sm font-semibold text-brand-brown">
            Salarios y alquiler representan el <span className="text-primary">86%</span> de
            los gastos.
          </div>
        </div>

        <div className="rounded-xl bg-card p-5 ring-1 ring-border">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Ajuste acumulado en el ciclo
          </p>
          <div className="grid gap-4">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="mb-1 flex items-center justify-between text-sm font-semibold text-brand-brown">
                  <span>{b.label}</span>
                  <span>{b.display}</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${b.tone}`}
                    style={{ width: `${(b.value / 40) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
