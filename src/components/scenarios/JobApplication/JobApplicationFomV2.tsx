import React, { useState, type ChangeEvent } from 'react';
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Chip,
  Snackbar,
  Slider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  type SelectChangeEvent,
} from '@mui/material';
import { saveAs } from 'file-saver';

type Gender = 'Male' | 'Female' | 'Do Not Disclose' | 'Other';
type Role = 'Frontend' | 'Backend' | 'FullStack' | 'QA' | 'DevOps' | 'PM' | 'IT';
type Language = 'English' | 'Hindi' | 'Other';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: Gender;
  languages: Language[];
  salutation: string;
  jobRoles: Role[];
  rating: number;
  skills: string[];
  resume: File | null;
  availableDate: string;
  availableTime: string;
  termsAccepted: boolean;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  gender: 'Male',
  languages: [],
  salutation: '',
  jobRoles: [],
  rating: 0,
  skills: [],
  resume: null,
  availableDate: '',
  availableTime: '',
  termsAccepted: false,
};

export default function JobApplicationFormV2() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [skillInput, setSkillInput] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [snack, setSnack] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const [previewOpen, setPreviewOpen] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Enter a valid email';
    } else if (name === 'mobile' && !/^\d{10}$/.test(value)) {
      error = 'Mobile must be 10 digits';
    }
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? value : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    validateField(name, value);
  };


const handleMultiSelectChange = (e: SelectChangeEvent<string[]>) => {
  const { name, value } = e.target;
  if (name) {
    setFormData(prev => ({ ...prev, [name]: typeof value === 'string' ? value.split(',') : value }));
  }
};

//   const handleSkillsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && e.currentTarget.value.trim()) {
//       e.preventDefault();
//       setFormData(prev => ({
//         ...prev,
//         skills: [...prev.skills, e.currentTarget.value.trim()],
//       }));
//       e.currentTarget.value = '';
//     }
//   };

//   const handleSkillDelete = (skillToDelete: string) => {
//     setFormData(prev => ({
//       ...prev,
//       skills: prev.skills.filter(skill => skill !== skillToDelete),
//     }));
//   };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      setFormData(prev => ({ ...prev, resume: file }));
    } else {
      setSnack({ open: true, message: 'Only .pdf or .docx allowed', severity: 'error' });
    }
  };

  const handleSubmit = () => {
    if (Object.values(formData).some(value => value === '' || value === null || (Array.isArray(value) && value.length === 0))) {
      setSnack({ open: true, message: 'Please fill all fields.', severity: 'error' });
      return;
    }
    setSnack({ open: true, message: 'Application Submitted Successfully!', severity: 'success' });
  };

  const handleDownload = () => {
    const content = JSON.stringify(formData, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    saveAs(blob, `${formData.firstName}.${formData.lastName}.json`);
  };

  const handleCancel = () => {
    setSnack({ open: true, message: 'Application submission failed.', severity: 'error' });
  };

  const handleClear = () => {
    setFormData(initialForm);
    setFormErrors({});
  };

  return (
    <Box className="p-6 space-y-6 max-w-4xl mx-auto">
      <Typography variant="h5">Personal Details</Typography>

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField required label="Salutation" name="salutation" value={formData.salutation} onChange={handleInputChange} />
        <TextField
        required
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          onBlur={(e) => validateField(e.target.name, e.target.value)}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
        />
        <TextField
        required
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={(e) => validateField(e.target.name, e.target.value)}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
        />
        <TextField
        required
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={(e) => validateField(e.target.name, e.target.value)}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
        required
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          onBlur={(e) => validateField(e.target.name, e.target.value)}
          error={!!formErrors.mobile}
          helperText={formErrors.mobile}
        />
      </Box>

      <FormControl>
        <FormLabel>Gender*</FormLabel>
        <RadioGroup row name="gender" value={formData.gender} onChange={handleInputChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Do Not Disclose" control={<Radio />} label="Do Not Disclose" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormGroup row className='flex flex-col gap-2'>
        <FormLabel>Known Languages*</FormLabel> 

        {['English', 'Hindi', 'Other'].map((lang) => (
          <FormControlLabel
            key={lang}
            control={
              <Checkbox
                checked={formData.languages.includes(lang as Language)}
                onChange={() =>
                  setFormData(prev => {
                    const current = [...prev.languages];
                    const idx = current.indexOf(lang as Language);
                    if (idx > -1) current.splice(idx, 1);
                    else current.push(lang as Language);
                    return { ...prev, languages: current };
                  })
                }
              />
            }
            label={lang}
          />
        ))}
      </FormGroup>

      <Typography variant="h6">Resume</Typography>
      <input required type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      {formData.resume && (
  <Box sx={{ mt: 1 }}>
    <Typography fontWeight="bold">Resume:</Typography>
    <a
      href={URL.createObjectURL(formData.resume)}
      target="_blank"
      rel="noopener noreferrer"
      className='hover:underline'
    >
      {formData.resume.name}
    </a>
  </Box>
)}


      <TextField
      required
  fullWidth
  variant="outlined"
  label="Add a Skill"
  value={skillInput}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkillInput(e.target.value)}
  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()],
        }));
        setSkillInput('');
      }
    }
  }}
  sx={{ mt: 2 }}
/>

<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
  {formData.skills.map((skill, index) => (
    <Chip
      key={index}
      label={skill}
      onDelete={() => {
        setFormData((prev) => ({
          ...prev,
          skills: prev.skills.filter((_, i) => i !== index),
        }));
      }}
    />
  ))}
</Box>


      <Typography variant="h6">Job Roles</Typography>
      <FormControl fullWidth>
        <InputLabel>Roles*</InputLabel>
        <Select
        required
          multiple
          name="jobRoles"
          value={formData.jobRoles}
          onChange={handleMultiSelectChange}
          input={<OutlinedInput label="Roles" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {['Frontend', 'Backend', 'FullStack', 'QA', 'DevOps', 'PM', 'IT'].map(role => (
            <MenuItem key={role} value={role}>
              <Checkbox checked={formData.jobRoles.indexOf(role as Role) > -1} />
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6">Self Rating</Typography>
      <Slider
        aria-required
        name="rating"
        value={formData.rating}
        onChange={(e, val) => setFormData(prev => ({ ...prev, rating: val as number }))}
        min={0}
        max={10}
        valueLabelDisplay="on"
      />
      <Typography variant="h6">Availability</Typography>

      <Box className='flex gap-4 py-4'>
        <TextField
        required
        type="date"
        name="availableDate"
        value={formData.availableDate}
        onChange={handleInputChange}
        label="Available Date"
        style={{width: '15rem'}}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
      required
        type="time"
        name="availableTime"
        value={formData.availableTime}
        onChange={handleInputChange}
        label="Available Time"
        style={{width: '15rem'}}
        InputLabelProps={{ shrink: true }}
      />
      </Box>

      <FormControlLabel
        control={
          <Checkbox required checked={formData.termsAccepted} onChange={handleInputChange} name="termsAccepted" />
        }
        label="I accept terms and conditions"
      />

      <Box className="flex gap-4">
        <Button onClick={() => setPreviewOpen(true)} variant="outlined">Preview</Button>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
        <Button onClick={handleCancel} color="error">Cancel</Button>
        <Button onClick={handleDownload} color="info">Download</Button>
        <Button onClick={handleClear} color="warning">Clear</Button>
      </Box>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack(prev => ({ ...prev, open: false }))}>
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>

      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
