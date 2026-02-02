#!/usr/bin/env node

/**
 * Initialize Edge Config with data from JSON files
 *
 * Usage:
 * 1. Set EDGE_CONFIG_TOKEN and EDGE_CONFIG_ID in your environment
 * 2. Run: node scripts/init-edge-config.js
 */

const fs = require("fs");
const path = require("path");

const EDGE_CONFIG_TOKEN = process.env.EDGE_CONFIG_TOKEN;
const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID;

if (!EDGE_CONFIG_TOKEN || !EDGE_CONFIG_ID) {
  console.error("Error: EDGE_CONFIG_TOKEN and EDGE_CONFIG_ID must be set");
  console.error(
    "Get these from Vercel Dashboard > Storage > Edge Config > Settings"
  );
  process.exit(1);
}

const dataDir = path.join(__dirname, "..", "data", "content");

const files = [
  "business.json",
  "locations.json",
  "navigation.json",
  "hero.json",
  "highlights.json",
  "features.json",
  "waxing-page.json",
  "careers-page.json",
  "contact-page.json",
];

async function initEdgeConfig() {
  console.log("Initializing Edge Config with data from JSON files...\n");

  const items = [];

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const key = file.replace(".json", "");

    try {
      const content = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(content);

      items.push({
        operation: "upsert",
        key,
        value: data,
      });

      console.log(`✓ Prepared: ${key}`);
    } catch (error) {
      console.error(`✗ Error reading ${file}:`, error.message);
    }
  }

  console.log("\nUploading to Edge Config...");

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${EDGE_CONFIG_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${error}`);
    }

    console.log("\n✓ Successfully initialized Edge Config!");
    console.log(`  Uploaded ${items.length} items`);
  } catch (error) {
    console.error("\n✗ Failed to upload:", error.message);
    process.exit(1);
  }
}

initEdgeConfig();
