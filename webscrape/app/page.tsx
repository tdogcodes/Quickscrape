import LandingPage from "./(home-landing)/page";
import { auth } from "@clerk/nextjs/server";
import DashboardLayout from "./(dashboard)/layout";
import HomePage from "./(dashboard)/home/page";

export default async function Page() {
  
  const { userId } = await auth()

  if (!userId) {
    return <LandingPage />;
  }

  return (
    <DashboardLayout>
      <HomePage searchParams={{}} />
    </DashboardLayout>
  );
}
