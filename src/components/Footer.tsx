import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-foreground mb-2">
              Larissa Kassner
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/larissakassner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@larissakassner.com.br"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
