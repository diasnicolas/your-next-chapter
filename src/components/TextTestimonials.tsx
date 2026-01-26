import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}

// Placeholders - substituir pelos depoimentos reais
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fátima",
    location: "Itália",
    text: " Planejar minha viagem com a Larissa foi uma experiência extremamente positiva. Desde a primeira reunião, ela conduziu todo o processo com muito profissionalismo e atenção genuína ao que eu e minha irmã desejávamos viver. Já no segundo encontro, tínhamos em mãos um roteiro completo, com os pontos essenciais do destino e, ao mesmo tempo, sugestões de lugares pitorescos e especiais: aqueles detalhes que fazem a diferença e transformam a viagem em algo único! Tudo foi pensado com respeito aos nossos objetivos, mas também com um cuidado e sensibilidade que se percebem em cada escolha. Foi assim que nossa viagem de 24 dias se tornou realidade: leve, bem organizada e acima das expectativas. Sou muito grata à Larissa por ter feito parte da realização desse sonho!"
  },
  {
    id: 2,
    name: "Bernardo",
    location: "Suíça",
    text: "O roteiro foi extremamente equilibrado, combinando bem deslocamentos, tempo livre e passeios, sempre com hospedagens em localizações estratégicas. A organização das informações, com dicas diárias e todos os vouchers reunidos em um único link, tornou a experiência prática e fluida. Durante a viagem, o suporte foi impecável, com respostas rápidas, clareza e atenção aos ajustes necessários. Vivemos uma viagem acima das expectativas! Recomendamos sem hesitar! "
  },
  {
    id: 3,
    name: "Samantha",
    location: "Estados Unidos & Canadá",
    text: "Minhas férias em São Francisco e Vancouver foram simplesmente inesquecíveis, e grande parte disso se deve ao cuidado e à sensibilidade da Larissa no planejamento da viagem.  Ela teve a atenção de escolher um hotel em uma região mais plana e estrategicamente localizada, próxima aos principais pontos turísticos: algo essencial para mim, já que faço questão de explorar tudo a pé. Cada dia do roteiro foi pensado com precisão, respeitando o tempo de caminhada e até mesmo os desníveis naturais das cidades, o que fez toda a diferença na experiência. Em nenhum momento me senti cansada ou perdida, apenas aproveitando. Um destaque especial para Whistler: não fazia parte dos meus planos iniciais, mas a Larissa acreditou tanto nessa sugestão e explicou com tanta segurança que aceitei incluí-la. Ainda bem. Foi o ponto alto da viagem! Senti carinho, escuta e cuidado em cada detalhe. Voltei muito bem e com a certeza de que jamais esquecerei essa viagem. Um roteiro impecável, nota mil! "
  },
  {
    id: 4,
    name: "Thalita",
    location: "Argentina & Uruguai",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 5,
    name: "Samantha",
    location: "Itália & Suíça",
    text: "Fiz uma viagem inesquecível pela Itália e Suíça e vivi uma experiência muito especial do início ao fim. A Larissa criou um roteiro totalmente personalizado, com escolhas que pareciam traduzir exatamente o que eu queria viver. Cada detalhe foi pensado com cuidado, atenção e sensibilidade, daqueles que fazem a viagem fluir de forma leve e prazerosa, sabe? Viajei tranquila, sabendo que havia um planejamento sólido por trás de tudo. No fim, ainda recebi um álbum com registros da viagem, preparado com o mesmo carinho presente em todo o processo. Foi uma viagem gostosa, bem cuidada e impossível de esquecer!"
  },
];

const TextTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setExpandedIndex(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpandedIndex(null);
  };

  const currentTestimonial = testimonials[currentIndex];
  const isExpanded = expandedIndex === currentIndex;

  // Contagem aproximada de linhas (assumindo ~65 caracteres por linha)
  const lineCount = Math.ceil(currentTestimonial.text.length / 65);
  const shouldTruncate = lineCount > 4;

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Experiências reais, viagens bem vividas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relatos de clientes que confiaram no meu método
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-rosa/10">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="pt-4">
              {/* Testimonial text */}
              <motion.p
                key={currentTestimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`text-lg md:text-xl text-foreground leading-relaxed mb-4 italic ${
                  shouldTruncate && !isExpanded ? "line-clamp-4" : ""
                }`}
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Read More Button */}
              {shouldTruncate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : currentIndex)}
                    className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    {isExpanded ? "Mostrar menos" : "Ler mais"}
                  </button>
                </motion.div>
              )}

              {/* Author info */}
              <motion.div
                key={`author-${currentTestimonial.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4"
              >
              
                <div>
                  <h4 className="font-serif font-semibold text-foreground text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-white shadow-md border-rosa/20 hover:bg-rosa-soft hover:border-rosa"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-white shadow-md border-rosa/20 hover:bg-rosa-soft hover:border-rosa"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </Button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-rosa/40 hover:bg-rosa"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextTestimonials;
