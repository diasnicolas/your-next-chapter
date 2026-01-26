import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, DollarSign, Compass } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Diagnóstico estruturado da sua viagem",
  },
  {
    icon: Compass,
    title: "Clareza sobre possibilidades e caminhos",
  },
  {
    icon: DollarSign,
    title: "Definição do investimento do projeto",
  },
  {
    icon: MessageCircle,
    title: "Base sólida para um planejamento consciente",
  },
];

const Diagnosis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <section id="diagnostico" className="py-24 md:py-32 bg-rosa-soft/30" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="label-elegant text-primary mb-4">Primeiro Passo</p>
            <h2 className="heading-section text-foreground mb-6">
              Reunião de diagnóstico de viagem
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A reunião de diagnóstico é o primeiro passo do meu método.
            </p>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Nela, eu entendo com profundidade o que você busca viver, como você gosta de viajar e o nível de complexidade do planejamento. 
            </p>
          </motion.div>

          {/* Mobile version with line breaks */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground mb-12 md:hidden"
          >
            Esse encontro evita propostas genéricas, <br />
            expectativas desalinhadas e decisões <br />
            cansativas ao longo do processo.
          </motion.p>

          {/* Desktop version without line breaks */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden text-center text-muted-foreground mb-12 md:block"
          >
            Esse encontro evita propostas genéricas, expectativas desalinhadas e decisões cansativas ao longo do processo.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-center font-serif text-xl text-foreground mb-8">
              O que você recebe:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-background p-6 rounded-lg shadow-soft text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {benefit.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="premium" size="xl" onClick={scrollToContact}>
              Agendar reunião de diagnóstico
            </Button>
  
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
