import React, { useState } from "react";
import TimePickerField from "./TimePickerField";
import { Alert, Button } from "@mui/material";

const SALON_OPEN_TIME = "09:00";
const SALON_CLOSE_TIME = "18:00";

export default function AppointmentBooking() {
  const [time, setTime] = useState("10:00");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isWithinSalonHours = (selected: string): boolean => {
    return selected >= SALON_OPEN_TIME && selected <= SALON_CLOSE_TIME;
  };

  const handleSubmit = () => {
    if (!isWithinSalonHours(time)) {
      setMessage("");
      setError(
        `Selected time ${time} is outside of salon hours (${SALON_OPEN_TIME} to ${SALON_CLOSE_TIME})`
      );
    } else {
      setError("");
      setMessage(`Appointment successfully booked at ${time}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold">Book Your Appointment</h2>

      <TimePickerField label="Select Time" value={time} onChange={setTime} />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Confirm
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {message && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </div>
  );
};

