import React from "react";

interface TimePickerFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TimePickerField: React.FC<TimePickerFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TimePickerField;
