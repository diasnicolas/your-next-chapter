import { Instagram, Mail } from "lucide-react";
import submarca from "@/assets/submarca.png";

// Externalized links
const LINKS = {
  googleBusiness: "#", // Replace with the actual Google Business link
  instagram: "https://instagram.com/lari_kassner",
  email: "mailto:contato@larikassner.com.br",
};

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
              href={LINKS.email}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={LINKS.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Google Business"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M21.35 11.1h-9.9v2.7h5.7c-.3 1.8-1.8 3.6-5.7 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.7.6 3.6 1.5l2.1-2.1C15.9 2.7 14.1 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.1 0 9.3-3.6 9.3-10 0-.6-.1-1.2-.2-1.9z" />
                <path d="M3.15 7.5l2.4 1.8c.6-1.5 1.8-2.7 3.3-3.3L6.45 3.6c-1.2 1.2-2.1 2.7-3.3 3.9zM12 4.8c1.2 0 2.1.3 3 .9l2.1-2.1C15.9 2.7 14.1 2 12 2c-2.7 0-5.1 1.2-6.6 3.3l2.4 1.8c.6-1.5 1.8-2.7 3.3-3.3zM12 19.2c2.1 0 3.9-.6 5.4-1.8l-2.4-1.8c-.9.6-1.8.9-3 .9-2.1 0-3.9-1.5-4.5-3.6l-2.4 1.8c1.2 2.1 3.6 3.6 6.6 3.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
