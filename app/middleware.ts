import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "admin_session";

export function middleware(request: NextRequest) {
  // Protect admin dashboard routes
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const session = request.cookies.get(AUTH_COOKIE);

    if (session?.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (request.nextUrl.pathname === "/admin") {
    const session = request.cookies.get(AUTH_COOKIE);

    if (session?.value === "authenticated") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/dashboard/:path*"],
};
