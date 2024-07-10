import React, { useState, useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material";

const AlertComponent = ({
  status,
  message,
  onClose,
  autoHideDuration = 5000,
  position = { top: 20, right: 20 },
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, autoHideDuration);

    return () => clearTimeout(timer);
  }, [autoHideDuration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        ...position,
        zIndex: 9999,
        minWidth: "300px",
        maxWidth: "400px",
      }}
    >
      <Alert
        severity={status}
        onClose={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        sx={{
          "& .MuiAlert-icon": {
            fontSize: "28px",
          },
          "& .MuiAlert-message": {
            fontSize: "16px",
          },
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AlertTitle sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default AlertComponent;
