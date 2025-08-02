
import { Box } from '@mui/material';
import { PRIMARY_COLOR } from '../../helper/contants';

function Dot({size, text}:{size: string, text?: string}) {

  return (
    <Box className={`w-${size} h-${size} rounded-full self-center`} sx={{bgcolor: PRIMARY_COLOR}}>{text}</Box>
  )
}

export default Dot
