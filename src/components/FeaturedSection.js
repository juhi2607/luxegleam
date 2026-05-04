import { useContext, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Rating
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const GOLD = "#C9A84C";

const tabs = [
  { label: "Rings",     category: "Rings" },
  { label: "Earrings",  category: "Earrings" },
  { label: "Necklace",  category: "Necklaces" },
  { label: "Bracelets", category: "Bracelets" },
  { label: "Watches",   category: "Watches" },
];

const CARD_W = 200; // px per card
const GAP = 16;

function FeaturedSection() {
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState("Rings");
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const filtered = products.filter((p) => p.category === activeTab);
  const maxOffset = Math.max(0, filtered.length - 5);

  const handleTab = (cat) => {
    setActiveTab(cat);
    setOffset(0);
  };

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <Box id="featured" sx={{ py: 8, background: "#fff" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "22px", md: "26px" },
              fontWeight: 400,
              letterSpacing: "0.25em",
              color: "#1a1a1a",
              textTransform: "uppercase"
            }}
          >
            Top Products
          </Typography>
          <Box sx={{ width: 40, height: 2, background: GOLD, mx: "auto", mt: 1.5, mb: 3 }} />

          {/* Category tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
            {tabs.map((tab) => (
              <Button
                key={tab.category}
                onClick={() => handleTab(tab.category)}
                sx={{
                  border: `1px solid ${activeTab === tab.category ? GOLD : "#ddd"}`,
                  color: activeTab === tab.category ? GOLD : "#888",
                  background: "transparent",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  borderRadius: 0,
                  px: 2.5,
                  py: 0.7,
                  minWidth: "auto",
                  "&:hover": { borderColor: GOLD, color: GOLD, background: "transparent" }
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Slider */}
        <Box sx={{ position: "relative" }}>
          {/* Left arrow */}
          <IconButton
            onClick={prev}
            disabled={offset === 0}
            sx={{
              position: "absolute",
              left: -20,
              top: "40%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "1px solid #ddd",
              borderRadius: 0,
              width: 34,
              height: 34,
              background: "#fff",
              "&:hover": { borderColor: GOLD, color: GOLD },
              "&.Mui-disabled": { opacity: 0.3 }
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          </IconButton>

          {/* Cards viewport */}
          <Box sx={{ overflow: "hidden" }}>
            <motion.div
              animate={{ x: -(offset * (CARD_W + GAP)) }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ display: "flex", gap: GAP }}
            >
              {filtered.map((product, i) => (
                <Box
                  key={product.id}
                  sx={{
                    width: CARD_W,
                    flexShrink: 0,
                    "&:hover .prod-img": { transform: "scale(1.04)" },
                    "&:hover .prod-actions": { opacity: 1 }
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      background: "#f9f6f2",
                      height: 220,
                      border: "1px solid #ede8e0"
                    }}
                  >
                    <Box
                      className="prod-img"
                      component={Link}
                      to={`/product/${product.id}`}
                      sx={{ display: "block", height: "100%" }}
                    >
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.5s ease"
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Info */}
                  <Box sx={{ pt: 1.5, textAlign: "center" }}>
                    <Typography
                      component={Link}
                      to={`/product/${product.id}`}
                      sx={{
                        display: "block",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        mb: 0.5,
                        "&:hover": { color: GOLD }
                      }}
                    >
                      {product.name.length > 22 ? product.name.slice(0, 22) + "…" : product.name}
                    </Typography>

                    <Rating
                      value={Number(product.rating)}
                      precision={0.1}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-iconFilled": { color: GOLD },
                        "& .MuiRating-iconEmpty": { color: "#ddd" },
                        fontSize: "13px"
                      }}
                    />

                    <Typography
                      sx={{
                        color: GOLD,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        mt: 0.5,
                        mb: 1
                      }}
                    >
                      ₹{product.price.toLocaleString()}
                    </Typography>

                    <Button
                      onClick={() => addToCart(product)}
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 13 }} />}
                      sx={{
                        color: "#555",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        p: 0,
                        minWidth: "auto",
                        "&:hover": { color: GOLD, background: "transparent" }
                      }}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Box>

          {/* Right arrow */}
          <IconButton
            onClick={next}
            disabled={offset >= maxOffset}
            sx={{
              position: "absolute",
              right: -20,
              top: "40%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "1px solid #ddd",
              borderRadius: 0,
              width: 34,
              height: 34,
              background: "#fff",
              "&:hover": { borderColor: GOLD, color: GOLD },
              "&.Mui-disabled": { opacity: 0.3 }
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
          </IconButton>
        </Box>

        {/* Dots */}
        {filtered.length > 5 && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
            {Array.from({ length: Math.ceil(filtered.length / 5) }).map((_, i) => (
              <Box
                key={i}
                onClick={() => setOffset(i * 5)}
                sx={{
                  width: Math.floor(offset / 5) === i ? 20 : 7,
                  height: 7,
                  borderRadius: "4px",
                  background: Math.floor(offset / 5) === i ? GOLD : "#ddd",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default FeaturedSection;
