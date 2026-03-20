export interface Material {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  advantages: string[];
  bestUseCases: string[];
  costRange: string;
  image: string;
}

export const materialCategories = ["Plywood", "Laminates", "Hardware", "Lighting"];

export const materials: Material[] = [
  {
    id: "century-plywood",
    name: "Century Plyboards",
    category: "Plywood",
    brand: "Century",
    description: "Premium BWR grade plywood with superior bonding strength and termite resistance.",
    advantages: ["Termite resistant", "Waterproof", "10-year warranty", "ISI certified"],
    bestUseCases: ["Kitchen cabinets", "Bathroom vanities", "Wardrobes"],
    costRange: "₹110 – ₹180 per sq ft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: "greenply",
    name: "Greenply Plywood",
    category: "Plywood",
    brand: "Greenply",
    description: "Eco-friendly plywood with zero emissions and high durability for interior applications.",
    advantages: ["Eco-friendly", "High strength", "Borer proof", "Low formaldehyde"],
    bestUseCases: ["Living room furniture", "Bedroom wardrobes", "Study tables"],
    costRange: "₹100 – ₹170 per sq ft",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
  },
  {
    id: "merino-laminates",
    name: "Merino Laminates",
    category: "Laminates",
    brand: "Merino",
    description: "High-pressure decorative laminates with scratch-resistant surfaces and stunning finishes.",
    advantages: ["Scratch resistant", "UV stable", "Easy maintenance", "Wide range of finishes"],
    bestUseCases: ["Kitchen counters", "Wall paneling", "Cabinet doors"],
    costRange: "₹800 – ₹3,000 per sheet",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80",
  },
  {
    id: "greenlam",
    name: "Greenlam Laminates",
    category: "Laminates",
    brand: "Greenlam",
    description: "Decorative laminates with anti-fingerprint technology and realistic wood textures.",
    advantages: ["Anti-fingerprint", "Fire retardant", "Antibacterial", "Color consistency"],
    bestUseCases: ["Wardrobe shutters", "TV units", "Office furniture"],
    costRange: "₹700 – ₹2,200 per sheet",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
  },
  {
    id: "hettich-hardware",
    name: "Hettich Hardware",
    category: "Hardware",
    brand: "Hettich",
    description: "German-engineered kitchen and furniture hardware with lifetime warranty on mechanisms.",
    advantages: ["Soft-close technology", "Lifetime warranty", "Silent operation", "German precision"],
    bestUseCases: ["Kitchen drawers", "Wardrobe hinges", "Cabinet systems"],
    costRange: "₹500 – ₹5,000 per unit",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  },
  {
    id: "hafele-hardware",
    name: "Häfele Fittings",
    category: "Hardware",
    brand: "Häfele",
    description: "Premium furniture fittings and architectural hardware for modern interiors.",
    advantages: ["Premium quality", "Innovative designs", "Ergonomic", "Long-lasting"],
    bestUseCases: ["Pull-out pantry", "Corner solutions", "Lift-up systems"],
    costRange: "₹800 – ₹8,000 per unit",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: "philips-lighting",
    name: "Philips LED Lighting",
    category: "Lighting",
    brand: "Philips",
    description: "Energy-efficient LED solutions for ambient, task, and accent lighting in interiors.",
    advantages: ["Energy efficient", "Long lifespan", "Dimmable options", "Smart home compatible"],
    bestUseCases: ["Cove lighting", "Task lighting", "Accent spots"],
    costRange: "₹300 – ₹3,000 per unit",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "wipro-lighting",
    name: "Wipro Lighting",
    category: "Lighting",
    brand: "Wipro",
    description: "Architectural lighting solutions with customizable color temperatures and smart controls.",
    advantages: ["Customizable CCT", "Smart controls", "Sleek designs", "Indian brand reliability"],
    bestUseCases: ["Living room ambiance", "Bedroom mood lighting", "Kitchen under-cabinet"],
    costRange: "₹250 – ₹2,500 per unit",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80",
  },
];
