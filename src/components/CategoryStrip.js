import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
  {
    label: "RINGS",
    shopCategory: "Rings",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="30" cy="30" r="16" stroke="#C9A84C" strokeWidth="2.2" />
        <circle cx="30" cy="30" r="9" stroke="#C9A84C" strokeWidth="1.8" />
        <path d="M22 22 Q30 13 38 22" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  {
    label: "BRACELET",
    shopCategory: "Bracelets",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="30" cy="30" r="16" stroke="#C9A84C" strokeWidth="2.2" strokeDasharray="6 3" />
        <circle cx="30" cy="30" r="10" stroke="#C9A84C" strokeWidth="1.8" />
        <circle cx="30" cy="14" r="2.5" fill="#C9A84C" />
        <circle cx="30" cy="46" r="2.5" fill="#C9A84C" />
        <circle cx="14" cy="30" r="2.5" fill="#C9A84C" />
        <circle cx="46" cy="30" r="2.5" fill="#C9A84C" />
      </svg>
    )
  },
  {
    label: "CHAIN",
    shopCategory: "Sterling",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M10 30 Q20 18 30 30 Q40 42 50 30" stroke="#C9A84C" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse cx="10" cy="30" rx="4" ry="6" stroke="#C9A84C" strokeWidth="1.8" transform="rotate(-30 10 30)" />
        <ellipse cx="50" cy="30" rx="4" ry="6" stroke="#C9A84C" strokeWidth="1.8" transform="rotate(-30 50 30)" />
        <ellipse cx="30" cy="30" rx="4" ry="6" stroke="#C9A84C" strokeWidth="1.8" transform="rotate(60 30 30)" />
      </svg>
    )
  },
  {
    label: "CHOCKER",
    shopCategory: "Chocker",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M8 26 Q30 16 52 26" stroke="#C9A84C" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M8 30 Q30 20 52 30" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4" />
        <circle cx="30" cy="38" r="5" stroke="#C9A84C" strokeWidth="2" />
        <line x1="30" y1="31" x2="30" y2="33" stroke="#C9A84C" strokeWidth="1.8" />
        <circle cx="30" cy="38" r="2" fill="#C9A84C" opacity="0.3" />
      </svg>
    )
  },
  {
    label: "CUFFLINKS",
    shopCategory: "Cufflinks",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="18" cy="30" r="9" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="42" cy="30" r="9" stroke="#C9A84C" strokeWidth="2" />
        <line x1="27" y1="30" x2="33" y2="30" stroke="#C9A84C" strokeWidth="2.2" />
        <circle cx="18" cy="30" r="4" fill="#C9A84C" opacity="0.25" />
        <circle cx="42" cy="30" r="4" fill="#C9A84C" opacity="0.25" />
      </svg>
    )
  },
  {
    label: "EARRINGS",
    shopCategory: "Earrings",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="20" cy="14" r="4" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="40" cy="14" r="4" stroke="#C9A84C" strokeWidth="2" />
        <path d="M20 18 L16 34 L20 44 L24 34 L20 18" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <path d="M40 18 L36 34 L40 44 L44 34 L40 18" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <circle cx="20" cy="44" r="2.5" fill="#C9A84C" opacity="0.4" />
        <circle cx="40" cy="44" r="2.5" fill="#C9A84C" opacity="0.4" />
      </svg>
    )
  },
  {
    label: "GEMSTONE",
    shopCategory: "Gemstone",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <polygon points="30,8 46,22 30,52 14,22" stroke="#C9A84C" strokeWidth="2" fill="none" />
        <polygon points="30,8 46,22 30,34 14,22" stroke="#C9A84C" strokeWidth="1.5" fill="#C9A84C" fillOpacity="0.12" />
        <line x1="14" y1="22" x2="46" y2="22" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="30" y1="8" x2="22" y2="22" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="8" x2="38" y2="22" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    label: "GIFT SET",
    shopCategory: "Gift Set",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <rect x="10" y="26" width="40" height="26" rx="1" stroke="#C9A84C" strokeWidth="2" />
        <rect x="8" y="18" width="44" height="10" rx="1" stroke="#C9A84C" strokeWidth="2" />
        <line x1="30" y1="18" x2="30" y2="52" stroke="#C9A84C" strokeWidth="1.8" />
        <path d="M30 18 Q24 8 18 12 Q12 16 30 18" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M30 18 Q36 8 42 12 Q48 16 30 18" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  {
    label: "NECKLACE",
    shopCategory: "Necklaces",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M14 12 Q14 40 30 44 Q46 40 46 12" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="48" r="5" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="30" cy="48" r="2" fill="#C9A84C" opacity="0.3" />
        <circle cx="14" cy="12" r="3" fill="#C9A84C" />
        <circle cx="46" cy="12" r="3" fill="#C9A84C" />
      </svg>
    )
  },
  {
    label: "WATCHES",
    shopCategory: "Watches",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <circle cx="30" cy="30" r="14" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="30" cy="30" r="10" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="30" y1="22" x2="30" y2="30" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="30" x2="36" y2="34" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="22" y="10" width="16" height="6" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
        <rect x="22" y="44" width="16" height="6" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    label: "STARFISH",
    shopCategory: "Starfish",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M30 8 L33 22 L46 18 L36 28 L46 38 L33 34 L30 48 L27 34 L14 38 L24 28 L14 18 L27 22 Z" stroke="#C9A84C" strokeWidth="1.8" fill="none" />
        <circle cx="30" cy="30" r="4" fill="#C9A84C" opacity="0.3" />
      </svg>
    )
  },
  {
    label: "STERLING",
    shopCategory: "Sterling",
    svg: (
      <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
        <path d="M15 15 Q15 45 30 48 Q45 45 45 15" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="50" r="4" stroke="#C9A84C" strokeWidth="1.8" />
        <circle cx="15" cy="15" r="2.5" fill="#C9A84C" />
        <circle cx="45" cy="15" r="2.5" fill="#C9A84C" />
      </svg>
    )
  }
];

