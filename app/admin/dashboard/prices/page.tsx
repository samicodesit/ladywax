"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import SaveButton from "../../components/SaveButton";

interface PricingItem {
  name: string;
  price: string;
  note?: string;
  isSpecial?: boolean;
}

interface PricingCategory {
  title: string;
  items: PricingItem[];
}

interface PricesData {
  categories: PricingCategory[];
}

export default function PricesPage() {
  const [data, setData] = useState<PricesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=prices")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=prices", {
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

  const addCategory = () => {
    if (!data) return;
    setData({
      ...data,
      categories: [...data.categories, { title: "New Category", items: [] }],
    });
  };

  const removeCategory = (index: number) => {
    if (!data) return;
    const newCategories = [...data.categories];
    newCategories.splice(index, 1);
    setData({ ...data, categories: newCategories });
  };

  const updateCategoryTitle = (index: number, title: string) => {
    if (!data) return;
    const newCategories = [...data.categories];
    newCategories[index] = { ...newCategories[index], title };
    setData({ ...data, categories: newCategories });
  };

  const addItem = (categoryIndex: number) => {
    if (!data) return;
    const newCategories = [...data.categories];
    newCategories[categoryIndex].items.push({
      name: "New Treatment",
      price: "0,00",
    });
    setData({ ...data, categories: newCategories });
  };

  const removeItem = (categoryIndex: number, itemIndex: number) => {
    if (!data) return;
    const newCategories = [...data.categories];
    newCategories[categoryIndex].items.splice(itemIndex, 1);
    setData({ ...data, categories: newCategories });
  };

  const updateItem = (
    categoryIndex: number,
    itemIndex: number,
    field: keyof PricingItem,
    value: string | boolean
  ) => {
    if (!data) return;
    const newCategories = [...data.categories];
    newCategories[categoryIndex].items[itemIndex] = {
      ...newCategories[categoryIndex].items[itemIndex],
      [field]: value,
    };
    setData({ ...data, categories: newCategories });
  };

  if (!data) return <div className="p-4 md:p-5 lg:p-6">Loading...</div>;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Prices</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-4xl">
        <div className="space-y-6 md:space-y-8">
          {data.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="border border-gray-200 rounded-lg p-4 md:p-5 bg-gray-50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <TextInput
                  label="Category Title"
                  value={category.title}
                  onChange={(value) => updateCategoryTitle(categoryIndex, value)}
                />
                <button
                  onClick={() => removeCategory(categoryIndex)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-red-50 transition min-h-[44px]"
                >
                  Remove Category
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-700">Items</h4>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white border border-gray-200 rounded-lg p-3 md:p-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) =>
                            updateItem(categoryIndex, itemIndex, "name", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Price
                        </label>
                        <input
                          type="text"
                          value={item.price}
                          onChange={(e) =>
                            updateItem(categoryIndex, itemIndex, "price", e.target.value)
                          }
                          placeholder="48,00"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="sm:col-span-1 lg:col-span-1">
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Note (optional)
                        </label>
                        <input
                          type="text"
                          value={item.note || ""}
                          onChange={(e) =>
                            updateItem(categoryIndex, itemIndex, "note", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="flex items-end gap-3">
                        <label className="flex items-center gap-2 text-sm text-gray-600 pb-2">
                          <input
                            type="checkbox"
                            checked={item.isSpecial || false}
                            onChange={(e) =>
                              updateItem(
                                categoryIndex,
                                itemIndex,
                                "isSpecial",
                                e.target.checked
                              )
                            }
                            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          Special
                        </label>
                        <button
                          onClick={() => removeItem(categoryIndex, itemIndex)}
                          className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded hover:bg-red-50 transition ml-auto min-h-[44px]"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => addItem(categoryIndex)}
                  className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition min-h-[48px]"
                >
                  + Add Item
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addCategory}
            className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition font-medium min-h-[56px]"
          >
            + Add Category
          </button>

          <div className="pt-4 border-t">
            <SaveButton onClick={handleSave} loading={loading} saved={saved} />
          </div>
        </div>
      </div>
    </div>
  );
}
