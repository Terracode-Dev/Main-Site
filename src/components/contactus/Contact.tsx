import React, { useState, useEffect } from 'react';
import { db } from '@/firbase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [mounted, setMounted] = useState(false);

  const services = [
    { id: 'enterprise', label: 'Enterprise Solutions' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'ai', label: 'AI Developments' },
    { id: 'other', label: 'Other Development' },
  ];

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    setMounted(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || selectedServices.length === 0) {
      setIsError(true);
      setNotification("Please fill in all fields and select at least one service.");
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    try {
      await addDoc(collection(db, "orders"), {
        nameData: name,
        emailData: email,
        messageData: message,
        services: selectedServices,
        createdAt: Timestamp.now()
      });
      setNotification("Your inquiry has been submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSelectedServices([]);
      setTimeout(() => {
        setNotification(null);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setNotification("Failed to submit form.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out
        ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out
          ${mounted ? 'opacity-60 backdrop-blur-md' : 'opacity-0'}`}
        onClick={handleOverlayClick}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className={`relative w-full max-w-3xl p-6 bg-white shadow-2xl rounded-2xl md:p-8 transition-all duration-300 ease-out
            ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
            aria-label="Close form"
          >
            ✕
          </button>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-left md:text-3xl">
              Send a <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">Message</span>
            </h2>

            {notification && (
              <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg text-center text-white ${
                  isError ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                {notification}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />

              <input
                type="email"
                placeholder="E-mail address"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-left md:text-3xl">
                  Select the Services<br />
                  that Fit Your Needs
                </h3>

                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`px-4 py-2 rounded-full border transition-colors text-sm md:text-base
                        ${selectedServices.includes(service.id)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'text-orange-400 border-orange-400 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white'
                        }`}
                      disabled={isSubmitting}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Describe Your Needs"
                rows={3}
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500] resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
              />

              <div className="flex justify-start mt-4">
                <button
                  onClick={handleSubmit}
                  className={`px-8 py-2 rounded-full sm:text-base md:text-lg border transition-colors
                    ${isSubmitting ? 'bg-gray-400 text-white' : 'text-orange-400 border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white'}
                  `}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;