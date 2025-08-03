
import { Box } from '@mui/material';
import herosSectionSVG from '../../assets/hero-section.svg'
import HeaderText from '../smallComponents/HeaderText';
import CustomButton from '../smallComponents/CustomButton';
import { BACKGROUND_GRADIENT } from '../../helper/contants';

function HeroSectionV2() {

  return (
      <Box id='hero-section' component="main" className='w-full hero-section py-10' style={{height: 'calc(100dvh - 6rem)'}} sx={{backgroundColor: BACKGROUND_GRADIENT}}>
        <div className='h-full flex align-middle justify-center'>
            <div className='flex-1 mx-24 flex flex-col justify-center align-center'>
                <div className='flex flex-col gap-3 justify-center align-middle leading-1'>
            <HeaderText text='
Practice Automation Testing the Way It Happens in the Real World'/>
        </div>
        <div className=''>
          <p className=''>Cnarios is a free platform for testers to practice automation using real-life scenarios, industry-standard test cases, and bug-finding challenges. Learn concepts, sharpen your skills, and prepare for interviews — all in one place.</p>
        </div>
        <div className='flex gap-3 justify-start mt-6'>
          <CustomButton type={'contained'} title='Start Exploring' to='/explore'/>
          <CustomButton type={'outlined'} title='Challenges' to='/challenges'/>
        </div>
            </div>

            <div className='flex-1 flex align-middle'>
               <img src={herosSectionSVG} alt="Automation Illustration" />
            </div>
          
        </div>
      </Box>
  )
}

export default HeroSectionV2
