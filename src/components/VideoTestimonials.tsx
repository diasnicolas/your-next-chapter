import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Play } from "lucide-react";

const VideoTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder - substituir pelo link real do YouTube
  const youtubeVideoId = "dQw4w9WgXcQ"; // Exemplo: extrair ID do link do YouTube

  return (
    <section id="depoimento-video" className="py-20 md:py-28 bg-rosa-soft/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            O que dizem sobre o meu trabalho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao depoimento de quem já viveu essa experiência de viagem planejada com cuidado e atenção.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-background">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Depoimento em vídeo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 text-primary/60">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Depoimento real de cliente</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
