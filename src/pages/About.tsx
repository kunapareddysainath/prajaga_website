import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // simple render animation trigger
    setTimeout(() => setVisible(true), 100);
  }, []);

  const whyChoose = [
    {
      title: "8+ Years Experience",
      desc: "Extensive industry experience delivering thoughtful and refined interior solutions.",
    },
    {
      title: "Turnkey Specialists",
      desc: "Complete interior services from design planning to final execution.",
    },
    {
      title: "Client-Centered Design",
      desc: "Every project begins by understanding the client’s lifestyle, needs, and vision.",
    },
    {
      title: "Beauty & Function",
      desc: "Spaces designed to be visually elegant while remaining practical for daily life.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="py-20 bg-gray-900 text-center">
        <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">
          Our Story
        </p>

        <h1 className="text-4xl md:text-6xl text-white font-semibold">
          About Prajaga Interiors
        </h1>
      </div>

      {/* About Text */}
      <section
        className={`py-20 bg-white transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-yellow-600 text-sm tracking-[0.3em] uppercase mb-3">
            Our Journey
          </p>

          <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 font-semibold">
            Crafting Spaces with Passion
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Prajaga Interiors was founded with a deep passion for creativity and
            craftsmanship. Coming from a family background connected to wood
            and furniture work, our founder naturally developed a strong
            interest in interior design and space planning.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Based in Hyderabad, we have been delivering interior solutions for
            more than six years, supported by over eight years of hands-on
            experience in the industry.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our approach is simple — listen carefully to the client, understand
            their lifestyle and requirements, and translate those ideas into
            thoughtfully designed interiors that are both beautiful and
            functional.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-600 text-sm tracking-[0.3em] uppercase mb-3">
              Philosophy
            </p>

            <h2 className="text-3xl md:text-4xl text-gray-900 font-semibold">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
