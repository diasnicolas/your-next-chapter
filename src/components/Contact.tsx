import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent(
    "Olá, Larissa! Gostaria de agendar uma reunião de diagnóstico de viagem."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="label-elegant text-secondary mb-4">Próximo Passo</p>
          <h2 className="heading-section mb-6">
            Vamos conversar sobre a sua viagem?
          </h2>
          <p className="body-large text-primary-foreground/85 mb-6">
            Se você busca uma viagem bem planejada, no seu ritmo e com decisões 
            conscientes, o próximo passo é simples.
          </p>
          <p className="text-primary-foreground/80 mb-10">
            Agende sua reunião de diagnóstico e vamos entender, juntos, se esse 
            método faz sentido para você.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="hero"
              size="xl"
              asChild
              className="gap-3"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar reunião de diagnóstico
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <p className="text-sm text-primary-foreground/60">
              Respondo em até 24 horas úteis. Aguardo você!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
