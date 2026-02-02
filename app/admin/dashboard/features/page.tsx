"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import ArrayEditor from "../../components/ArrayEditor";
import ImageSelector from "../../components/ImageSelector";
import SaveButton from "../../components/SaveButton";

interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

interface FeaturesData {
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

export default function FeaturesPage() {
  const [data, setData] = useState<FeaturesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=features")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=features", {
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Features Section</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-2xl">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <TextInput
              label="Title Part 1"
              value={data.title}
              onChange={(value) => setData({ ...data, title: value })}
            />
            <TextInput
              label="Accent Word"
              value={data.titleAccent}
              onChange={(value) => setData({ ...data, titleAccent: value })}
            />
            <TextInput
              label="Title Part 2"
              value={data.titleBottom}
              onChange={(value) => setData({ ...data, titleBottom: value })}
            />
          </div>

          <TextArea
            label="Introduction"
            value={data.intro}
            onChange={(value) => setData({ ...data, intro: value })}
            rows={4}
          />

          <ArrayEditor
            label="Feature Items"
            items={data.items as unknown as Record<string, string>[]}
            onChange={(items) => setData({ ...data, items: items as unknown as FeatureItem[] })}
            fields={[
              { key: "number", label: "Number (e.g. 01)" },
              { key: "title", label: "Title" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
            addButtonText="Add Feature"
          />

          <ImageSelector
            label="Feature Image"
            value={data.image}
            onChange={(value) => setData({ ...data, image: value })}
          />

          <TextInput
            label="Image Caption"
            value={data.imageText}
            onChange={(value) => setData({ ...data, imageText: value })}
          />

          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="CTA Text"
              value={data.ctaText}
              onChange={(value) => setData({ ...data, ctaText: value })}
            />
            <TextInput
              label="CTA Link"
              value={data.ctaHref}
              onChange={(value) => setData({ ...data, ctaHref: value })}
            />
          </div>

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
