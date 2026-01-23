import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, FileSearch, FileText, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Diagnóstico de Viagem",
    description:
      "Uma conversa estratégica para entender seu perfil, expectativas, estilo de viagem e complexidade do planejamento.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Projeto Sob Medida",
    description:
      "Com base no diagnóstico, desenvolvo um roteiro personalizado, lógico e fluido — ajustado ao seu ritmo e às suas prioridades.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Ajustes e Finalização",
    description:
      "O roteiro passa por versões de refinamento até ficar exatamente alinhado ao que você busca viver.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Apoio Estratégico",
    description:
      "Conforme o perfil do projeto, ofereço orientações pré-embarque e suporte antes da viagem para garantir tranquilidade.",
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
          className="text-center mb-20"
        >
          <p className="label-elegant text-primary mb-4">O Método</p>
          <h2 className="heading-section text-foreground mb-6">
            Um método claro, pensado para viagens reais.
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Cada viagem é um projeto único. O primeiro passo é sempre uma
            conversa para entender se somos a combinação certa.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex gap-6 md:gap-10 pb-12 ${
                index !== steps.length - 1 ? "border-l-2 border-border ml-6 md:ml-8 pl-10 md:pl-14" : "ml-6 md:ml-8 pl-10 md:pl-14"
              }`}
            >
              {/* Step Number & Icon */}
              <div
                className={`absolute -left-6 md:-left-8 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-rosa-soft text-primary"
                }`}
              >
                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* Content */}
              <div className={`flex-1 ${index === 0 ? "bg-rosa-soft/50 -ml-4 p-6 rounded-lg" : ""}`}>
                <p className="label-elegant text-primary mb-2">{step.number}</p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index === 0 && (
                  <p className="mt-4 text-sm text-primary font-medium">
                    * O diagnóstico é pago e representa a primeira etapa do meu método.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
