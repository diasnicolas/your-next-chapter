import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, FileSearch, FileText, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Mapeamento Estratégico da Viagem",
    subtitle:
      "Uma conversa estruturada e aprofundada para entender como você gosta de viajar, o que espera viver nessa experiência e quais decisões são mais importantes para o seu perfil.",
    bullets: [
      "seu perfil e histórico de viagens",
      "estilo e ritmo ideal",
      "destinos e cidades de interesse",
      "datas, flexibilidade e logística geral",
      "nível de conforto desejado",
      "prioridades, desejos e restrições",
      "complexidade do projeto",
    ],
    conclusion:
      "Ao final dessa etapa, você recebe um material completo e organizado que funciona como um mapa geral do seu projeto, trazendo clareza sobre caminhos, possibilidades e escolhas mais alinhadas ao seu perfil, além das informações referentes ao investimento do planejamento.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Projeto do Roteiro Sob Medida",
    subtitle:
      "Com base no mapeamento da etapa anterior, desenvolvo o esboço do seu roteiro de viagem, considerando:",
    bullets: [
      "estrutura lógica do roteiro",
      "escolhas estratégicas de cidades e experiências",
      "ritmo adequado para o seu perfil",
      "sugestões de aéreo, hospedagem e seguro alinhadas às suas prioridades",
    ],
    conclusion:
      "Nesta etapa, é apresentado o investimento estimado da viagem, considerando as escolhas feitas, o nível de conforto desejado e a complexidade do planejamento.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Entrega do Roteiro Personalizado",
    subtitle:
      "Após o alinhamento do esboço, desenvolvo o roteiro completo da sua viagem, totalmente personalizado e organizado para uso prático no dia a dia.",
    bullets: [
      "roteiro detalhado dia a dia",
      "mapas, deslocamentos e itinerários completos",
      "orientações sobre clima, moeda, cultura e idioma",
      "sugestões de restaurantes, experiências e compras",
      "dicas práticas para transporte, aplicativos e organização",
      "todos os vouchers e documentos reunidos em um único material",
    ],
    conclusion:
      "O roteiro é refinado em conjunto até traduzir com precisão o seu perfil, prioridades e estilo de viagem, com entrega digital para acompanhamento ao longo de toda a experiência.",
      
  },
  {
    number: "04",
    icon: Plane,
    title: "Apoio Estratégico e Serviços Complementares",
    subtitle: "(opcional)",
    bullets: [
      "Reservas de produtos turísticos, como passagens aéreas, hospedagem, seguro viagem, chip internacional, transfers, passeios, experiências, ingressos e serviços de guias locais.",
      "Orientações pré-embarque, em uma reunião exclusiva realizada poucos dias antes da viagem, com apoio prático sobre aeroporto, bagagem, documentos, logística, cartões, salas VIP e pontos de atenção importantes para o destino.",
      "Assistência durante a viagem, em formato ampliado, para clientes que desejam contar com acompanhamento mais próximo ao longo do percurso.",
    ],
    conclusion:
      "A contratação desses serviços é uma <b>decisão exclusiva do cliente</b>, de acordo com o nível de suporte que considera ideal para a sua viagem.",
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
                  <p
                    className="text-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-4 bg-background/50 py-2 rounded-r"
                    dangerouslySetInnerHTML={{ __html: step.conclusion }}
                  />

                  {step.number === "04" && (
                    <p className="mt-6 text-foreground leading-relaxed font-medium text-center">
                      O objetivo é garantir clareza, tranquilidade e segurança,
                      <br />
                      para que você possa viajar com confiança
                      <br />
                      e aproveitar a experiência sem incertezas ao longo do caminho.
                    </p>
                  )}

                  {/* First step highlight */}
                  {index === 0 && (
                    <p className="mt-5 text-sm text-primary font-medium flex items-center gap-2">
                      Essa etapa é paga e representa o primeiro passo do meu método.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Method;
