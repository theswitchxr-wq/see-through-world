import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { TeamSection } from "@/components/TeamSection";
import { TractionSection } from "@/components/TractionSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WaitlistAdmin } from "@/components/WaitlistAdmin";
import { WaitlistModal } from "@/components/WaitlistModal";
import { useWaitlistModal } from "@/hooks/useWaitlistModal";
import { useEffect, useState } from "react";

const Index = () => {
  const { isOpen, openModal, closeModal } = useWaitlistModal();
  const [showAdmin, setShowAdmin] = useState(false);
  
  // Show admin dashboard with Ctrl+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdmin(prev => !prev);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="min-h-screen">
      <HeroSection onJoinWaitlist={openModal} />
      <ProblemSolutionSection />
      <UseCasesSection />
      <FeaturesSection />
      <TeamSection />
      <TractionSection />
      <CTASection onJoinWaitlist={openModal} />
      
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
      
      {/* Admin Dashboard - Press Ctrl+Shift+A to toggle */}
      {showAdmin && (
        <div className="fixed inset-0 z-50 bg-background overflow-auto">
          <WaitlistAdmin isVisible={showAdmin} />
        </div>
      )}
    </div>
  );
};

export default Index;
