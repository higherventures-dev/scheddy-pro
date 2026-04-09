'use client';

import {
  UserGroupIcon,
  UserIcon,
  Cog6ToothIcon,
  HomeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  TagIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
  BuildingOfficeIcon,
  CreditCardIcon,
  UsersIcon,
  DocumentTextIcon,
  ReceiptPercentIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

type SubLink = {
  name: string;
  href: string;
  icon?: React.ElementType;
};

type NavGroup = {
  name: string;
  icon: React.ElementType;
  subLinks: SubLink[];
};

const directLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
];

const groupedLinks: NavGroup[] = [

  {
    name: 'Operations',
    icon: ClipboardDocumentListIcon,
    subLinks: [
      { name: 'Jobs', href: '/dashboard/jobs', icon: ClipboardDocumentListIcon },
      { name: 'Work', href: '/dashboard/work', icon: WrenchScrewdriverIcon },
      { name: 'Schedule', href: '/dashboard/calendar', icon: CalendarIcon },
    ],
  },

{
  name: 'Service Locations',
  icon: BuildingOfficeIcon,
  subLinks: [
    { name: 'All Locations', href: '/dashboard/locations', icon: BuildingOfficeIcon },
    { name: 'Managed Locations', href: '/dashboard/locations/scheddy', icon: PencilSquareIcon },
    { name: 'External Locations', href: '/dashboard/locations/external', icon: TagIcon },
  ],
},

  {
    name: 'People',
    icon: UsersIcon,
    subLinks: [
      { name: 'Clients', href: '/dashboard/clients', icon: UserGroupIcon },
      { name: 'Team', href: '/dashboard/team', icon: UsersIcon },
    ],
  },

  {
    name: 'Sales',
    icon: CreditCardIcon,
    subLinks: [
      { name: 'Services', href: '/dashboard/services', icon: WrenchScrewdriverIcon },
      { name: 'Estimates', href: '/dashboard/estimates', icon: DocumentTextIcon },
      { name: 'Invoices', href: '/dashboard/sales', icon: ReceiptPercentIcon },
      { name: 'Payments', href: '/dashboard/payments', icon: CreditCardIcon },
      { name: 'Reports', href: '/dashboard/reports', icon: ChartBarIcon },
    ],
  },

  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    subLinks: [
      { name: 'Bookings', href: '/dashboard/settings/bookings', icon: CalendarIcon },
      { name: 'Calendar', href: '/dashboard/settings/calendar', icon: CalendarIcon },
      { name: 'Integrations', href: '/dashboard/settings/integrations', icon: Cog6ToothIcon },
    ],
  },

];

export default function Navigation() {

  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const initiallyOpen = useMemo(() => {

    const currentGroup =
      groupedLinks.find(group =>
        group.subLinks.some(sub =>
          pathname.startsWith(sub.href)
        )
      );

    return currentGroup?.name ?? null;

  }, [pathname]);

  const [openMenu,setOpenMenu] =
  useState<string | null>(initiallyOpen);

  const handleSignOut =
  async () => {

    await supabase.auth.signOut();

    router.push('/auth/sign-in');

  };

  return (

    <div className="flex h-full flex-col justify-between">

      <div className="space-y-2">

        {/* Dashboard */}

        {directLinks.map(link=>{

          const isActive =
          pathname === link.href;

          const LinkIcon =
          link.icon;

          return (

            <Link
              key={link.name}
              href={link.href}

              className={clsx(

                'flex items-center gap-2 rounded-md p-3 text-xs font-medium transition-colors',

                {
                  'bg-white/10 text-[#69AADE]':isActive,

                  'text-white hover:bg-white/10 hover:text-[#69AADE]':!isActive,
                }

              )}
            >

              <LinkIcon className="w-4"/>

              <span>{link.name}</span>

            </Link>

          );

        })}

        {/* Groups */}

        {groupedLinks.map(group=>{

          const isOpen =
          openMenu === group.name;

          const hasActiveChild =
          group.subLinks.some(sub=>
            pathname.startsWith(sub.href)
          );

          const GroupIcon =
          group.icon;

          return (

            <div key={group.name}>

              <button

                onClick={()=>
                  setOpenMenu(
                    isOpen
                    ? null
                    : group.name
                  )
                }

                className={clsx(

                  'flex w-full items-center justify-between rounded-md p-3 text-xs font-medium transition-colors',

                  {
                    'bg-white/10 text-[#69AADE]':
                    isOpen || hasActiveChild,

                    'text-white hover:bg-white/10 hover:text-[#69AADE]':
                    !isOpen && !hasActiveChild,
                  }

                )}

              >

                <div className="flex items-center gap-2">

                  <GroupIcon className="w-4"/>

                  <span>{group.name}</span>

                </div>

                <ChevronDownIcon

                  className={clsx(

                    'w-4 transition-transform',

                    {
                      'rotate-180':isOpen,
                    }

                  )}

                />

              </button>

              {isOpen &&(

                <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">

                  {group.subLinks.map(sub=>{

                    const isActive =
                    pathname === sub.href;

                    const SubIcon =
                    sub.icon;

                    return(

                      <Link

                        key={sub.name}
                        href={sub.href}

                        className={clsx(

                          'flex items-center gap-2 rounded-md px-3 py-2 text-xs transition-colors',

                          {
                            'bg-white/10 text-[#69AADE]':isActive,

                            'text-white hover:bg-white/10 hover:text-[#69AADE]':!isActive,
                          }

                        )}

                      >

                        {SubIcon &&
                          <SubIcon className="w-4"/>
                        }

                        <span>{sub.name}</span>

                      </Link>

                    );

                  })}

                </div>

              )}

            </div>

          );

        })}

      </div>

      {/* Logout */}

      <button

        onClick={handleSignOut}

        className="mt-4 flex items-center gap-2 rounded-md p-3 text-xs font-medium text-white hover:bg-white/10 hover:text-[#69AADE]"

      >

        <UserIcon className="w-4"/>

        Logout

      </button>

    </div>

  );

}