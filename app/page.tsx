import { SiteHeader } from '@/components/site-header'
import { TableOfContents } from '@/components/table-of-contents'
import { BudgetSummary } from '@/components/budget-summary'
import { MinContribution } from '@/components/min-contribution'
import { ContributionEstimate } from '@/components/contribution-estimate'
import { Matricula } from '@/components/matricula'
import { NextReviews } from '@/components/next-reviews'
import { ThanksFooter } from '@/components/thanks-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl overflow-hidden bg-background shadow-sm md:my-6 md:rounded-2xl md:ring-1 md:ring-border">
        <SiteHeader />
        <div className="grid min-w-0 gap-12 px-5 py-10 md:px-10 md:py-12">
          <TableOfContents />
          <BudgetSummary />
          <MinContribution />
          <ContributionEstimate />
          <Matricula />
          <NextReviews />
          <ThanksFooter />
        </div>
      </div>
    </main>
  )
}
