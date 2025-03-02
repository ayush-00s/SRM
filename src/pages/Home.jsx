import React, { useState } from "react";
import Otpmodal from "./Otpmodal"; // ✅ Import OTP Modal

function Home() {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Validate form fields
    if (!fullName || !email || !phone) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      // Send data to backend
      const response = await fetch("/http:localhost:3000/signup", {  // Adjust URL based on your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, phone }),
      });

      const data = await response.json();
      
      if (response.status === 200) {
        setIsOtpModalOpen(true);  // Show OTP modal on successful signup
      } else {
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      setError("An error occurred while sending OTP.");
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-1/2 bg-black p-10 flex flex-col justify-center">
          <h1 className="text-white text-2xl font-bold">Hi there, ....</h1>
          <p className="text-gray-400 mb-6">Get Started with Appointments.</p>

          <label className="text-white mb-2">Full name</label>
          <input
            className="bg-gray-800 text-white p-3 rounded mb-4"
            placeholder="Ayush"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label className="text-white mb-2">Email address</label>
          <input
            className="bg-gray-800 text-white p-3 rounded mb-4"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-white mb-2">Phone number</label>
          <input
            className="bg-gray-800 text-white p-3 rounded mb-6"
            placeholder="+00 0342 0453 34"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={handleSubmit}
            className="bg-green-500 p-3 rounded text-white font-bold"
          >
            Get Started
          </button>
        </div>

        <div className="w-1/2">
          <img
            src="/assets/Illustration.png"
            className="w-full h-full object-cover"
            alt="Doctor"
          />
        </div>

        
        {isOtpModalOpen && <Otpmodal onClose={() => setIsOtpModalOpen(false)} />}
      </div>
    </>
  );
}

export default Home;
