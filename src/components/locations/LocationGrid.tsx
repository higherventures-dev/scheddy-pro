import clsx from 'clsx';
import { MapPinIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';
import { LocationNode } from '@/data/mockLocations';
import { countChildrenByType } from '@/utils/locationHelpers';
import SourceBadge from './SourceBadge';

type Props = {
  locations: LocationNode[];
  selectedLocationId: string | null;
  onSelect: (location: LocationNode) => void;
};

export default function LocationGrid({
  locations,
  selectedLocationId,
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {locations.map((location) => {
        const buildings = countChildrenByType(location, 'BUILDING');
        const units = countChildrenByType(location, 'UNIT');
        const rooms = countChildrenByType(location, 'ROOM');
        const isSelected = selectedLocationId === location.id;

        return (
          <button
            key={location.id}
            type="button"
            onClick={() => onSelect(location)}
            className={clsx(
              'rounded-2xl border p-5 text-left transition-all',
              isSelected
                ? 'border-[#69AADE]/50 bg-[#1E2638] shadow-lg'
                : 'border-white/10 bg-[#1A1F2E] hover:border-white/20 hover:bg-[#1D2334]'
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{location.name}</h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-white/55">
                  <MapPinIcon className="h-4 w-4" />
                  <span>
                    {[location.city, location.state].filter(Boolean).join(', ') || '—'}
                  </span>
                </div>
              </div>

              <SourceBadge source={location.source} />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-wide text-white/45">
                  Buildings
                </p>
                <p className="mt-1 text-xl font-semibold text-white">{buildings}</p>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-wide text-white/45">
                  Units
                </p>
                <p className="mt-1 text-xl font-semibold text-white">{units}</p>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-wide text-white/45">
                  Rooms
                </p>
                <p className="mt-1 text-xl font-semibold text-white">{rooms}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-5 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-4 w-4" />
                <span>{location.activeJobs ?? 0} active jobs</span>
              </div>

              <div className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4" />
                <span>{location.vendorCount ?? 0} vendors</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}