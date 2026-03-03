import {
  Box,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Timeless Elegance",
    subtitle: "Diamond Pendants Collection",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
  },
  {
    id: 2,
    title: "Pure Luxury",
    subtitle: "Gold Rings For Every Occasion",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
  },
  {
    id: 3,
    title: "Royal Bridal",
    subtitle: "Necklace Sets Collection",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
  }
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            height: "100vh",
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "#fff",
            textAlign: "center"
          }}
        >
          {/* Dark Gold Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))"
            }}
          />

          {/* Floating Glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
              filter: "blur(120px)"
            }}
          />

          <Box sx={{ position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 300,
                  letterSpacing: 3,
                  color: "#D4AF37"
                }}
              >
                {slides[current].title}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 4
                }}
              >
                {slides[current].subtitle}
              </Typography>

              <Button
                variant="contained"
                component={Link}
                to="/shop"
                sx={{
                  background: "#D4AF37",
                  color: "#000",
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#fff",
                    color: "#000"
                  }
                }}
              >
                VIEW COLLECTION
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 30,
          color: "#D4AF37"
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 30,
          color: "#D4AF37"
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default Home;