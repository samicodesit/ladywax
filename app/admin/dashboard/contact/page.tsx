"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import SaveButton from "../../components/SaveButton";

interface ContactPageData {
  title: string;
  intro: string;
  email: string;
}

export default function ContactPage() {
  const [data, setData] = useState<ContactPageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=contact-page")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=contact-page", {
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Page</h1>

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

          <TextArea
            label="Introduction Text"
            value={data.intro}
            onChange={(value) => setData({ ...data, intro: value })}
            rows={6}
          />

          <div className="pt-4">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
