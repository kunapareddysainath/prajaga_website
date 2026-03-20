import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground/70">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Logo + Brand */}
        <div className="flex items-start gap-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-20 h-auto" />

          {/* Text Content */}
          <div>
            <h3 className="font-heading text-2xl text-primary-foreground">
              <span className="gold-text">P</span>RA
              <span className="gold-text">J</span>A
              <span className="gold-text">G</span>A
            </h3>

            <p className="text-sm leading-relaxed mt-2">
              Premium interior design solutions crafted with elegance and
              precision for discerning homeowners.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">
            Quick Links
          </h4>

          <nav className="flex flex-col gap-3">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: "Materials", path: "/materials" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">
            Contact
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            {["+91 88971 43659", "+91 95811 25699", "+91 74168 19365"].map(
              (num, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Phone size={16} /> {num}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">
            Office Location
          </h4>

          <div className="flex items-start gap-2 text-sm leading-relaxed">
            <MapPin size={18} className="mt-1" />
            <span>
              12-7-134/192, Flat No: 502 <br />
              Bhavya Sri Residency <br />
              Anjaneya Nagar, Moosapet
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://www.instagram.com/prajaga_interiors"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Instagram size={18} /> Instagram
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Facebook size={18} /> Facebook
          </a>

          <a
            href="mailto:info.prajagainteriors@gmail.com"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail size={18} /> Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-right">
          © {new Date().getFullYear()} Prajaga Interiors. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
