export function PawMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <g transform="translate(50 55)">
        <ellipse cx="0" cy="20" rx="25" ry="20" />
        <ellipse cx="-22" cy="-2" rx="7.5" ry="10" />
        <ellipse cx="-8" cy="-14" rx="7.5" ry="10" />
        <ellipse cx="8" cy="-14" rx="7.5" ry="10" />
        <ellipse cx="22" cy="-2" rx="7.5" ry="10" />
      </g>
    </svg>
  );
}
