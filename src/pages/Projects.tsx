import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categoriesData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="projects-title text-center mb-16">
            <p className="text-yellow-500 text-sm uppercase mb-3 tracking-widest">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl">
              All Categories
            </h2>
          </div>

          {/* GRID */}
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map((c) => {
              const coverImage = c.images?.[0];

              return (
                <Link
                  to={`/category/${c.id}`}   // ✅ THIS IS THE KEY FIX
                  key={c.id}
                  className="project-card group block"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">

                    {/* IMAGE */}
                    <img
                      src={coverImage}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                    {/* HOVER TEXT */}
                    <div className="absolute bottom-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="text-white text-lg font-semibold">
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  {/* TEXT BELOW */}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {c.overview}
                    </p>
                  </div>

                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;