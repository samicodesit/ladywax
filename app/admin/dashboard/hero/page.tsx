"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import ImageSelector from "../../components/ImageSelector";
import SaveButton from "../../components/SaveButton";

interface HeroData {
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

export default function HeroPage() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=hero")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=hero", {
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
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Hero Section</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-6">
          <TextInput
            label="Badge Text"
            value={data.badge}
            onChange={(value) => setData({ ...data, badge: value })}
          />

          <TextInput
            label="Headline Top"
            value={data.headlineTop}
            onChange={(value) => setData({ ...data, headlineTop: value })}
          />

          <TextInput
            label="Headline Bottom"
            value={data.headlineBottom}
            onChange={(value) => setData({ ...data, headlineBottom: value })}
          />

          <TextArea
            label="Subheadline"
            value={data.subheadline}
            onChange={(value) => setData({ ...data, subheadline: value })}
            rows={3}
          />

          <ImageSelector
            label="Hero Image"
            value={data.image}
            onChange={(value) => setData({ ...data, image: value })}
          />

          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-800 mb-4">Floating Badge</h3>
            <div className="space-y-4">
              <TextInput
                label="Badge Title"
                value={data.floatingBadge.title}
                onChange={(value) =>
                  setData({
                    ...data,
                    floatingBadge: { ...data.floatingBadge, title: value },
                  })
                }
              />
              <TextInput
                label="Badge Subtitle"
                value={data.floatingBadge.subtitle}
                onChange={(value) =>
                  setData({
                    ...data,
                    floatingBadge: { ...data.floatingBadge, subtitle: value },
                  })
                }
              />
            </div>
          </div>

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
