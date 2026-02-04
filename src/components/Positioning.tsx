import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Positioning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section text-primary mb-8">
              Aqui, a viagem começa muito antes do embarque.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="body-large">
              Sou Larissa Kassner, travel designer especializada em criar roteiros 
              internacionais totalmente personalizados para pessoas que valorizam 
              planejamento profissional, conforto e clareza em cada decisão da viagem.
            </p>
            
            <p className="body-regular">
              Meu trabalho não é vender pacotes prontos.<br/>
É planejar viagens sob medida — com roteiro dia a dia, lógica de deslocamentos, escolhas estratégicas de
hospedagem e experiências alinhadas ao seu perfil — para que você viaje com tranquilidade, segurança e
aproveitamento real do seu tempo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
