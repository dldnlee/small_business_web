import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GovernmentProgramsSection from './components/GovernmentProgramsSection';
import BusinessTypeSection from './components/BusinessTypeSection';
import ContactFormSection from './components/ContactFormSection';
import ProgramDetailsSection from './components/ProgramDetailsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className='mx-auto w-full max-w-7xl flex flex-col'>
        <HeroSection />
        <GovernmentProgramsSection />
        <BusinessTypeSection />
        {/* <ProgramDetailsSection /> */}
        <ContactFormSection />
      </div>
      <Footer />
    </div>
  );
}
