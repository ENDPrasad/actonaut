// Bank Account Opening Form with Tooltips - Reusable Component

"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function BankAccountForm() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    email: "",
    pan: "",
    aadhaar: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    dob: false,
    mobile: false,
    email: false,
    aadhaar: false,
    pan: false
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validateForm = () => {
    const newErrors = {
      fullName: form.fullName.trim() === "",
      dob: !/^\d{2}\/\d{2}\/\d{4}$/.test(form.dob),
      mobile: !/^\d{10}$/.test(form.mobile),
      email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email),
      aadhaar: !/^\d{12}$/.test(form.aadhaar),
      pan: form.pan === '' || form.pan !== ''

    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const isFormValid = () => {
    return (
      form.fullName.trim() &&
      /^\d{2}\/\d{2}\/\d{4}$/.test(form.dob) &&
      /^\d{10}$/.test(form.mobile) &&
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email) &&
      /^\d{12}$/.test(form.aadhaar)
    );
  };

  const renderField = (
    label: string,
    name: keyof typeof form,
    tooltip: string,
    required: boolean = true
  ) => (
    <Box className="flex items-center gap-2">
      <TextField
        label={label}
        value={form[name]}
        onChange={(e) => handleChange(name, e.target.value)}
        error={errors[name] || false}
        helperText={errors[name] ? `Invalid ${label.toLowerCase()}` : ""}
        fullWidth
        required={required}
      />
      <Tooltip title={tooltip} arrow>
        <IconButton size="small">
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <Box className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <Typography variant="h5" className="mb-4 font-semibold">
        Bank Account Opening Form
      </Typography>
      <form className="space-y-4">
        {renderField("Full Name", "fullName", "Enter your legal full name as per official ID.")}
        {renderField("Date of Birth", "dob", "Format: DD/MM/YYYY")}
        {renderField("Mobile Number", "mobile", "Use 10-digit Indian mobile number.")}
        {renderField("Email ID", "email", "Enter a valid email for communication.")}
        {renderField("PAN Number", "pan", "Optional. Required for accounts with high transaction limits.", false)}
        {renderField("Aadhaar Number", "aadhaar", "Enter 12-digit Aadhaar number for KYC.")}

        <Box className="text-center pt-4">
          <Tooltip
            title={isFormValid() ? "" : "Please complete all required fields."}
            arrow
          >
            <span>
              <Button
                variant="contained"
                color="primary"
                disabled={!isFormValid()}
                onClick={handleSubmit}
              >
                Submit Application
              </Button>
            </span>
          </Tooltip>
        </Box>
      </form>

      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>
          <Box className="flex items-center gap-2">
            <CheckCircleOutlineIcon color="success" />
            Application Submitted Successfully
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography className="mb-2">
            <strong>Name:</strong> {form.fullName}
          </Typography>
          <Typography className="mb-2">
            <strong>DOB:</strong> {form.dob}
          </Typography>
          <Typography className="mb-2">
            <strong>Mobile:</strong> {form.mobile}
          </Typography>
          <Typography className="mb-2">
            <strong>Email:</strong> {form.email}
          </Typography>
          {form.pan && (
            <Typography className="mb-2">
              <strong>PAN:</strong> {form.pan}
            </Typography>
          )}
          <Typography>
            <strong>Aadhaar:</strong> {form.aadhaar}
          </Typography>
        </DialogContent>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Dialog>
    </Box>
  );
};

