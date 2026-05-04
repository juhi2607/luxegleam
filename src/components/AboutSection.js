import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const pillars = [
  {
    icon: <DiamondOutlinedIcon sx={{ fontSize: 28, color: "#C9A84C" }} />,
    title: "Premium Quality",
    desc: "Crafted with high-grade materials and meticulous attention to detail."
  },
  {
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 28, color: "#C9A84C" }} />,
    title: "Elegant Designs",
    desc: "A perfect blend of modern luxury and timeless beauty."
  },
  {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 28, color: "#C9A84C" }} />,
    title: "Trusted Worldwide",
    desc: "Thousands of happy customers trust LuxeGleam for their finest moments."
  }
];

function AboutSection() {
  return (
    <Box id="about" sx={{ py: 12, background: "#faf8f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left: Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80"
                alt="About LuxeGleam"
                sx={{
                  width: "100%",
                  height: { xs: 320, md: 480 },
                  objectFit: "cover"
                }}
              />
              {/* Gold accent border */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  width: 100,
                  height: 100,
                  border: "2px solid #C9A84C",
                  zIndex: -1,
                  display: { xs: "none", md: "block" }
                }}
              />
              {/* Stats */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid #ede8e0",
                  p: 2,
                  display: "flex",
                  gap: 3
                }}
              >
                {[
                  { num: "10K+", label: "Happy Clients" },
                  { num: "500+", label: "Designs" },
                  { num: "15+", label: "Years" }
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#C9A84C",
                        lineHeight: 1
                      }}
                    >
                      {stat.num}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        color: "#999",
                        fontFamily: "'Montserrat', sans-serif",
                        mt: 0.3
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: "10px",
                letterSpacing: "0.35em",
                color: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                mb: 2
              }}
            >
              ✦ OUR STORY ✦
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: { xs: "32px", md: "46px" },
                color: "#1a1a1a",
                lineHeight: 1.15,
                mb: 3
              }}
            >
              About LuxeGleam 💎
            </Typography>

            <Typography
              sx={{
                color: "#777",
                fontSize: "14px",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1.9,
                mb: 4,
                maxWidth: 500
              }}
            >
              LuxeGleam is a premium luxury jewelry brand dedicated to timeless
              elegance and modern craftsmanship. Each piece is designed to
              enhance confidence and celebrate individuality — from delicate
              everyday wear to statement bridal collections.
            </Typography>

            {/* Pillars */}
            <Grid container spacing={2.5} sx={{ mb: 4 }}>
              {pillars.map((p) => (
                <Grid item xs={12} sm={4} key={p.title}>
                  <Box
                    sx={{
                      p: 2.5,
                      border: "1px solid #ede8e0",
                      background: "#fff",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        borderColor: "#C9A84C",
                        boxShadow: "0 4px 20px rgba(201,168,76,0.1)"
                      }
                    }}
                  >
                    <Box sx={{ mb: 1.5 }}>{p.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        letterSpacing: "0.04em",
                        mb: 0.8
                      }}
                    >
                      {p.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#999",
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: 1.7
                      }}
                    >
                      {p.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              component={Link}
              to="/shop"
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                color: "#1a1a1a",
                px: 5,
                py: 1.4,
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                borderRadius: 0,
                borderWidth: "1.5px",
                "&:hover": {
                  background: "#1a1a1a",
                  color: "#fff",
                  borderColor: "#1a1a1a"
                }
              }}
            >
              EXPLORE COLLECTION
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
