import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_COOKIE = "admin_session";

// Simple hash comparison (in production, use bcrypt)
async function verifyPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}

export async function POST(request: NextRequest) {
  try {
    const { action, password } = await request.json();

    if (action === "login") {
      if (!password) {
        return NextResponse.json(
          { error: "Password required" },
          { status: 400 }
        );
      }

      const isValid = await verifyPassword(password);

      if (!isValid) {
        return NextResponse.json(
          { error: "Invalid password" },
          { status: 401 }
        );
      }

      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set(AUTH_COOKIE, "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    if (action === "logout") {
      const cookieStore = await cookies();
      cookieStore.delete(AUTH_COOKIE);
      return NextResponse.json({ success: true });
    }

    if (action === "verify") {
      const cookieStore = await cookies();
      const session = cookieStore.get(AUTH_COOKIE);
      return NextResponse.json({
        authenticated: session?.value === "authenticated",
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
