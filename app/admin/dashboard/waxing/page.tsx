"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import ArrayEditor from "../../components/ArrayEditor";
import SaveButton from "../../components/SaveButton";

interface WaxingType {
  name: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface WaxingPageData {
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

export default function WaxingPage() {
  const [data, setData] = useState<WaxingPageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=waxing-page")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=waxing-page", {
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
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Waxing Page</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-6">
          <TextInput
            label="Page Title"
            value={data.title}
            onChange={(value) => setData({ ...data, title: value })}
          />

          <TextInput
            label="Subtitle"
            value={data.subtitle}
            onChange={(value) => setData({ ...data, subtitle: value })}
          />

          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-800 mb-4">Introduction Paragraphs</h3>
            <div className="space-y-4">
              {data.intro.map((paragraph, index) => (
                <div key={index} className="flex gap-2">
                  <TextArea
                    label={`Paragraph ${index + 1}`}
                    value={paragraph}
                    onChange={(value) => {
                      const newIntro = [...data.intro];
                      newIntro[index] = value;
                      setData({ ...data, intro: newIntro });
                    }}
                    rows={4}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newIntro = data.intro.filter((_, i) => i !== index);
                      setData({ ...data, intro: newIntro });
                    }}
                    className="text-red-500 hover:text-red-700 self-start mt-8"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setData({ ...data, intro: [...data.intro, ""] })}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition"
              >
                + Add Paragraph
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-800 mb-4">Brazilian Wax Section</h3>
            <div className="space-y-4">
              <TextInput
                label="Title"
                value={data.brazilian.title}
                onChange={(value) =>
                  setData({ ...data, brazilian: { ...data.brazilian, title: value } })
                }
              />
              <TextArea
                label="Description"
                value={data.brazilian.description}
                onChange={(value) =>
                  setData({
                    ...data,
                    brazilian: { ...data.brazilian, description: value },
                  })
                }
                rows={3}
              />
              <ArrayEditor
                label="Waxing Types"
                items={data.brazilian.types as unknown as Record<string, string>[]}
                onChange={(items) =>
                  setData({
                    ...data,
                    brazilian: { ...data.brazilian, types: items as unknown as WaxingType[] },
                  })
                }
                fields={[
                  { key: "name", label: "Name" },
                  { key: "description", label: "Description", type: "textarea" },
                ]}
                addButtonText="Add Type"
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-800 mb-4">FAQ</h3>
            <ArrayEditor
              label="FAQ Items"
              items={data.faq as unknown as Record<string, string>[]}
              onChange={(items) => setData({ ...data, faq: items as unknown as FaqItem[] })}
              fields={[
                { key: "question", label: "Question" },
                { key: "answer", label: "Answer", type: "textarea" },
              ]}
              addButtonText="Add FAQ"
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-800 mb-4">Dos and Don'ts</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do&apos;s (one per line)
                </label>
                <TextArea
                  label=""
                  value={data.dosAndDonts.do.join("\n")}
                  onChange={(value) =>
                    setData({
                      ...data,
                      dosAndDonts: {
                        ...data.dosAndDonts,
                        do: value.split("\n").filter((line) => line.trim()),
                      },
                    })
                  }
                  rows={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Don&apos;ts (one per line)
                </label>
                <TextArea
                  label=""
                  value={data.dosAndDonts.dont.join("\n")}
                  onChange={(value) =>
                    setData({
                      ...data,
                      dosAndDonts: {
                        ...data.dosAndDonts,
                        dont: value.split("\n").filter((line) => line.trim()),
                      },
                    })
                  }
                  rows={6}
                />
              </div>
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
