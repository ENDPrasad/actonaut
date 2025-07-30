import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Alert,
  Stack,
} from "@mui/material";

interface Employment {
  company: string;
  startDate: string;
  endDate: string;
}

export default function EmploymentHistory() {
  const [employmentList, setEmploymentList] = useState<Employment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEmployment, setNewEmployment] = useState<Employment>({
    company: "",
    startDate: "",
    endDate: "",
  });
  const [overlapWarning, setOverlapWarning] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true)

  const handleAddEmployment = () => {
    if(!(newEmployment.company || newEmployment.startDate || newEmployment.endDate)){ 
      setIsEmpty(true)
      return
     }
     setIsEmpty(false)
    const start = new Date(newEmployment.startDate);
    const end = new Date(newEmployment.endDate);

    // Validate overlap
    const isOverlapping = employmentList.some((emp) => {
      const empStart = new Date(emp.startDate);
      const empEnd = new Date(emp.endDate);
      return start <= empEnd && end >= empStart;
    });

    if (isOverlapping) {
      setOverlapWarning(true);
      return;
    }

    setEmploymentList([...employmentList, newEmployment]);
    setModalOpen(false);
    setNewEmployment({ company: "", startDate: "", endDate: "" });
    setOverlapWarning(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h6" mb={2}>
        Employment History
      </Typography>
      <Stack spacing={2}>
        {employmentList.map((emp, index) => (
          <Box key={index} p={2} border="1px solid #ccc" borderRadius={2}>
            <Typography>
              <strong>Company:</strong> {emp.company}
            </Typography>
            <Typography>
              <strong>Start:</strong> {emp.startDate}
            </Typography>
            <Typography>
              <strong>End:</strong> {emp.endDate}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Button variant="contained" sx={{ mt: 2 }} onClick={() => setModalOpen(true)}>
        Add Employment
      </Button>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Add Employment</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {isEmpty && (
              <Alert severity="warning">
                Fill all the mandatory fields!!
              </Alert>
            )}
            <TextField
            required
              label="Company Name"
              value={newEmployment.company}
              onChange={(e) =>
                setNewEmployment({ ...newEmployment, company: e.target.value })
              }
              fullWidth
            />
            <TextField
            required
              type="date"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              value={newEmployment.startDate}
              onChange={(e) =>
                setNewEmployment({ ...newEmployment, startDate: e.target.value })
              }
              fullWidth
            />
            <TextField
            required
              type="date"
              label="End Date"
              InputLabelProps={{ shrink: true }}
              value={newEmployment.endDate}
              onChange={(e) =>
                setNewEmployment({ ...newEmployment, endDate: e.target.value })
              }
              fullWidth
            />

            {overlapWarning && (
              <Alert severity="warning">
                Overlapping employment detected. Please adjust the dates.
              </Alert>
            )}

            <Button variant="contained" onClick={handleAddEmployment}>
              Add
            </Button>
            
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
