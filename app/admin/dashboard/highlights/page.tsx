"use client";

import { useState, useEffect } from "react";
import ArrayEditor from "../../components/ArrayEditor";
import SaveButton from "../../components/SaveButton";

interface HighlightItem {
  title: string;
  description: string;
}

interface HighlightsData {
  items: HighlightItem[];
}

export default function HighlightsPage() {
  const [data, setData] = useState<HighlightsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=highlights")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=highlights", {
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
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Highlights</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-6">
          <ArrayEditor
            label="Highlight Cards (4 items recommended)"
            items={data.items as unknown as Record<string, string>[]}
            onChange={(items) => setData({ items: items as unknown as HighlightItem[] })}
            fields={[
              { key: "title", label: "Title" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
            addButtonText="Add Highlight"
          />

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
