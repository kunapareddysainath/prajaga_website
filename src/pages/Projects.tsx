import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, categories } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".filter-btn", { y: 20, opacity: 0, stagger: 0.05, duration: 0.5, delay: 0.3, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="pt-24">
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="page-title text-center mb-12">
            <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground">Projects</h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn font-body text-xs tracking-widest uppercase px-6 py-2.5 border transition-all ${
                  activeCategory === cat
                    ? "gold-bg border-gold text-charcoal"
                    : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((p, i) => (
              <Link
                to={`/projects/${p.id}`}
                key={p.id}
                className="project-item block group break-inside-avoid"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "1/1" }}
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-500 flex items-end">
                    <div className="p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="gold-text font-body text-xs tracking-widest uppercase">{p.category}</span>
                      <h3 className="font-heading text-xl text-primary-foreground mt-1">{p.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
