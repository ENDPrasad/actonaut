import { Typography } from "@mui/material"


function SubHeader({text}:{text:string}) {

  return (
    <Typography sx={{fontWeight:'500', textTransform:'uppercase'}}>
        {text}
    </Typography>
  )
}

export default SubHeader
