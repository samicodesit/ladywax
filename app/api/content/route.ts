import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getBusinessData,
  getLocationsData,
  getNavigationData,
  getHeroData,
  getHighlightsData,
  getFeaturesData,
  getWaxingPageData,
  getCareersPageData,
  getContactPageData,
  writeToEdgeConfig,
} from "@/app/lib/data";

const AUTH_COOKIE = "admin_session";

// Valid content file names
const validFiles = [
  "business",
  "locations",
  "navigation",
  "hero",
  "highlights",
  "features",
  "waxing-page",
  "careers-page",
  "contact-page",
];

// Map file names to getter functions
const fileGetters: Record<string, () => Promise<unknown>> = {
  business: getBusinessData,
  locations: getLocationsData,
  navigation: getNavigationData,
  hero: getHeroData,
  highlights: getHighlightsData,
  features: getFeaturesData,
  "waxing-page": getWaxingPageData,
  "careers-page": getCareersPageData,
  "contact-page": getContactPageData,
};

// Check if user is authenticated
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(AUTH_COOKIE);
  return session?.value === "authenticated";
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    if (!file || !validFiles.includes(file)) {
      return NextResponse.json(
        { error: "Invalid or missing file parameter" },
        { status: 400 }
      );
    }

    const data = await fileGetters[file]();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Content GET error:", error);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    if (!file || !validFiles.includes(file)) {
      return NextResponse.json(
        { error: "Invalid or missing file parameter" },
        { status: 400 }
      );
    }

    const body = await request.json();

    if (!body.data || typeof body.data !== "object") {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    await writeToEdgeConfig(file, body.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Content POST error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to save content", details: message },
      { status: 500 }
    );
  }
}
