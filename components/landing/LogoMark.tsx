// Infinitica star mark: a four-point star whose left point loops out into a comet tail.
export default function LogoMark({ className = "", stroke = 2.4 }: { className?: string; stroke?: number }) {
  return (
    <svg className={className} viewBox="6 22 70 54" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        <path d="M55.5 25.5V40Q56.5 51 72.5 52" />
        <path d="M72.5 52Q56 53.5 52 72.5" />
        <path d="M52 72.5Q48.5 54 32 50.5" />
        <path d="M32 50.5Q49.5 49.5 49.5 42.5Q49.5 38 38 34.8L9 27.5" />
      </g>
    </svg>
  );
}
