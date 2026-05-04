import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import watchImg from "../assets/Automatic watch – rose gold ip.webp";
import ringImg  from "../assets/Elegant Gold Ring.jpg";

const banners = [
  {
    tag: "NEW COLLECTION",
    title: "Wedding\nRings",
    desc: "Celebrate your love with our exquisite collection of wedding rings.",
    cta: "Discover more",
    link: "/shop?category=Rings",
    image: ringImg,
    align: "left"
  },
  {
    tag: "TIMELESS BEAUTY",
    title: "Luxury\nWatches",
    desc: "Discover the perfect accessory that defines your unique sense of luxury.",
    cta: "Discover more",
    link: "/shop?category=Watches",
    image: watchImg,
    align: "right"
  }
];

function PromoBanners() {
  return (
    <Box sx={{ background: "#faf8f5" }}>
      <Grid container>
        {banners.map((banner, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 360, md: 480 },
                overflow: "hidden",
                "&:hover img": { transform: "scale(1.04)" }
              }}
            >
              <Box
                component="img"
                src={banner.image}
                alt={banner.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.8s ease"
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    banner.align === "left"
                      ? "linear-gradient(to right, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.05))"
                      : "linear-gradient(to left, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.05))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: banner.align === "left" ? "flex-start" : "flex-end",
                  p: { xs: 4, md: 6 }
                }}
              >
                <Box sx={{ maxWidth: 260 }}>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      color: "#C9A84C",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      mb: 1.5
                    }}
                  >
                    {banner.tag}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: { xs: "36px", md: "50px" },
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "#fff",
                      whiteSpace: "pre-line",
                      mb: 2
                    }}
                  >
                    {banner.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1.7,
                      mb: 2.5
                    }}
                  >
                    {banner.desc}
                  </Typography>
                  <Button
                    component={Link}
                    to={banner.link}
                    sx={{
                      color: "#fff",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      borderBottom: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: 0,
                      pb: 0.3,
                      px: 0,
                      "&:hover": { background: "transparent", borderColor: "#C9A84C", color: "#C9A84C" }
                    }}
                  >
                    {banner.cta} →
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PromoBanners;
