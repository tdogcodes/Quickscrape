"use server"
import { getCreditsPack, PackId } from "@/lib/billing";
import { getAppUrl } from "@/lib/helper/appUrl";
import { stripe } from "@/lib/stripe/stripe";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function purchaseCredits(packId: PackId) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const seletedPack = getCreditsPack(packId);

  if (!seletedPack) {
    throw new Error("Inavlid package");
  }

  const priceId = seletedPack?.priceId;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    invoice_creation: {
      enabled: true,
    },
    success_url: getAppUrl("billing"),
    cancel_url: getAppUrl("billing"),

    // adding custom details to session info via metadata
    metadata: {
      userId,
      packId,
    },
    line_items: [
      {
        quantity: 1,
        price: priceId, // here price refer to priceId from stripe
      },
    ],
  });

  if (!session.url) {
    throw new Error("Cannot create stripe session");
  }

  redirect(session.url);
}