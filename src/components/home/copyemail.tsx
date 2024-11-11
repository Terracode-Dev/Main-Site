import  { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const EmailCopySection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'contact@terracodedev.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Show an alert
      alert('Email copied to clipboard!');

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex w-1/2 gap-2">
      <div className="flex-grow px-4 py-2 text-black bg-white rounded-2xl">
        <p className="select-all">{email}</p>
      </div>
      <button
        onClick={handleCopy}
        className={`
          px-4 py-2 text-white transition-all duration-300
          bg-gradient-to-r from-[#EF3D00] to-[#FDA40A]
          rounded-2xl hover:from-[#FDA40A] hover:to-[#EF3D00]
          flex items-center gap-2
        `}
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export default EmailCopySection;
