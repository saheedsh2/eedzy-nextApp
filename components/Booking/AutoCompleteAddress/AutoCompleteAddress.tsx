import React, { useEffect, useState } from "react";

interface Suggestion {
  full_address: string;
}

function AutoCompleteAddress() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [addressList, setAddressList] = useState<Suggestion[]>([]);
  const [activeField, setActiveField] = useState<"source" | "destination" | null>(null);

  // 🔎 Fetch suggestions with debounce
  useEffect(() => {
    const query =
      activeField === "source"
        ? source
        : activeField === "destination"
        ? destination
        : "";

    if (!query) {
      setAddressList([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search-address?q=${query}`);
        const data = await res.json();
        setAddressList(data.suggestions || []);
      } catch (err) {
        console.error("Address fetch error:", err);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [source, destination, activeField]);

  const handleSelect = (address: string) => {
    if (activeField === "source") {
      setSource(address);
    } else if (activeField === "destination") {
      setDestination(address);
    }
    setAddressList([]);
    setActiveField(null);
  };

  return (
    <div className="mt-5 space-y-4">

      {/* SOURCE */}
      <div className="relative">
        <label className="text-gray-400">Where From?</label>

        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          onFocus={() => setActiveField("source")}
          className="bg-white p-2 border w-full rounded-md outline-none focus:border-purple-300"
          placeholder="Enter pickup location"
        />

        {activeField === "source" && addressList.length > 0 && (
          <div className="shadow-md rounded-md absolute w-full bg-white z-20 max-h-60 overflow-y-auto">
            {addressList.map((item) => (
              <div
                key={item.full_address}
                onClick={() => handleSelect(item.full_address)}
                className="p-3 hover:bg-purple-100 cursor-pointer text-sm"
              >
                {item.full_address}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DESTINATION */}
      <div className="relative">
        <label className="text-gray-400">To</label>

        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() => setActiveField("destination")}
          className="bg-white p-2 border w-full rounded-md outline-none focus:border-purple-300"
          placeholder="Enter destination"
        />

        {activeField === "destination" && addressList.length > 0 && (
          <div className="shadow-md rounded-md absolute w-full bg-white z-20 max-h-60 overflow-y-auto">
            {addressList.map((item) => (
              <div
                key={item.full_address}
                onClick={() => handleSelect(item.full_address)}
                className="p-3 hover:bg-purple-100 cursor-pointer text-sm"
              >
                {item.full_address}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default AutoCompleteAddress;
