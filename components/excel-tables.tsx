import type { ReactNode } from 'react'

/* ---------- helpers ---------- */

function Num({ v }: { v: number | null }) {
  if (v === null) return <span className="text-muted-foreground">—</span>
  const negative = v < 0
  const formatted = new Intl.NumberFormat('es-AR').format(Math.abs(v))
  return (
    <span className={negative ? 'font-semibold text-brand-red' : undefined}>
      {negative ? `(${formatted})` : formatted}
    </span>
  )
}

function TableShell({
  caption,
  note,
  children,
}: {
  caption: string
  note?: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-border">
      <p className="border-b border-border bg-brand-tan/50 px-4 py-2.5 text-sm font-bold text-brand-brown">
        {caption}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-right text-xs md:text-sm">
          {children}
        </table>
      </div>
      {note ? (
        <p className="border-t border-border px-4 py-2 text-[11px] leading-snug text-muted-foreground">
          {note}
        </p>
      ) : null}
    </div>
  )
}

/* ---------- Slide 3: Detalle de Gastos por Subcuenta ---------- */

const MONTHS = [
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Sept.',
  'Octubre',
  'Nov.',
  'Dic.',
  'Enero',
  'Febrero',
  'Total',
]

const expenseRows: { label: string; values: number[] }[] = [
  {
    label: 'Administración',
    values: [580, 1019, 1003, 1659, 577, 579, 574, 672, 682, 632, 666, 666, 9309],
  },
  {
    label: 'Alquiler',
    values: [1000, 1100, 1100, 1210, 1210, 1210, 1331, 1331, 1331, 1464, 1464, 1757, 15508],
  },
  {
    label: 'Insumos varios',
    values: [80, 80, 80, 95, 95, 105, 109, 119, 119, 119, 0, 80, 1081],
  },
  {
    label: 'Recursos pedagógicos',
    values: [5905, 6736, 7248, 10745, 8181, 7770, 8527, 8178, 8374, 12585, 8687, 8945, 101881],
  },
  {
    label: 'Servicios',
    values: [588, 1558, 630, 762, 716, 1036, 831, 784, 860, 780, 448, 448, 9441],
  },
]

const sumaTotal = [8153, 10493, 10061, 14471, 10779, 10700, 11372, 11084, 11366, 15580, 11265, 11896, 137220]
const compromisos = [10704, 10988, 10669, 10950, 10384, 10384, 10272, 11235, 11235, 11235, 11410, 11410, 130876]
const matricula = [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 3460]
const superavit = [2839, 783, 896, -3233, -107, -28, -812, 439, 157, -4057, 433, -198, -2884]

const stickyFirst =
  'sticky left-0 z-10 bg-inherit text-left font-semibold whitespace-nowrap'

