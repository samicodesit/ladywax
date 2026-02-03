"use client";

import { useState, useEffect } from "react";
import ArrayEditor from "../../components/ArrayEditor";
import SaveButton from "../../components/SaveButton";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationData {
  items: NavigationItem[];
}

export default function NavigationPage() {
  const [data, setData] = useState<NavigationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=navigation")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=navigation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!data) return <div className="p-4 md:p-5 lg:p-6">Loading...</div>;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Navigation Menu</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-6">
          <ArrayEditor
            label="Menu Items"
            items={data.items as unknown as Record<string, string>[]}
            onChange={(items) => setData({ items: items as unknown as NavigationItem[] })}
            fields={[
              { key: "name", label: "Label (e.g. Home)" },
              { key: "href", label: "URL (e.g. / or /contact)" },
            ]}
            addButtonText="Add Menu Item"
          />

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> The URL should start with / for internal pages.
              Changes will appear immediately on the website after saving.
            </p>
          </div>

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
