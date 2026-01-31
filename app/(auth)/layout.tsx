import React from "react";
import Logo from "@/components/logo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col items-center justify-center
     h-screen w-full mx-auto"
    >
      <div
        className="flex flex-col items-center justify-center gap-6
       w-full rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center justify-center">
          <Logo className="w-full text-6xl mx-auto" iconSize={60}/>
          <h1 className="text-3xl text-muted-foreground font-semibold">
            Web Scraping Made Easy
          </h1>
        </div>
        <div className="my-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
