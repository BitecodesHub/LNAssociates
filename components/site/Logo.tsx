import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="LN Associate home"
    >
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* Three red bars */}
        <svg
          viewBox="0 0 44 40"
          className="h-9 w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M4 36L40 24"
            stroke="#0A0A0A"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="transition-transform duration-500 group-hover:-rotate-3 origin-center"
          />
          <rect x="10" y="6" width="5" height="26" rx="1" fill="#E11D2A" />
          <rect x="18" y="2" width="5" height="30" rx="1" fill="#E11D2A" />
          <rect x="26" y="10" width="5" height="22" rx="1" fill="#E11D2A" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-extrabold tracking-tight text-brand-black">
          <span className="text-brand-red">LN</span> Associate
          <sup className="ml-0.5 text-[9px] text-brand-muted">®</sup>
        </span>
        {!compact && (
          <span className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.18em] text-brand-muted">
            Your Reliance, Our Assurance
          </span>
        )}
      </div>
    </Link>
  );
}
