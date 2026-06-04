import { LOGO } from "@/lib/brand";

export function BrandMark() {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <img
        src={LOGO.iconTeal}
        alt=""
        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16"
        width={64}
        height={64}
        aria-hidden
      />
      <div className="flex min-w-0 flex-col justify-center leading-none">
        <span className="font-headline text-[1.35rem] font-semibold tracking-[0.06em] text-smoked-teal sm:text-[1.65rem] md:text-[1.85rem]">
          AMILA
        </span>
        <span className="mt-1 font-body text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-smoked-teal sm:mt-1.5 sm:text-xs md:text-[0.8rem]">
          Health Analytics
        </span>
      </div>
    </div>
  );
}
