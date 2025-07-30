import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
  Chip,
  Snackbar,
  Alert,
  Link,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  type SelectChangeEvent,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    termsAccepted: false,
    languages: {
      english: false,
      hindi: false,
    },
    salutation: '',
    jobRoles: [],
    rating: 5,
    skills: [] as string[],
    newSkill: '',
    resume: null as File | null,
    availabilityDate: '',
    availabilityTime: '',
  });

  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name in formData.languages) {
      setFormData(prev => ({ ...prev, languages: { ...prev.languages, [name]: checked } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: checked }));
    }
  };

const handleSelectChange = (e: SelectChangeEvent<string>) => {
  const { name, value } = e.target;
  if (name) {
    setFormData(prev => ({ ...prev, [name]: value }));
  }
};

const handleMultiSelectChange = (e: SelectChangeEvent<string[]>) => {
  const { name, value } = e.target;
  if (name) {
    setFormData(prev => ({ ...prev, [name]: typeof value === 'string' ? value.split(',') : value }));
  }
};


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setFormData(prev => ({ ...prev, resume: file }));
  }
};

  const handleAddSkill = () => {
    if (formData.newSkill.trim()) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, prev.newSkill], newSkill: '' }));
    }
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(skill => skill !== skillToDelete) }));
  };

  const handleSubmit = () => {
    setToast({ open: true, message: 'Application submitted successfully!', severity: 'success' });
  };

  const handleCancel = () => {
    setToast({ open: true, message: 'Application submission failed!', severity: 'error' });
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      gender: '',
      termsAccepted: false,
      languages: {
        english: false,
        hindi: false,
      },
      salutation: '',
      jobRoles: [],
      rating: 5,
      skills: [],
      newSkill: '',
      resume: null,
      availabilityDate: '',
      availabilityTime: '',
    });
  };

  const handleDownload = () => {
    const blob = new Blob([
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}`,
    ]);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${formData.firstName}.${formData.lastName}.pdf`;
    link.click();
  };

  return (
    <Box p={3} maxWidth={700} mx="auto">
      <Typography variant="h5" gutterBottom>
        Job Application Form
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Salutation</InputLabel>
          <Select name="salutation" value={formData.salutation} onChange={handleSelectChange}>
            <MenuItem value="Mr">Mr</MenuItem>
            <MenuItem value="Mrs">Mrs</MenuItem>
          </Select>
        </FormControl>
        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} fullWidth />
        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} fullWidth />
      </Box>

      <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} />

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <RadioGroup row name="gender" value={formData.gender} onChange={handleInputChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel control={<Checkbox checked={formData.languages.english} onChange={handleCheckboxChange} name="english" />} label="English" />
        <FormControlLabel control={<Checkbox checked={formData.languages.hindi} onChange={handleCheckboxChange} name="hindi" />} label="Hindi" />
      </FormGroup>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Job Roles</InputLabel>
        <Select name="jobRoles" value={formData.jobRoles} onChange={handleMultiSelectChange} multiple>
          <MenuItem value="FE">Frontend</MenuItem>
          <MenuItem value="BE">Backend</MenuItem>
          <MenuItem value="FullStack">Full Stack</MenuItem>
          <MenuItem value="QA">QA</MenuItem>
        </Select>
      </FormControl>

      <Typography gutterBottom>Rate yourself</Typography>
      <Slider value={formData.rating} min={1} max={10} onChange={(_, val) => setFormData(prev => ({ ...prev, rating: val as number }))} sx={{ mb: 2 }} />
      <Typography mb={2}>Rating: {formData.rating}</Typography>

      <TextField label="Add Skill" value={formData.newSkill} onChange={(e) => setFormData(prev => ({ ...prev, newSkill: e.target.value }))} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())} fullWidth sx={{ mb: 2 }} />
      <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
        {formData.skills.map(skill => (
          <Chip key={skill} label={skill} onDelete={() => handleDeleteSkill(skill)} />
        ))}
      </Box>

      <TextField label="Availability Date" name="availabilityDate" type="date" InputLabelProps={{ shrink: true }} value={formData.availabilityDate} onChange={handleInputChange} sx={{ mb: 2 }} fullWidth />
      <TextField label="Availability Time" name="availabilityTime" type="time" InputLabelProps={{ shrink: true }} value={formData.availabilityTime} onChange={handleInputChange} sx={{ mb: 2 }} fullWidth />

      <Button variant="contained" component="label" startIcon={<CloudUpload />} sx={{ mb: 2 }}>
        Upload Resume
        <input type="file" hidden accept=".pdf,.docx" onChange={handleFileChange} />
      </Button>

      <Typography mb={1}>
        <Link href="#">Read Terms and Conditions</Link>
      </Typography>
      <FormControlLabel control={<Checkbox checked={formData.termsAccepted} onChange={handleCheckboxChange} name="termsAccepted" />} label="I agree to Terms & Conditions" sx={{ mb: 2 }} />

      <LinearProgress variant="determinate" value={Object.values(formData).filter(Boolean).length * 5} sx={{ mb: 2 }} />

      <Box display="flex" gap={2} flexWrap="wrap">
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        <Button variant="outlined" color="error" onClick={handleCancel}>Cancel</Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
        <Button variant="contained" onClick={() => setPreviewOpen(true)}>Preview</Button>
        <Button variant="outlined" onClick={handleDownload}>Download</Button>
      </Box>

      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)}>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={toast.open} autoHideDuration={3000} onClose={() => setToast(prev => ({ ...prev, open: false }))}>
        <Alert severity={toast.severity} variant="filled">{toast.message}</Alert>
      </Snackbar>
    </Box>
  );
};
