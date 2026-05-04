import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";

// MUI Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StarIcon from "@mui/icons-material/Star";

// ─── Constants ────────────────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const DARK = "#1a1a1a";
const CREAM = "#faf8f5";
const GRAY_BG = "#f5f0eb";

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
];

const GRID_IMAGES = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
  "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
];

const FEATURE_ITEMS = [
  {
    icon: <CreditCardIcon sx={{ fontSize: 32 }} />,
    title: "Easy Payments",
    desc: "We offer a wide range of secure payment options for your convenience.",
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 32 }} />,
    title: "Original Stones",
    desc: "Every gemstone is certified authentic and ethically sourced.",
  },
  {
    icon: <LocalOfferIcon sx={{ fontSize: 32 }} />,
    title: "Coupons & Offers",
    desc: "Exclusive deals and seasonal discounts for our loyal customers.",
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: 32 }} />,
    title: "Gift Carts",
    desc: "Beautifully packaged gift sets perfect for every occasion.",
  },
];

const PRICING_PLANS = [
  {
    name: "Basic",
    price: "$199.99",
    features: ["Sterling Silver", "1 Gemstone", "Standard Packaging", "6-Month Warranty"],
    highlight: false,
  },
  {
    name: "Silver",
    price: "$299.99",
    features: ["925 Silver", "2 Gemstones", "Premium Packaging", "1-Year Warranty"],
    highlight: false,
  },
  {
    name: "Gold",
    price: "$399.99",
    features: ["14K Gold", "3 Gemstones", "Luxury Packaging", "2-Year Warranty"],
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Platinum",
    price: "$499.99",
    features: ["Platinum", "4 Gemstones", "Bespoke Packaging", "Lifetime Warranty"],
    highlight: false,
  },
];

const FAQ_QUESTIONS = [
  "Do you have my product in stock?",
  "Do you deliver the Next Day?",
  "What delivery options do you offer?",
  "How do I know when my order has been dispatched?",
];

const FAQ_ICONS = [
  <CalendarTodayIcon sx={{ color: GOLD, mr: 1.5 }} />,
  <LocalShippingIcon sx={{ color: GOLD, mr: 1.5 }} />,
  <ListAltIcon sx={{ color: GOLD, mr: 1.5 }} />,
  <StarIcon sx={{ color: GOLD, mr: 1.5 }} />,
];

const FAQ_ANSWERS = [
  "Our inventory is updated in real time. If an item shows as available, it is ready to ship. For custom or limited-edition pieces, please contact us directly.",
  "Yes, we offer next-day delivery on most in-stock items when ordered before 2 PM. Additional charges may apply depending on your location.",
  "We provide standard, express, and next-day delivery options. International shipping is available to over 50 countries with full tracking.",
  "Once your order is dispatched, you will receive a confirmation email with a tracking number so you can follow your parcel every step of the way.",
];

// ─── Reusable sub-components ──────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="overline"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: DARK,
          fontWeight: 700,
        }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: 40,
          height: 2,
          bgcolor: GOLD,
          mx: "auto",
          mt: 1.5,
        }}
      />
    </Box>
  );
}

function TextBlock({ buttonVariant = "outlined", buttonColor = DARK, buttonBg = "transparent", icon }) {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.6rem" },
          color: DARK,
          lineHeight: 1.1,
          mb: 0.5,
        }}
      >
        JEWELRY TELLS
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.6rem" },
          color: GOLD,
          lineHeight: 1.1,
          mb: 3,
        }}
      >
        A GREAT STORY
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          color: "#555",
          lineHeight: 1.8,
          mb: 2,
        }}
      >
        Each piece in our collection is crafted with intention, carrying the weight of tradition
        and the lightness of modern elegance. From the first sketch to the final polish, every
        detail is considered.
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          color: "#555",
          lineHeight: 1.8,
          mb: 4,
        }}
      >
        Our artisans bring decades of expertise to every creation, ensuring that each jewel
        becomes a timeless heirloom — a story waiting to be told across generations.
      </Typography>
      <Button
        variant={buttonVariant}
        endIcon={icon}
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.15em",
          fontWeight: 600,
          px: 4,
          py: 1.2,
          color: buttonVariant === "outlined" ? buttonColor : "#fff",
          borderColor: buttonColor,
          bgcolor: buttonBg,
          borderRadius: buttonBg !== "transparent" ? "30px" : 0,
          "&:hover": {
            bgcolor: buttonVariant === "outlined" ? buttonColor : buttonBg,
            color: buttonVariant === "outlined" ? "#fff" : DARK,
            borderColor: buttonColor,
          },
        }}
      >
        Discover more
      </Button>
    </Box>
  );
}

