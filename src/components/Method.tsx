import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Video, FileText, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Primeiro Contato",
    description:
      "Você entra em contato pelo WhatsApp. Conversamos brevemente para entender o contexto da sua viagem e verificar se faz sentido seguirmos juntos.",
  },
  {
    number: "02",
    icon: Video,
    title: "Reunião de Diagnóstico",
    description:
      "Uma conversa aprofundada onde mapeio seu perfil, preferências, datas e expectativas. É aqui que entendo a complexidade do projeto para apresentar o investimento.",
    highlight: true,
  },
  {
    number: "03",
    icon: FileText,
    title: "Proposta Sob Medida",
    description:
      "Com base no diagnóstico, apresento uma proposta personalizada com o valor do projeto. Você decide se quer seguir em frente.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Planejamento & Execução",
    description:
      "Cuido de cada detalhe: roteiro, hospedagens, experiências, reservas, transfers. Você recebe um dossiê completo e suporte durante toda a viagem.",
  },
];

const Method = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="metodo" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="label-elegant text-accent mb-4">O Método</p>
          <h2 className="heading-section text-foreground mb-6">
            Como funciona o processo
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
                  step.highlight
                    ? "bg-forest text-primary-foreground"
                    : "bg-sand text-foreground"
                }`}
              >
                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* Content */}
              <div className={`flex-1 ${step.highlight ? "bg-muted/50 -ml-4 p-6 rounded-lg" : ""}`}>
                <p className="label-elegant text-accent mb-2">{step.number}</p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {step.highlight && (
                  <p className="mt-4 text-sm text-forest font-medium">
                    * A reunião de diagnóstico é paga e representa a primeira etapa do meu método.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="premium" size="xl" onClick={scrollToContact}>
            Iniciar Conversa pelo WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;
