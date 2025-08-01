import { GetAvailableCredits } from "@/actions/billing/get-available-credits";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Coins, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ReactCountWrapper from "./react-count-wrapper";
import { buttonVariants } from "./ui/button";

const UserAvailableCreditsBadge = () => {
  const query = useQuery({
    queryKey: ["user-available-credits"],
    queryFn: () => GetAvailableCredits(),
    refetchInterval: 30 * 1000, // Refetch every 5 minutes
  });

  return (
    <Link
      href={"/billing"}
      className={cn(
        "w-full space-x-2 items-center",
        buttonVariants({ variant: "outline" })
      )}
    >
      <Coins size={20} className="dark:stroke-white" />
      <span className="font-semibold capitalize">
        {query.isLoading && <Loader2Icon className="w-4 h-4 animate-spin" />}
        {!query.isLoading && query.data && (
          <ReactCountWrapper value={query.data} />
        )}
        {!query.isLoading && query.data === undefined && "-"}
      </span>
    </Link>
  );
};

export default UserAvailableCreditsBadge;
