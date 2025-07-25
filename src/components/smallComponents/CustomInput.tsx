import { TextField } from "@mui/material"
import { PRIMARY_BG_COLOR } from "../../helper/contants"

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: PRIMARY_BG_COLOR 
        },
        '&:hover fieldset': {
            borderColor: PRIMARY_BG_COLOR
          },
          '&.Mui-focused fieldset': {
            borderColor: PRIMARY_BG_COLOR
          },
        },
        '& .MuiInputLabel-root': {
          color: PRIMARY_BG_COLOR
        },
        input: {
          color: PRIMARY_BG_COLOR,
          
        }, 
        label: {
            color: PRIMARY_BG_COLOR
        }
         
    }


function CustomInput({label, type="text"}: {label: string, type?:string}) {

  return (
    <TextField sx={inputStyle} id="outlined-basic" label={label} variant="outlined" type={type} />
  )
}

export default CustomInput