export function BudgetDetailTable() {
  return (
    <TableShell
      caption="Detalle de Gastos por Subcuenta"
      note="Todos los montos del presupuesto están expresados en miles de pesos (divididos por 1.000) para simplificar la lectura."
    >
      <thead>
        <tr className="bg-brand-gold text-[oklch(0.28_0.03_70)]">
          <th className="sticky left-0 z-10 bg-brand-gold px-3 py-2 text-left font-bold whitespace-nowrap">
            Subcuenta
          </th>
          {MONTHS.map((m) => (
            <th key={m} className="px-3 py-2 font-bold whitespace-nowrap">
              {m}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {expenseRows.map((row, i) => (
          <tr key={row.label} className={i % 2 ? 'bg-secondary' : 'bg-card'}>
            <th scope="row" className={`${stickyFirst} px-3 py-2 text-foreground`}>
              {row.label}
            </th>
            {row.values.map((v, j) => (
              <td key={j} className="px-3 py-2 tabular-nums">
                <Num v={v} />
              </td>
            ))}
          </tr>
        ))}
        <tr className="bg-brand-tan font-bold text-brand-brown">
          <th scope="row" className={`${stickyFirst} bg-brand-tan px-3 py-2`}>
            Suma total
          </th>
          {sumaTotal.map((v, j) => (
            <td key={j} className="px-3 py-2 tabular-nums">
              <Num v={v} />
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={MONTHS.length + 1} className="py-1.5" />
        </tr>
        <tr className="bg-card">
          <th scope="row" className={`${stickyFirst} px-3 py-2 text-foreground`}>
            Compromisos aportes mensuales (*)
          </th>
          {compromisos.map((v, j) => (
            <td key={j} className="px-3 py-2 tabular-nums">
              <Num v={v} />
            </td>
          ))}
        </tr>
        <tr className="bg-secondary">
          <th scope="row" className={`${stickyFirst} bg-secondary px-3 py-2 text-foreground`}>
            Matrícula 2026 (prorrateada)
          </th>
          {matricula.map((v, j) => (
            <td key={j} className="px-3 py-2 tabular-nums">
              <Num v={v} />
            </td>
          ))}
        </tr>
        <tr className="bg-brand-tan font-bold text-brand-brown">
          <th scope="row" className={`${stickyFirst} bg-brand-tan px-3 py-2`}>
            Superávit / Déficit
          </th>
          {superavit.map((v, j) => (
            <td key={j} className="px-3 py-2 tabular-nums">
              <Num v={v} />
            </td>
          ))}
        </tr>
      </tbody>
    </TableShell>
  )
}

/* ---------- Slide 4: Proyección anual ---------- */

type Proj = {
  mes: string
  familias: number
  alumnos: number
  aporte: number
  incremento: string | null
  ingresos: number
  egresos: number
  deficit: number
  obs: string | null
  semestre: 1 | 2
}

const projection: Proj[] = [
  { mes: 'Marzo', familias: 34, alumnos: 38, aporte: 290, incremento: null, ingresos: 10704, egresos: 8153, deficit: 2551, obs: null, semestre: 1 },
  { mes: 'Abril', familias: 35, alumnos: 39, aporte: 290, incremento: null, ingresos: 10988, egresos: 10493, deficit: 495, obs: null, semestre: 1 },
  { mes: 'Mayo', familias: 35, alumnos: 39, aporte: 290, incremento: null, ingresos: 10669, egresos: 10062, deficit: 607, obs: null, semestre: 1 },
  { mes: 'Junio', familias: 33, alumnos: 36, aporte: 320, incremento: '10,34%', ingresos: 10950, egresos: 14471, deficit: -3521, obs: 'Aguinaldo', semestre: 1 },
  { mes: 'Julio', familias: 31, alumnos: 34, aporte: 320, incremento: null, ingresos: 10384, egresos: 10780, deficit: -396, obs: null, semestre: 1 },
  { mes: 'Agosto', familias: 31, alumnos: 34, aporte: 320, incremento: null, ingresos: 10384, egresos: 10700, deficit: -316, obs: null, semestre: 2 },
  { mes: 'Septiembre', familias: 31, alumnos: 34, aporte: 320, incremento: null, ingresos: 10272, egresos: 11371, deficit: -1099, obs: null, semestre: 2 },
  { mes: 'Octubre', familias: 31, alumnos: 34, aporte: 350, incremento: '9,38%', ingresos: 11235, egresos: 11084, deficit: 151, obs: null, semestre: 2 },
  { mes: 'Noviembre', familias: 31, alumnos: 34, aporte: 350, incremento: null, ingresos: 11235, egresos: 11366, deficit: -131, obs: null, semestre: 2 },
  { mes: 'Diciembre', familias: 31, alumnos: 34, aporte: 350, incremento: null, ingresos: 11235, egresos: 15580, deficit: -4345, obs: 'Aguinaldo', semestre: 2 },
  { mes: 'Enero', familias: 31, alumnos: 34, aporte: 350, incremento: null, ingresos: 11410, egresos: 11265, deficit: 145, obs: null, semestre: 2 },
  { mes: 'Febrero', familias: 31, alumnos: 34, aporte: 350, incremento: null, ingresos: 11410, egresos: 11895, deficit: -485, obs: null, semestre: 2 },
]

export function ProjectionTable() {
  return (
    <TableShell
      caption="Proyección Anual — Familias, Alumnos y Aportes"
      note="Ingresos y egresos expresados en miles de pesos. El aporte requerido se muestra en miles ($290 = $290.000)."
    >
      <thead>
        <tr className="bg-brand-gold text-[oklch(0.28_0.03_70)]">
          {['Mes', 'Familias', 'Alumnos', 'Aporte req.', 'Increm. %', 'Ingresos est.', 'Egresos pres.', 'Déficit / Superávit', 'Observación'].map(
            (h, i) => (
              <th
                key={h}
                className={`px-3 py-2 font-bold whitespace-nowrap ${
                  i === 0 ? 'sticky left-0 z-10 bg-brand-gold text-left' : ''
                } ${i === 8 ? 'text-left' : ''}`}
              >
                {h}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody>
        {projection.map((r, i) => {
          const firstOfSemestre2 = r.semestre === 2 && projection[i - 1]?.semestre === 1
          return (
            <tr
              key={r.mes}
              className={`${i % 2 ? 'bg-secondary' : 'bg-card'} ${
                firstOfSemestre2 ? 'border-t-2 border-brand-gold' : ''
              }`}
            >
              <th scope="row" className={`${stickyFirst} px-3 py-2 text-foreground`}>
                {r.mes}
              </th>
              <td className="px-3 py-2 tabular-nums">{r.familias}</td>
              <td className="px-3 py-2 tabular-nums">{r.alumnos}</td>
              <td className="px-3 py-2 tabular-nums font-semibold">
                <Num v={r.aporte} />
              </td>
              <td className="px-3 py-2 tabular-nums">
                {r.incremento ? (
                  <span className="font-semibold text-primary">{r.incremento}</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="px-3 py-2 tabular-nums">
                <Num v={r.ingresos} />
              </td>
              <td className="px-3 py-2 tabular-nums">
                <Num v={r.egresos} />
              </td>
              <td className="px-3 py-2 tabular-nums">
                <Num v={r.deficit} />
              </td>
              <td className="px-3 py-2 text-left text-muted-foreground whitespace-nowrap">
                {r.obs ?? ''}
              </td>
            </tr>
          )
        })}
        <tr className="bg-brand-tan font-bold text-brand-brown">
          <th scope="row" className={`${stickyFirst} bg-brand-tan px-3 py-2`}>
            Total
          </th>
          <td className="px-3 py-2" />
          <td className="px-3 py-2" />
          <td className="px-3 py-2" />
          <td className="px-3 py-2 tabular-nums text-primary">19,72%</td>
          <td className="px-3 py-2" colSpan={4} />
        </tr>
      </tbody>
    </TableShell>
  )
}

export function ProjectionSummary() {
  const items = [
    { label: 'Diferencia acumulada', value: -6344 },
    { label: 'Recaudación Matrícula 2026', value: 3460 },
    { label: 'Saldo Final Estimado', value: -2884 },
  ]
  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-border">
      <table className="w-full border-collapse text-sm">
        <tbody>
          {items.map((it, i) => (
            <tr key={it.label} className={i % 2 ? 'bg-secondary' : 'bg-card'}>
              <th
                scope="row"
                className="px-4 py-2.5 text-left font-semibold text-foreground"
              >
                {it.label}
              </th>
              <td className="px-4 py-2.5 text-right tabular-nums font-bold">
                <Num v={it.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
