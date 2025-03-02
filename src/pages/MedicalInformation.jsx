import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicalInfoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    physician: "Dr. Ayush Tiwari",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    medications: "",
    familyHistory: "",
    pastHistory: "",
    customPhysician: "", // to store the custom physician name
  });


  const [focusedField, setFocusedField] = useState(""); // Track focused field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field); // Set focused field to highlight
  };

  const handleBlur = () => {
    setFocusedField(""); // Reset focused field when input loses focus
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with data: " + JSON.stringify(formData, null, 2));
    // You can further handle the form submission, such as sending it to a server.
  };
  
  const handleButtonClick = () => {
    navigate('/MedicalDashboard'); //used to bypass to next screen
  }

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md w-full h-screen">
      <h2 className="text-3xl font-semibold mb-2">Welcome 👋</h2>
      <div>
        <p className="text-gray-400 mb-8">Let us know more about yourself</p>
      </div>  
      <h3 className="text-xl font-bold mb-3"> Medical Information</h3>

      <form onSubmit={handleSubmit}>
        {/* Primary Care Physician */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Primary care physician</label>
          <select
            name="physician"
            value={formData.physician}
            onChange={handleChange}
            onFocus={() => handleFocus("physician")}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
              focusedField === "physician" ? "focus:ring-2 focus:ring-blue-400" : ""
            }`}
          >
            <option>Dr. Ayush Tiwari</option>
            <option>Dr. Geetika Vasistha</option>
            <option>Dr. Priyansh Neel</option>
            <option>Other</option> {/* Option for user to select custom physician */}
          </select>

          {/* Conditional Input for Custom Physician Name */}
          {formData.physician === "Other" && (
            <div className="mt-2">
              <label className="block text-gray-300 mb-2">Enter your physician's name</label>
              <input
                type="text"
                name="customPhysician"
                value={formData.customPhysician}
                onChange={handleChange}
                onFocus={() => handleFocus("customPhysician")}
                onBlur={handleBlur}
                placeholder="Enter physician's name"
                className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                  focusedField === "customPhysician" ? "focus:ring-2 focus:ring-blue-400" : ""
                }`}
              />
            </div>
          )}
        </div>

        {/* Insurance Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-300 mb-2">Insurance provider</label>
            <input
              type="text"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              onFocus={() => handleFocus("insuranceProvider")}
              onBlur={handleBlur}
              placeholder="ex: BlueCross"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "insuranceProvider" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Insurance policy number</label>
            <input
              type="text"
              name="insurancePolicyNumber"
              value={formData.insurancePolicyNumber}
              onChange={handleChange}
              onFocus={() => handleFocus("insurancePolicyNumber")}
              onBlur={handleBlur}
              placeholder="ex: ABC1234567"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "insurancePolicyNumber" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
        </div>

        {/* Allergies & Medications */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-300 mb-2">Allergies (if any)</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              onFocus={() => handleFocus("allergies")}
              onBlur={handleBlur}
              placeholder="ex: Peanuts, Penicillin, Pollen"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "allergies" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Current medications</label>
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              onFocus={() => handleFocus("medications")}
              onBlur={handleBlur}
              placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "medications" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
        </div>

        {/* Medical History */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-300 mb-2">Family medical history (if relevant)</label>
            <input
              type="text"
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
              onFocus={() => handleFocus("familyHistory")}
              onBlur={handleBlur}
              placeholder="ex: Mother had breast cancer"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "familyHistory" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Past medical history</label>
            <input
              type="text"
              name="pastHistory"
              value={formData.pastHistory}
              onChange={handleChange}
              onFocus={() => handleFocus("pastHistory")}
              onBlur={handleBlur}
              placeholder="ex: Asthma diagnosis in childhood"
              className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
                focusedField === "pastHistory" ? "focus:ring-2 focus:ring-blue-400" : ""
              }`}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Food Prefrence</label>
          <select
            name="foodprefrence"
            value={formData.foodprefrence}
            onChange={handleChange}
            onFocus={() => handleFocus("physician")}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 text-white p-3 rounded border border-gray-600 focus:outline-none ${
              focusedField === "physician" ? "focus:ring-2 focus:ring-blue-400" : ""
            }`}
          >
            <option>choose one </option>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            
        
          </select>
          </div>

        {/* Submit Button */}
        <button
          onClick={handleButtonClick}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit and Continue
        </button>
      </form>
    </div>
  );
};

export default MedicalInfoForm;
