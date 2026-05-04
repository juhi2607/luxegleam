import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import goldRing    from "../assets/Elegant Gold Ring.jpg";
import necklace    from "../assets/Sterling silver double heart pendant.webp";
import earrings    from "../assets/Emerald Stud Earrings.jpg";
import ringImg     from "../assets/Gold Plated Ring.jpg";
import necklace2   from "../assets/Modern Layered Necklace.jpg";

const cells = [
  // Row 1
  {
    type: "image",
    image: goldRing,
    bg: "#f5ede4",
    link: "/shop?category=Rings"
  },
  {
    type: "text",
    tag: "TIMELESS BEAUTY",
    title: "ELEGANT\nEARRINGS",
    desc: "Discover our exquisite collection of elegant earrings.",
    link: "/shop?category=Earrings"
  },
  {
    type: "image",
    image: necklace,
    bg: "#f0ece8",
    link: "/shop?category=Necklaces"
  },
  // Row 2
  {
    type: "text",
    tag: "NEW COLLECTION",
    title: "WEDDING\nRINGS",
    desc: "Celebrate your love with our stunning collection.",
    link: "/shop?category=Rings"
  },
  {
    type: "image",
    image: earrings,
    bg: "#f5ede4",
    link: "/shop?category=Earrings"
  },
  {
    type: "text",
    tag: "MODERN CHARM",
    title: "LUXURY\nNECKLACE",
    desc: "Elevate your elegance with our luxurious necklaces.",
    link: "/shop?category=Necklaces"
  }
];

export default function PromoGrid() {
  return (
    <Box sx={{ background: "#fff", py: 0 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px"
          }}
        >
          {cells.map((cell, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {cell.type === "image" ? (
                /* Image cell */
                <Box
                  component={Link}
                  to={cell.link}
                  sx={{
                    display: "block",
                    background: cell.bg,
                    height: { xs: 180, md: 260 },
                    overflow: "hidden",
                    textDecoration: "none",
                    "&:hover img": { transform: "scale(1.05)" }
                  }}
                >
                  <Box
                    component="img"
                    src={cell.image}
                    alt=""
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease"
                    }}
                  />
                </Box>
              ) : (
                /* Text cell */
                <Box
                  sx={{
                    height: { xs: 180, md: 260 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 2.5, md: 4 },
                    background: "#fff",
                    border: "1px solid #f0ebe4"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      color: "#aaa",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      mb: 1,
                      textTransform: "uppercase"
                    }}
                  >
                    {cell.tag}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: { xs: "20px", md: "26px" },
                      fontWeight: 700,
                      color: "#1a1a1a",
                      lineHeight: 1.15,
                      whiteSpace: "pre-line",
                      mb: 1.5
                    }}
                  >
                    {cell.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "'Montserrat', sans-serif",
                      color: "#888",
                      lineHeight: 1.6,
                      mb: 2,
                      maxWidth: 200
                    }}
                  >
                    {cell.desc}
                  </Typography>
                  <Typography
                    component={Link}
                    to={cell.link}
                    sx={{
                      fontSize: "12px",
                      fontFamily: "'Montserrat', sans-serif",
                      color: "#1a1a1a",
                      textDecoration: "underline",
                      fontWeight: 500,
                      "&:hover": { color: "#C9A84C" },
                      transition: "color 0.2s"
                    }}
                  >
                    Discover more
                  </Typography>
                </Box>
              )}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
