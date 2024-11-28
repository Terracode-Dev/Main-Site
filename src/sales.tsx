import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firbase";

const JoinWithUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    whyJoin: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "salesAgents"), formData);
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        whyJoin: "",
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Join With Us</h2>
      {success && <p className="text-green-500 text-center">Form submitted successfully!</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your experience (e.g., 2 years)"
          />
        </div>
        <div>
          <label htmlFor="whyJoin" className="block text-gray-700 font-medium mb-1">
            Why do you want to join us?
          </label>
          <textarea
            id="whyJoin"
            name="whyJoin"
            value={formData.whyJoin}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tell us why you want to join our team"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-md hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinWithUs;
