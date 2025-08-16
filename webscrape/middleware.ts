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
      // Use protect(), but catch errors to avoid 500
      await auth().protect(); 
    }
  } catch (err) {
    console.error("Middleware auth error:", err);

    // Redirect unauthenticated users to landing page
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
