"use client";
import React, { useEffect } from "react";
import "./SuccessModal.css";
const SuccessModal = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="app__success-modal">
      <p className="p__darkOpenSans"> {message} </p>
    </div>
  );
};

export default SuccessModal;
