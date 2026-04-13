export function GlsLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 120"
      className={className}
      fill="none"
    >
      <path
        d="M50 5L10 25V60C10 85 27 108 50 115C73 108 90 85 90 60V25L50 5Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="68"
        fontFamily="serif"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
      >
        GLS
      </text>
    </svg>
  );
}
