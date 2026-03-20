import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { materials, materialCategories } from "@/data/materials";

gsap.registerPlugin(ScrollTrigger);

const Materials = () => {
  const [activeCategory, setActiveCategory] = useState("Plywood");

  const filtered = materials.filter((m) => m.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mat-card", {
        y: 50,
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
            <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">Quality Materials</p>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground">Materials Guide</h1>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner with India's finest material brands to ensure lasting quality in every project.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {materialCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs tracking-widest uppercase px-6 py-2.5 border transition-all ${
                  activeCategory === cat
                    ? "gold-bg border-gold text-charcoal"
                    : "border-border text-muted-foreground hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((mat) => (
              <div key={mat.id} className="mat-card border border-border p-8 hover:border-gold transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{mat.name}</h3>
                    <p className="gold-text font-body text-xs tracking-wider uppercase mt-1">{mat.brand}</p>
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{mat.costRange}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm mb-6">{mat.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-body text-xs tracking-wider uppercase gold-text mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {mat.advantages.map((a) => (
                        <li key={a} className="font-body text-sm text-muted-foreground">• {a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-body text-xs tracking-wider uppercase gold-text mb-2">Best For</h4>
                    <ul className="space-y-1">
                      {mat.bestUseCases.map((u) => (
                        <li key={u} className="font-body text-sm text-muted-foreground">• {u}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
