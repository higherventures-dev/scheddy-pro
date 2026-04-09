import { BuildingOfficeIcon, BuildingOffice2Icon, Squares2X2Icon, HomeModernIcon } from '@heroicons/react/24/outline';
import { LocationStats } from '@/utils/locationHelpers';

type Props = {
  stats: LocationStats;
};

const cards = (stats: LocationStats) => [
  {
    name: 'Locations',
    value: stats.locations,
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Buildings',
    value: stats.buildings,
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Units',
    value: stats.units,
    icon: Squares2X2Icon,
  },
  {
    name: 'Rooms',
    value: stats.rooms,
    icon: HomeModernIcon,
  },
];

export default function LocationSummaryCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards(stats).map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.name}
            className="rounded-2xl border border-white/10 bg-[#1A1F2E] p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/50">
                  {card.name}
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {card.value}
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <Icon className="h-6 w-6 text-[#69AADE]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}