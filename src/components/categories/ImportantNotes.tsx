import React from "react";
import { Alert, AlertTitle } from "@mui/material";

type ImportantNoteListProps = {
  items: string[];
};

const ImportantNoteList: React.FC<ImportantNoteListProps> = ({ items }) => {
  if (!items.length) return null;

  return (
    <Alert severity="info" className="p-4 rounded-xl shadow-md">
      <AlertTitle className="text-lg font-semibold">Important Notes</AlertTitle>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index} className="text-gray-800">
            {item}
          </li>
        ))}
      </ul>
    </Alert>
  );
};

export default ImportantNoteList;
