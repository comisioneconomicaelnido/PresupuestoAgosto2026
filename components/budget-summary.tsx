import { PieChart, Users, Droplets, TrendingDown, ArrowDownRight } from 'lucide-react'
import { Section } from './section'
import { BudgetDetailTable } from './excel-tables'

const references = [
  {
    icon: Users,
    text: 'La cantidad de alumnos se redujo de 39 en Marzo a 34 en Agosto, generando una reducción de los aportes para hacer frente a los gastos.',
  },
  {
    icon: Users,
    text: 'En estos últimos meses hay 3 familias que están presentando atrasos en los pagos por problemas económicos, cuya situación estamos revisando.',
  },
  {
    icon: Droplets,
    text: 'Se incluyó en el presupuesto el gasto en agua, luz e impuestos provinciales/municipales del terreno. Esta proyectado dejar el alquiler de la actual casa a fines de Diciembre, aun no tenemos certeza de ello, quizas pueda extenderse un poco mas, si nos vamos antes usaremos el monto destinado a alquiler para los gastos de mudanza y/o lo que fuese necesario cubrir en la construcción.',
  },
  {
    icon: TrendingDown,
    text: 'Con el valor de la cuota actual se proyecta un déficit de $7.428.000. Se propone un incremento de $30.000 (9,38%) en el aporte desde el mes de Octubre; con esto el déficit proyectado se reduciría a $2.884.000 hasta Febrero 2027.',
  },
]

export function BudgetSummary() {
  return (
    <Section
      icon={PieChart}
      title="Resumen Presupuesto 2026"
      subtitle="Situación actualizada a Agosto 2026"
    >
      <BudgetDetailTable />

      <ul className="mt-5 grid gap-3">
        {references.map(({ icon: Icon, text }, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl bg-card p-4 ring-1 ring-border"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-tan text-brand-brown">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="leading-relaxed text-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <StatCard
          tone="red"
          label="Déficit con el valor actual del aporte"
          value="$7.428.000"
          hint="Proyección sin ajuste"
        />
        <StatCard
          tone="green"
          label="Incremento propuesto"
          value="+9,38%"
          hint="$30.000 desde Octubre"
        />
        <StatCard
          tone="red"
          label="Déficit ajustado"
          value="$2.884.000"
          hint="Proyectado a Feb. 2027"
        />
      </div>
    </Section>
  )
}

function StatCard({
  tone,
  label,
  value,
  hint,
}: {
  tone: 'red' | 'orange' | 'green'
  label: string
  value: string
  hint: string
}) {
  const tones = {
    red: 'bg-brand-red',
    orange: 'bg-primary',
    green: 'bg-brand-green',
  } as const
  return (
    <div className={`rounded-2xl ${tones[tone]} p-5 text-white shadow-sm`}>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-85">
        {label}
      </p>
      <p className="mt-1 flex items-center gap-1.5 text-2xl font-extrabold md:text-3xl">
        <ArrowDownRight className="h-6 w-6 opacity-80" aria-hidden="true" />
        {value}
      </p>
      <p className="mt-1 text-sm font-medium opacity-85">{hint}</p>
    </div>
  )
}