function CategoryStrip() {
  const scrollRef = useRef(null);
  const autoTimer = useRef(null);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    autoTimer.current = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 5) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 120, behavior: "smooth" });
        }
      }
    }, 2500);
    return () => clearInterval(autoTimer.current);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        background: "#fff",
        borderBottom: "1px solid #ede8e0",
        position: "relative",
        py: 0
      }}
    >
      {/* Left arrow */}
      <IconButton
        onClick={() => scroll(-1)}
        sx={{
          position: "absolute",
          left: 4,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "#bbb",
          width: 28,
          height: 28,
          "&:hover": { color: "#C9A84C", background: "transparent" }
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
      </IconButton>

      {/* Scrollable row */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          mx: { xs: 4, md: 5 }
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <Box
              component={Link}
              to={`/shop?category=${encodeURIComponent(cat.shopCategory)}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: 95, md: 115 },
                px: 1,
                py: 0,
                textDecoration: "none",
                borderRight: i < categories.length - 1 ? "1px solid #ede8e0" : "none",
                transition: "background 0.25s ease",
                "&:hover": {
                  background: "#f7f4f0",
                  "& .cat-label": { color: "#C9A84C" },
                  "& .cat-box": { background: "#ede8e0" }
                }
              }}
            >
              <Box
                className="cat-box"
                sx={{
                  width: { xs: 76, md: 90 },
                  height: { xs: 76, md: 90 },
                  background: "#f0ede8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 1.8,
                  transition: "background 0.25s ease"
                }}
              >
                {cat.svg}
              </Box>
              <Typography
                className="cat-label"
                sx={{
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  color: "#888",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: "color 0.25s ease",
                  whiteSpace: "nowrap",
                  pb: 1.8
                }}
              >
                {cat.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Right arrow */}
      <IconButton
        onClick={() => scroll(1)}
        sx={{
          position: "absolute",
          right: 4,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "#bbb",
          width: 28,
          height: 28,
          "&:hover": { color: "#C9A84C", background: "transparent" }
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
      </IconButton>
    </Box>
  );
}

export default CategoryStrip;
