import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface PromoCodeInputProps {
  onApply: (code: string) => void;
  placeholder?: string;
  maxLength?: number;
}

const isValidCode = (code: string): boolean => {
  const trimmed = code.trim();
  return /^[A-Za-z0-9]+$/.test(trimmed);
};

const PromoCodeInput: React.FC<PromoCodeInputProps> = ({
  onApply,
  placeholder = "Enter Promo Code",
  maxLength = 20,
}) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    const trimmed = code.trim();

    if (!trimmed) {
      setError("Promo code cannot be empty");
      return;
    }

    if (trimmed.length > maxLength) {
      setError(`Promo code cannot exceed ${maxLength} characters`);
      return;
    }

    if (!isValidCode(trimmed)) {
      setError("Promo code must be alphanumeric");
      return;
    }

    setError("");
    onApply(trimmed);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
      <TextField
        label="Promo Code"
        placeholder={placeholder}
        variant="outlined"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        error={!!error}
        helperText={error}
        inputProps={{ maxLength }}
        className="w-full md:w-64"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleApply}
        className="mt-2 md:mt-0"
      >
        Apply
      </Button>
    </div>
  );
};

export default PromoCodeInput;
