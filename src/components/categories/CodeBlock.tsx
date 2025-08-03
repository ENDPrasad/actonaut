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
      sx={{ backgroundColor: "#f9fafb", fontFamily: 'monospace, "Inter" !important' }}
    >
      <Typography
        component="pre"
        className="text-sm text-gray-800 overflow-x-auto font-mono"
        sx={{
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace !important',
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        <code id="code-block" style={{fontFamily: 'monospace, "Inter" !important'}} className={`language-${language}`}>{code}</code>
      </Typography>
    </Paper>
  )
}
