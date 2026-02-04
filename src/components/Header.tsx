import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logotipo.png";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como Funciona", href: "#metodo" },
  { label: "Primeiro Passo", href: "#diagnostico" },
  { label: "Destinos", href: "#destinos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Agendar reunião", href: "#contato" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md shadow-soft py-4"
            : "bg-white/10 py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Larissa Kassner - Travel Designer"
              className={`h-20 md:h-24 w-auto `}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm tracking-wide transition-colors link-underline text-marsala hover:opacity-80"
              >
                {item.label}
              </button>
            ))}
           
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 "text-foreground"`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:hidden"
          >
            <nav className="container flex flex-col items-center gap-8 py-12">
              {navItems.filter(item => item.label !== "Agendar Diagnóstico").map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="font-serif text-2xl text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="premium"
                size="xl"
                onClick={() => scrollToSection("#contato")}
                className="mt-4"
              >
                Agendar reunião
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