// ─── Section 2: Video + Text ──────────────────────────────────────────────────

function VideoTextSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: real video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: 420,
                  background: "#000",
                  cursor: "pointer"
                }}
                onClick={handlePlayClick}
              >
                <Box
                  component="video"
                  ref={videoRef}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls={isPlaying}
                  playsInline
                  loop
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                {/* Play overlay — hides once playing */}
                {!isPlaying && (
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(0,0,0,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.25 }}>
                      <Box
                        sx={{
                          width: 68,
                          height: 68,
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "rgba(255,255,255,0.18)",
                          backdropFilter: "blur(6px)"
                        }}
                      >
                        <PlayArrowIcon sx={{ color: "#fff", fontSize: 38 }} />
                      </Box>
                    </motion.div>
                  </Box>
                )}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <TextBlock buttonVariant="outlined" buttonColor={DARK} />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 3: Text + Image Slider ──────────────────────────────────────────
function SliderSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDER_IMAGES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDER_IMAGES.length - 1 ? 0 : c + 1));

  return (
    <Box sx={{ bgcolor: GRAY_BG, py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <TextBlock
                buttonVariant="contained"
                buttonColor={GOLD}
                buttonBg={GOLD}
                icon={<YouTubeIcon />}
              />
            </motion.div>
          </Grid>

          {/* Right: carousel */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={SLIDER_IMAGES[current]}
                  alt={`Slide ${current + 1}`}
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "cover",
                    display: "block",
                    transition: "opacity 0.4s ease",
                  }}
                />
                {/* Arrows */}
                <IconButton
                  onClick={prev}
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.85)",
                    "&:hover": { bgcolor: "#fff" },
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                  onClick={next}
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.85)",
                    "&:hover": { bgcolor: "#fff" },
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                </IconButton>
                {/* Dots */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {SLIDER_IMAGES.map((_, i) => (
                    <Box
                      key={i}
                      onClick={() => setCurrent(i)}
                      sx={{
                        width: i === current ? 20 : 8,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: i === current ? GOLD : "rgba(255,255,255,0.7)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 4: 2×2 Image Grid + Text ────────────────────────────────────────
function GridTextSection() {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: 2×2 grid */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1.5}>
              {GRID_IMAGES.map((src, i) => (
                <Grid item xs={6} key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={`Grid image ${i + 1}`}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                        "&:hover": { transform: "scale(1.04)" },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right: text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TextBlock
                buttonVariant="contained"
                buttonColor="#c8a882"
                buttonBg="#e8d5c0"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 5: Parallax Banner ───────────────────────────────────────────────
function ParallaxBannerSection() {
  return (
    <Box sx={{ bgcolor: "#f0e8d8", py: 10, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.25em",
                  color: GOLD,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                PARALLAX BACKGROUND
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: DARK,
                  lineHeight: 1.15,
                  mb: 3,
                }}
              >
                WITH GRADIENT OVERLAY
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 440,
                }}
              >
                Experience the depth of our craftsmanship through a visual journey that blends
                artistry with precision. Each layer reveals a new dimension of luxury.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                  px: 4,
                  py: 1.2,
                  color: DARK,
                  borderColor: DARK,
                  borderRadius: 0,
                  "&:hover": { bgcolor: DARK, color: "#fff", borderColor: DARK },
                }}
              >
                Discover more
              </Button>
            </motion.div>
          </Grid>

          {/* Right: parallax image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              style={{ overflow: "hidden" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80"
                alt="Parallax jewelry"
                style={{
                  width: "100%",
                  height: 460,
                  objectFit: "cover",
                  display: "block",
                }}
                whileInView={{ y: [20, -20] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 6: Feature Icons Grid ───────────────────────────────────────────
function FeatureIconsSection() {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <SectionTitle>UI ELEMENTS &amp; ANIMATIONS</SectionTitle>

        {/* Row 1: cards with outlined gold icons */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {FEATURE_ITEMS.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    bgcolor: "#f7f5f2",
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    transition: "box-shadow 0.3s",
                    "&:hover": { boxShadow: "0 8px 30px rgba(0,0,0,0.08)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      border: `2px solid ${GOLD}`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2.5,
                      color: GOLD,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: DARK,
                      mb: 1,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "12px",
                      color: "#777",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Row 2: horizontal layout with gold circle icon bg */}
        <Grid container spacing={3}>
          {FEATURE_ITEMS.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2.5,
                    bgcolor: "#f7f5f2",
                    transition: "box-shadow 0.3s",
                    "&:hover": { boxShadow: "0 8px 30px rgba(0,0,0,0.08)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      bgcolor: GOLD,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: DARK,
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "11px",
                        color: "#777",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 7: Fixed/Parallax Banner ────────────────────────────────────────
function FixedBannerSection() {
  return (
    <Box
      sx={{
        height: 400,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.55)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: GOLD,
              fontWeight: 700,
              mb: 1,
            }}
          >
            FIXED BACKGROUND WITH
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#fff",
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            GRADIENT OVERLAY
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 480,
            }}
          >
            A stunning visual effect that creates depth and dimension, drawing the eye through
            layers of light and shadow to reveal the true beauty of fine jewelry.
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              bgcolor: DARK,
              color: "#fff",
              borderRadius: 0,
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Discover more
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

// ─── Section 8: Pricing Tables ────────────────────────────────────────────────
function PricingSection() {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <SectionTitle>PRICING TABLES</SectionTitle>
        <Grid container spacing={3}>
          {PRICING_PLANS.map((plan, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: plan.highlight ? GOLD : "#f7f5f2",
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {/* Popular badge */}
                  {plan.badge && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: DARK,
                        color: "#fff",
                        px: 2,
                        py: 0.4,
                        fontSize: "10px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {plan.badge}
                    </Box>
                  )}

                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                      color: plan.highlight ? "#fff" : "#999",
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.8rem",
                      fontWeight: 700,
                      color: plan.highlight ? "#fff" : DARK,
                      lineHeight: 1,
                      mb: 3,
                    }}
                  >
                    {plan.price}
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      height: 1,
                      bgcolor: plan.highlight ? "rgba(255,255,255,0.3)" : "#e0dbd4",
                      mb: 3,
                    }}
                  />

                  <Box sx={{ flex: 1, mb: 4 }}>
                    {plan.features.map((f, fi) => (
                      <Typography
                        key={fi}
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "12px",
                          color: plan.highlight ? "rgba(255,255,255,0.85)" : "#666",
                          py: 1,
                          borderBottom: `1px solid ${plan.highlight ? "rgba(255,255,255,0.15)" : "#ede9e3"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{ color: plan.highlight ? "#fff" : GOLD, fontWeight: 700 }}
                        >
                          ✓
                        </Box>
                        {f}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                      py: 1.2,
                      bgcolor: plan.highlight ? DARK : DARK,
                      color: "#fff",
                      borderRadius: 0,
                      "&:hover": { bgcolor: plan.highlight ? "#333" : "#333" },
                    }}
                  >
                    Discover more →
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Section 9: Video Banner ──────────────────────────────────────────────────
function VideoBannerSection() {
  return (
    <Box
      sx={{
        height: 400,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1400&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: GOLD,
              fontWeight: 700,
              mb: 1,
            }}
          >
            VIDEO BACKGROUND WITH
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#fff",
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            GRADIENT OVERLAY
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 480,
            }}
          >
            Immerse yourself in the world of fine jewelry through cinematic visuals that capture
            the brilliance, texture, and soul of every handcrafted piece.
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              bgcolor: DARK,
              color: "#fff",
              borderRadius: 0,
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Discover more
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

// ─── Section 10: FAQ Accordion ────────────────────────────────────────────────
function FAQSection() {
  const [expandedLeft, setExpandedLeft] = useState(false);
  const [expandedRight, setExpandedRight] = useState(false);

  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <SectionTitle>TABS, ACCORDION AND MORE</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {/* Left: plain accordion */}
            <Grid item xs={12} md={6}>
              {FAQ_QUESTIONS.map((q, i) => (
                <Accordion
                  key={i}
                  expanded={expandedLeft === i}
                  onChange={() => setExpandedLeft(expandedLeft === i ? false : i)}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "none",
                    borderBottom: "1px solid #e8e2da",
                    "&:before": { display: "none" },
                    "&.Mui-expanded": { margin: 0 },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: expandedLeft === i ? GOLD : "#999",
                          transition: "color 0.3s",
                        }}
                      />
                    }
                    sx={{
                      px: 0,
                      py: 0.5,
                      "& .MuiAccordionSummary-content": { my: 1.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1rem",
                        fontWeight: expandedLeft === i ? 700 : 500,
                        color: expandedLeft === i ? GOLD : DARK,
                        transition: "color 0.3s",
                      }}
                    >
                      {q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        color: "#666",
                        lineHeight: 1.8,
                      }}
                    >
                      {FAQ_ANSWERS[i]}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            {/* Right: accordion with icons */}
            <Grid item xs={12} md={6}>
              {FAQ_QUESTIONS.map((q, i) => (
                <Accordion
                  key={i}
                  expanded={expandedRight === i}
                  onChange={() => setExpandedRight(expandedRight === i ? false : i)}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "none",
                    borderBottom: "1px solid #e8e2da",
                    "&:before": { display: "none" },
                    "&.Mui-expanded": { margin: 0 },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: expandedRight === i ? GOLD : "#999",
                          transition: "color 0.3s",
                        }}
                      />
                    }
                    sx={{
                      px: 0,
                      py: 0.5,
                      "& .MuiAccordionSummary-content": { my: 1.5 },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {FAQ_ICONS[i]}
                      <Typography
                        sx={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1rem",
                          fontWeight: expandedRight === i ? 700 : 500,
                          color: expandedRight === i ? GOLD : DARK,
                          transition: "color 0.3s",
                        }}
                      >
                        {q}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        color: "#666",
                        lineHeight: 1.8,
                      }}
                    >
                      {FAQ_ANSWERS[i]}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Elements() {
  return (
    <Box sx={{ bgcolor: CREAM, pt: "98px" }}>
      {/* Section 1: Page Header */}
      <Box sx={{ bgcolor: CREAM, py: 8, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography
            variant="overline"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.3em",
              color: DARK,
              fontWeight: 700,
              display: "block",
              mb: 1.5,
            }}
          >
            UI ELEMENTS &amp; ANIMATIONS
          </Typography>
          <Box
            sx={{
              width: 48,
              height: 2,
              bgcolor: GOLD,
              mx: "auto",
            }}
          />
        </motion.div>
      </Box>

      {/* Section 2 */}
      <VideoTextSection />

      {/* Section 3 */}
      <SliderSection />

      {/* Section 4 */}
      <GridTextSection />

      {/* Section 5 */}
      <ParallaxBannerSection />

      {/* Section 6 */}
      <FeatureIconsSection />

      {/* Section 7 */}
      <FixedBannerSection />

      {/* Section 8 */}
      <PricingSection />

      {/* Section 9 */}
      <VideoBannerSection />

      {/* Section 10 */}
      <FAQSection />
    </Box>
  );
}
