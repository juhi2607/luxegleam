import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";

function AboutSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#111", color: "#fff" }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 4, fontWeight: 700 }}
        >
          About LuxeGleam 💎
        </Typography>

        {/* Short Description */}
        <Typography align="center" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
          LuxeGleam is a premium luxury jewelry brand dedicated to timeless
          elegance and modern craftsmanship. Each piece is designed to
          enhance confidence and celebrate individuality.
        </Typography>

        {/* 3 Cards */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#1a1a1a", color: "#fff", p: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Premium Quality
                </Typography>
                <Typography>
                  Crafted with high-grade materials and attention to detail.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#1a1a1a", color: "#fff", p: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Elegant Designs
                </Typography>
                <Typography>
                  A perfect blend of modern luxury and timeless beauty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#1a1a1a", color: "#fff", p: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
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