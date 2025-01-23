import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { CarbonTracker } from "@/components/CarbonTracker";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CarbonTracker />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;