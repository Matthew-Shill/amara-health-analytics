import { COMPANY_NAME } from "@/lib/brand";
import {
  BRAND_ICON_WEB,
  BRAND_MARK_LAYOUT,
  BRAND_WORDMARK,
  type BrandMarkLayout,
} from "@/lib/logo";

type BrandMarkProps = {
  /** `compact` for the fixed header; `comfortable` for footer and open layouts. */
  layout?: BrandMarkLayout;
};

export function BrandMark({ layout = "comfortable" }: BrandMarkProps) {
  const config = BRAND_MARK_LAYOUT[layout];

  return (
    <div className={config.containerClass}>
      <img
        src={BRAND_ICON_WEB.teal}
        alt=""
        className={config.iconClass}
        width={64}
        height={64}
        aria-hidden
      />
      <div
        className={`min-w-0 flex-col justify-center overflow-hidden leading-none ${config.wordmarkClass}`}
      >
        <span className={config.primaryClass}>{BRAND_WORDMARK.primary}</span>
        <span className={config.secondaryClass}>{BRAND_WORDMARK.secondary}</span>
      </div>
      {config.iconOnlyAccessibleLabel ? (
        <span className="sr-only min-[380px]:hidden sm:hidden">{COMPANY_NAME}</span>
      ) : null}
    </div>
  );
}
