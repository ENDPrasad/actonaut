import FeaturesSection from '../../components/FeaturesSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorks from '../../components/HowItWorks';
import NavBar from '../../components/NavBar/NavBar';

function LandingPage() {

  return (
    <>
      <div className=''>
        <NavBar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        </div>
    </>
  )
}

export default LandingPage