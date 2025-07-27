"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  IconButton,
  Tooltip,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material"
import { ContentCopy, CheckCircle, ExpandMore } from "@mui/icons-material"
import { CodeBlock } from "./CodeBlock"
import type { SolutionCode, TestCase } from "../../interfaces/interfaces"

interface SolutionCodeProps {
  solutions: SolutionCode[]
  testCases: TestCase[]
}

export function SolutionCodeComponent({ solutions, testCases }: SolutionCodeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("selenium")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const languages = [...new Set(solutions.map((s) => s.language))]

  const handleCopyCode = async (code: string, testCaseId: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(testCaseId)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const getTestCaseById = (id: string) => testCases.find((tc) => tc.id === id)

  const filteredSolutions = solutions.filter((solution) => solution.language === selectedLanguage)

  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        Solution Code
      </Typography>

      <Alert severity="info" className="mb-4">
        Here you'll find complete automation code solutions for each test case. Copy the code and modify it according to
        your needs.
      </Alert>

      {/* Language Tabs */}
      <Paper elevation={1} className="mb-4">
        <Tabs
          value={selectedLanguage}
          onChange={(_, newValue) => setSelectedLanguage(newValue)}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
            },
          }}
        >
          {languages.map((language) => (
            <Tab key={language} label={language.charAt(0).toUpperCase() + language.slice(1)} value={language} />
          ))}
        </Tabs>
      </Paper>

      {/* Solutions */}
      <Box className="space-y-4">
        {filteredSolutions.map((solution) => {
          const testCase = getTestCaseById(solution.testCaseId)
          return (
            <Accordion key={solution.testCaseId}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box className="flex items-center gap-2 w-full">
                  <Typography variant="subtitle1">{solution.testCaseId}</Typography>
                  {testCase && (
                    <>
                      <Chip label={testCase.type} size="small" />
                      <Typography className="text-gray-600 flex-1">{testCase.scenario}</Typography>
                    </>
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {/* Explanation */}
                  <Typography variant="subtitle2" className="mb-2">
                    Explanation:
                  </Typography>
                  <Typography className="text-gray-700 mb-4">{solution.explanation}</Typography>

                  {/* Code Block with Copy Button */}
                  <Box className="relative">
                    <Box className="absolute top-2 right-2 z-10">
                      <Tooltip title={copiedCode === solution.testCaseId ? "Copied!" : "Copy code"}>
                        <IconButton
                          size="small"
                          onClick={() => handleCopyCode(solution.code, solution.testCaseId)}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 1)",
                            },
                          }}
                        >
                          {copiedCode === solution.testCaseId ? <CheckCircle color="success" /> : <ContentCopy />}
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <CodeBlock code={solution.code} language={solution.language} />
                  </Box>

                  {/* Test Case Reference */}
                  {testCase && (
                    <Paper elevation={0} className="bg-gray-50 p-3 mt-4">
                      <Typography variant="subtitle2" className="mb-1">
                        Related Test Case:
                      </Typography>
                      <Typography className="text-sm text-gray-600">{testCase.description}</Typography>
                    </Paper>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>

      {filteredSolutions.length === 0 && (
        <Box className="text-center py-8">
          <Typography className="text-gray-500">No solutions available for {selectedLanguage}.</Typography>
        </Box>
      )}
    </Box>
  )
}
