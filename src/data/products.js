// ── Local assets ──────────────────────────────────────────────────────────────
import silverMinimalEarrings   from "../assets/Silver Minimal Earrings.jpg";
import pearlDropEarrings       from "../assets/Pearl Drop Earrings.jpg";
import vintagePearlEarrings    from "../assets/Vintage Pearl Earrings.jpg";
import goldPlatedRing          from "../assets/Gold Plated Ring.jpg";
import luxuryChainBracelet     from "../assets/Luxury Chain Bracelet.jpg";
import abellaEarrings          from "../assets/Abella Earrings - SILVER.jpg";
import pearlBracelet           from "../assets/Pearl Bracelet.jpg";
import goldHoopEarrings        from "../assets/Gold Hoop Earrings.jpg";
import elegantBraceletPair     from "../assets/Elegant Bracelet Pair.jpg";
import elegantPearlNecklace    from "../assets/Elegant Pearl Necklace.jpg";
import blackOnyxRing           from "../assets/Black Onyx Ring.jpg";
import crystalTennisBracelet   from "../assets/Crystal Tennis Bracelet.jpg";
import charmMultiBracelet      from "../assets/Charm Multi Bracelet.jpg";
import naturalRubyStud         from "../assets/Natural Ruby Diamond Stud Earrings_ 14k Gold & Sterling Silver Birthstone Jewelry.jpg";
import emeraldStudEarrings     from "../assets/Emerald Stud Earrings.jpg";
import silverChainBracelet     from "../assets/Silver Chain Bracelet.jpg";
import modernGreenDrop         from "../assets/Modern Green Copper Jade Pearl Butterfly Drop Earrings.jpg";
import modernLayeredNecklace   from "../assets/Modern Layered Necklace.jpg";
import goldCharmBracelet       from "../assets/Gold Charm Bracelet.jpg";
import crystalBowHoops         from "../assets/New Sterling Silver Crystal Bow Hoops _ Color_ Silver _ Size_ Os.jpg";
import fashionGoldRing         from "../assets/Fashion Gold Ring.jpg";
import elegantGoldRing         from "../assets/Elegant Gold Ring.jpg";

// ── New local assets ──────────────────────────────────────────────────────────
import watchRoseGold           from "../assets/Automatic watch – rose gold ip.webp";
import watchSteel              from "../assets/Automatic watch – steel.webp";
import watchWa0018             from "../assets/Automatic watch wa0018.webp";
import bluePin                 from "../assets/Blue pin.webp";
import penSilver               from "../assets/pen silver.webp";
import gemstone                from "../assets/gemstone.webp";
import hotDiamondsGiftSet      from "../assets/Hot diamonds 3 piece gift set .webp";
import sterlingHeartPendant    from "../assets/Sterling silver 0.10ct diamond heart pendant.webp";
import sterlingTwistHoop       from "../assets/Sterling silver 0.12ct diamond twist hoop.webp";
import sterlingCurbChain16     from "../assets/Sterling silver 16 inch dainty curb chain.webp";
import sterlingDoubleCircle    from "../assets/Sterling silver cubic zirconia double circle.webp";
import sterlingDoubleHeart     from "../assets/Sterling silver double heart diamond.webp";
import sterlingDoubleHeartPend from "../assets/Sterling silver double heart pendant.webp";
import antique_starfish        from "../assets/Antique starfish.webp";
import bonesChocker            from "../assets/Bones collection chocker.webp";
import cableCufflinks          from "../assets/Cable knot cufflinks.webp";
import buttonRoundWhite        from "../assets/Button round white mop.webp";
import pocketSquare            from "../assets/Armenian pattern pocket square.webp";
import goldCurbChain           from "../assets/9ct yellow solid gold 20 inch dainty curb.webp";
import stainlessCurbChain      from "../assets/Stainless steel 20 inch curb chain.webp";

