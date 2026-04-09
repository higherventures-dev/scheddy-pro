import { createClient } from '@/utils/supabase/server';
import "@/styles/globals.css";
import { Geist, Inter } from "next/font/google";
import Header from '@/components/HeaderAuth';
import SideBar from '@/ui/dashboard/sidebar';
import ArtistSideBar from '@/ui/dashboard/artist-sidebar';
import StudioSideBar from '@/ui/dashboard/studio-sidebar';
import CustomerSideBar from '@/ui/dashboard/customer-sidebar';
import AdminSideBar from '@/ui/dashboard/admin-sidebar';
import Image from 'next/image';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ramp Vendor Portal",
  description: "Vendor Orchestration",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default async function DashboardLayout({
  children,
}: {
  children: React.Node;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user?.id;
  let UserSidebar = SideBar;

  let profile: {
    role?: string;
    business_name?: string;
    first_name?: string;
    last_name?: string;
    logo_url?: string;
    display_name: string;
  } | null = null;

  if (userId) {
    const { data } = await supabase
      .from('profiles')
      .select('role, business_name, first_name, last_name, logo_url, display_name')
      .eq('id', userId)
      .single();

    profile = data;

    const role = profile?.role?.toLowerCase();

    if (role === 'artist') UserSidebar = ArtistSideBar;
    else if (role === 'studio') UserSidebar = StudioSideBar;
    else if (role === 'client') UserSidebar = CustomerSideBar;
    else if (role === 'admin') UserSidebar = AdminSideBar;
  }

  return (
    <main className={`min-h-screen ${inter.variable} font-sans bg-background text-foreground`}>
      <div className="flex min-h-screen w-full flex-col bg-background md:flex-row">
        
        {/* SIDEBAR */}
        <aside className="w-full flex-none border-r border-border bg-card py-6 px-2 md:w-56 flex flex-col">
          
          {/* TOP LOGO */}
          <div className="flex items-center gap-2 px-3 pb-5 pt-1">
            <Image
              src="/assets/images/ramp-dashboard-logo.png"
              alt="Ramp Logo"
              width={144}
              height={35}
              priority
              className="mx-auto h-auto"
            />
          </div>

          {/* SIDEBAR NAVIGATION - flex-1 expands to push footer down */}
          <div className="flex-1 overflow-y-auto">
            <UserSidebar />
          </div>

          {/* POWERED BY FOOTER */}
          <div className="mt-auto pt-6 pb-2 px-3 border-t border-border/40">
            <p className="text-[10px] text-muted-foreground uppercase tracking-tighter text-center">
              Powered By
            </p>
            <p className="text-xs font-semibold text-center text-foreground/70">
              Scheddy &reg;
            </p>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <section className="flex min-w-0 flex-1 flex-col bg-background">
          <div className="p-4 md:p-6">
            <Header />
          </div>

          <div className="px-4 md:px-6 flex-1">
            {children}
          </div>
        </section>

      </div>
    </main>
  );
}