import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  async afterAuth(auth, req) {
    const isAuthenticated = !!auth.userId;

    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", req.url));
    }

  },
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
