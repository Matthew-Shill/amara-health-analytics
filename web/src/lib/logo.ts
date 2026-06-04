import type { CSSProperties } from "react";
import { LOGO } from "@/lib/brand";

/** Wordmark lines shown beside the icon in {@link BrandMark}. */
export const BRAND_WORDMARK = {
  primary: "AMILA",
  secondary: "Health Analytics",
} as const;

/**
 * Web UI icons should use PNG — the SVG versions embed large rasters and scale
 * poorly on mobile Safari when flex layout applies `max-width: 100%`.
 */
export const BRAND_ICON_WEB = {
  teal: LOGO.iconTealPng,
  stone: LOGO.iconStonePng,
  espresso: LOGO.iconEspressoPng,
} as const;

export type BrandMarkLayout = "compact" | "comfortable";

/** Layout presets for {@link BrandMark}. Add new presets here as needed. */
export const BRAND_MARK_LAYOUT = {
  /** Fixed header — tight spacing; wordmark hidden below 380px. */
  compact: {
    iconClass: "brand-mark-icon brand-mark-icon--compact",
    containerClass: "flex min-w-0 max-w-full items-center gap-2 sm:gap-3",
    wordmarkClass: "hidden min-[380px]:flex sm:flex",
    primaryClass:
      "truncate font-headline text-[1.05rem] font-semibold tracking-[0.03em] text-smoked-teal sm:text-[1.65rem] sm:tracking-[0.06em]",
    secondaryClass:
      "mt-0.5 truncate font-body text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-smoked-teal sm:mt-1.5 sm:text-xs sm:tracking-[0.14em]",
    iconOnlyAccessibleLabel: true,
  },
  /** Footer and other open layouts — always show wordmark; scales up on larger screens. */
  comfortable: {
    iconClass: "brand-mark-icon brand-mark-icon--comfortable",
    containerClass: "flex min-w-0 max-w-full items-center gap-2.5 sm:gap-4",
    wordmarkClass: "flex",
    primaryClass:
      "truncate font-headline text-[1.15rem] font-semibold tracking-[0.04em] text-smoked-teal sm:text-[1.65rem] sm:tracking-[0.06em] md:text-[1.85rem]",
    secondaryClass:
      "mt-0.5 truncate font-body text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-smoked-teal sm:mt-1.5 sm:text-xs sm:tracking-[0.14em] md:text-[0.8rem]",
    iconOnlyAccessibleLabel: false,
  },
} as const satisfies Record<
  BrandMarkLayout,
  {
    iconClass: string;
    containerClass: string;
    wordmarkClass: string;
    primaryClass: string;
    secondaryClass: string;
    iconOnlyAccessibleLabel: boolean;
  }
>;

/** Locked icon dimensions — use when CSS classes cannot be applied (e.g. inline charts). */
export function brandIconStyle(sizePx: number): CSSProperties {
  return {
    width: sizePx,
    height: sizePx,
    minWidth: sizePx,
    maxWidth: sizePx,
    flexShrink: 0,
    objectFit: "contain",
  };
}
