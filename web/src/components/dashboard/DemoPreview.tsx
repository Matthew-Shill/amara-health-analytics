type DemoVariant =
  | "retention"
  | "profitability"
  | "inventory"
  | "provider-value"
  | "marketing"
  | "executive";

interface DemoPreviewProps {
  variant: DemoVariant;
}

export function DemoPreview({ variant }: DemoPreviewProps) {
  const shared = "rounded-lg bg-white/60 p-2";

  if (variant === "retention") {
    return (
      <div className="space-y-2 p-3">
        <div className="flex justify-between text-[10px] font-medium text-smoked-teal">
          <span>90-day retention trend</span>
          <span className="text-espresso">At-risk cohort</span>
        </div>
        <div className={`${shared} h-16`}>
          <div className="flex h-full items-end gap-1">
            {[40, 52, 48, 61, 58, 72, 68].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-smoked-teal/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className={`${shared} text-espresso`}>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
              Churn risk
            </span>
            <p className="font-semibold">24 patients</p>
          </div>
          <div className={`${shared} text-espresso`}>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
              Lifetime value
            </span>
            <p className="font-semibold">$1,840 avg</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "profitability") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { service: "Injectables", margin: "62%", revenue: "$84k" },
          { service: "Laser", margin: "41%", revenue: "$52k" },
          { service: "Skin", margin: "38%", revenue: "$31k" },
        ].map((row) => (
          <div key={row.service} className={`${shared} flex items-center gap-2 text-espresso`}>
            <span className="w-16 shrink-0 font-medium">{row.service}</span>
            <div className="h-1.5 flex-1 rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-smoked-teal"
                style={{ width: row.margin }}
              />
            </div>
            <span className="w-10 text-right font-semibold text-smoked-teal">{row.margin}</span>
            <span className="w-12 text-right">{row.revenue}</span>
          </div>
        ))}
        <p className={`${shared} text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]`}>
          Margin view includes product cost, provider time, and processing fees.
        </p>
      </div>
    );
  }

  if (variant === "inventory") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { label: "Purchased", value: "5,500 units" },
          { label: "Administered", value: "4,800 units" },
          { label: "Expected", value: "700 units" },
          { label: "Actual", value: "520 units" },
        ].map((row) => (
          <div key={row.label} className={`${shared} flex justify-between text-espresso`}>
            <span>{row.label}</span>
            <span className="font-semibold">{row.value}</span>
          </div>
        ))}
        <div className={`${shared} flex justify-between border border-[color-mix(in_srgb,var(--amara-smoked-teal)_20%,transparent)] bg-[color-mix(in_srgb,var(--amara-smoked-teal)_8%,white)] text-smoked-teal`}>
          <span>Variance</span>
          <span className="font-semibold">-180 units</span>
        </div>
      </div>
    );
  }

  if (variant === "provider-value") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { provider: "Dr. A", rebook: "78%", value: "$2.4k" },
          { provider: "Dr. B", rebook: "71%", value: "$2.1k" },
          { provider: "NP C", rebook: "64%", value: "$1.7k" },
        ].map((row) => (
          <div key={row.provider} className={`${shared} grid grid-cols-3 gap-2 text-espresso`}>
            <span className="font-medium">{row.provider}</span>
            <span>Rebook {row.rebook}</span>
            <span className="text-right font-semibold text-smoked-teal">{row.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "marketing") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { channel: "Referral", roi: "6.1×", pct: 85 },
          { channel: "Paid Social", roi: "2.8×", pct: 45 },
          { channel: "Email", roi: "4.4×", pct: 62 },
        ].map((row) => (
          <div key={row.channel} className={`${shared} flex items-center gap-2`}>
            <span className="w-16 shrink-0 text-espresso">{row.channel}</span>
            <div className="h-1.5 flex-1 rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-smoked-teal"
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <span className="font-semibold text-smoked-teal">{row.roi}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-3 text-[10px]">
      {[
        { kpi: "Revenue", val: "$284k" },
        { kpi: "Profit", val: "$96k" },
        { kpi: "Retention", val: "86%" },
        { kpi: "Inventory", val: "-180 units" },
      ].map((row) => (
        <div
          key={row.kpi}
          className={`${shared} flex items-center justify-between text-espresso`}
        >
          <span>{row.kpi}</span>
          <strong>{row.val}</strong>
        </div>
      ))}
      <p className={`${shared} leading-relaxed text-espresso`}>
        Recommended focus: address inventory variance and re-engage at-risk patients.
      </p>
    </div>
  );
}
