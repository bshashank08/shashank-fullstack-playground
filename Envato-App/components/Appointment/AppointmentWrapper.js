import React, { useEffect, useRef } from 'react';
import AppointmentModal from './AppointmentModal';
 
export default function AppointmentModalWrapper({ onClose }) {
  const dialogRef = useRef(null);
 
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    const handleClose = () => {
      onClose();
    };
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener('close', handleClose);
    }
    return () => {
      if (dialog) {
        dialog.removeEventListener('close', handleClose);
      }
    };
  }, [onClose]);
 
  return <AppointmentModal dialogRef={dialogRef} />;
}