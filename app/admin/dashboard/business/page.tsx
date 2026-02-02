"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import SaveButton from "../../components/SaveButton";

interface BusinessData {
  name: string;
  description: string;
  specialistsCount: string;
  openingHours: string;
  openDays: string;
  tagline: string;
  phone: string;
}

export default function BusinessPage() {
  const [data, setData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=business")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=business", {
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

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Business Info</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-2xl">
        <div className="space-y-6">
          <TextInput
            label="Business Name"
            value={data.name}
            onChange={(value) => setData({ ...data, name: value })}
          />

          <TextArea
            label="Description"
            value={data.description}
            onChange={(value) => setData({ ...data, description: value })}
            rows={3}
          />

          <TextInput
            label="Specialists Count"
            value={data.specialistsCount}
            onChange={(value) => setData({ ...data, specialistsCount: value })}
          />

          <TextInput
            label="Opening Hours"
            value={data.openingHours}
            onChange={(value) => setData({ ...data, openingHours: value })}
          />

          <TextInput
            label="Open Days"
            value={data.openDays}
            onChange={(value) => setData({ ...data, openDays: value })}
          />

          <TextInput
            label="Tagline"
            value={data.tagline}
            onChange={(value) => setData({ ...data, tagline: value })}
          />

          <TextInput
            label="Phone Number"
            value={data.phone}
            onChange={(value) => setData({ ...data, phone: value })}
          />

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
