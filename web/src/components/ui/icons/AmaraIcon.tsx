import type { ReactNode, SVGProps } from "react";

export type AmaraIconName =
  | "disconnected-data"
  | "profit-blind-spot"
  | "retention-gap"
  | "inventory-waste"
  | "manual-reporting"
  | "business-performance"
  | "profit-leakage"
  | "inventory-tracking"
  | "patient-retention"
  | "provider-performance"
  | "ai-recommendations"
  | "growth-decisions"
  | "collect-data"
  | "analyze-patterns"
  | "report-dashboard"
  | "act-priority"
  | "business-insights"
  | "operational-clarity"
  | "growth-insights"
  | "ai-insights"
  | "executive-summary"
  | "ask-data"
  | "forecasting"
  | "opportunity-detection"
  | "discovery"
  | "assessment"
  | "insights-buildout"
  | "strategic-recommendations"
  | "optimization"
  | "aesthetic-clinic"
  | "med-spa"
  | "private-practice"
  | "wellness-clinic"
  | "therapy-practice"
  | "health-startup"
  | "multi-provider";

interface AmaraIconProps extends SVGProps<SVGSVGElement> {
  name: AmaraIconName;
}

function IconBase({ children, className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

const ICONS: Record<AmaraIconName, ReactNode> = {
  "disconnected-data": (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7" strokeDasharray="2.5 2.5" />
    </>
  ),
  "profit-blind-spot": (
    <>
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M9.5 9.5c.8-1 2.2-1 3 0" />
      <path d="M10 14c.8.8 2.2.8 3 0" />
    </>
  ),
  "retention-gap": (
    <>
      <path d="M16 19v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="8" r="3" />
      <path d="M18 12v6" />
      <path d="M15 15h6" />
    </>
  ),
  "inventory-waste": (
    <>
      <path d="M4 8h16l-1.2 10H5.2L4 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M8 14h8" />
      <path d="M12 11v6" />
      <path d="M10 13l4 4M14 13l-4 4" />
    </>
  ),
  "manual-reporting": (
    <>
      <path d="M7 4h7l3 3v13H7V4Z" />
      <path d="M14 4v4h4" />
      <path d="M9 12h6M9 16h4" />
      <circle cx="18" cy="6" r="3.5" />
      <path d="M18 4.5v3M16.8 6h2.4" />
    </>
  ),
  "business-performance": (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </>
  ),
  "profit-leakage": (
    <>
      <path d="M12 3v14" />
      <path d="M8.5 7.5 12 3l3.5 4.5" />
      <path d="M7 19c1.2-2.5 3.4-4 5-4s3.8 1.5 5 4" />
      <path d="M9.5 14.5c.6.8 1.5 1.2 2.5 1.2s1.9-.4 2.5-1.2" />
    </>
  ),
  "inventory-tracking": (
    <>
      <path d="M3 8h18v11H3V8Z" />
      <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      <path d="M8 13h3M13 13h3M8 17h8" />
    </>
  ),
  "patient-retention": (
    <>
      <path d="M8 18v-2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2" />
      <circle cx="12" cy="8" r="3" />
      <path d="M4 12l2 2 4-4" />
    </>
  ),
  "provider-performance": (
    <>
      <path d="M12 3v3" />
      <path d="M8.5 6h7" />
      <circle cx="12" cy="13" r="5" />
      <path d="M10 13h4M12 11v4" />
    </>
  ),
  "ai-recommendations": (
    <>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M5 19c1.5-1 3.2-1.5 5-1.5s3.5.5 5 1.5" />
    </>
  ),
  "growth-decisions": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M12 8l3 3M12 8 9 11" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  "collect-data": (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v4c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 10v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
    </>
  ),
  "analyze-patterns": (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M15 15 20 20" />
      <path d="M8.5 10.5h4M10.5 8.5v4" />
    </>
  ),
  "report-dashboard": (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  "act-priority": (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </>
  ),
  "business-insights": (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <rect x="7" y="12" width="3" height="7" rx="0.5" />
      <rect x="11.5" y="9" width="3" height="10" rx="0.5" />
      <rect x="16" y="6" width="3" height="13" rx="0.5" />
    </>
  ),
  "operational-clarity": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  "growth-insights": (
    <>
      <path d="M4 18h16" />
      <path d="M6 16l4-6 3 3 5-8" />
      <path d="M16 5h3v3" />
    </>
  ),
  "ai-insights": (
    <>
      <path d="M12 2l1.4 4.3L18 8l-4.6 1.7L12 14l-1.4-4.3L6 8l4.6-1.7L12 2Z" />
      <path d="M5 20c1.8-1.2 4-1.8 7-1.8s5.2.6 7 1.8" />
    </>
  ),
  "executive-summary": (
    <>
      <path d="M6 4h10l4 4v12H6V4Z" />
      <path d="M16 4v4h4" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  "ask-data": (
    <>
      <path d="M7 8a5 5 0 0 1 10 0c0 2.5-2 3.5-2 5.5V16" />
      <path d="M11 19h2" />
      <path d="M12 5V3" />
    </>
  ),
  forecasting: (
    <>
      <path d="M4 18h16" />
      <path d="M6 14l3-4 3 2 6-7" />
      <path d="M16 5h3v3" />
      <path d="M18 12v4" strokeDasharray="2 2" />
    </>
  ),
  "opportunity-detection": (
    <>
      <path d="M12 3a7 7 0 0 1 7 7c0 3-2 5.5-4 7H9c-2-1.5-4-4-4-7a7 7 0 0 1 7-7Z" />
      <path d="M10 17h4" />
      <path d="M11 20h2" />
      <path d="M12 8v3" />
      <circle cx="12" cy="7" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  discovery: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
      <path d="M8.5 11h5M11 8.5v5" />
    </>
  ),
  assessment: (
    <>
      <path d="M5 5h14v14H5V5Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  "insights-buildout": (
    <>
      <rect x="3" y="10" width="18" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M7 15h4M13 15h4" />
    </>
  ),
  "strategic-recommendations": (
    <>
      <path d="M4 18 12 6l8 12H4Z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="15.5" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  optimization: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "aesthetic-clinic": (
    <>
      <path d="M12 3c2 3 5 4.5 5 8a5 5 0 1 1-10 0c0-3.5 3-5 5-8Z" />
      <path d="M9.5 14.5c.8 1 2.2 1 3 0" />
    </>
  ),
  "med-spa": (
    <>
      <path d="M12 4c3 4 6 6 6 9a6 6 0 1 1-12 0c0-3 3-5 6-9Z" />
      <path d="M12 8v8" />
    </>
  ),
  "private-practice": (
    <>
      <path d="M10 5h4v3h3v11H7V8h3V5Z" />
      <path d="M10 12h4M10 16h4" />
      <path d="M12 3v2" />
    </>
  ),
  "wellness-clinic": (
    <>
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10Z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
  "therapy-practice": (
    <>
      <path d="M7 9a5 5 0 0 1 10 0v1H7V9Z" />
      <path d="M6 10v8h12v-8" />
      <path d="M9 14h6" />
    </>
  ),
  "health-startup": (
    <>
      <path d="M6 18l6-12 6 12H6Z" />
      <path d="M12 8v4" />
      <path d="M10 12h4" />
    </>
  ),
  "multi-provider": (
    <>
      <circle cx="6" cy="8" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <circle cx="12" cy="16" r="2.5" />
      <path d="M7.8 9.5 10.5 14M16.2 9.5 13.5 14M8.5 8h7" />
    </>
  ),
};

export function AmaraIcon({ name, className, ...props }: AmaraIconProps) {
  return (
    <IconBase className={className} {...props}>
      {ICONS[name]}
    </IconBase>
  );
}

export const PROBLEM_ICONS: AmaraIconName[] = [
  "disconnected-data",
  "profit-blind-spot",
  "retention-gap",
  "inventory-waste",
  "manual-reporting",
];

export const SOLUTION_POINT_ICONS: AmaraIconName[] = [
  "business-performance",
  "profit-leakage",
  "inventory-tracking",
  "patient-retention",
  "provider-performance",
  "ai-recommendations",
  "growth-decisions",
];

export const WORKFLOW_ICONS: AmaraIconName[] = [
  "collect-data",
  "analyze-patterns",
  "report-dashboard",
  "act-priority",
];

export const SERVICE_ICON_NAMES: AmaraIconName[] = [
  "business-insights",
  "operational-clarity",
  "growth-insights",
  "ai-insights",
];

export const AI_CARD_ICONS: AmaraIconName[] = [
  "executive-summary",
  "ask-data",
  "forecasting",
  "opportunity-detection",
];

export const PROCESS_ICONS: AmaraIconName[] = [
  "discovery",
  "assessment",
  "insights-buildout",
  "strategic-recommendations",
  "optimization",
];

export const WHO_WE_HELP_ICONS: Record<string, AmaraIconName> = {
  "Aesthetic Clinics": "aesthetic-clinic",
  "Med Spas": "med-spa",
  "Private Medical Practices": "private-practice",
  "Wellness Clinics": "wellness-clinic",
  "Therapy Practices": "therapy-practice",
  "Health Startups": "health-startup",
  "Multi-Provider Organizations": "multi-provider",
};
