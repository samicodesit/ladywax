"use client";

interface ArrayEditorProps {
  label: string;
  items: Record<string, string>[];
  onChange: (items: Record<string, string>[]) => void;
  fields: { key: string; label: string; type?: "text" | "textarea" }[];
  addButtonText?: string;
}

export default function ArrayEditor({
  label,
  items,
  onChange,
  fields,
  addButtonText = "Add Item",
}: ArrayEditorProps) {
  const handleAdd = () => {
    const newItem: Record<string, string> = {};
    fields.forEach((f) => (newItem[f.key] = ""));
    onChange([...items, newItem]);
  };

  const handleRemove = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const handleChange = (index: number, key: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [key]: value };
    onChange(newItems);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">
                Item {index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="space-y-3">
              {fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-xs text-gray-500 mb-1">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={(item[field.key] as string) || ""}
                      onChange={(e) =>
                        handleChange(index, field.key, e.target.value)
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={(item[field.key] as string) || ""}
                      onChange={(e) =>
                        handleChange(index, field.key, e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition"
        >
          + {addButtonText}
        </button>
      </div>
    </div>
  );
}
