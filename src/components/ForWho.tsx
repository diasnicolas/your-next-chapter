import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const forItems = [
  "Valoriza seu tempo e prefere delegar o planejamento a uma especialista",
  "Busca experiências autênticas, não roteiros genéricos de agência",
  "Entende que qualidade exige investimento e planejamento antecipado",
  "Quer viajar com tranquilidade, sabendo que cada detalhe foi pensado",
];

const notForItems = [
  "Está buscando o roteiro mais barato ou promoções de última hora",
  "Prefere montar a viagem sozinho, pesquisando tudo por conta própria",
  "Tem urgência para viajar nos próximos dias",
  "Busca pacotes prontos ou destinos massificados",
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
          <p className="label-elegant text-accent mb-4">Transparência</p>
          <h2 className="heading-section text-foreground mb-6">
            Meu serviço é ideal para você?
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Antes de conversarmos, é importante que você saiba se o meu trabalho
            faz sentido para o seu perfil de viajante.
          </p>
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
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Meu serviço é para você se...
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
                  <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
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
                Talvez não seja ideal se...
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
