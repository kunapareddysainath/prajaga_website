export interface Testimonial {
  name: string;
  location: string;
  text: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh & Priya Kumar",
    location: "Bangalore",
    text: "Prajaga Interiors transformed our 3BHK into a luxurious sanctuary. Their attention to detail and material selection was outstanding. We couldn't be happier with the result.",
    project: "Skyline Luxury Apartment",
  },
  {
    name: "Ananya Sharma",
    location: "Mumbai",
    text: "The bedroom design exceeded all our expectations. The team understood our vision perfectly and delivered a space that feels like a five-star hotel every single day.",
    project: "Royal Master Bedroom",
  },
  {
    name: "Vikram Mehta",
    location: "Hyderabad",
    text: "Our modular kitchen is both beautiful and incredibly functional. The Prajaga team's expertise in material selection saved us money without compromising on quality.",
    project: "Contemporary Kitchen Design",
  },
  {
    name: "Sneha & Arjun Reddy",
    location: "Goa",
    text: "They turned our villa into a masterpiece. The seamless indoor-outdoor design is exactly what we dreamed of. Truly world-class interior design.",
    project: "Modern Villa Interior",
  },
];
