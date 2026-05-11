import { AnnouncementBar } from "@/components/AnnouncementBar";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { ProgramOverview } from "@/components/ProgramOverview";
import { ProofSection } from "@/components/ProofSection";
import { ScrollRobotSection } from "@/components/ScrollRobotSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhoShouldApply } from "@/components/WhoShouldApply";

export default function Home() {
  return (
    <main className="min-h-screen overflow-visible bg-yard-black text-white">
      <AnnouncementBar />
      <SiteHeader />
      <HeroSection />
      <PainPointsSection />
      <ProgramOverview />
      <BenefitsSection />
      <ScrollRobotSection />
      <WhoShouldApply />
      <ProofSection />
      <FaqSection />
      <CommunitySection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
