import React, { useState, useEffect } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { id: 'enterprise', label: 'Enterprise Solutions' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'ai', label: 'AI Developments' },
    { id: 'other', label: 'other development' },
  ];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-full max-w-3xl p-6 bg-white shadow-2xl rounded-2xl md:p-8" // Added shadow-2xl
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
          aria-label="Close form"
        >
          ✕
        </button>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-left md:text-3xl">
            Send a <span className="text-[#FFA500]">Message</span>
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
            />

            <input
              type="email"
              placeholder="E-mail address"
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-[#FFA500]"
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
                        : ' text-orange-400 sm:text-base md:text-lg border-orange-400 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white'
                      }`}
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
            />

            <button className="w-full px-8 py-3 rounded-full  text-orange-400 sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;