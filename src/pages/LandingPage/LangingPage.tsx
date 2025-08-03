// import ContactUs from '../../components/ContactUs/ContactUs';
import ContactUsV2 from '../../components/ContactUs/ContactUsV2';
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
        <ContactUsV2 />
        <Footer />
        </div>
  )
}

export default LandingPage