import beds1 from "../assets/beds/1.png";
import beds2 from "../assets/beds/2.png";
import beds3 from "../assets/beds/3.png";
import beds4 from "../assets/beds/4.png";
import beds5 from "../assets/beds/5.png";
import beds6 from "../assets/beds/6.png";
import beds7 from "../assets/beds/7.png";
import beds8 from "../assets/beds/8.png";
import beds9 from "../assets/beds/9.png";
import beds10 from "../assets/beds/10.png";

import crockery1 from "../assets/crockery/1.png";
import crockery2 from "../assets/crockery/2.png";
import crockery3 from "../assets/crockery/3.png";
import crockery4 from "../assets/crockery/4.png";

import dining1 from "../assets/dining/1.png";
import dining2 from "../assets/dining/2.png";
import dining3 from "../assets/dining/3.png";
import dining4 from "../assets/dining/4.png";
import dining5 from "../assets/dining/5.png";

import kitchen1 from "../assets/kitchen/1.png";
import kitchen2 from "../assets/kitchen/2.png";
import kitchen3 from "../assets/kitchen/3.png";
import kitchen4 from "../assets/kitchen/4.png";
import kitchen5 from "../assets/kitchen/5.png";
import kitchen6 from "../assets/kitchen/6.png";
import kitchen7 from "../assets/kitchen/7.png";
import kitchen8 from "../assets/kitchen/8.png";
import kitchen9 from "../assets/kitchen/9.png";
import kitchen10 from "../assets/kitchen/10.png";
import kitchen11 from "../assets/kitchen/11.png";
import kitchen12 from "../assets/kitchen/12.png";

import living1 from "../assets/livingRoom/1.png";
import living2 from "../assets/livingRoom/2.png";
import living3 from "../assets/livingRoom/3.png";
import living4 from "../assets/livingRoom/4.png";
import living5 from "../assets/livingRoom/5.png";
import living6 from "../assets/livingRoom/6.png";
import living7 from "../assets/livingRoom/7.png";
import living8 from "../assets/livingRoom/8.png";
import living9 from "../assets/livingRoom/9.png";
import living10 from "../assets/livingRoom/10.png";
import living11 from "../assets/livingRoom/11.png";

import partition1 from "../assets/partition/1.png";
import partition2 from "../assets/partition/2.png";
import partition3 from "../assets/partition/3.png";
import partition4 from "../assets/partition/4.png";
import partition5 from "../assets/partition/5.png";
import partition6 from "../assets/partition/6.png";
import partition7 from "../assets/partition/7.png";
import partition8 from "../assets/partition/8.png";
import partition9 from "../assets/partition/9.png";
import partition10 from "../assets/partition/10.png";

import study1 from "../assets/studyRoom/1.png";
import study2 from "../assets/studyRoom/2.png";
import study3 from "../assets/studyRoom/3.png";
import study4 from "../assets/studyRoom/4.png";
import study5 from "../assets/studyRoom/5.png";

import tv1 from "../assets/tvUnit/1.png";
import tv2 from "../assets/tvUnit/2.png";
import tv3 from "../assets/tvUnit/3.png";
import tv4 from "../assets/tvUnit/4.png";
import tv5 from "../assets/tvUnit/5.png";
import tv6 from "../assets/tvUnit/6.png";

import vanity1 from "../assets/vanity/1.png";
import vanity2 from "../assets/vanity/2.png";
import vanity3 from "../assets/vanity/3.png";

// ✅ FIXED naming (wardrobes)
import wardrobe1 from "../assets/wardrobes/1.png";
import wardrobe2 from "../assets/wardrobes/2.png";
import wardrobe3 from "../assets/wardrobes/3.png";
import wardrobe4 from "../assets/wardrobes/4.png";
import wardrobe5 from "../assets/wardrobes/5.png";
import wardrobe6 from "../assets/wardrobes/6.png";
import wardrobe7 from "../assets/wardrobes/7.png";
import wardrobe8 from "../assets/wardrobes/8.png";
import wardrobe9 from "../assets/wardrobes/9.png";
import wardrobe11 from "../assets/wardrobes/11.png";
import wardrobe12 from "../assets/wardrobes/12.png";
import wardrobe13 from "../assets/wardrobes/13.png";
import wardrobe14 from "../assets/wardrobes/14.png";
import wardrobe15 from "../assets/wardrobes/15.png";
import wardrobe16 from "../assets/wardrobes/16.png";
import wardrobe17 from "../assets/wardrobes/17.png";
import wardrobe18 from "../assets/wardrobes/18.png";

export interface CategorySection {
  id: string;
  title: string;
  images: string[];
  overview: string;
}

export const categoriesData: CategorySection[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    images: [
      kitchen1,
      kitchen2,
      kitchen3,
      kitchen4,
      kitchen5,
      kitchen6,
      kitchen7,
      kitchen8,
      kitchen9,
      kitchen10,
      kitchen11,
      kitchen12,
    ],
    overview: "Modern modular kitchens with efficient layouts.",
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    images: [
      wardrobe1,
      wardrobe2,
      wardrobe3,
      wardrobe4,
      wardrobe5,
      wardrobe6,
      wardrobe7,
      wardrobe8,
      wardrobe9,
      wardrobe11,
      wardrobe12,
      wardrobe13,
      wardrobe14,
      wardrobe15,
      wardrobe16,
      wardrobe17,
      wardrobe18,
    ],
    overview: "Spacious and modular wardrobes.",
  },
  {
    id: "tvUnit",
    title: "TV Unit",
    images: [tv1, tv2, tv3, tv4, tv5, tv6],
    overview: "Modern TV units with storage and style.",
  },
  {
    id: "livingRoom",
    title: "Living Room",
    images: [
      living1,
      living2,
      living3,
      living4,
      living5,
      living6,
      living7,
      living8,
      living9,
      living10,
      living11,
    ],
    overview: "Contemporary living room interiors.",
  },
  {
    id: "partition",
    title: "Partition",
    images: [
      partition1,
      partition2,
      partition3,
      partition4,
      partition5,
      partition6,
      partition7,
      partition8,
      partition9,
      partition10,
    ],
    overview: "Creative partitions for space optimization.",
  },
  {
    id: "dining",
    title: "Dining",
    images: [dining1, dining2, dining3, dining4, dining5],
    overview: "Stylish and functional dining spaces.",
  },
  {
    id: "studyRoom",
    title: "Study Table",
    images: [study1, study2, study3, study4, study5],
    overview: "Ergonomic and minimal study setups.",
  },
  {
    id: "crockery",
    title: "Crockery",
    images: [crockery1, crockery2, crockery3, crockery4],
    overview: "Elegant crockery units with smart storage.",
  },
  {
    id: "vanity",
    title: "Vanity",
    images: [vanity1, vanity2, vanity3],
    overview: "Elegant vanity designs with lighting.",
  },
  {
    id: "beds",
    title: "Beds",
    images: [
      beds1,
      beds2,
      beds3,
      beds4,
      beds5,
      beds6,
      beds7,
      beds8,
      beds9,
      beds10,
    ],
    overview: "Modern and comfortable bed designs with aesthetic appeal.",
  },
];

export const categories = categoriesData.map((c) => c.id);
