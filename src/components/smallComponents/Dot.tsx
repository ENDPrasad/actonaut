
import { Box } from '@mui/material';
import theme from '../../../theme';

function Dot() {

  return (
    <Box className={`w-3 h-3 rounded-full self-center`} sx={{bgcolor: theme.palette.primary.main}}></Box>
  )
}

export default Dot
