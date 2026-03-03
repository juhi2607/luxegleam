import silverMinimalEarrings from "../assets/Silver Minimal Earrings.jpg";
import pearlDropEarrings from "../assets/Pearl Drop Earrings.jpg";
import vintagePearlEarrings from "../assets/Vintage Pearl Earrings.jpg";
import goldPlatedRing from "../assets/Gold Plated Ring.jpg";
import luxuryChainBracelet from "../assets/Luxury Chain Bracelet.jpg";
import abellaEarrings from "../assets/Abella Earrings - SILVER.jpg";
import pearlBracelet from "../assets/Pearl Bracelet.jpg";
import goldHoopEarrings from "../assets/Gold Hoop Earrings.jpg";
import elegantBraceletPair from "../assets/Elegant Bracelet Pair.jpg";
import elegantPearlNecklace from "../assets/Elegant Pearl Necklace.jpg";
import blackOnyxRing from "../assets/Black Onyx Ring.jpg";
import crystalTennisBracelet from "../assets/Crystal Tennis Bracelet.jpg";
import charmMultiBracelet from "../assets/Charm Multi Bracelet.jpg";
import naturalRubyStud from "../assets/Natural Ruby Diamond Stud Earrings_ 14k Gold & Sterling Silver Birthstone Jewelry.jpg";
import emeraldStudEarrings from "../assets/Emerald Stud Earrings.jpg";
import silverChainBracelet from "../assets/Silver Chain Bracelet.jpg";
import modernGreenDrop from "../assets/Modern Green Copper Jade Pearl Butterfly Drop Earrings.jpg";
import modernLayeredNecklace from "../assets/Modern Layered Necklace.jpg";
import goldCharmBracelet from "../assets/Gold Charm Bracelet.jpg";
import crystalBowHoops from "../assets/New Sterling Silver Crystal Bow Hoops _ Color_ Silver _ Size_ Os.jpg";
import fashionGoldRing from "../assets/Fashion Gold Ring.jpg";
import elegantGoldRing from "../assets/Elegant Gold Ring.jpg";




const products = [
  {
    id: 1,
    name: "Silver Minimal Earrings",
    category: "Earrings",
    price: 4999,
    rating: 4.5,
    stock: 10,
    image: silverMinimalEarrings,
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: 7499,
    rating: 4.7,
    stock: 8,
    image: pearlDropEarrings,
  },
  {
    id: 3,
    name: "Vintage Pearl Earrings",
    category: "Earrings",
    price: 8999,
    rating: 4.6,
    stock: 6,
    image: vintagePearlEarrings,
  },
  {
    id: 4,
    name: "Gold Plated Ring",
    category: "Rings",
    price: 7999,
    rating: 4.4,
    stock: 12,
    image: goldPlatedRing,
  },
  {
    id: 5,
    name: "Luxury Chain Bracelet",
    category: "Bracelets",
    price: 12999,
    rating: 4.8,
    stock: 7,
    image: luxuryChainBracelet,
  },
  {
    id: 6,
    name: "Abella Earrings Silver",
    category: "Earrings",
    price: 6999,
    rating: 4.6,
    stock: 9,
    image: abellaEarrings,
  },
  {
    id: 7,
    name: "Pearl Bracelet",
    category: "Bracelets",
    price: 5999,
    rating: 4.5,
    stock: 11,
    image: pearlBracelet,
  },
  {
    id: 8,
    name: "Gold Hoop Earrings",
    category: "Earrings",
    price: 7499,
    rating: 4.7,
    stock: 10,
    image: goldHoopEarrings,
  },
  {
    id: 9,
    name: "Elegant Bracelet Pair",
    category: "Bracelets",
    price: 8999,
    rating: 4.6,
    stock: 8,
    image: elegantBraceletPair,
  },
  {
    id: 10,
    name: "Elegant Pearl Necklace",
    category: "Necklaces",
    price: 14999,
    rating: 4.9,
    stock: 6,
    image: elegantPearlNecklace,
  },
  {
    id: 11,
    name: "Black Onyx Ring",
    category: "Rings",
    price: 6999,
    rating: 4.4,
    stock: 9,
    image: blackOnyxRing,
  },
  {
    id: 12,
    name: "Crystal Tennis Bracelet",
    category: "Bracelets",
    price: 10999,
    rating: 4.8,
    stock: 7,
    image: crystalTennisBracelet,
  },
  {
    id: 13,
    name: "Charm Multi Bracelet",
    category: "Bracelets",
    price: 5999,
    rating: 4.5,
    stock: 12,
    image: charmMultiBracelet,
  },
  {
    id: 14,
    name: "Natural Ruby Diamond Stud Earrings",
    category: "Earrings",
    price: 15999,
    rating: 4.9,
    stock: 5,
    image: naturalRubyStud,
  },
  {
    id: 15,
    name: "Emerald Stud Earrings",
    category: "Earrings",
    price: 11999,
    rating: 4.7,
    stock: 6,
    image: emeraldStudEarrings,
  },
  {
    id: 16,
    name: "Silver Chain Bracelet",
    category: "Bracelets",
    price: 3999,
    rating: 4.3,
    stock: 14,
    image: silverChainBracelet,
  },
  {
    id: 17,
    name: "Green Jade Drop Earrings",
    category: "Earrings",
    price: 7999,
    rating: 4.6,
    stock: 8,
    image: modernGreenDrop,
  },
  {
    id: 18,
    name: "Modern Layered Necklace",
    category: "Necklaces",
    price: 11999,
    rating: 4.8,
    stock: 6,
    image: modernLayeredNecklace,
  },
  {
    id: 19,
    name: "Gold Charm Bracelet",
    category: "Bracelets",
    price: 7999,
    rating: 4.6,
    stock: 9,
    image: goldCharmBracelet,
  },
  {
    id: 20,
    name: "Crystal Bow Hoops",
    category: "Earrings",
    price: 6999,
    rating: 4.5,
    stock: 7,
    image: crystalBowHoops,
  },
  {
    id: 21,
    name: "Fashion Gold Ring",
    category: "Rings",
    price: 8999,
    rating: 4.7,
    stock: 10,
    image: fashionGoldRing,
  },
  {
    id: 22,
    name: "Elegant Gold Ring",
    category: "Rings",
    price: 9999,
    rating: 4.8,
    stock: 8,
    image: elegantGoldRing,
  }
];

export default products;