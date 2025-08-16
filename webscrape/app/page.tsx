import { auth } from "@clerk/nextjs/server";
import LandingPage from "./(home-landing)/page";
import DashboardLayout from "./(dashboard)/layout";
import HomePage from "./(dashboard)/home/page";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return <LandingPage />;
  }

  // Redirect logged-in users to /home (or render layout directly)
  return (
    <DashboardLayout>
      <HomePage searchParams={{}} />
    </DashboardLayout>
  );
}
