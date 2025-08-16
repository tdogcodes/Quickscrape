import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/workflows(.*)",
  "/api/webhooks/stripe",
  "/",
]);

export default clerkMiddleware(async (auth, request) => {
  try {
    if (!isPublicRoute(request)) {
      // Instead of await auth().protect() which can throw, use requireAuth() which returns NextResponse if unauthenticated
      await auth().requireAuth?.();
    }
  } catch (err) {
    console.error("Middleware error:", err);
    // Return a redirect to the landing page instead of letting it throw
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
  runtime: "nodejs", // forces Node.js runtime instead of Edge
};
