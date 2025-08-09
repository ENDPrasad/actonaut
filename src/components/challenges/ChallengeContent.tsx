import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import {
  CheckCircle,
  Lightbulb,
  ExpandMore,
  Assignment,
  Flag,
} from "@mui/icons-material"
import type { Challenge } from "../../interfaces/interfaces"


interface ChallengeContentProps {
  challenge: Challenge
  backgroundInfo?: string
  requirements?: string[]
  acceptanceCriteria?: string[]
}

export function ChallengeContent({
  challenge,
  backgroundInfo,
  requirements,
  acceptanceCriteria,
}: ChallengeContentProps) {


  return (
    <Box>
      {/* Challenge Header */}
      <Paper elevation={1} className="p-6 mb-6">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          {/* Left column */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "2",  } }}>
            <Typography variant="h4" component="h1" sx={{marginBottom: '12px'}}>
              {challenge.title}
            </Typography>
            <Typography variant="h6" className="mb-3 flex items-center gap-2">
            <Assignment color="primary" />
            Background
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            {backgroundInfo}
          </Typography>
          </Box>
          
        </Box>
      </Paper>

      {/* Challenge Scenario */}
      <Paper elevation={1} className="p-6 mb-6">
        <Typography variant="h6" sx={{marginBottom: '16px'}}>
          Challenge Scenario
        </Typography>
        {challenge.scenario}
      </Paper>

      {/* Objectives */}
      {
        challenge.objectives && <Paper elevation={1} className="p-6 mb-6">
        <Typography variant="h6" className="mb-4 flex items-center gap-2">
          <Flag color="primary" />
          Objectives
        </Typography>
        <List>
          {challenge.objectives && challenge.objectives.map((objective, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={objective} />
            </ListItem>
          ))}
        </List>
      </Paper>
      }
      

      {/* Requirements */}
      {requirements && requirements.length > 0 && (
        <Paper elevation={1} className="p-6 mb-6">
          <Typography variant="h6" className="mb-4">
            Requirements
          </Typography>
          <List>
            {requirements.map((requirement, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                  <CheckCircle color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={requirement} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* Acceptance Criteria */}
      {acceptanceCriteria && acceptanceCriteria.length > 0 && (
        <Paper elevation={1} className="p-6 mb-6">
          <Typography variant="h6" className="mb-4">
            Acceptance Criteria
          </Typography>
          <List>
            {acceptanceCriteria.map((criteria, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={criteria} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* Hints */}
      {challenge.hints && challenge.hints.length > 0 && (
        <Paper elevation={1} className="p-6">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box className="flex items-center gap-2">
                <Lightbulb color="warning" />
                <Typography variant="h6">Hints</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {challenge.hints.map((hint, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText primary={hint} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Paper>
      )}
    </Box>

    
  )
}
