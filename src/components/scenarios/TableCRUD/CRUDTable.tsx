import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  location: string;
  email: string;
}

const initialEmployees: Employee[] = [
  { id: 1, name: "Alice Johnson", position: "Software Engineer", department: "Development", email: "alice.johnson@example.com", location: "New York" },
  { id: 2, name: "Bob Smith", position: "Product Manager", department: "Product", email: "bob.smith@example.com", location: "San Francisco" },
  { id: 3, name: "Charlie Brown", position: "UI/UX Designer", department: "Design", email: "charlie.brown@example.com", location: "Austin" },
  { id: 4, name: "Diana Adams", position: "QA Engineer", department: "Quality Assurance", email: "diana.adams@example.com", location: "Chicago" },
  { id: 5, name: "Ethan Lee", position: "DevOps Engineer", department: "Operations", email: "ethan.lee@example.com", location: "Seattle" },
  { id: 6, name: "Fiona Clark", position: "HR Manager", department: "Human Resources", email: "fiona.clark@example.com", location: "Boston" },
  { id: 7, name: "George Turner", position: "Technical Lead", department: "Development", email: "george.turner@example.com", location: "Denver" },
  { id: 8, name: "Hannah Kim", position: "Business Analyst", department: "Business", email: "hannah.kim@example.com", location: "Atlanta" },
  { id: 9, name: "Ivan Rogers", position: "Marketing Executive", department: "Marketing", email: "ivan.rogers@example.com", location: "Los Angeles" },
  { id: 10, name: "Jasmine Patel", position: "Customer Support", department: "Support", email: "jasmine.patel@example.com", location: "Miami" },
];



export default function EmployeeTable() {
  const [data, setData] = useState<Employee[]>(initialEmployees);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Employee; direction: "asc" | "desc" } | null>(null);
  const [selected, setSelected] = useState<Employee | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.position.toLowerCase().includes(search.toLowerCase()) ||
        emp.department.toLowerCase().includes(search.toLowerCase()) ||
        emp.location.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleSort = (key: keyof Employee) => {
    setSortConfig((prev) => {
      if (!prev || prev.key !== key) return { key, direction: "asc" };
      return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
    });
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleDialogOpen = (employee?: Employee) => {
    if (employee) setSelected(employee);
    else setSelected(null);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelected(null);
  };

  const handleSave = () => {
    if (!selected) return;
    if (selected.id) {
      // Update existing
      setData((prev) =>
        prev.map((emp) => (emp.id === selected.id ? selected : emp))
      );
    } else {
      // Add new
      const newId = data.length ? Math.max(...data.map((e) => e.id)) + 1 : 1;
      setData((prev) => [...prev, { ...selected, id: newId } as Employee]);
    }
    handleDialogClose();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={() => handleDialogOpen()}>
          Add Employee
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              {["name", "position", "department", "location", "email"].map((col) => (
                <TableCell
                  key={col}
                  className="cursor-pointer select-none"
                  onClick={() => handleSort(col as keyof Employee)}
                >
                  <div className="flex items-center">
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                    {sortConfig?.key === col && (
                      sortConfig.direction === "asc" ? <ArrowDropUp /> : <ArrowDropDown />
                    )}
                  </div>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDialogOpen(emp)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(emp.id)}>
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth>
        <DialogTitle>{selected?.id ? "Edit Employee" : "Add Employee"}</DialogTitle>
        <DialogContent  className="flex flex-col gap-6">
          {(["name", "position", "department", "location", "email"] as (keyof Employee)[]).map((field) => (
            <TextField
            required
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={selected?.[field] || ""}
              onChange={(e) =>
                setSelected((prev) => ({ ...(prev || {}), [field]: e.target.value } as Employee))
              }
              fullWidth
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
