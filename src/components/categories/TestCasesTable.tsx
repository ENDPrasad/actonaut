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
  Collapse
} from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
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
        <TableCell>{testCase.expectedResult}</TableCell>
        <TableCell>
          <Chip label={testCase.type} color={getTypeColor(testCase.type)} size="small" />
        </TableCell>
        <TableCell>
          <Chip label={testCase.priority} color={getPriorityColor(testCase.priority)} size="small" />
        </TableCell>
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
  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        Test Cases
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-label="test cases table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Test ID</TableCell>
              <TableCell>Scenario</TableCell>
              <TableCell>Expected Result</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testCases.map((testCase) => (
              <Row key={testCase.id} testCase={testCase} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
