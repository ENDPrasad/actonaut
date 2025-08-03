import { TextField } from "@mui/material";
import React from "react";

interface CustomTextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      multiline
      rows={5}
      label="Message"
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{
        backgroundColor: "rgba(64, 82, 181, 0.9)",
        borderRadius: "8px",
        textarea: {
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

export default CustomTextArea;
