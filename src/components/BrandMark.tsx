import Link from 'next/link';

interface BrandMarkProps {
  compact?: boolean;
}

const BrandMark = ({ compact = false }: BrandMarkProps) => {
  return (
    <Link href="#" className="group inline-flex flex-col leading-none" aria-label="Go to top">
      <span
        className={`relative block text-white transition-colors group-hover:text-emerald-100 ${compact ? 'text-3xl' : 'text-5xl'}`}
        style={{ fontFamily: "'Segoe Script', 'Brush Script MT', cursive" }}
      >
        Samarth Shukla
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-75 bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      {!compact && (
        <span className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Junior SDE at Aura AI
        </span>
      )}
    </Link>
  );
};

export default BrandMark;
