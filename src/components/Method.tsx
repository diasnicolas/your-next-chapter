import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, FileSearch, FileText, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Reunião de diagnóstico",
    subtitle: "Uma conversa estruturada para entender:",
    bullets: [
      "seu perfil de viagem",
      "expectativas e prioridades",
      "nível de conforto desejado",
      "destinos, datas e flexibilidade",
      "complexidade do projeto",
    ],
    conclusion:
      "Ao final dessa etapa, você recebe um diagnóstico completo da sua viagem, com clareza sobre caminhos e possibilidades.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Projeto sob medida",
    subtitle: "Com base no diagnóstico, desenvolvo:",
    bullets: [
      "estrutura lógica do roteiro",
      "divisão equilibrada dos dias",
      "escolhas estratégicas de cidades e experiências",
      "ritmo adequado para o seu perfil",
    ],
    conclusion:
      "O investimento do projeto é definido após essa etapa, de acordo com a complexidade do planejamento.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Refinamento e entrega",
    subtitle: null,
    bullets: [],
    conclusion:
      "O roteiro passa por ajustes e versões até a entrega final, sempre respeitando suas preferências e feedbacks.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Apoio estratégico e suporte pré-viagem",
    subtitle: "(quando aplicável)",
    bullets: [],
    conclusion:
      "Conforme o perfil do projeto e as necessidades do cliente, também ofereço apoio estratégico em etapas complementares da viagem, como orientações pré-embarque e suporte antes da viagem. A contratação de serviços adicionais — como reservas específicas ou acompanhamento mais próximo — é avaliada caso a caso, sempre respeitando o escopo do projeto e o estilo de viagem definido no diagnóstico.",
  },
];

const Method = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="label-elegant text-primary mb-4">O Método</p>
          <h2 className="heading-section text-foreground mb-6">
            Como funciona o planejamento da sua viagem
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline connector */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-rosa-soft/30 -mb-12" />
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 ${
                      index === 0
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-rosa-soft text-primary border-2 border-primary/20"
                    }`}
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 rounded-2xl p-6 md:p-8 ${
                    index === 0
                      ? "bg-gradient-to-br from-rosa-soft/60 to-rosa-soft/30 border border-primary/10"
                      : "bg-muted/30 border border-border/50"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-primary font-semibold text-sm tracking-wider">
                      ETAPA {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p className="text-muted-foreground mb-4 italic">
                      {step.subtitle}
                    </p>
                  )}

                  {/* Bullet Points */}
                  {step.bullets.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Conclusion */}
                  <p className="text-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-4 bg-background/50 py-2 rounded-r">
                    {step.conclusion}
                  </p>

                  {/* First step highlight */}
                  {index === 0 && (
                    <p className="mt-5 text-sm text-primary font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      O diagnóstico é pago e representa a primeira etapa do meu método.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-rosa-soft/40 via-rosa-soft/60 to-rosa-soft/40 rounded-2xl p-8 border border-primary/10">
            <p className="text-foreground leading-relaxed font-medium">
              O objetivo é garantir clareza, tranquilidade e segurança para que você 
              viaje com confiança, sabendo exatamente o que esperar em cada etapa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;
