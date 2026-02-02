import { createClient } from "@vercel/edge-config";
import { promises as fs } from "fs";
import path from "path";

// Types
export interface BusinessData {
  name: string;
  description: string;
  specialistsCount: string;
  openingHours: string;
  openDays: string;
  tagline: string;
  phone: string;
}

export interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  mapsUrl: string;
  widgetUrl: string;
}

export interface LocationsData {
  amsterdam: Location;
  theHague: Location;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationData {
  items: NavigationItem[];
}

export interface HeroData {
  badge: string;
  headlineTop: string;
  headlineBottom: string;
  subheadline: string;
  image: string;
  floatingBadge: {
    title: string;
    subtitle: string;
  };
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface HighlightsData {
  items: HighlightItem[];
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface FeaturesData {
  title: string;
  titleAccent: string;
  titleBottom: string;
  intro: string;
  items: FeatureItem[];
  image: string;
  imageText: string;
  ctaText: string;
  ctaHref: string;
}

export interface WaxingType {
  name: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WaxingPageData {
  title: string;
  subtitle: string;
  intro: string[];
  brazilian: {
    title: string;
    description: string;
    types: WaxingType[];
  };
  faq: FaqItem[];
  dosAndDonts: {
    do: string[];
    dont: string[];
  };
}

export interface CareersPageData {
  title: string;
  content: string[];
  email: string;
}

export interface ContactPageData {
  title: string;
  intro: string;
  email: string;
}

// Check if Edge Config is available
function isEdgeConfigAvailable(): boolean {
  return !!process.env.EDGE_CONFIG;
}

// Edge Config client for reads
function getEdgeConfigClient() {
  const connectionString = process.env.EDGE_CONFIG;
  if (!connectionString) {
    throw new Error("EDGE_CONFIG environment variable not set");
  }
  return createClient(connectionString);
}

// Fallback: Read from JSON file (for builds without Edge Config)
async function readJsonFile<T>(filename: string): Promise<T> {
  const filePath = path.join(process.cwd(), "data", "content", filename);
  const file = await fs.readFile(filePath, "utf8");
  return JSON.parse(file) as T;
}

// Data loaders - try Edge Config first, fallback to JSON
export async function getBusinessData(): Promise<BusinessData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<BusinessData>("business");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<BusinessData>("business.json");
}

export async function getLocationsData(): Promise<LocationsData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<LocationsData>("locations");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<LocationsData>("locations.json");
}

export async function getNavigationData(): Promise<NavigationData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<NavigationData>("navigation");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<NavigationData>("navigation.json");
}

export async function getHeroData(): Promise<HeroData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<HeroData>("hero");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<HeroData>("hero.json");
}

export async function getHighlightsData(): Promise<HighlightsData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<HighlightsData>("highlights");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<HighlightsData>("highlights.json");
}

export async function getFeaturesData(): Promise<FeaturesData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<FeaturesData>("features");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<FeaturesData>("features.json");
}

export async function getWaxingPageData(): Promise<WaxingPageData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<WaxingPageData>("waxing-page");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<WaxingPageData>("waxing-page.json");
}

export async function getCareersPageData(): Promise<CareersPageData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<CareersPageData>("careers-page");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<CareersPageData>("careers-page.json");
}

export async function getContactPageData(): Promise<ContactPageData> {
  if (isEdgeConfigAvailable()) {
    try {
      const client = getEdgeConfigClient();
      const data = await client.get<ContactPageData>("contact-page");
      if (data) return data;
    } catch {
      // Fall through to JSON
    }
  }
  return readJsonFile<ContactPageData>("contact-page.json");
}

// Write data to Edge Config using Vercel API
// Requires VERCEL_API_TOKEN with "edge-config:write" scope
export async function writeToEdgeConfig<T>(key: string, data: T): Promise<void> {
  const token = process.env.VERCEL_API_TOKEN;
  const edgeConfigId = process.env.EDGE_CONFIG_ID;

  if (!token) {
    throw new Error(
      "VERCEL_API_TOKEN is not set. " +
        "Create one at https://vercel.com/account/tokens with 'Edge Config: Write' scope"
    );
  }

  if (!edgeConfigId) {
    throw new Error(
      "EDGE_CONFIG_ID is not set. " +
        "Get it from your Edge Config store URL (ecfg_xxxxxx)"
    );
  }

  const response = await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            operation: "upsert",
            key,
            value: data,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to write to Edge Config: ${error}`);
  }
}
