import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".detail-hero", { opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".detail-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="pt-24 section-padding text-center">
        <h1 className="font-heading text-3xl text-foreground">Project not found</h1>
        <Link to="/projects" className="gold-text mt-4 inline-block">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Image */}
      <div className="detail-hero relative h-[60vh] overflow-hidden">
        <img src={project.images[currentImage]} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute bottom-8 left-8 z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground">{project.title}</h1>
          <p className="gold-text font-body text-sm tracking-wider mt-2">{project.location} · {project.category}</p>
        </div>
        {/* Gallery nav */}
        {project.images.length > 1 && (
          <div className="absolute bottom-8 right-8 flex gap-2 z-10">
            <button onClick={() => setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length)} className="w-10 h-10 bg-charcoal/50 flex items-center justify-center hover:bg-charcoal/80 transition-colors">
              <ChevronLeft size={18} className="text-primary-foreground" />
            </button>
            <button onClick={() => setCurrentImage((p) => (p + 1) % project.images.length)} className="w-10 h-10 bg-charcoal/50 flex items-center justify-center hover:bg-charcoal/80 transition-colors">
              <ChevronRight size={18} className="text-primary-foreground" />
            </button>
            <button onClick={() => setFullscreen(true)} className="w-10 h-10 bg-charcoal/50 flex items-center justify-center hover:bg-charcoal/80 transition-colors text-primary-foreground text-xs font-body">
              ⛶
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="detail-content section-padding max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-4">Project Overview</h2>
          <p className="font-body text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-4">Client Requirements</h2>
          <p className="font-body text-muted-foreground leading-relaxed">{project.clientRequirements}</p>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-4">Design Solution</h2>
          <p className="font-body text-muted-foreground leading-relaxed">{project.designSolution}</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-foreground mb-4">Materials Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.materialsUsed.map((m) => (
              <span key={m} className="px-4 py-2 border gold-border gold-text font-body text-xs tracking-wider uppercase">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center" onClick={() => setFullscreen(false)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setFullscreen(false)}>
            <X size={28} />
          </button>
          <img src={project.images[currentImage]} alt={project.title} className="max-w-[90vw] max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
