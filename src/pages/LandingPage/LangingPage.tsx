import ContactUs from '../../components/ContactUs';
import FeaturesSection from '../../components/FeaturesSection';
import Footer from '../../components/Footer/Footer';
// import HeroSection from '../../components/HeroSection/HeroSection';
import HeroSectionV2 from '../../components/HeroSection/HeroSectionV2';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import NavBar from '../../components/NavBar/NavBar';

function LandingPage() {

  return (
      <div className=''>
        <NavBar />
        <HeroSectionV2 />
        <FeaturesSection />
        <HowItWorks />
        <ContactUs />
        <Footer />
        </div>
  )
}

export default LandingPage