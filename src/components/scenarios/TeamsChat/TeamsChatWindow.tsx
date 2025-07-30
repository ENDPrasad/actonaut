import { useState, type KeyboardEvent } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import './TeamsChatWindow.css'

interface Message {
  id: number
  text: string
}

const urlRegex = /(https?:\/\/[^\s]+)/g

const convertLinks = (text: string, isCtrlRequired: boolean = true) => {
  return text.split(" ").map((word, idx) => {
    if (urlRegex.test(word)) {
      return (
        <a
          key={idx}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          className={isCtrlRequired ? "ctrl-click" : "text-blue-500 underline"}
          onClick={(e) => {
            if (isCtrlRequired && !e.ctrlKey) e.preventDefault()
          }}
        >
          {word}
        </a>
      )
    }
    return <span key={idx}> {word} </span>
  })
}

export default function TeamsChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input }])
      setInput("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <Box className="max-w-md w-full mx-auto p-4 border border-gray-300 rounded-xl shadow-md bg-white flex flex-col gap-4">
      <Box className="flex-1 space-y-3 max-h-80 overflow-y-auto flex gap-1 flex-col">
        {messages.map((msg) => (
          <Typography
            key={msg.id}
            className="bg-gray-100 p-2 rounded-md text-sm"
          >
            {convertLinks(msg.text, false)}
          </Typography>
        ))}
      </Box>

      <Box className="flex items-start gap-2">
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          multiline
          maxRows={3}
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          onClick={sendMessage}
          className="bg-blue-600"
        >
          Send
        </Button>
      </Box>

      {input && (
        <Box className="text-xs text-gray-500">
          Preview (Ctrl+Click to open links): {convertLinks(input, true)}
        </Box>
      )}
    </Box>
  )
}
