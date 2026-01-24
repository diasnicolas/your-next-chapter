import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Building, Trees, Umbrella } from "lucide-react";

const regions = [
  {
    icon: Globe,
    title: "Europa Ocidental",
    description: "Ideal para quem busca cultura, gastronomia, cidades históricas e deslocamentos bem conectados.",
    examples: "Portugal, França, Itália, Espanha, Holanda",
  },
  {
    icon: Building,
    title: "Estados Unidos",
    description: "Destino de alta previsibilidade, conforto e facilidade logística, especialmente para viagens longas ou primeiras grandes viagens.",
    examples: "Costa Oeste, Nova York, Florida, Parques Nacionais",
  },
  {
    icon: Trees,
    title: "Canadá",
    description: "Combinação de natureza, cidades organizadas e ritmo mais tranquilo, muito procurado por viajantes maduros.",
    examples: "Vancouver, Toronto, Montréal, Banff",
  },
  {
    icon: Umbrella,
    title: "Caribe",
    description: "Viagens focadas em descanso premium, celebrações e experiências de conforto — não aventura.",
    examples: "Aruba, Curaçao, St. Barths, Turks and Caicos",
  },
];

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="destinos" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-elegant text-primary mb-4">Destinos</p>
          <h2 className="heading-section text-foreground mb-6">
            Destinos com os quais trabalho com mais profundidade
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Minha atuação é focada em destinos que oferecem boa infraestrutura turística, 
            conforto, segurança, diversidade cultural e experiências compatíveis com um 
            planejamento bem estruturado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <motion.article
              key={region.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-muted/30 p-8 rounded-lg hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <region.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {region.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {region.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {region.examples}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Cada roteiro é pensado sob medida para atender a sua expectativa.
        </motion.p>
      </div>
    </section>
  );
};

export default Destinations;
