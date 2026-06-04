import { COMPLIANCE_ROADMAP, type ComplianceStatus } from "@/lib/trust-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STATUS_CLASS: Record<ComplianceStatus, string> = {
  "In Progress": "compliance-status compliance-status-in-progress",
  Planned: "compliance-status compliance-status-planned",
  Future: "compliance-status compliance-status-future",
};

export function ComplianceRoadmapSection() {
  return (
    <SectionBackdrop id="compliance-roadmap" tone="teal">
      <Reveal>
        <SectionHeading
          eyebrow="Compliance roadmap"
          title="Our Compliance Roadmap"
          subtitle="Amila is being built with a long-term security roadmap appropriate for healthcare analytics and PHI-capable dashboards."
        />
      </Reveal>

      <div className="relative mt-4">
        <div
          className="absolute bottom-8 left-8 top-8 hidden w-0.5 bg-gradient-to-b from-smoked-teal/40 via-nude-stone/50 to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-6 lg:gap-8">
          {COMPLIANCE_ROADMAP.map((step, i) => (
            <Reveal key={step.step} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <li className="relative lg:pl-16">
                <span
                  className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-smoked-teal bg-pearl lg:block"
                  aria-hidden
                />
                <article className="card-lift rounded-2xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_38%,transparent)] bg-white/75 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.1)] sm:p-7 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                        Step {step.step}
                      </p>
                      <h3 className="mt-1 font-headline text-xl font-semibold text-espresso sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <span className={STATUS_CLASS[step.status]}>{step.status}</span>
                  </div>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_72%,white)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-smoked-teal/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionBackdrop>
  );
}
