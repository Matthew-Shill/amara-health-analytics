import { LOGO } from "@/lib/brand";

export function BrandMark() {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">
      <img
        src={LOGO.iconTeal}
        alt=""
        className="size-11 shrink-0 max-w-none object-contain sm:size-14 md:size-16"
        width={64}
        height={64}
        aria-hidden
      />
      <div className="flex min-w-0 flex-col justify-center overflow-hidden leading-none">
        <span className="truncate font-headline text-[1.15rem] font-semibold tracking-[0.04em] text-smoked-teal sm:text-[1.65rem] sm:tracking-[0.06em] md:text-[1.85rem]">
          AMILA
        </span>
        <span className="mt-0.5 truncate font-body text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-smoked-teal sm:mt-1.5 sm:text-xs sm:tracking-[0.14em] md:text-[0.8rem]">
          Health Analytics
        </span>
      </div>
    </div>
  );
}
