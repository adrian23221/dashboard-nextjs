"use client";

import React, { useState } from "react";

function CampaignFilter() {
  const [startDate, setStartDate] = useState("2025-05-01");
  const [endDate, setEndDate] = useState("2025-05-31");

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 pt-6 text-stone-800">
        Campaign Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end bg-white rounded-xl shadow p-5">
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-1">
            Select Campaign
          </label>
          <select
            defaultValue="Campaign A"
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          >
            <option value="">-- Choose --</option>
            <option value="Campaign A">BP Test Campaign</option>
            <option value="Campaign B">Campaign B</option>
            <option value="Campaign C">Campaign C</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        <div>
          <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded text-sm hover:bg-indigo-800 transition-colors cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignFilter;
