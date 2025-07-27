"use client"
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { ExpandMore, CheckCircle } from "@mui/icons-material"
import type { PracticeScenario } from "../../interfaces/interfaces"

interface PracticeScenarioProps {
  scenario: PracticeScenario
}

export function PracticeScenarioComponent({ scenario }: PracticeScenarioProps) {
  const getDifficultyColor = (difficulty: PracticeScenario["difficulty"]) => {
    switch (difficulty) {
      case "beginner":
        return "success"
      case "intermediate":
        return "warning"
      case "advanced":
        return "error"
      default:
        return "default"
    }
  }

  return (
    <Box>
      {/* Scenario Header */}
      <Box className="mb-6">
        <Box className="flex items-center gap-2 mb-2">
          <Typography variant="h6">{scenario.title}</Typography>
          <Chip label={scenario.difficulty} color={getDifficultyColor(scenario.difficulty)} size="small" />
          <Chip label={scenario.category} variant="outlined" size="small" />
        </Box>
        <Typography className="text-gray-600 mb-4">{scenario.description}</Typography>
      </Box>

      {/* Practice Site */}
      <Paper elevation={2} className="mb-6">
        <Box className="p-6">{scenario.siteContent}</Box>
      </Paper>

      {/* Learning Objectives - Collapsed by default */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">What will you learn from this scenario?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {scenario.learningObjectives.map((objective, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={objective} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
