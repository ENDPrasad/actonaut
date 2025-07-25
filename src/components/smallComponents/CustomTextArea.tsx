import { TextareaAutosize } from "@mui/material"
import { PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR } from "../../helper/contants"



function CustomTextArea() {

  return (
    <TextareaAutosize
  aria-label="message"
  maxRows={2}
  placeholder="Your message here..."
  style={{width: '15.5rem', height: '4rem',color: PRIMARY_TEXT_COLOR, backgroundColor: PRIMARY_BG_COLOR, borderRadius: '5px', outline: PRIMARY_BG_COLOR, padding: '8px'}}
/>
  )
}

export default CustomTextArea