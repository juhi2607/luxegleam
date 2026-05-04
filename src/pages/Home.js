import {
  Box,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import elegantPearlNecklaceHero from "../assets/slider1.webp";
import elegantGoldRingHero     from "../assets/slider2.webp";
import naturalRubyHero         from "../assets/slider3.webp";
import AboutSection from "../components/AboutSection";
import ServiceStrip from "../components/ServiceStrip";
import PromoBanners from "../components/PromoBanners";
import TrendingSection from "../components/TrendingSection";
import NewCollectionSection from "../components/NewCollectionSection";
import NewsletterBanner from "../components/NewsletterBanner";
import ShopByBrands from "../components/ShopByBrands";
import PromoGrid from "../components/PromoGrid";

// Fade-up animation wrapper
const FadeUp = ({ children, delay = 0, duration = 0.7 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const slides = [
  {
    id: 1,
    tag: "MODERN CHARM",
    title: "ELEGANT COLLECTION\nFOR YOUR LADY",
    desc: "More than just an accessory, it's a reflection of your individuality.",
    image: elegantPearlNecklaceHero,
    bg: "#f5ede4",
    cta: "Shop now"
  },
  {
    id: 2,
    tag: "NEW COLLECTION",
    title: "FANCY\nJEWELERY",
    desc: "Jewelry LuxeGleam is a fresh and conceptual in the world of jewelry. You will get a unique, one-of-a-kind decoration that will suit you better than any other.",
    image: elegantGoldRingHero,
    bg: "#f0e8d8",
    cta: "Shop now"
  },
  {
    id: 3,
    tag: "TIMELESS BEAUTY",
    title: "JEWELRY SETS\nGET UP TO 10% OFF",
    desc: "Sparkle and Save: Enjoy our stunning jewelry collection at discounted prices!",
    image: naturalRubyHero,
    bg: "#f2ece4",
    cta: "Shop now"
  }
];

function Home() {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  // Subtle parallax on hero image
  const heroImgY = useTransform(scrollY, [0, 500], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <Box sx={{ pt: "98px" }}>

      {/* ===== HERO SLIDER — Joice style ===== */}
      <Box
        ref={heroRef}
        sx={{ height: { xs: "60vh", md: "82vh" }, position: "relative", overflow: "hidden" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              position: "absolute",
              inset: 0,
              background: slides[current].bg
            }}
          >
            {/* ── Decorative gold wave SVG (background) ── */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1200 500"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: "absolute", inset: 0 }}
              >
                {/* Wave lines */}
                <path
                  d="M-100 320 Q200 200 500 300 Q800 400 1100 250 Q1300 180 1400 220"
                  stroke="#C9A84C"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.35"
                />
                <path
                  d="M-100 360 Q200 240 500 340 Q800 440 1100 290 Q1300 220 1400 260"
                  stroke="#C9A84C"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.2"
                />
                <path
                  d="M-100 280 Q200 160 500 260 Q800 360 1100 210 Q1300 140 1400 180"
                  stroke="#C9A84C"
                  strokeWidth="0.6"
                  fill="none"
                  opacity="0.15"
                />
                {/* Gold dots */}
                <circle cx="380" cy="180" r="5" fill="#C9A84C" opacity="0.5" />
                <circle cx="620" cy="320" r="4" fill="#C9A84C" opacity="0.4" />
                <circle cx="820" cy="140" r="6" fill="#C9A84C" opacity="0.35" />
                <circle cx="200" cy="380" r="3.5" fill="#C9A84C" opacity="0.3" />
                <circle cx="950" cy="400" r="4.5" fill="#C9A84C" opacity="0.3" />
              </svg>
            </Box>

            {/* ── Left text ── */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "5%", md: "7%" },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                maxWidth: { xs: "52%", md: "38%" }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${slides[current].id}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                  {/* Tag */}
                  <Typography
                    sx={{
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      color: "#aaa",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      mb: 1.5
                    }}
                  >
                    {slides[current].tag}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: { xs: "28px", md: "46px" },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#1a1a1a",
                      whiteSpace: "pre-line",
                      mb: 2
                    }}
                  >
                    {slides[current].title}
                  </Typography>

                  {/* Desc */}
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: { xs: "11px", md: "13px" },
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1.7,
                      mb: 3,
                      maxWidth: 300
                    }}
                  >
                    {slides[current].desc}
                  </Typography>

                  {/* CTA */}
                  <Button
                    component={Link}
                    to="/shop"
                    variant="outlined"
                    sx={{
                      borderColor: "#1a1a1a",
                      color: "#1a1a1a",
                      px: 3.5,
                      py: 1.1,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      borderRadius: 0,
                      borderWidth: "1px",
                      "&:hover": { background: "#1a1a1a", color: "#fff" }
                    }}
                  >
                    {slides[current].cta}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* ── Right model image ── */}
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                left: { xs: "42%", md: "36%" },
                zIndex: 2,
                overflow: "hidden"
              }}
            >
              <motion.div style={{ y: heroImgY, height: "110%", width: "100%" }}>
                <motion.img
                  key={`img-${slides[current].id}`}
                  src={slides[current].image}
                  alt={slides[current].title}
                  initial={{ scale: 1.04, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block"
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* ── Left arrow ── */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            border: "1px solid rgba(0,0,0,0.18)",
            color: "#1a1a1a",
            width: 36,
            height: 36,
            borderRadius: 0,
            background: "rgba(255,255,255,0.8)",
            "&:hover": { background: "#fff", borderColor: "#C9A84C", color: "#C9A84C" },
            zIndex: 10,
            transition: "all 0.2s"
          }}
        >
          <ArrowBack sx={{ fontSize: 15 }} />
        </IconButton>

        {/* ── Right arrow ── */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            border: "1px solid rgba(0,0,0,0.18)",
            color: "#1a1a1a",
            width: 36,
            height: 36,
            borderRadius: 0,
            background: "rgba(255,255,255,0.8)",
            "&:hover": { background: "#fff", borderColor: "#C9A84C", color: "#C9A84C" },
            zIndex: 10,
            transition: "all 0.2s"
          }}
        >
          <ArrowForward sx={{ fontSize: 15 }} />
        </IconButton>

        {/* ── Dots ── */}
        <Box
          sx={{
            position: "absolute",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 10
          }}
        >
          {slides.map((_, i) => (
            <motion.div
              key={i}
              animate={{ width: i === current ? 22 : 7 }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrent(i)}
              style={{
                height: 7,
                borderRadius: 4,
                background: i === current ? "#C9A84C" : "rgba(0,0,0,0.15)",
                cursor: "pointer"
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ===== NEW COLLECTION ===== */}
      <FadeUp>
        <NewCollectionSection />
      </FadeUp>

      {/* ===== SERVICE STRIP ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ServiceStrip />
      </motion.div>

      {/* ===== PROMO BANNERS ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <PromoBanners />
      </motion.div>

      {/* ===== TRENDING PRODUCTS ===== */}
      <FadeUp delay={0.05}>
        <TrendingSection />
      </FadeUp>

      {/* ===== NEWSLETTER BANNER ===== */}
      <FadeUp>
        <Box sx={{ py: 5, background: "#faf8f5" }}>
          <NewsletterBanner />
        </Box>
      </FadeUp>

      {/* ===== SHOP BY BRANDS ===== */}
      <FadeUp>
        <ShopByBrands />
      </FadeUp>

      {/* ===== PROMO GRID ===== */}
      <FadeUp>
        <PromoGrid />
      </FadeUp>

      {/* ===== ABOUT ===== */}
      <FadeUp>
        <AboutSection />
      </FadeUp>
    </Box>
  );
}

export default Home;
