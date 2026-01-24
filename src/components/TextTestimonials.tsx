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
  image: string;
}

// Placeholders - substituir pelos depoimentos reais
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nome da Cliente 1",
    location: "Viagem para Europa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Nome da Cliente 2",
    location: "Viagem para Estados Unidos",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Nome da Cliente 3",
    location: "Viagem para Canadá",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Nome da Cliente 4",
    location: "Viagem para Caribe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Nome da Cliente 5",
    location: "Viagem para Europa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
];

const TextTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            Experiências que falam por si
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedbacks de quem confiou no meu método e viveu viagens memoráveis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
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
                className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic"
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Author info */}
              <motion.div
                key={`author-${currentTestimonial.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-rosa/30"
                />
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
