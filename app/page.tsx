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

        {/* Attention Banner */}
        <div className="bg-red-600 text-white py-8 px-4 md:px-8">
          <div className="text-center space-y-3">
            <p className="text-2xl md:text-3xl font-bold">
              스포츠센터, 찜질방, 사우나 업체사장님들
            </p>
            <p className="text-3xl md:text-4xl font-extrabold animate-pulse">
              4개월간 1억3천만원 아끼셔서 그돈을 챙기세요!!
            </p>
          </div>
        </div>

        <GovernmentProgramsSection />
        {/* <BusinessTypeSection /> */}
        {/* <ProgramDetailsSection /> */}
        <ContactFormSection />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
