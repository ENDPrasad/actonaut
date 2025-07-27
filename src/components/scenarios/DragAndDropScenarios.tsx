import { Box, Typography, Paper, Card, CardContent } from "@mui/material"
import { DragIndicator } from "@mui/icons-material"

export function BasicDragDropScenario() {
  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        Task Management Board
      </Typography>
      <Paper className="p-4 bg-gray-50">
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* To Do Column */}
          <Box>
            <Typography variant="h6" className="mb-3 text-center">
              To Do
            </Typography>
            <Box
              id="todo-column"
              className="min-h-[300px] bg-blue-50 p-3 rounded border-2 border-dashed border-blue-200"
            >
              <Card className="mb-2 cursor-move" draggable>
                <CardContent className="p-3">
                  <Box className="flex items-center gap-2">
                    <DragIndicator className="text-gray-400" />
                    <Typography variant="body2">Design new homepage</Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card className="mb-2 cursor-move" draggable>
                <CardContent className="p-3">
                  <Box className="flex items-center gap-2">
                    <DragIndicator className="text-gray-400" />
                    <Typography variant="body2">Write user documentation</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* In Progress Column */}
          <Box>
            <Typography variant="h6" className="mb-3 text-center">
              In Progress
            </Typography>
            <Box
              id="progress-column"
              className="min-h-[300px] bg-yellow-50 p-3 rounded border-2 border-dashed border-yellow-200"
            >
              <Card className="mb-2 cursor-move" draggable>
                <CardContent className="p-3">
                  <Box className="flex items-center gap-2">
                    <DragIndicator className="text-gray-400" />
                    <Typography variant="body2">Implement user authentication</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Done Column */}
          <Box>
            <Typography variant="h6" className="mb-3 text-center">
              Done
            </Typography>
            <Box
              id="done-column"
              className="min-h-[300px] bg-green-50 p-3 rounded border-2 border-dashed border-green-200"
            >
              <Card className="mb-2 cursor-move" draggable>
                <CardContent className="p-3">
                  <Box className="flex items-center gap-2">
                    <DragIndicator className="text-gray-400" />
                    <Typography variant="body2">Set up project repository</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
