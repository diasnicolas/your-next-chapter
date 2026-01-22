import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import Method from "@/components/Method";
import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ForWho />
        <Method />
        <About />
        <Destinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
