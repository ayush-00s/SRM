import React from "react";

export default function Exercises(props) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-2 gap-16">
        {/* Arms Section */}
        <div className="flex flex-col items-center bg-blue-100 rounded-3xl p-6 shadow-lg">
          <img src="/assets/arms.png" alt="arms workout" className="w-80 rounded-xl" />
          <h1 className="text-2xl text-black font-semibold mt-4">Arms</h1>
          <h3 className="p-4 text-center">
            Don't neglect your arms. Make them a focal point of your workout.
          </h3>
          <button className="bg-blue-700 text-white font-medium px-4 py-2 rounded-3xl mb-4 hover:bg-blue-800 transition">
            START EXERCISE
          </button>
        </div>

        {/* Legs Section */}
        <div className="flex flex-col items-center bg-blue-100 rounded-3xl p-6 shadow-lg">
          <img src="/assets/legs.png" alt="legs workout" className="w-80 rounded-xl my-10 pb-20" />
          <h1 className="text-2xl text-black font-semibold mt-4 ">Legs</h1>
          <h3 className="p-4 text-center">
            Don't neglect your legs. Make them a focal point of your workout.
          </h3>
          <button className="bg-blue-700 text-white font-medium px-4 py-2 rounded-3xl mb-4 hover:bg-blue-800 transition">
            START EXERCISE
          </button>
        </div>
      </div>
    </div>
  );
}
