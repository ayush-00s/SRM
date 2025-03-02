import React, { useState } from "react";

const TabNavigation = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState("Medical Report");

  const tabs = [
    "Medical Report",
    "Nearby Doctors",
    "Food Recommendations",
    "Exercise & Yoga",
  ];

  return (
    <div className="border-b border-gray-300 flex space-x-6 p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            onSelect(tab);
          }}
          className={`relative text-gray-600 font-medium py-2 ${
            activeTab === tab ? "font-bold text-black" : ""
          }`}
        >
          • {tab}
          {activeTab === tab && (
            <div className="absolute left-0 bottom-0 w-full h-1 bg-black"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
