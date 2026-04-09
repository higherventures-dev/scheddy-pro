import clsx from 'clsx';
import { LocationSource } from '@/data/mockLocations';

type Props = {
  source: LocationSource;
};

export default function SourceBadge({ source }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide',
        source === 'ramp'
          ? 'border-[#69AADE]/40 bg-[#69AADE]/10 text-[#69AADE]'
          : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
      )}
    >
      {source === 'ramp' ? 'RAMP' : 'Scheddy'}
    </span>
  );
}