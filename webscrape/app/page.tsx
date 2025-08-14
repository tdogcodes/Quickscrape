import LandingPage from "./(home-landing)/page";
import { currentUser } from "@clerk/nextjs/server";
import DashboardLayout from "./(dashboard)/layout";
import HomePage from "./(dashboard)/home/page";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return <LandingPage />;
  }

  return <DashboardLayout children={<HomePage searchParams={{}}/>}/>;
}