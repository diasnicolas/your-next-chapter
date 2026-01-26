import { Instagram, Mail } from "lucide-react";
import submarca from "@/assets/submarca.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        {/* Top row: centered logo */}
        <div className="flex justify-center mb-6">
          <img
            src={submarca}
            alt="Larissa Kassner - Travel Designer"
            className="h-28 md:h-36 w-auto"
          />
        </div>

        {/* Bottom row: left copyright + CNPJ, center developed credit, right social icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          <div className="text-left space-y-1">
            <p className="text-sm text-muted-foreground">© {currentYear} Todos os direitos reservados</p>
            <p className="text-xs text-muted-foreground/70">CNPJ: 59.578.284/0001-40</p>
          </div>

          <div className="text-center">
            <a
              href="https://zapturize.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Desenvolvido por ZapTurize
            </a>
          </div>

          <div className="flex justify-end items-center gap-6">
            <a
              href="mailto:contato@larikassner.com.br"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/lari_kassner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
