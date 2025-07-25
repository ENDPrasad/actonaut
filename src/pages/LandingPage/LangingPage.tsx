import ContactUs from '../../components/ContactUs';
import FeaturesSection from '../../components/FeaturesSection';
import Footer from '../../components/Footer';
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
        <ContactUs />
        <Footer />
        </div>
    </>
  )
}

export default LandingPage