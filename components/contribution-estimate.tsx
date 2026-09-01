import { Wallet, HeartHandshake } from 'lucide-react'
import { Section } from './section'

const points = [
  'El aporte mínimo operativo necesario para cubrir los costos se calcula como un promedio de los gastos presupuestados en el semestre dividido la cantidad de alumnos. Se estiman ajustes periódicos en los gastos; para salarios y alquiler se toma la inflación para su actualización, por lo que los montos estimados están en función a una inflación del 3% mensual promedio para los meses restantes del año.',
  'El aporte en concepto de matrícula se prorratea en 12 meses en el presupuesto y se utiliza principalmente para cubrir los desfasajes que generan los pagos de los dos medios aguinaldos. A la fecha aún resta que las familias abonen un 8% de la matrícula. También hay un 8,3% de atraso en el aporte mensual en los meses de Marzo a Agosto que restan abonarse (cinco millones trescientos cincuenta mil).',
  'Considerando la situación económica general, el aumento de los costos producto de la inflación y el déficit por la baja de 5 alumnos respecto al inicio del año, hemos decidido realizar un ajuste del 9,3% en el mes de Octubre, siendo el nuevo aporte mínimo de $350.000. Este será el aporte requerido hasta Marzo 2027 inclusive (recién en ese mes evaluaremos el presupuesto 2027 y comunicaremos el aporte mínimo necesario para los meses siguientes en función a la cantidad de alumnos). Para sostenerlo necesitamos entre todos generar ingresos extras a través de los eventos programados y evitar los atrasos en los aportes.',
  'Las familias que puedan realizar el aporte fraterno para colaborar con el proyecto y ayudar a sostener los desfasajes generados por los atrasos de las familias con dificultades económicas, el mismo será de $40.000, siendo el aporte total de $390.000.',
  ' Les recordamos a las familias que no continuarán el próximo año que el compromiso económico asumido con El Nido se extiende hasta febrero de 2027 inclusive. Nuestra institución opera con un presupuesto ajustado y requiere del aporte de toda la comunidad para sostenerse durante los meses de verano. Mantener la puntualidad en el pago de las cuotas nos permite cumplir en tiempo y forma con compromisos esenciales como los sueldos del personal, el alquiler, los gastos por mantenimiento y servicios.',
]

export function ContributionEstimate() {
  return (
    <Section
      icon={Wallet}
      title="Estimación de Aportes"
      subtitle="Septiembre 2026 — Febrero 2027"
    >
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-brown p-6 text-[oklch(0.97_0.02_84)]">
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
            Aporte mínimo operativo
          </p>
          <p className="mt-1 text-3xl font-extrabold md:text-4xl">ARS 350.000</p>
          <p className="mt-2 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
            +9,3% desde Octubre 2026
          </p>
        </div>
        <div className="rounded-2xl bg-primary p-6 text-white">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide opacity-90">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Aporte fraterno
          </p>
          <p className="mt-1 text-3xl font-extrabold md:text-4xl">ARS 390.000</p>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
            Incluye $40.000 de colaboración
          </p>
        </div>
      </div>

      <ul className="grid gap-3">
        {points.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl bg-card p-4 ring-1 ring-border"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p className="leading-relaxed text-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
