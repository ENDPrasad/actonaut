import { Typography, Box } from "@mui/material"
import type { ContentSection } from "../../interfaces/interfaces"

interface ContentSectionProps {
  section: ContentSection
}

export function ContentSectionComponent({ section }: ContentSectionProps) {
  return (
    <Box className="mb-8">
      <Typography variant="h6" component="h3" className="text-lg font-semibold text-gray-900 mb-4">
        {section.title}
      </Typography>
      <Box className="text-gray-700 leading-relaxed">{section.content}</Box>
    </Box>
  )
}
