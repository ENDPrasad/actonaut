"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Link,
  Chip,
  Alert,
} from "@mui/material"
import { PlayArrow, Code, Refresh } from "@mui/icons-material"
import type { PracticeEnvironment, InteractiveElement } from "../../interfaces/interfaces"

interface PracticeEnvironmentProps {
  environment: PracticeEnvironment
}

export function PracticeEnvironmentComponent({ environment }: PracticeEnvironmentProps) {
  const [selectedElement, setSelectedElement] = useState<InteractiveElement | null>(null)
  const [practiceMode, setPracticeMode] = useState(false)

  const renderInteractiveElement = (element: InteractiveElement) => {
    const commonProps = {
      id: element.id,
      "data-testid": element.selector,
      className: practiceMode ? "border-2 border-blue-500 hover:border-blue-700" : "",
      onClick: () => setSelectedElement(element),
    }

    switch (element.type) {
      case "button":
        return (
          <Button key={element.id} variant="contained" color="primary" {...commonProps}>
            {element.label}
          </Button>
        )
      case "input":
        return <TextField key={element.id} label={element.label} variant="outlined" size="small" {...commonProps} />
      case "checkbox":
        return <FormControlLabel key={element.id} control={<Checkbox {...commonProps} />} label={element.label} />
      case "dropdown":
        return (
          <FormControl key={element.id} size="small" sx={{ minWidth: 120 }}>
            <InputLabel>{element.label}</InputLabel>
            <Select {...commonProps} label={element.label}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        )
      case "link":
        return (
          <Link key={element.id} href="#" {...commonProps}>
            {element.label}
          </Link>
        )
      default:
        return null
    }
  }

  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        {environment.title}
      </Typography>
      <Typography className="text-gray-600 mb-4">{environment.description}</Typography>

      {/* Practice Controls */}
      <Box className="mb-6 flex gap-2">
        <Button
          variant={practiceMode ? "contained" : "outlined"}
          startIcon={<PlayArrow />}
          onClick={() => setPracticeMode(!practiceMode)}
        >
          {practiceMode ? "Exit Practice Mode" : "Start Practice Mode"}
        </Button>
        <Button variant="outlined" startIcon={<Code />}>
          View Page Source
        </Button>
        <Button variant="outlined" startIcon={<Refresh />}>
          Reset
        </Button>
      </Box>

      {practiceMode && (
        <Alert severity="info" className="mb-4">
          Practice Mode: Click on any element to see its selector and automation details.
        </Alert>
      )}

      {/* Sample Website */}
      <Paper elevation={2} className="p-6 mb-6">
        <Typography variant="h6" className="mb-4">
          Sample Website - {environment.title}
        </Typography>
        <Box className="space-y-4">
          <Box className="flex flex-wrap gap-4 items-center">
            {environment.interactiveElements.map(renderInteractiveElement)}
          </Box>
        </Box>
      </Paper>

      {/* Element Details */}
      {selectedElement && (
        <Paper elevation={1} className="p-4 mb-4">
          <Typography variant="h6" className="mb-2">
            Selected Element Details
          </Typography>
          <Box className="space-y-2">
            <Typography>
              <strong>Type:</strong> <Chip label={selectedElement.type} size="small" />
            </Typography>
            <Typography>
              <strong>Label:</strong> {selectedElement.label}
            </Typography>
            <Typography>
              <strong>Selector:</strong>{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">{selectedElement.selector}</code>
            </Typography>
            <Typography>
              <strong>Description:</strong> {selectedElement.description}
            </Typography>
          </Box>
        </Paper>
      )}

      {/* Instructions */}
      <Paper elevation={1} className="p-4">
        <Typography variant="h6" className="mb-2">
          Practice Instructions
        </Typography>
        <Box component="ol" className="list-decimal list-inside space-y-1">
          {environment.instructions.map((instruction, index) => (
            <Typography key={index} component="li">
              {instruction}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}
