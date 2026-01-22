import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const scrollToMethod = () => {
    const element = document.querySelector("#metodo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Destino de viagem luxuoso"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="label-elegant text-primary-foreground/80 mb-6"
          >
            Travel Designer
          </motion.p>

          <h1 className="heading-display text-primary-foreground mb-8 text-balance">
            Viagens planejadas com a mesma atenção que você dá aos momentos mais importantes da sua vida
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="body-large text-primary-foreground/85 max-w-2xl mx-auto mb-12"
          >
            Não vendemos pacotes. Criamos experiências sob medida para quem valoriza
            tempo, conforto e o prazer de viajar sem preocupações.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Agendar Diagnóstico
            </Button>
            <Button variant="hero-outline" size="xl" onClick={scrollToMethod}>
              Entenda o Método
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToMethod}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Scroll para baixo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
