import project1 from "@/assets/prestige.jpeg";
import iconia1 from "@/assets/iconia1.jpg";


export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  images: string[];
  overview: string;
  clientRequirements: string;
  designSolution: string;
  materialsUsed: string[];
}

export const projects: Project[] = [
  {
  id: "prestige-high-fields",
  title: "Prestige High Fields",
  location: "Financial District, Nanakramguda, Hyderabad",
  category: "Apartment",
  image: project1,
  images: [project1],
  overview: "A thoughtfully designed 3.5 BHK residence featuring semi-furnished interiors, a modern open kitchen, elegant false ceiling details, and warm wooden ceiling accents, blending functionality with contemporary luxury.",
  clientRequirements: "The client desired a modern aesthetic with warm tones, an open kitchen layout for better connectivity, a dedicated home office space, and the use of premium-quality materials with a clean, cohesive design language.",
  designSolution: "We designed a seamless flow between the living, dining, and kitchen areas to enhance openness and usability. A neutral palette paired with subtle gold accents adds elegance, while custom millwork ensures smart storage solutions. Italian marble and premium finishes elevate the overall luxury, and the home office is integrated for both functionality and visual harmony.",
  materialsUsed: ["Duro plywood", "Teak wood veneer", "6H acrylic laminate", "Hettich hardware"],
},
{
  id: "smr-vinay-iconia",
  title: "SMR Vinay Iconia",
  location: "Masjid Banda, Sri Maruthi Nagar Colony",
  category: "Apartment",
  image: iconia1,
  images: [iconia1],
  overview: "A fully furnished 3 BHK apartment designed with a minimalist approach, featuring a compact and efficient kitchen layout. The space emphasizes simplicity, functionality, and modern living.",
  clientRequirements: "The client sought a clean and minimalist design with warm tones, a space-efficient kitchen, and smart storage solutions. The focus was on creating a clutter-free environment using high-quality materials and a cohesive design language.",
  designSolution: "We optimized the layout to make the most of available space while maintaining a seamless flow between living areas. A neutral color palette enhances the sense of openness, while custom-designed furniture and storage solutions maximize functionality. The compact kitchen was carefully planned for efficiency without compromising on style.",
  materialsUsed: ["Duro plywood", "Teak wood veneer", "6H acrylic laminate", "Ebco hardware"],
}
 ];

export const categories = ["All", "Apartment", "Villa", "Kitchen", "Bedroom", "Office"];
