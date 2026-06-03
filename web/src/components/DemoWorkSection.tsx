import { DEMOS, INVENTORY_DEMO } from "@/lib/content";
import { DemoPreview } from "@/components/dashboard/DemoPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

export function DemoWorkSection() {
  return (
    <SectionBackdropWide id="demo-work" tone="default" motif>
      <Reveal>
        <SectionHeading
          eyebrow="Demo work"
          title="See what clarity can look like."
          subtitle="Examples of the clarity and insight Amara can deliver—from retention risk to inventory waste, profitability, and executive decision support."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {DEMOS.map((demo, i) => (
          <Reveal key={demo.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article
              className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-white/75 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.18)]"
              data-case-study-slot={demo.id}
            >
              <div className="relative border-b border-[color-mix(in_srgb,var(--amara-pearl)_60%,var(--amara-nude-stone))] bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-pearl)_70%,white)] to-white p-4 lg:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-smoked-teal">
                  Business question
                </p>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug text-espresso group-hover:text-smoked-teal transition-colors sm:text-xl">
                  {demo.title}
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/80">
                  <DemoPreview variant={demo.variant} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <div className="flex flex-1 flex-col gap-4 text-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Problem Solved
                    </p>
                    <p className="mt-1.5 leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                      {demo.problemSolved}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Key Metrics
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {demo.keyMetrics.map((m) => (
                        <li
                          key={m}
                          className="rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--amara-nude-stone)_30%,white)] to-white px-3 py-1 text-xs font-semibold text-espresso ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)]"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Decisions Supported
                    </p>
                    <ul className="mt-2 space-y-1 text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                      {demo.decisions.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-smoked-teal">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div
          id="inventory-clarity"
          className="mt-14 overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-smoked-teal)_8%,white)] via-white/90 to-[color-mix(in_srgb,var(--amara-pearl)_80%,white)] p-7 shadow-[0_24px_60px_-28px_rgba(75,52,43,0.18)] lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-smoked-teal">
                Inventory Clarity
              </p>
              <h3 className="mt-3 font-headline text-2xl font-semibold leading-snug text-espresso sm:text-3xl">
                {INVENTORY_DEMO.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)] sm:text-base">
                {INVENTORY_DEMO.supportingText}
              </p>
            </div>

            <div className="rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/80 p-5 lg:p-6">
              <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                Example insight snapshot
              </p>
              <dl className="mt-4 space-y-3">
                {INVENTORY_DEMO.rows.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--amara-pearl)_70%,var(--amara-nude-stone))] pb-3 last:border-0 last:pb-0 ${
                      "highlight" in row && row.highlight
                        ? "rounded-xl bg-[color-mix(in_srgb,var(--amara-smoked-teal)_6%,white)] px-3 py-2"
                        : ""
                    }`}
                  >
                    <dt className="text-sm text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                      {row.label}
                    </dt>
                    <dd
                      className={`text-sm font-semibold ${
                        "highlight" in row && row.highlight ? "text-smoked-teal" : "text-espresso"
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 flex justify-center">
          <Button href="#contact">Request Similar Analysis</Button>
        </div>
      </Reveal>
    </SectionBackdropWide>
  );
}
