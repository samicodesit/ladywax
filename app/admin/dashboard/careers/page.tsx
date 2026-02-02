"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import SaveButton from "../../components/SaveButton";

interface CareersPageData {
  title: string;
  content: string[];
  email: string;
}

export default function CareersPage() {
  const [data, setData] = useState<CareersPageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=careers-page")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=careers-page", {
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Careers Page</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-2xl">
        <div className="space-y-6">
          <TextInput
            label="Page Title"
            value={data.title}
            onChange={(value) => setData({ ...data, title: value })}
          />

          <TextInput
            label="Contact Email"
            value={data.email}
            onChange={(value) => setData({ ...data, email: value })}
            type="email"
          />

          <div>
            <h3 className="font-medium text-gray-800 mb-4">Content Paragraphs</h3>
            <div className="space-y-4">
              {data.content.map((paragraph, index) => (
                <div key={index} className="flex gap-2">
                  <TextArea
                    label={`Paragraph ${index + 1}`}
                    value={paragraph}
                    onChange={(value) => {
                      const newContent = [...data.content];
                      newContent[index] = value;
                      setData({ ...data, content: newContent });
                    }}
                    rows={4}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newContent = data.content.filter((_, i) => i !== index);
                      setData({ ...data, content: newContent });
                    }}
                    className="text-red-500 hover:text-red-700 self-start mt-8"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setData({ ...data, content: [...data.content, ""] })}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition"
              >
                + Add Paragraph
              </button>
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
