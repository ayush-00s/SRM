import React, { useState } from "react";

const NearbyDoctors = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Sample doctor recommendations
  const doctors = [
    { id: 1, name: "Dr. Anjali Mehta", specialty: "Cardiologist", rating: "⭐ 4.8" },
    { id: 2, name: "Dr. Rahul Sharma", specialty: "Dermatologist", rating: "⭐ 4.5" },
    { id: 3, name: "Dr. Priya Kapoor", specialty: "General Physician", rating: "⭐ 4.7" },
    { id: 4, name: "Dr. Arjun Verma", specialty: "Orthopedic", rating: "⭐ 4.6" },
  ];

  // Function to handle booking an appointment
  const handleBookAppointment = (doctorName) => {
    alert(`Appointment booked with ${doctorName}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg mb-4"
        onClick={() => setIsModalVisible(true)}
      >
        Show Recommended Doctors
      </button>

      
      {isModalVisible && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Recommended Doctors</h2>
            <ul className="space-y-4">
              {doctors.map((item) => (
                <li
                  key={item.id}
                  className="p-4 border-b border-gray-300 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.specialty}</p>
                    <p className="text-sm text-blue-500">{item.rating}</p>
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                    onClick={() => handleBookAppointment(item.name)}
                  >
                    Book
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg w-full hover:bg-red-600"
              onClick={() => setIsModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NearbyDoctors;
