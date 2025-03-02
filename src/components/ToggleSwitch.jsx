import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-black text-lg">Info</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-14 h-7 flex items-center rounded-full transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
