import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";

interface VideoTestimonial {
  id: number;
  youtubeId: string;
  title: string;
}

// Placeholders - substituir pelos IDs reais dos YouTube Shorts
const videos: VideoTestimonial[] = [
  { id: 1, youtubeId: "VIDEO_ID_1", title: "Depoimento 1" },
  { id: 2, youtubeId: "VIDEO_ID_2", title: "Depoimento 2" },
  { id: 3, youtubeId: "VIDEO_ID_3", title: "Depoimento 3" },
  { id: 4, youtubeId: "VIDEO_ID_4", title: "Depoimento 4" },
  { id: 5, youtubeId: "VIDEO_ID_5", title: "Depoimento 5" },
];

const VideoTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Force iframe reload for autoplay

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setKey((prev) => prev + 1);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setKey((prev) => prev + 1);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
    setKey((prev) => prev + 1);
  };

  const currentVideo = videos[currentIndex];

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
            Assista aos depoimentos de quem já viveu essa experiência de viagem planejada com cuidado e atenção.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Video container - vertical shorts format */}
          <div className="relative w-full max-w-[320px] md:max-w-[360px]">
            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevVideo}
              className="absolute top-1/2 -translate-y-1/2 -left-14 md:-left-20 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg border-rosa/20 hover:bg-rosa-soft hover:border-rosa"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextVideo}
              className="absolute top-1/2 -translate-y-1/2 -right-14 md:-right-20 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg border-rosa/20 hover:bg-rosa-soft hover:border-rosa"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </Button>

            {/* Video frame - 9:16 aspect ratio for shorts */}
            <AnimatePresence mode="wait">
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=0&loop=1&playlist=${currentVideo.youtubeId}&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-primary w-8 h-3"
                    : "bg-rosa/40 hover:bg-rosa w-3 h-3"
                }`}
                aria-label={`Ver vídeo ${index + 1}`}
              />
            ))}
          </div>

          {/* Video counter */}
          <div className="flex items-center gap-2 mt-4 text-primary/60">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">
              {currentIndex + 1} de {videos.length} depoimentos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
