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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="label-elegant text-accent mb-4">Sobre Mim</p>
            <h2 className="heading-section text-foreground mb-8">
              Larissa Kassner
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="body-large">
                Sou Travel Designer há mais de uma década. Ao longo desses anos,
                entendi que viajar bem não é sobre acumular destinos — é sobre
                viver experiências que fazem sentido para você.
              </p>
              
              <p>
                Meu trabalho é diferente porque não ofereço pacotes prontos. Cada
                projeto é construído do zero, a partir de uma escuta atenta do que
                você busca: o ritmo da viagem, o estilo de hospedagem, as
                experiências que criam memórias.
              </p>
              
              <p>
                Acredito que planejar uma viagem é um ato de cuidado. Por isso,
                invisto tempo genuíno em entender cada cliente antes de começar
                qualquer roteiro. É assim que garanto que o resultado final supere
                expectativas.
              </p>

              <p className="text-foreground font-medium">
                Minha missão é simples: transformar sua viagem em uma experiência
                que você lembrará para sempre — sem o estresse do planejamento.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="label-elegant text-muted-foreground mb-4">Especialidades</p>
              <div className="flex flex-wrap gap-3">
                {["Europa", "Safáris", "Ilhas & Praias", "Lua de Mel", "Viagens em Família"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-sand/60 text-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
