import Link from 'next/link';

interface BrandMarkProps {
  compact?: boolean;
}

const BrandMark = ({ compact = false }: BrandMarkProps) => {
  return (
    <Link href="#" className="group inline-flex flex-col leading-none" aria-label="Go to top">
      <span
        className={`font-display relative block font-bold tracking-tight text-foreground transition-colors ${compact ? 'text-xl' : 'text-3xl'}`}
      >
        Samarth<span className="text-gradient">.</span>
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-75 bg-gradient-to-r from-transparent via-[hsl(var(--aurora-2))] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      {!compact && (
        <span className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Software Engineer
        </span>
      )}
    </Link>
  );
};

export default BrandMark;
