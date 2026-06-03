import { AmaraIcon, type AmaraIconName } from "@/components/ui/icons/AmaraIcon";

function CheckVerifiedIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5.25 8.25 6.75 9.75 10.75 5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface VerifiedBadgeProps {
  label: string;
  icon?: AmaraIconName;
}

export function VerifiedBadge({ label, icon }: VerifiedBadgeProps) {
  return (
    <span className="verified-trust-badge">
      <span className="verified-trust-badge__mark" aria-hidden>
        {icon ? (
          <AmaraIcon name={icon} className="h-3 w-3" />
        ) : (
          <CheckVerifiedIcon className="h-4 w-4" />
        )}
      </span>
      <span>{label}</span>
    </span>
  );
}
