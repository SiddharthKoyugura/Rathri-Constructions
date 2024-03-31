import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
//   publicRoutes: ['/anyone-can-visit-this-route'],
  // Routes that can always be accessed, and have
  // no authentication information
//   ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/contact*",
    "/sign-in",
    "/sign-up",
    "/services",
    "/sites",
    "/about-us",
    "/(api|trpc)(.*)",
  ],
};
