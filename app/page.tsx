"use client";
import { TypewriterEffectSmooth } from "./_components/type-writer-effect";
import { Button } from "@/components/ui/button";
import { pricingPlans, typeWriterWords } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { FeaturesSection } from "./_components/feature";
import { FeaturesGradient } from "./_components/features-gradient";
import { HoverEffect } from "./_components/card-hover";
import Link from "next/link";
import Navbar from "./_components/navbar";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(239,68,68,${0.2 + i * 0.02})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.015}
                        initial={{ pathLength: 0.3, opacity: 0.9 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3, 0.1],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export default function LandingPage() {
  return (
    <>
      {/* Hero section with floating paths */}
      <div className="containerbg relative">
        <div className="absolute inset-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-2} />
                {/* Fade-out mask at the bottom */}
                <div className="absolute -bottom-10 left-0 right-0 h-64 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] to-transparent pointer-events-none" />
          </div>
        <div className="flex flex-col min-h-screen gap-4 selection:bg-primary selection:text-white dark bg-transparent">
          <Navbar />
          <SectionWrapper className="h-[45rem] mb-20 text-center rounded-lg z-20">
            <TypewriterEffectSmooth words={typeWriterWords} />
            <p className="text-muted-foreground text-sm md:text-xl">
              Create automation workflows and scrape the web with ease.
            </p>
            <p className="text-sm md:text-xl text-primary -mt-4">
              New users get 200 credits for free upon first login
            </p>
            <div className="flex flex-col my-6 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <Button
                className="rounded-xl text-xl p-6 !border-primary border-2 text-white hover:text-white hover:bg-primary"
                variant={"outline"}
              >
                <Link href={"/sign-in"}>Get Started</Link>
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </div>
      
      {/* Rest of page with solid black background */}
      <div className="bg-[rgba(0,0,0)] selection:bg-primary selection:text-white">
          <SectionWrapper
            id="howItWorks"
            primaryTitle="How"
            secondaryTitle="It Works"
          >
            <FeaturesGradient />
          </SectionWrapper>
          <SectionWrapper
            id="scrapingFeatures"
            primaryTitle="Scraping"
            secondaryTitle="Features"
          >
            <FeaturesSection />
          </SectionWrapper>
          <SectionWrapper
            id="pricing"
            className="w-full py-12 md:py-24 lg:py-32"
            primaryTitle="Simple"
            secondaryTitle="Pricing"
          >
            <div className="flex justify-center items-center gap-5 w-full mt-10 mx-auto">
              <HoverEffect items={[...pricingPlans]} />
            </div>
          </SectionWrapper>
    
          <SectionWrapper className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter pb-1 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#22C55E] to-green-600">
              Start Scraping Today
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Join thousands of users who are already leveraging our powerful web
              scraping platform.
            </p>
            <Link
              className="w-max bg-[#22C55E] text-white hover:bg-[#22C55E]/90 transition-colors flex text-xl font-semibold px-4 py-2 rounded-sm items-center"
              href={"/sign-up"}
            >
              Sign Up Now
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <p className="text-md text-gray-500 dark:text-gray-400">
              No credit card required. Start with 200 free credits.
            </p>
          </SectionWrapper>
      </div>
    </>
  );
}

function SectionWrapper({
  children,
  className,
  id,
  primaryTitle,
  secondaryTitle,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
}) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-10 box-border max-w-screen-xl mx-auto scroll-mt-[80px] p-5 md:p-10",
        className
      )}
      id={id}
    >
      <div className="text-2xl md:text-4xl lg:text-6xl text-foreground">
        <span className="text-primary">{primaryTitle}</span>{" "}
        <span className="text-white">{secondaryTitle}</span>
      </div>
      {children}
    </section>
  );
}
