import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIrParaWhatsApp } from "@/hooks/useIrParaWhatsApp";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const irParaWhatsApp = useIrParaWhatsApp();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erroNome, setErroNome] = useState('');
  const nomeRef = useRef<HTMLInputElement | null>(null);
  
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
            Vamos conversar sobre a sua próxima viagem?
          </h2>
          
          <p className="body-large text-primary-foreground/85 hidden md:block">
            Se você busca uma viagem bem planejada, no seu ritmo
          </p>
          <p className="body-large text-primary-foreground/85 mb-6 hidden md:block">
            e com decisões conscientes, o próximo passo é simples.
          </p>

          <p className="body-large text-primary-foreground/85 md:hidden">
            Se você busca uma viagem bem planejada, 
          </p>
          <p className="body-large text-primary-foreground/85 md:hidden">
            no seu ritmo e com decisões conscientes,
          </p>
          <p className="body-large text-primary-foreground/85 mb-6 md:hidden">
            o próximo passo é simples.
          </p>
          <p className="text-primary-foreground/80 mb-10">
            Agende sua reunião de diagnóstico e vamos entender, juntos, se esse 
            método faz sentido para você.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=""
          >
            <div className="max-w-2xl mx-auto text-left space-y-4 mb-6">
              <div className="relative group">
                <input
                  ref={nomeRef}
                  type="text"
                  value={nome}
                  onChange={(e) => { setNome(e.target.value); if (erroNome) setErroNome(''); }}
                  placeholder="Nome e sobrenome"
                  className={`w-full rounded-md border px-3 py-3 bg-background text-primary ${erroNome ? 'border-destructive' : 'border-input'}`}
                />
                <label className="absolute left-3 -top-3 text-xs bg-primary px-1 text-white pointer-events-none transition-all">Nome completo</label>
                {erroNome && <p className="mt-1 text-sm text-destructive">{erroNome}</p>}
              </div>

              
              <div className="relative group">
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Conte brevemente sua ideia de viagem e destinos em mente"
                  rows={4}
                  className="w-full rounded-md border border-input px-3 py-3 bg-background text-primary"
                />
                <label className="absolute left-3 -top-3 text-xs bg-primary px-1 text-white pointer-events-none transition-all">Descreva sua ideia / destinos</label>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => {
                    if (!nome.trim()) {
                      setErroNome('Por favor, informe seu nome completo.');
                      nomeRef.current?.focus();
                      return;
                    }
                    const parts = [];
                    if (nome.trim()) parts.push(`Meu nome é ${nome.trim()}.`);
                    if (descricao.trim()) parts.push(`Descrição: ${descricao.trim()}`);
                    const mensagem = parts.join(' ');
                    irParaWhatsApp('agendardiagnostico', mensagem);
                  }}
                  className="flex items-center gap-3 w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar reunião de diagnóstico</span>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <p className="text-sm text-primary-foreground/60">
              Atendimento direto comigo.<br />
              Durante todas as etapas do planejamento.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
