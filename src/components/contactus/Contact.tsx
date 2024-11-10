import React, { useState, useEffect } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { id: 'web', label: 'Web Development' },
    { id: 'enterprise', label: 'Enterprise Solutions' },
    { id: 'app', label: 'App Development' },
    { id: 'ai', label: 'AI Development' }
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
      className="fixed inset-0 backdrop-blur-md z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-3xl relative shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close form"
        >
          ✕
        </button>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
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
              <h3 className="text-2xl md:text-3xl font-semibold text-left">
                Select the Services<br />
                that Fit Your Needs
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`px-4 py-2 rounded-full border-2 transition-colors text-sm md:text-base
                      ${selectedServices.includes(service.id)
                        ? 'bg-[#FF4500] text-white border-[#FF4500]'
                        : 'border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white'
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

            <button className="w-full bg-[#FF4500] text-white px-8 py-3 rounded-full hover:bg-[#FF6347] transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;