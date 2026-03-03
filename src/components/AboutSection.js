import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

function AboutSection() {
  return (
    <Box
      id="about"   // ✅ VERY IMPORTANT (THIS FIXES SCROLL)
      sx={{
        py: 12,
        backgroundColor: "#111",
        color: "#fff"
      }}
    >
      <Container>
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "#D4AF37"
          }}
        >
          About LuxeGleam 💎
        </Typography>

        {/* Description */}
        <Typography
          align="center"
          sx={{
            mb: 6,
            maxWidth: 800,
            mx: "auto",
            fontSize: "18px",
            opacity: 0.9
          }}
        >
          LuxeGleam is a premium luxury jewelry brand dedicated to timeless
          elegance and modern craftsmanship. Each piece is designed to
          enhance confidence and celebrate individuality.
        </Typography>

        {/* Cards */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "#1a1a1a",
                color: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: 5
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, color: "#D4AF37" }}>
                  Premium Quality
                </Typography>
                <Typography>
                  Crafted with high-grade materials and attention to detail.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "#1a1a1a",
                color: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: 5
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, color: "#D4AF37" }}>
                  Elegant Designs
                </Typography>
                <Typography>
                  A perfect blend of modern luxury and timeless beauty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "#1a1a1a",
                color: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: 5
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, color: "#D4AF37" }}>
                  Customer Trust
                </Typography>
                <Typography>
                  Thousands of happy customers trust LuxeGleam worldwide.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;