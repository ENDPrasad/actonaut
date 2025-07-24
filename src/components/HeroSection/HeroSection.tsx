
import { Box } from '@mui/material';
// import theme from '../../theme';
import Dot from '../smallComponents/Dot';
import HeaderText from '../smallComponents/HeaderText';
import CustomButton from '../smallComponents/CustomButton';
import './HeroSection.css'

function HeroSection() {

  return (
      <Box component="main" className='w-full hero-section' style={{height: 'calc(100dvh - 4rem)'}}>
        <div className='h-full flex flex-col justify-center align-middle mx-12'>
          <div className='flex gap-3 justify-center align-middle'>
            <HeaderText text='Learn'/>
            <Dot />
            <HeaderText text='Practice'/>
            <Dot />
            <HeaderText text='Automate'/>
        </div>
        <div className='px-6'>
          <p className='text-center'>A complete platform to learn automation concepts, solve real-world problems, and follow industry best practices.</p>
        </div>
        <div className='flex gap-3 justify-center mt-6'>
          <CustomButton type={'contained'} title='Start Exploring'/>
          <CustomButton type={'outlined'} title='Challenges'/>
        </div>
        </div>
      </Box>
  )
}

export default HeroSection