const products = [
  // ── EARRINGS ──────────────────────────────────────────────────────────────
  { id: 1,  name: "Silver Minimal Earrings",                  category: "Earrings",      price: 4999,  rating: 4.5, stock: 10, image: silverMinimalEarrings },
  { id: 2,  name: "Pearl Drop Earrings",                      category: "Earrings",      price: 7499,  rating: 4.7, stock: 8,  image: pearlDropEarrings },
  { id: 3,  name: "Vintage Pearl Earrings",                   category: "Earrings",      price: 8999,  rating: 4.6, stock: 6,  image: vintagePearlEarrings },
  { id: 6,  name: "Abella Earrings Silver",                   category: "Earrings",      price: 6999,  rating: 4.6, stock: 9,  image: abellaEarrings },
  { id: 8,  name: "Gold Hoop Earrings",                       category: "Earrings",      price: 7499,  rating: 4.7, stock: 10, image: goldHoopEarrings },
  { id: 14, name: "Natural Ruby Diamond Stud",                category: "Earrings",      price: 15999, rating: 4.9, stock: 5,  image: naturalRubyStud },
  { id: 15, name: "Emerald Stud Earrings",                    category: "Earrings",      price: 11999, rating: 4.7, stock: 6,  image: emeraldStudEarrings },
  { id: 17, name: "Green Jade Drop Earrings",                 category: "Earrings",      price: 7999,  rating: 4.6, stock: 8,  image: modernGreenDrop },
  { id: 20, name: "Crystal Bow Hoops",                        category: "Earrings",      price: 6999,  rating: 4.5, stock: 7,  image: crystalBowHoops },
  { id: 40, name: "Sterling Diamond Twist Hoops",             category: "Earrings",      price: 9499,  rating: 4.8, stock: 6,  image: sterlingTwistHoop },

  // ── RINGS ──────────────────────────────────────────────────────────────────
  { id: 4,  name: "Gold Plated Ring",                         category: "Rings",         price: 7999,  rating: 4.4, stock: 12, image: goldPlatedRing },
  { id: 11, name: "Black Onyx Ring",                          category: "Rings",         price: 6999,  rating: 4.4, stock: 9,  image: blackOnyxRing },
  { id: 21, name: "Fashion Gold Ring",                        category: "Rings",         price: 8999,  rating: 4.7, stock: 10, image: fashionGoldRing },
  { id: 22, name: "Elegant Gold Ring",                        category: "Rings",         price: 9999,  rating: 4.8, stock: 8,  image: elegantGoldRing },

  // ── BRACELETS ──────────────────────────────────────────────────────────────
  { id: 5,  name: "Luxury Chain Bracelet",                    category: "Bracelets",     price: 12999, rating: 4.8, stock: 7,  image: luxuryChainBracelet },
  { id: 7,  name: "Pearl Bracelet",                           category: "Bracelets",     price: 5999,  rating: 4.5, stock: 11, image: pearlBracelet },
  { id: 9,  name: "Elegant Bracelet Pair",                    category: "Bracelets",     price: 8999,  rating: 4.6, stock: 8,  image: elegantBraceletPair },
  { id: 12, name: "Crystal Tennis Bracelet",                  category: "Bracelets",     price: 10999, rating: 4.8, stock: 7,  image: crystalTennisBracelet },
  { id: 13, name: "Charm Multi Bracelet",                     category: "Bracelets",     price: 5999,  rating: 4.5, stock: 12, image: charmMultiBracelet },
  { id: 16, name: "Silver Chain Bracelet",                    category: "Bracelets",     price: 3999,  rating: 4.3, stock: 14, image: silverChainBracelet },
  { id: 19, name: "Gold Charm Bracelet",                      category: "Bracelets",     price: 7999,  rating: 4.6, stock: 9,  image: goldCharmBracelet },

  // ── NECKLACES ──────────────────────────────────────────────────────────────
  { id: 10, name: "Elegant Pearl Necklace",                   category: "Necklaces",     price: 14999, rating: 4.9, stock: 6,  image: elegantPearlNecklace },
  { id: 18, name: "Modern Layered Necklace",                  category: "Necklaces",     price: 11999, rating: 4.8, stock: 6,  image: modernLayeredNecklace },
  { id: 41, name: "Sterling Double Heart Pendant",            category: "Necklaces",     price: 8499,  rating: 4.7, stock: 8,  image: sterlingDoubleHeartPend },
  { id: 42, name: "Sterling Diamond Heart Pendant",           category: "Necklaces",     price: 10999, rating: 4.8, stock: 6,  image: sterlingHeartPendant },

  // ── WATCHES ────────────────────────────────────────────────────────────────
  { id: 23, name: "Automatic Watch – Rose Gold",              category: "Watches",       price: 24999, rating: 4.8, stock: 5,  image: watchRoseGold },
  { id: 24, name: "Automatic Watch – Steel",                  category: "Watches",       price: 19999, rating: 4.9, stock: 4,  image: watchSteel },
  { id: 25, name: "Automatic Watch WA0018",                   category: "Watches",       price: 31999, rating: 4.7, stock: 3,  image: watchWa0018 },

  // ── PINS ───────────────────────────────────────────────────────────────────
  { id: 26, name: "Blue Enamel Pin",                          category: "Pins",          price: 2999,  rating: 4.5, stock: 10, image: bluePin },

  // ── PENS ───────────────────────────────────────────────────────────────────
  { id: 28, name: "Silver Luxury Pen",                        category: "Pens",          price: 5999,  rating: 4.6, stock: 8,  image: penSilver },

  // ── GEMSTONE ───────────────────────────────────────────────────────────────
  { id: 30, name: "Gemstone Collection",                      category: "Gemstone",      price: 8999,  rating: 4.7, stock: 7,  image: gemstone },

  // ── GIFT SET ───────────────────────────────────────────────────────────────
  { id: 32, name: "Hot Diamonds 3 Piece Gift Set",            category: "Gift Set",      price: 18999, rating: 4.9, stock: 6,  image: hotDiamondsGiftSet },

  // ── STERLING ───────────────────────────────────────────────────────────────
  { id: 34, name: "Sterling Silver 16\" Curb Chain",          category: "Sterling",      price: 6499,  rating: 4.6, stock: 9,  image: sterlingCurbChain16 },
  { id: 35, name: "Sterling Double Circle Pendant",           category: "Sterling",      price: 8999,  rating: 4.7, stock: 7,  image: sterlingDoubleCircle },
  { id: 43, name: "Sterling Double Heart Diamond",            category: "Sterling",      price: 11499, rating: 4.8, stock: 5,  image: sterlingDoubleHeart },
  { id: 44, name: "9ct Gold 20\" Dainty Curb Chain",          category: "Sterling",      price: 13999, rating: 4.7, stock: 6,  image: goldCurbChain },
  { id: 45, name: "Stainless Steel 20\" Curb Chain",          category: "Sterling",      price: 4999,  rating: 4.4, stock: 11, image: stainlessCurbChain },

  // ── STARFISH ───────────────────────────────────────────────────────────────
  { id: 36, name: "Antique Starfish Brooch",                  category: "Starfish",      price: 3999,  rating: 4.4, stock: 11, image: antique_starfish },

  // ── CHOCKER ────────────────────────────────────────────────────────────────
  { id: 37, name: "Bones Collection Chocker",                 category: "Chocker",       price: 9499,  rating: 4.6, stock: 8,  image: bonesChocker },

  // ── CUFFLINKS ──────────────────────────────────────────────────────────────
  { id: 38, name: "Cable Knot Cufflinks",                     category: "Cufflinks",     price: 11999, rating: 4.7, stock: 6,  image: cableCufflinks },

  // ── BUTTON ─────────────────────────────────────────────────────────────────
  { id: 46, name: "Round White MOP Button",                   category: "Button",        price: 999,   rating: 4.2, stock: 20, image: buttonRoundWhite },

  // ── POCKET SQUARE ──────────────────────────────────────────────────────────
  { id: 47, name: "Armenian Pattern Pocket Square",           category: "Pocket Square", price: 2499,  rating: 4.5, stock: 15, image: pocketSquare },
];

export default products;
