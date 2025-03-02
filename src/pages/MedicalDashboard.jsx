import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import TabNavigation from "../components/TabsNavigation"; // Import TabNavigation
import NearbyDoctors from "./NearbyDoctors";
import Exercises from "./Exercises";

const MedicalDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Medical Report");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Add Tab Navigation */}
      <TabNavigation onSelect={setSelectedTab} />

      {/* Render content based on selected tab */}
      <div className="mt-6">
        {selectedTab === "Medical Report" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Your Health Dashboard</h1>

            {/* Recent Diagnoses */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4">Recent Diagnoses</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Condition</th>
                    <th className="p-2">Doctor</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { condition: "Seasonal Allergies", doctor: "Dr. Sarah Johnson", date: "May 15, 2023", notes: "Follow-up in 3 months" },
                    { condition: "Mild Hypertension", doctor: "Dr. Michael Chen", date: "April 2, 2023", notes: "Monitoring required" },
                    { condition: "Vitamin D Deficiency", doctor: "Dr. Emily Wilson", date: "March 10, 2023", notes: "Supplements prescribed" },
                  ].map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{item.condition}</td>
                      <td className="p-2">{item.doctor}</td>
                      <td className="p-2">{item.date}</td>
                      <td className="p-2">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Current Medications */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4">Current Medications</h2>
              {[
                { name: "Loratadine", dosage: "10mg - Once daily" },
                { name: "Vitamin D3", dosage: "1000 IU - Once daily with food" },
                { name: "Lisinopril", dosage: "5mg - Once daily in the morning" },
              ].map((medication, index) => (
                <div key={index} className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-lg font-normal">{medication.name}</h3>
                    <p className="text-gray-400">{medication.dosage}</p>
                  </div>
                  <ToggleSwitch />
                </div>
              ))}
            </div>

            {/* AI Health Insights */}
            <div className="bg-blue-100 p-6 rounded-4xl mb-3 shadow">
              <h2 className="text-lg font-semibold mb-2">Health Trend Analysis</h2>
              <p>Your blood pressure has shown improvement over the last 3 months.</p>
              <div className="mt-4">
                <button className="bg-blue-700 text-white font-medium px-4 py-2 rounded-3xl mr-2">View Details</button>
                <button className="bg-gray-300 text-[#0000FF] font-medium px-4 py-2 rounded-3xl">Dismiss</button>
              </div>
            </div>

            {/* Personalized Recommendation */}
            <div className="bg-blue-100 p-6 rounded-4xl shadow">
              <h2 className="text-lg font-semibold mb-2">Personalized Recommendation</h2>
              <p>Based on your recent vitamin D deficiency, we recommend 15-20 minutes of morning sunlight exposure daily, in addition to your supplements.</p>
              <div className="mt-4">
                <button className="bg-blue-700 text-white font-medium px-4 py-2 rounded-3xl mr-2">View Details</button>
                <button className="bg-gray-300 text-[#0000FF] font-medium px-4 py-2 rounded-3xl">Learn More</button>
              </div>
            </div>

            {/* Download & Share Buttons */}
            <div>
              <button className="bg-[#45B1E8] text-white font-medium px-4 py-2 rounded-2xl my-4">Download Full Report</button>
              <button className="bg-[#008000] text-white font-medium px-4 py-2 rounded-2xl my-4 mx-2">Share With Doctor</button>
            </div>
          </>
        )}

        {selectedTab === "Nearby Doctors" && <NearbyDoctors/>}
        {selectedTab === "Food Recommendations" && <p>Food chart!!!</p>}
        {selectedTab === "Exercise & Yoga" &&  <Exercises/>}
      </div>
    </div>
  );
};

export default MedicalDashboard;
