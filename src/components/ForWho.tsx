import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const forItems = [
  "Busca otimizar tempo no planejamento da sua viagem em vez de gastar horas pesquisando e comparando opções",
  "Prefere viajar no próprio ritmo e conhecer os destinos com mais profundidade",
  "Quer aproveitar o destino sem ter que decidir tudo durante a viagem",
  "Valoriza boas escolhas, conforto e um roteiro bem distribuído",
  "Prefere ter alguém experiente pensando a viagem com a sua cabeça",
];

const notForItems = [
  "Prefere excursões ou roteiros padronizados com pessoas desconhecidas",
  "Não se importa em seguir decisões coletivas ou preferências de um grupo",
  'Busca apenas “uma lista de lugares”, sem estratégia consultiva',
  "Gosta de resolver tudo sozinho e tem disponibilidade para assumir integralmente o planejamento da sua viagem",
  "Não vê valor em planejamento profissional para a sua viagem"
];

const ForWho = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-elegant text-primary mb-4">Transparência</p>
          <h2 className="heading-section text-foreground mb-6">
            Esse serviço é ideal para você se…
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* For Who */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-lg p-8 md:p-10 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Ideal para você se...
              </h3>
            </div>
            <ul className="space-y-5">
              {forItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For Who */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-background rounded-lg p-8 md:p-10 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                E talvez não seja ideal se…
              </h3>
            </div>
            <ul className="space-y-5">
              {notForItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <X className="w-5 h-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
