"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ModulesSection } from "@/components/ModulesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { OfferSection } from "@/components/OfferSection";
import { FAQSection } from "@/components/FAQSection";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { ParallaxElements } from "@/components/ParallaxElements";

const Index = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-x-hidden">
      <ParallaxElements />
      <Header />
      <main>
        <HeroSection />
        <div className="space-y-20">
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <ModulesSection />
          <TestimonialsSection />
          <TargetAudienceSection />
          <OfferSection />
          <FAQSection />
          <AboutSection />
          <FinalCTASection />
        </div>
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-40">
        <ChatBot />
      </div>
      {showExitPopup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <ExitIntentPopup onClose={() => setShowExitPopup(false)} />
        </div>
      )}
    </div>
  );
};

export default Index;
