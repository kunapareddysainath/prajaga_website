import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Materials", path: "/materials" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-charcoal/95 backdrop-blur-md ${
        scrolled ? "py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          
          <img
            src={logo}
            alt="Prajaga Interiors Logo"
            className="h-8 w-auto md:h-10 lg:h-14 object-contain"
          />

          <div className="flex flex-col leading-none">
            <span
              className="text-xl md:text-2xl lg:text-3xl tracking-[0.35em] text-white font-light"
              style={{ fontFamily: "Estrella, sans-serif" }}
            >
              <span className="gold-text">P</span>RA
              <span className="gold-text">J</span>A
              <span className="gold-text">G</span>A
            </span>

            <span
              className="text-[9px] md:text-[10px] lg:text-xs tracking-[0.6em] text-gray-300 mt-1"
              style={{ fontFamily: "Estrella, sans-serif" }}
            >
              INTERIORS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors ${
                location.pathname === link.path
                  ? "gold-text"
                  : "text-primary-foreground/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-lg border-t border-gold/10">
          <nav className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? "gold-text"
                    : "text-primary-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;