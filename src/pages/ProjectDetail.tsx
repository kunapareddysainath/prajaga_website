import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { categoriesData } from "@/data/projects";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const category = categoriesData.find((c) => c.id === id);

  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  const total = category?.images?.length || 0;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
      );
    }
  }, [index]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  if (!category) {
    return <div className="text-center pt-24">Not Found</div>;
  }

  const currentImage = category.images?.[index];

  return (
    <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Back */}
      <Link
        to="/projects"
        className="inline-block mb-6 text-sm text-gray-500 hover:text-black transition"
      >
        ← Back
      </Link>

      {/* Image Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        {/* Title Overlay (TOP) */}
        <div
          ref={titleRef}
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-6 z-10"
        >
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            {category.title}
          </h1>
        </div>

        {/* Image */}
        {currentImage && (
          <img
            ref={imageRef}
            src={currentImage}
            alt="project"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        )}

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {category.images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-black w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Overview */}
      <div className="mt-10 bg-gray-50 p-6 md:p-10 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{category.overview}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
