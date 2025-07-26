import { Paper, Typography } from "@mui/material"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "html" }: CodeBlockProps) {
  return (
    <Paper
      elevation={0}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4"
      sx={{ backgroundColor: "#f9fafb" }}
    >
      <Typography
        component="pre"
        className="text-sm text-gray-800 overflow-x-auto font-mono"
        sx={{
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        <code className={`language-${language}`}>{code}</code>
      </Typography>
    </Paper>
  )
}
