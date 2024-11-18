import React, { useState, useEffect } from "react";
import { db } from "@/firbase"; 
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
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [serviceError, setServiceError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    { id: "enterprise", label: "Enterprise Solutions" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "ai", label: "AI Developments" },
    { id: "other", label: "Other" },
  ];

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.scrollbarGutter = "stable";
      document.body.classList.add('hide-scrollbar');
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.scrollbarGutter = "auto";
      document.body.classList.remove('hide-scrollbar');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleServiceSelect = (
    serviceId: string,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    event.preventDefault();
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async () => {
    setNameError(null);
    setEmailError(null);
    setServiceError(null);

    let hasError = false;

    if (!name) {
      setNameError("Name is required.");
      hasError = true;
    }

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    }

    if (selectedServices.length === 0) {
      setServiceError("Please select at least one service.");
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "orders"), {
        nameData: name,
        emailData: email,
        messageData: message,
        services: selectedServices,
        createdAt: Timestamp.now(),
      });

      setShowSuccess(true);

      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSelectedServices([]);
        setShowSuccess(false);
        handleClose();
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-300 ease-in-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .modal-content {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .modal-content::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          mounted ? "opacity-60 backdrop-blur-md" : "opacity-0"
        }`}
        onClick={handleOverlayClick}
      />

      {showSuccess && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-lg z-50 shadow-lg">
          Your inquiry has been submitted successfully!
        </div>
      )}

      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className={`relative w-full max-w-3xl bg-white shadow-2xl rounded-2xl transition-all duration-300 ease-out max-h-[90vh] overflow-y-auto modal-content ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 p-6 md:p-8 border-b">
            <button
              onClick={handleClose}
              className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
              aria-label="Close form"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-left md:text-3xl">
              Send us a{" "}
              <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
                Message
              </span>
            </h2>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

              <input
                type="email"
                placeholder="E-mail address"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-left md:text-2xl">
                  Select the Services<br />
                  that Fit Your Needs
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={(e) => handleServiceSelect(service.id, e)}
                      className={`px-4 py-2 rounded-full border transition-colors text-xs leading-tight text-center max-w-xs ${
                        selectedServices.includes(service.id)
                          ? "bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] text-white border-none"
                          : "text-orange-400 border-orange-400 hover:bg-gray-100"
                      } ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
                {serviceError && (
                  <p className="text-red-500 text-sm">{serviceError}</p>
                )}
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
                  className={`px-8 py-2 rounded-full sm:text-base md:text-lg border transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 text-white"
                      : "text-orange-400 border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white"
                  }`}
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