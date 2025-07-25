
import { Box } from '@mui/material';
import theme from '../../../theme';

function Dot({size, text}:{size: string, text?: string}) {

  return (
    <Box className={`w-${size} h-${size} rounded-full self-center`} sx={{bgcolor: theme.palette.primary.main}}>{text}</Box>
  )
}

export default Dot
