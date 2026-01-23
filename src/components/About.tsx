import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import larissaPortrait from "@/assets/larissa-portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={larissaPortrait}
                alt="Larissa Kassner - Travel Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/40 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="label-elegant text-primary mb-4">Sobre Mim</p>
            <h2 className="heading-section text-foreground mb-8">
              Sobre a Larissa Kassner
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Meu olhar para viagens nasceu muito antes de se tornar um negócio. 
                Quando eu tinha cerca de 13 anos, minha mãe — que sempre trabalhou 
                muitas horas por dia — começou a me ensinar a planejar roteiros 
                personalizados para as nossas viagens em família.
              </p>
              
              <p>
                O tempo era curto, os dias fora precisavam valer a pena, e cada 
                decisão precisava ser bem pensada: deslocamentos, custos, horários, 
                prioridades. Foi ali que aprendi, ainda muito jovem, a pesquisar 
                profundamente, organizar informações e transformar dados em 
                experiências possíveis.
              </p>
              
              <p>
                Ao longo dos anos, desenvolvi e refinei roteiros personalizados para 
                mais de 20 viagens familiares, tanto aquelas que vivi quanto as que 
                minha mãe realizou sozinha ou com amigas. Esse aprendizado prático 
                foi a base do método que utilizo hoje.
              </p>

              <p>
                Em 2024, decidi encerrar um ciclo profissional que já não fazia sentido 
                para mim e transformar essa habilidade — que sempre fez parte da minha 
                vida — em um trabalho.
              </p>

              <p className="text-foreground font-medium">
                Hoje, meu trabalho une método, escuta atenta e estratégia, para que 
                cada viagem seja clara, fluida e alinhada ao ritmo de quem viaja.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
