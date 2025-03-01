import React, { useState } from "react";
import OtpModal from "./Otpmodal"; // ✅ Import OTP Modal

function Home() {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-1/2 bg-black p-10 flex flex-col justify-center">
          <h1 className="text-white text-2xl font-bold">Hi there, ....</h1>
          <p className="text-gray-400 mb-6">Get Started with Appointments.</p>

          <label className="text-white mb-2">Full name</label>
          <input className="bg-gray-800 text-white p-3 rounded mb-4" placeholder="Ayush" />

          <label className="text-white mb-2">Email address</label>
          <input className="bg-gray-800 text-white p-3 rounded mb-4" placeholder="xyz@gmail.com" />

          <label className="text-white mb-2">Phone number</label>
          <input className="bg-gray-800 text-white p-3 rounded mb-6" placeholder="+00 0342 0453 34" />

          <button onClick={() => setIsOtpModalOpen(true)} className="bg-green-500 p-3 rounded text-white font-bold">
            Get Started
          </button>
        </div>

        <div className="w-1/2">
          <img src="/assets/Illustration.png" className="w-full h-full object-cover" alt="Doctor" />
        </div>

        {/* ✅ Show OTP Modal When Open */}
        {isOtpModalOpen && <OtpModal onClose={() => setIsOtpModalOpen(false)} />}
      </div>
    </>
  );
}

export default Home;
