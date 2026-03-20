import { useEffect, useState } from "react";
import { gsap } from "gsap";

const WHATSAPP_NUMBER = "917416819365";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "Apartment",
    budget: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Prajaga Interiors,

I would like to enquire about interior design.

Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Project Type: ${form.projectType}
Budget: ${form.budget}
Timeline: ${form.timeline}

Message: ${form.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass = "w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors";

  return (
    <div className="pt-24">
      <div className="section-padding bg-charcoal text-center">
        <p className="gold-text font-body text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
        <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground">Contact Us</h1>
      </div>

      <div className="contact-content section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-center mb-12">
            Fill out the form below and we'll connect with you on WhatsApp to discuss your project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className={inputClass}
              />
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className={inputClass}
              >
                {["Apartment", "Villa", "Kitchen", "Bedroom", "Office", "Full Home"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Budget Range (e.g., ₹10-15 Lakhs)"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Timeline (e.g., 3 months)"
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className={inputClass}
              />
            </div>

            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass + " resize-none"}
            />

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 gold-bg text-charcoal font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Send Enquiry via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
