import React, { useState, useEffect } from 'react';
import PageSkeleton from './components/skeletons/PageSkeleton';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyWeExistSection from './components/WhyWeExistSection';
import InfrastructureStats from './components/InfrastructureStats';
import TechlearnsDifference from './components/TechlearnsDifference';
import CELWheelSection from './components/CELWheelSection';
import EngineeringPipeline from './components/EngineeringPipeline';
import ProgramsSection from './components/ProgramsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CareerDiagnosticModal from './components/CareerDiagnosticModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#612D92] selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Desktop Custom 3D Cursor */}
      <CustomCursor />
      
      {/* Fixed Translucent Glass Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Sections with 3D Storytelling Flow */}
      <main className="w-full overflow-x-hidden">
        {/* Section 1: Hero Section with Procedural 3D Learning Intelligence Core */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Section 2: Why We Exist Comparison */}
        <WhyWeExistSection />

        {/* Section 3: Infrastructure & Stats */}
        <InfrastructureStats />

        {/* Section 4: The Techlearns Difference */}
        <TechlearnsDifference />

        {/* Section 5: Interactive CEL Wheel System */}
        <CELWheelSection />

        {/* Section 6: Engineering Pipeline Pathways */}
        <EngineeringPipeline onOpenModal={handleOpenModal} />

        {/* Section 7: Programs Catalog with 3D Tilt Cards */}
        <ProgramsSection onOpenModal={handleOpenModal} />

        {/* Section 8: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 9: Final 3D CTA Banner */}
        <CTASection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Career Diagnostic Modal */}
      <CareerDiagnosticModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultCourse={selectedCourse}
      />
    </div>
  );
}
