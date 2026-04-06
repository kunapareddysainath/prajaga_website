import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero-interior.jpg";
import { categoriesData } from "@/data/projects";

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

      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.8,
      });

      gsap.from(".hero-btns", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.1,
      });

      // Parallax
      gsap.to(".hero-bg", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cards animation
      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src={heroImg}
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            {"Designing Elegant Living Spaces".split(" ").map((w, i) => (
              <span key={i} className="inline-block mr-2">
                {w}
              </span>
            ))}
          </h1>

          <p className="hero-sub text-white/70 text-lg max-w-2xl mb-10">
            Premium interior solutions tailored for your home.
          </p>

          <div className="hero-btns flex gap-4">
            <Link
              to="/projects"
              className="px-8 py-3 bg-yellow-400 text-black uppercase text-sm"
            >
              View Categories
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border text-white uppercase text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="projects-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl">
              Featured Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.slice(0, 6).map((c) => {
              const coverImage = c.images?.[0];

              return (
                <Link
                  to={`/category/${c.id}`}
                  key={c.id}
                  className="project-card group"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={coverImage}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

                    <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                      <h3 className="text-white text-lg">
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl">{c.title}</h3>
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

      {/* CTA */}
      <section className="py-20 bg-black text-center text-white">
        <h2 className="text-3xl md:text-5xl mb-6">
          Ready to Transform Your Space?
        </h2>

        <p className="text-white/60 mb-10">
          Let’s create something beautiful together.
        </p>

        <a
          href={`https://wa.me/917416819365?text=${encodeURIComponent(
            "Hello, I want interior design services"
          )}`}
          target="_blank"
          className="px-10 py-4 bg-yellow-400 text-black uppercase text-sm"
        >
          Contact on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Home;