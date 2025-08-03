import { TextField } from "@mui/material";
import React from "react";

interface CustomInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      size="small"
      sx={{
        backgroundColor: "rgba(64, 82, 181, 0.9)",
        borderRadius: "8px",
        input: {
          color: "#fff",
        },
        label: {
          color: "#fff",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ffffff99",
          },
          "&:hover fieldset": {
            borderColor: "#ffffff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ffffff",
          },
        },
      }}
      InputLabelProps={{ style: { color: "#fff" } }}
    />
  );
};

export default CustomInput;
