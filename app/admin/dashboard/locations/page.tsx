"use client";

import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import SaveButton from "../../components/SaveButton";

interface Location {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  mapsUrl: string;
  widgetUrl: string;
}

interface LocationsData {
  amsterdam: Location;
  theHague: Location;
}

export default function LocationsPage() {
  const [data, setData] = useState<LocationsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/content?file=locations")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setLoading(true);
    setSaved(false);

    try {
      const response = await fetch("/api/content?file=locations", {
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

  const updateLocation = (
    location: "amsterdam" | "theHague",
    field: keyof Location,
    value: string
  ) => {
    if (!data) return;
    setData({
      ...data,
      [location]: { ...data[location], [field]: value },
    });
  };

  if (!data) return <div className="p-4 md:p-5 lg:p-6">Loading...</div>;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Locations</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 max-w-full lg:max-w-2xl">
        <div className="space-y-8">
          {/* Amsterdam */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
              Amsterdam
            </h2>
            <div className="space-y-4">
              <TextInput
                label="Name"
                value={data.amsterdam.name}
                onChange={(value) => updateLocation("amsterdam", "name", value)}
              />
              <TextInput
                label="Address"
                value={data.amsterdam.address}
                onChange={(value) =>
                  updateLocation("amsterdam", "address", value)
                }
              />
              <TextInput
                label="City/Zip"
                value={data.amsterdam.city}
                onChange={(value) => updateLocation("amsterdam", "city", value)}
              />
              <TextInput
                label="Phone"
                value={data.amsterdam.phone}
                onChange={(value) =>
                  updateLocation("amsterdam", "phone", value)
                }
              />
              <TextInput
                label="Email"
                value={data.amsterdam.email}
                onChange={(value) =>
                  updateLocation("amsterdam", "email", value)
                }
              />
              <TextInput
                label="Google Maps URL"
                value={data.amsterdam.mapsUrl}
                onChange={(value) =>
                  updateLocation("amsterdam", "mapsUrl", value)
                }
              />
              <TextInput
                label="Booking Widget URL"
                value={data.amsterdam.widgetUrl}
                onChange={(value) =>
                  updateLocation("amsterdam", "widgetUrl", value)
                }
              />
            </div>
          </div>

          {/* The Hague */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
              The Hague
            </h2>
            <div className="space-y-4">
              <TextInput
                label="Name"
                value={data.theHague.name}
                onChange={(value) =>
                  updateLocation("theHague", "name", value)
                }
              />
              <TextInput
                label="Address"
                value={data.theHague.address}
                onChange={(value) =>
                  updateLocation("theHague", "address", value)
                }
              />
              <TextInput
                label="City/Zip"
                value={data.theHague.city}
                onChange={(value) =>
                  updateLocation("theHague", "city", value)
                }
              />
              <TextInput
                label="Phone"
                value={data.theHague.phone}
                onChange={(value) =>
                  updateLocation("theHague", "phone", value)
                }
              />
              <TextInput
                label="Email"
                value={data.theHague.email}
                onChange={(value) =>
                  updateLocation("theHague", "email", value)
                }
              />
              <TextInput
                label="Google Maps URL"
                value={data.theHague.mapsUrl}
                onChange={(value) =>
                  updateLocation("theHague", "mapsUrl", value)
                }
              />
              <TextInput
                label="Booking Widget URL"
                value={data.theHague.widgetUrl}
                onChange={(value) =>
                  updateLocation("theHague", "widgetUrl", value)
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
