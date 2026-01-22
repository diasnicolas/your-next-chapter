import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import destinationSafari from "@/assets/destination-safari.jpg";
import destinationItaly from "@/assets/destination-italy.jpg";
import destinationMaldives from "@/assets/destination-maldives.jpg";

const destinations = [
  {
    image: destinationSafari,
    title: "Safáris na África",
    description: "Experiências imersivas na savana com lodges exclusivos",
    tag: "Aventura & Natureza",
  },
  {
    image: destinationItaly,
    title: "Toscana Italiana",
    description: "Vilas históricas, vinhedos e a dolce vita autêntica",
    tag: "Cultura & Gastronomia",
  },
  {
    image: destinationMaldives,
    title: "Ilhas das Maldivas",
    description: "Paraíso privado sobre águas cristalinas",
    tag: "Romance & Descanso",
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
          <p className="label-elegant text-accent mb-4">Inspirações</p>
          <h2 className="heading-section text-foreground mb-6">
            Repertório de experiências
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Não é um catálogo. São algumas das experiências que já planejei — 
            cada uma pensada sob medida para um perfil específico de viajante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-5">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-full">
                  {destination.tag}
                </span>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-forest transition-colors">
                {destination.title}
              </h3>
              <p className="text-muted-foreground">
                {destination.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-12"
        >
          Cada projeto é único. Esses são apenas alguns exemplos do que é possível criar juntos.
        </motion.p>
      </div>
    </section>
  );
};

export default Destinations;
