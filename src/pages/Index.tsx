import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import ForWho from "@/components/ForWho";
import Method from "@/components/Method";
import About from "@/components/About";
import Diagnosis from "@/components/Diagnosis";
import Destinations from "@/components/Destinations";
import VideoTestimonials from "@/components/VideoTestimonials";
import TextTestimonials from "@/components/TextTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <ForWho />
        <Method />
        <About />
        <Diagnosis />
        <Destinations />
        <VideoTestimonials />
        <TextTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
