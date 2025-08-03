import { Link } from "react-router"
import { BACKGROUND_GRADIENT, PRIMARY_COLOR, scrollToTop, YOUTUBE_LINK } from "../../helper/contants"
import { Box } from "@mui/material"

function Footer() {

  return (
    <Box component={'footer'} sx={{backgroundColor: BACKGROUND_GRADIENT}}>
        <hr style={{color: PRIMARY_COLOR}} />
        <div className="p-16 flex justify-between align-top">
            <div className="flex align-top justify-start">
                    <Link to={'/'} onClick={() => scrollToTop()}>
                    <img width={'150px'} src='/cnarios.svg' alt='cnarios logo'/>
                    </Link>

            </div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                    <Link to=''>Iframes</Link>
                    <Link to=''>Window Handling</Link>
                    <Link to=''>Links (Anchor tag)</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to=''>LinkedIn</Link>
                    <Link to=''>Instagram</Link>
                    <Link to={YOUTUBE_LINK}>Youtube</Link>
                </div>
                
            </div>
        </div>
        <div className="h-2" style={{backgroundColor: PRIMARY_COLOR}}></div>
    </Box>
  )
}

export default Footer