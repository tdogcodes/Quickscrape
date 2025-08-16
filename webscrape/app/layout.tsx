// app/layout.tsx — RootLayout
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AppProvider from "@/components/providers/app-providers";
import { Toaster } from "sonner";
import AuthWrapper from "@/components/auth-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickScrape",
  description: "Web Automation Made Easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary hover:bg-primary/70 text-sm !shadow-none",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AppProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthWrapper>{children}</AuthWrapper>
          </AppProvider>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
