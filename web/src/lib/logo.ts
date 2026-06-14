import type { CSSProperties } from "react";
import { LOGO } from "@/lib/brand";

/**
 * Full wordmark logos for header, footer, and other branded surfaces.
 * PNG variants avoid SVG-embedded raster issues on mobile Safari.
 */
export const BRAND_FULL_LOGO_WEB = {
  stone: LOGO.fullStonePng,
  blue: LOGO.fullBluePng,
  pink: LOGO.fullPinkPng,
  espresso: LOGO.fullEspressoPng,
} as const;

/**
 * Web UI icons should use PNG — the SVG versions embed large rasters and scale
 * poorly on mobile Safari when flex layout applies `max-width: 100%`.
 */
export const BRAND_ICON_WEB = {
  stone: LOGO.iconStonePng,
  blue: LOGO.iconBluePng,
  pink: LOGO.iconPinkPng,
  espresso: LOGO.iconEspressoPng,
} as const;

export type BrandMarkLayout = "compact" | "comfortable";

/** Layout presets for {@link BrandMark}. Add new presets here as needed. */
export const BRAND_MARK_LAYOUT = {
  /** Fixed header — tighter height on small screens. */
  compact: {
    logoClass: "brand-full-logo brand-full-logo--compact",
    containerClass: "flex min-w-0 max-w-full items-center",
  },
  /** Footer and other open layouts — scales up on larger screens. */
  comfortable: {
    logoClass: "brand-full-logo brand-full-logo--comfortable",
    containerClass: "flex min-w-0 max-w-full items-center",
  },
} as const satisfies Record<
  BrandMarkLayout,
  {
    logoClass: string;
    containerClass: string;
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
