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
            <p className="text-sm text-muted-foreground">© {currentYear} Larissa Kassner | Travel Designer</p>
            <p className="text-xs text-muted-foreground/70">CNPJ 59.578.284/0001-40</p>
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
            {/* <a
              href={LINKS.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Google Business"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 10.5v3h5.2c-.2 1.5-1.5 3.5-5.2 3.5-3.1 0-5.6-2.6-5.6-6s2.5-6 5.6-6c1.7 0 2.9.7 3.6 1.4l2.4-2.3C16.5 2.6 14.5 1.8 12 1.8 6.9 1.8 2.8 5.9 2.8 11s4.1 9.2 9.2 9.2c5.3 0 8.8-3.7 8.8-8.9 0-.6-.1-1.1-.2-1.6H12z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
