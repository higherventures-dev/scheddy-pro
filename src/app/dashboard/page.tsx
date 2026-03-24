// app/dashboard/page.tsx
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import DashboardClient from './DashboardClient';
import { getVendorDashboardData } from '@/features/dashboard/services/getVendorDashboardData';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect(`/auth/sign-in?next=${encodeURIComponent('/dashboard')}`);
  }

  const vendorName =
    user.user_metadata?.business_name ||
    user.user_metadata?.first_name ||
    'Vendor';

  const dashboardData = await getVendorDashboardData(user.id);

  return (
    <DashboardClient
      vendorName={vendorName}
      dashboardData={dashboardData}
    />
  );
}