"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import SaveButton from "../../components/SaveButton";

interface PriceTopperItem {
  name: string;
  price: string;
}

interface PriceToppersData {
  items: PriceTopperItem[];
  specialOffer: {
    title: string;
    description: string;
    price: string;
  };
}

export default function PriceToppersPage() {
  const [data, setData] = useState<PriceToppersData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=price-toppers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=price-toppers", {
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

  const updateTopper = (index: number, field: keyof PriceTopperItem, value: string) => {
    if (!data) return;
    const newItems = [...data.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setData({ ...data, items: newItems });
  };

  const updateSpecialOffer = (field: keyof PriceToppersData["specialOffer"], value: string) => {
    if (!data) return;
    setData({
      ...data,
      specialOffer: { ...data.specialOffer, [field]: value },
    });
  };

  if (!data) return <div className="p-4 md:p-5 lg:p-6">Loading...</div>;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Price Toppers</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-8">
          {/* Topper Items */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Treatments (4 items shown on homepage)
            </h2>
            <div className="space-y-4">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{index + 1}.</span>
                    <span className="font-medium text-gray-700">Topper {index + 1}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Treatment Name
                      </label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateTopper(index, "name", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) => updateTopper(index, "price", e.target.value)}
                        placeholder="48,00"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offer */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Special Offer Banner</h2>
            <div className="space-y-4">
              <TextInput
                label="Offer Title"
                value={data.specialOffer.title}
                onChange={(value) => updateSpecialOffer("title", value)}
              />
              <TextArea
                label="Offer Description"
                value={data.specialOffer.description}
                onChange={(value) => updateSpecialOffer("description", value)}
                rows={3}
              />
              <TextInput
                label="Offer Price"
                value={data.specialOffer.price}
                onChange={(value) => updateSpecialOffer("price", value)}
                placeholder="40,00"
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
