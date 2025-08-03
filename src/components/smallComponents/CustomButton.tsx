import { Button } from "@mui/material"
import theme from "../../../theme"
import { PRIMARY_BG_COLOR } from "../../helper/contants"
import { Link } from "react-router"

interface ICustomButton {
    title:string, 
    type:"contained" | 'text' | 'outlined',
    to: string
}

function CustomButton({title, type, to}: ICustomButton) {
    const mainColor = theme.palette.primary.main
    const isContained = type === 'contained'

  return (
    <Link to={to}>
    <Button variant={type} sx={{bgcolor: `${isContained ? mainColor: PRIMARY_BG_COLOR}`, borderRadius: '10000px', padding: '0.6rem 1.2rem', border: `2px solid ${mainColor}`, color:`${!isContained && mainColor}`, textTransform: 'none'}} >
        {title}
    </Button>
    </Link>
  )
}

export default CustomButton
