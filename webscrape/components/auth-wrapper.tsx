export const dynamic = "force-dynamic";

import { auth } from "@clerk/nextjs/server";
import LandingPage from "@/app/(landing-page)/page";
import DashboardLayout from "@/app/(dashboard)/layout";
import HomePage from "@/app/(dashboard)/home/page";

export default async function AuthWrapper() {
  const { userId } = await auth();

  if (!userId) {
    return <LandingPage />;
  }

  return (
    <DashboardLayout>
      <HomePage searchParams={{}} />
    </DashboardLayout>
  );
}