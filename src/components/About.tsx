import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import larissaPortrait from "@/assets/larissa-portrait.jpg";
import heroTravel from "@/assets/hero-travel.jpg";
import destinationItaly from "@/assets/destination-italy.jpg";
import destinationMaldives from "@/assets/destination-maldives.jpg";

const images = [
  { src: larissaPortrait, alt: "Larissa Kassner - Travel Designer" },
  { src: heroTravel, alt: "Paisagem de viagem" },
  { src: destinationItaly, alt: "Itália" },
  { src: destinationMaldives, alt: "Maldivas" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage 
                        ? "bg-primary w-4" 
                        : "bg-background/60 hover:bg-background"
                    }`}
                    aria-label={`Ver foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/40 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="label-elegant text-primary mb-4">Sobre Mim</p>
            <h2 className="heading-section text-foreground mb-8">
              Sobre a Larissa Kassner
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Meu olhar para viagens nasceu muito antes de se tornar um negócio. 
                Quando eu tinha cerca de 13 anos, minha mãe — que sempre trabalhou 
                muitas horas por dia — começou a me ensinar a planejar roteiros 
                personalizados para as nossas viagens em família.
              </p>
              
              <p>
                O tempo era curto, os dias fora precisavam valer a pena, e cada 
                decisão precisava ser bem pensada: deslocamentos, custos, horários, 
                prioridades. Foi ali que aprendi, ainda muito jovem, a pesquisar 
                profundamente, organizar informações e transformar dados em 
                experiências possíveis.
              </p>
              
              <p>
                Ao longo dos anos, desenvolvi e refinei roteiros personalizados para 
                mais de 20 viagens familiares, tanto aquelas que vivi quanto as que 
                minha mãe realizou sozinha ou com amigas. Esse aprendizado prático 
                foi a base do método que utilizo hoje.
              </p>

              <p>
                Em 2024, decidi encerrar um ciclo profissional que já não fazia sentido 
                para mim e transformar essa habilidade — que sempre fez parte da minha 
                vida — em um trabalho.
              </p>

              <p className="text-foreground font-medium">
                Hoje, meu trabalho une método, escuta atenta e estratégia, para que 
                cada viagem seja clara, fluida e alinhada ao ritmo de quem viaja.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
