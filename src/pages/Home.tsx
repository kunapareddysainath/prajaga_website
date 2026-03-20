import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.8, ease: "power3.out" });
      gsap.from(".hero-btns", { y: 30, opacity: 0, duration: 0.8, delay: 1.1, ease: "power3.out" });

      // Parallax hero image
      gsap.to(".hero-bg", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Featured projects
      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-section", start: "top 80%" },
      });

      // Materials section
      gsap.from(".material-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".materials-section", start: "top 80%" },
      });

      // Process timeline
      gsap.from(".process-step", {
        x: -60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".process-section", start: "top 75%" },
      });

      // Section titles
      gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const processSteps = [
    { num: "01", title: "Consultation", desc: "Understanding your vision, lifestyle, and requirements." },
    { num: "02", title: "Space Planning", desc: "Creating optimized layouts and 3D visualizations." },
    { num: "03", title: "Material Selection", desc: "Curating premium materials that match your aesthetic." },
    { num: "04", title: "Execution", desc: "Precision craftsmanship with regular progress updates." },
    { num: "05", title: "Final Delivery", desc: "Handover of your dream space, ready to live in." },
  ];

  const materialCategories = [
    { name: "Plywood", icon: "🪵" },
    { name: "Laminates", icon: "🎨" },
    { name: "Wardrobes", icon: "🚪" },
    { name: "Kitchen Hardware", icon: "🔧" },
    { name: "Lighting", icon: "💡" },
  ];

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img src={heroImg} alt="Luxury interior" className="w-full h-[120%] object-cover" loading="eager" />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="hero-title font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 overflow-hidden">
            {"Designing Elegant Living Spaces".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em]">{word}</span>
            ))}
          </h1>
          <p className="hero-sub font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-10">
            Premium interior solutions tailored for your home.
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="px-8 py-3.5 gold-bg text-charcoal font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border gold-border text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-16">
            <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((p) => (
              <Link to={`/projects/${p.id}`} key={p.id} className="project-card group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="gold-text" size={20} />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-foreground">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials We Recommend */}
      <section className="materials-section section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-16">
            <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">Quality</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">Materials We Recommend</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {materialCategories.map((m) => (
              <Link
                to="/materials"
                key={m.name}
                className="material-card flex flex-col items-center gap-3 p-8 bg-background border border-border hover:border-gold transition-colors group"
              >
                <span className="text-3xl">{m.icon}</span>
                <span className="font-body text-sm tracking-wider uppercase text-foreground group-hover:text-gold transition-colors">
                  {m.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="process-section section-padding bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="section-title text-center mb-16">
            <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">Design Process</h2>
          </div>
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <div key={step.num} className="process-step flex items-start gap-8 py-8 border-b border-primary-foreground/10">
                <span className="gold-text font-heading text-4xl md:text-5xl opacity-40">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-primary-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-primary-foreground/60 text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-primary-foreground/60 mb-10 text-lg">
            Let's create something beautiful together.
          </p>
          <a
            href={`https://wa.me/917416819365?text=${encodeURIComponent("Hello Prajaga Interiors, I would like to enquire about interior design.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 gold-bg text-charcoal font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
