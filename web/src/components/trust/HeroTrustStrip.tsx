import { HERO_TRUST_ITEMS } from "@/lib/trust-content";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";

export function HeroTrustStrip() {
  return (
    <div
      className="mt-10 border-t border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] pt-8"
      aria-label="Privacy and security highlights"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {HERO_TRUST_ITEMS.map((item) => (
          <VerifiedBadge key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
