import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/MedicalInformation'); //used to bypass to next screen
  }
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
 

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current one is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

 /* const handleVerify = () => {
    alert(`Entered OTP: ${otp.join("")}`);
    onClose();
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
        navigate("/MedicalInformation"); // redirect to the medical information page (for now it will alays redirect to medical information page)
    } else{
        alert("Please enter a valid OTP.")
    }
  };*/

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Verify OTP</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <p className="text-gray-400 mt-2">Please enter the OTP sent to your registered mobile number.</p>
        
        <div className="flex justify-center gap-2 mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-10 h-12 text-center text-xl bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        <button
          onClick={handleButtonClick}
          className="w-full bg-green-500 mt-4 py-2 rounded font-bold hover:bg-green-600 transition"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
