import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }) {
  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Image Wrapper Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[1536px] w-full max-h-[92vh] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-pearl-aqua-200 bg-card-dark"
      >
        {/* Close Button positioned in the top right corner inside the image wrapper */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/90 text-pearl-aqua-400 hover:text-white p-2 rounded-full transition-colors focus:outline-none cursor-pointer border border-pearl-aqua-400/30"
          aria-label="Close modal"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <img
          src={imageSrc}
          alt={imageAlt || 'Enlarged preview'}
          className="w-full max-h-[85vh] object-contain"
        />
      </div>
    </div>
  );
}