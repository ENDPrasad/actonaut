import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";

const translations: Record<string, string> = {
  en: "Learning automation is easy",
  fr: "L'apprentissage de l'automatisation est facile",
  es: "Aprender automatización es fácil",
  de: "Automatisierung zu lernen ist einfach",
  hi: "ऑटोमेशन सीखना आसान है",
};

const languageNames: Record<string, string> = {
  en: "English",
  fr: "French",
  es: "Spanish",
  de: "German",
  hi: "Hindi",
};

const LanguageSelector: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLang(event.target.value as string);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6">
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Select Language</InputLabel>
        <Select
          labelId="language-select-label"
          value={selectedLang}
          label="Select Language"
          onChange={handleChange}
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <MenuItem key={code} value={code}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6" className="text-center py-8">
        {translations[selectedLang]}
      </Typography>
    </div>
  );
};

export default LanguageSelector;
