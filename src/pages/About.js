import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container sx={{ pt: 14, pb: 8 }}>
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 700,
        }}
      >
        About LuxeGleam 💎
      </Typography>

      {/* Brand Story */}
      <Typography sx={{ textAlign: "center", mb: 6 }}>
        LuxeGleam was created with a passion for timeless elegance and
        luxury craftsmanship. Our mission is to deliver premium jewelry
        that enhances confidence, beauty, and sophistication.
      </Typography>

      {/* Mission & Vision */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, background: "#111", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Our Mission
              </Typography>
              <Typography>
                To design and deliver luxurious jewelry that celebrates
                individuality and elegance, while maintaining the highest
                standards of quality and craftsmanship.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, background: "#111", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Our Vision
              </Typography>
              <Typography>
                To become a globally recognized luxury jewelry brand
                known for innovation, elegance, and customer trust.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Why Choose Us */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4 }}
        >
          Why Choose LuxeGleam?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6">
                Premium Quality
              </Typography>
              <Typography>
                Crafted with high-grade materials and expert artisanship.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6">
                Elegant Designs
              </Typography>
              <Typography>
                Modern luxury blended with timeless beauty.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6">
                Customer Satisfaction
              </Typography>
              <Typography>
                Dedicated support and seamless shopping experience.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Discover Timeless Elegance
        </Typography>

        <Button
          component={Link}
          to="/shop"
          variant="contained"
          sx={{
            backgroundColor: "gold",
            color: "#000",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#d4af37" },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
}

export default About;