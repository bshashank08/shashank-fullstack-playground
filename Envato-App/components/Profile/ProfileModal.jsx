import React, { useEffect, useRef } from "react";
import Profile from "./Profile";

export default function ProfileModal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end pointer-events-none" data-testid="profile-modal">
      {/* Sliding Modal */}
      <div
        ref={modalRef}
        className="relative h-full bg-[#f3fdff] shadow-lg w-full max-w-md transform translate-x-0 animate-slide-in-right pointer-events-auto"
        style={{ right: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-8 overflow-y-auto h-full">
          <Profile />
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
