import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ExperienceGrid } from "@/components/experience-grid";
import { WorksDone } from "@/components/works-done";
import { ServicesGallery } from "@/components/services-gallery";
import { PatientJourney } from "@/components/patient-journey";
import { TransformationGallery } from "@/components/transformation-gallery";
import { PricingBanner } from "@/components/pricing-banner";
import { Testimonials } from "@/components/testimonials";
import { FAQAccordion } from "@/components/faq-accordion";
import { EmergencyPortal } from "@/components/emergency-portal";
import { Footer } from "@/components/footer";
import { MobileActionBar } from "@/components/mobile-action-bar";

export default function Home() {
  return (
    <>

      <Navigation />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ExperienceGrid />
        <WorksDone />
        <ServicesGallery />
        <PatientJourney />
        <TransformationGallery />
        <PricingBanner />
        <Testimonials />
        <FAQAccordion />
        <EmergencyPortal />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
