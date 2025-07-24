import { Button } from "@mui/material"
import theme from "../../../theme"

interface ICustomButton {
    title:string, 
    type:"contained" | 'text' | 'outlined'
}

function CustomButton({title, type}: ICustomButton) {
    const mainColor = theme.palette.primary.main
    const isContained = type === 'contained'

  return (
    <Button variant={type} sx={{bgcolor: `${isContained && mainColor}`, borderRadius: '10000px', padding: '0.6rem 1.2rem', border: `2px solid ${mainColor}`, color:`${!isContained && mainColor}`, textTransform: 'none'}} >
        {title}
    </Button>
  )
}

export default CustomButton
