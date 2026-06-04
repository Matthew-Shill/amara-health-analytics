import { DASHBOARD_TRUST_FEATURES } from "@/lib/trust-content";
import { AmilaIcon } from "@/components/ui/icons/AmilaIcon";

export function DashboardTrustCallout() {
  return (
    <aside
      className="rounded-2xl border border-[color-mix(in_srgb,var(--amila-smoked-teal)_22%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--amila-smoked-teal)_10%,white)] to-white/80 p-5 shadow-[0_8px_24px_-12px_rgba(67,105,106,0.18)]"
      aria-label="Dashboard privacy and security features"
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-smoked-teal/15 ring-1 ring-smoked-teal/20"
          aria-hidden
        >
          <AmilaIcon name="shield-check" className="h-4 w-4 text-smoked-teal" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
            Privacy by design
          </p>
          <h4 className="mt-1 font-headline text-base font-semibold text-espresso">
            Designed for PHI-capable analytics
          </h4>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {DASHBOARD_TRUST_FEATURES.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-xs leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_75%,white)] sm:text-sm"
          >
            <AmilaIcon
              name="lock-secure"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-smoked-teal/80"
            />
            {feature}
          </li>
        ))}
      </ul>
    </aside>
  );
}
