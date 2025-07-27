import { Link } from "react-router"
import { PRIMARY_COLOR, SECONDARY_BG_COLOR } from "../helper/contants"
import { Box } from "@mui/material"

function Footer() {

  return (
    <Box component={'footer'} sx={{backgroundColor: SECONDARY_BG_COLOR}}>
        <div className="p-16 flex justify-between align-top">
            <div>Actonaut</div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                    <Link to=''>Iframes</Link>
                    <Link to=''>Window Handling</Link>
                    <Link to=''>Links (Anchor tag)</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to=''>LinkedIn</Link>
                    <Link to=''>Instagram</Link>
                    <Link to=''>Youtube</Link>
                </div>
                
            </div>
        </div>
        <div className="h-2" style={{backgroundColor: PRIMARY_COLOR}}></div>
    </Box>
  )
}

export default Footer