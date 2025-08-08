import { HeroSection } from "@/components/HeroSection"
import { PainSection } from "@/components/PainSection"
import { ProductSection } from "@/components/ProductSection"
import { ValueSection } from "@/components/ValueSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { BonusSection } from "@/components/BonusSection"
import { TransformationSection } from "@/components/TransformationSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTASection } from "@/components/FinalCTASection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <ProductSection />
      <ValueSection />
      <TestimonialSection />
      <BonusSection />
      <TransformationSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
