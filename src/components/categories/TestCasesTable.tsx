"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Collapse,
  Tooltip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowUp, FilterList } from "@mui/icons-material"
import type { TestCase } from "../../interfaces/interfaces"

interface TestCasesTableProps {
  testCases: TestCase[]
}

interface RowProps {
  testCase: TestCase
}

function Row({ testCase }: RowProps) {
  const [open, setOpen] = useState(false)

  const getTypeColor = (type: TestCase["type"]) => {
    switch (type) {
      case "positive":
        return "success"
      case "negative":
        return "warning"
      case "error":
        return "error"
      default:
        return "default"
    }
  }

  const getPriorityColor = (priority: TestCase["priority"]) => {
    switch (priority) {
      case "high":
        return "error"
      case "medium":
        return "warning"
      case "low":
        return "info"
      default:
        return "default"
    }
  }

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {testCase.id}
        </TableCell>
        <TableCell>{testCase.scenario}</TableCell>
        <TableCell>
          <Chip label={testCase.type} color={getTypeColor(testCase.type)} size="small" />
        </TableCell>
        <TableCell>
          <Chip label={testCase.priority} color={getPriorityColor(testCase.priority)} size="small" />
        </TableCell>
        <TableCell>{testCase.expectedResult}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Test Steps & Details
              </Typography>
              <Box className="mb-4">
                <Typography variant="subtitle2" className="mb-2">
                  Description:
                </Typography>
                <Typography className="text-gray-700 mb-4">{testCase.description}</Typography>
                <Typography variant="subtitle2" className="mb-2">
                  Steps to Execute:
                </Typography>
                <Box component="ol" className="list-decimal list-inside space-y-1">
                  {testCase.steps.map((step, index) => (
                    <Typography key={index} component="li" className="text-gray-700">
                      {step}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export function TestCasesTable({ testCases }: TestCasesTableProps) {
  const [filteredTestCases, setFilteredTestCases] = useState(testCases)
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilter = () => {
    let filtered = testCases

    if (typeFilter !== "all") {
      filtered = filtered.filter((tc) => tc.type === typeFilter)
    }

    if (priorityFilter !== "all") {
      filtered = filtered.filter((tc) => tc.priority === priorityFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (tc) =>
          tc.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tc.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredTestCases(filtered)
  }

  // Apply filters whenever filter values change
  useState(() => {
    handleFilter()
  })

  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        Test Cases
      </Typography>

      {/* Filters */}
      <Paper elevation={1} className="p-4 mb-4">
        <Box className="flex gap-4 items-center flex-wrap">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              handleFilter()
            }}
            sx={{ minWidth: 200 }}
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={typeFilter}
              label="Type"
              onChange={(e) => {
                setTypeFilter(e.target.value)
                handleFilter()
              }}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="positive">Positive</MenuItem>
              <MenuItem value="negative">Negative</MenuItem>
              <MenuItem value="error">Error</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priorityFilter}
              label="Priority"
              onChange={(e) => {
                setPriorityFilter(e.target.value)
                handleFilter()
              }}
            >
              <MenuItem value="all">All Priorities</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Filter">
            <IconButton onClick={handleFilter}>
              <FilterList />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>

      {/* Test Cases Table */}
      <TableContainer component={Paper}>
        <Table aria-label="test cases table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Test ID</TableCell>
              <TableCell>Scenario</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Expected Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTestCases.map((testCase) => (
              <Row key={testCase.id} testCase={testCase} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {filteredTestCases.length === 0 && (
        <Box className="text-center py-8">
          <Typography className="text-gray-500">No test cases match your filters.</Typography>
        </Box>
      )}
    </Box>
  )
}
