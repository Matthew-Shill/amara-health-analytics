import { WHO_WE_HELP } from "@/lib/content";
import { AmaraIcon, WHO_WE_HELP_ICONS } from "@/components/ui/icons/AmaraIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

export function WhoWeHelpSection() {
  return (
    <SectionBackdropWide id="who-we-help" tone="contrast">
      <Reveal>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for healthcare and wellness organizations."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {WHO_WE_HELP.map((card, i) => (
          <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article className="card-lift card-accent group h-full rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/75 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.12)] lg:p-7">
              <div className="mb-4 flex items-center gap-3 rounded-xl bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-smoked-teal)_15%,white)] to-transparent px-3 py-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70 ring-1 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_15%,transparent)]">
                  <AmaraIcon
                    name={WHO_WE_HELP_ICONS[card.title]}
                    className="h-5 w-5 text-smoked-teal"
                  />
                </span>
                <h3 className="font-headline text-xl font-semibold text-espresso group-hover:text-smoked-teal transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                <span className="font-bold text-espresso">Challenge · </span>
                {card.challenges}
              </p>
              <p className="mt-4 rounded-xl bg-[color-mix(in_srgb,var(--amara-smoked-teal)_8%,white)] px-4 py-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)]">
                <span className="font-bold text-smoked-teal">Amara · </span>
                {card.help}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionBackdropWide>
  );
}
