import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ServicePromiseSection } from "@/components/service-promise-cta"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimoni-section"
import { FaqSection } from "@/components/faq-section"
import { ServiceCoverage } from "@/components/service-coverage"
import { GallerySection } from "@/components/gallery-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      {/* <ServicesSection /> */}
      <GallerySection/>
      <ServicePromiseSection/>
      <TestimonialsSection/>
      <ServiceCoverage/>
      <AboutSection />
      <ContactSection />
      <FaqSection/>
      <Footer />
    </main>
  )
}
