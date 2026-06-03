import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { PrivacySecuritySection } from "@/components/trust/PrivacySecuritySection";
import { ComplianceRoadmapSection } from "@/components/trust/ComplianceRoadmapSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DemoWorkSection } from "@/components/DemoWorkSection";
import { AIInsightsSection } from "@/components/AIInsightsSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { NeedsEvaluator } from "@/components/NeedsEvaluator";
import { ProcessSection } from "@/components/ProcessSection";
import { ExpertLedSection } from "@/components/ExpertLedSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <PrivacySecuritySection />
        <ComplianceRoadmapSection />
        <ServicesSection />
        <DemoWorkSection />
        <AIInsightsSection />
        <WhoWeHelpSection />
        <NeedsEvaluator />
        <ProcessSection />
        <ExpertLedSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
