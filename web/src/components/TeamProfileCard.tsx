import type { TeamMember } from "@/lib/content";

interface TeamProfileCardProps {
  member: TeamMember;
  variant?: "compact" | "full";
}

function displayName(member: TeamMember) {
  if (member.aboutName) {
    return member.aboutName;
  }
  return member.lastName ? `${member.name} ${member.lastName}` : member.name;
}

export function TeamProfileCard({ member, variant = "compact" }: TeamProfileCardProps) {
  const isFull = variant === "full";
  const name = displayName(member);
  const imageCrop = isFull ? member.aboutImage : undefined;
  const imageSizeClass = isFull ? "h-36 w-36 sm:h-44 sm:w-44" : "h-16 w-16";

  return (
    <article
      className={`rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-[color-mix(in_srgb,white_65%,var(--amara-pearl))] shadow-[0_12px_40px_-20px_rgba(75,52,43,0.1)] ${
        isFull ? "p-8 lg:p-10" : "p-6"
      }`}
    >
      <div className={`flex gap-5 ${isFull ? "flex-col sm:flex-row sm:items-start" : "items-start"}`}>
        {member.image ? (
          <div
            className={`relative shrink-0 overflow-hidden rounded-2xl ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] ${imageSizeClass}`}
          >
            {imageCrop ? (
              <img
                src={member.image}
                alt={name}
                className="absolute max-w-none"
                style={{
                  width: `${imageCrop.widthPercent}%`,
                  left: `${imageCrop.leftPercent}%`,
                  top: `${imageCrop.topPercent}%`,
                }}
                width={isFull ? 176 : 64}
                height={isFull ? 176 : 64}
              />
            ) : (
              <img
                src={member.image}
                alt={name}
                className="h-full w-full object-cover"
                width={isFull ? 176 : 64}
                height={isFull ? 176 : 64}
              />
            )}
          </div>
        ) : (
          <div
            className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-smoked-teal)_12%,white)] to-[color-mix(in_srgb,var(--amara-nude-stone)_25%,white)] font-headline font-semibold text-smoked-teal ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] ${
              isFull ? "h-36 w-36 text-3xl sm:h-44 sm:w-44" : "h-16 w-16 text-lg"
            }`}
            aria-hidden
          >
            {member.initials}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3
            className={`font-headline font-semibold text-espresso ${
              isFull ? "text-2xl" : "text-lg"
            }`}
          >
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium text-smoked-teal">{member.title}</p>
          <p
            className={`mt-3 leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)] ${
              isFull ? "text-base" : "text-sm"
            }`}
          >
            {isFull ? member.bio : member.credential}
          </p>
          {!isFull && (
            <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_68%,white)]">
              {member.support}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
