import { AI_INSIGHTS } from "@/lib/content";
import { AmaraIcon, AI_CARD_ICONS } from "@/components/ui/icons/AmaraIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function AIInsightsSection() {
  return (
    <SectionBackdrop id="ai-insights" tone="warm">
      <Reveal>
        <SectionHeading
          eyebrow="Thoughtful technology"
          title="AI-assisted insights, not AI for show."
          subtitle={AI_INSIGHTS.body}
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {AI_INSIGHTS.cards.map((card, i) => (
          <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article className="card-lift h-full rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/70 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.12)] lg:p-7">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--amara-smoked-teal)_10%,white)] ring-1 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_18%,transparent)]">
                <AmaraIcon name={AI_CARD_ICONS[i]} className="h-5 w-5 text-smoked-teal" />
              </span>
              <h3 className="font-headline text-xl font-semibold text-espresso">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                {card.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionBackdrop>
  );
}
