import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import products from "../data/products";

function FeaturedSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <Box
      id="featured"   // ✅ THIS ENABLES FEATURED SCROLL
      sx={{
        py: 12,
        backgroundColor: "#000",
        color: "#fff"
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: "#D4AF37"
          }}
        >
          Featured Collection 💎
        </Typography>

        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  background: "#111",
                  color: "#fff",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 5,
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-8px)"
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                />

                <CardContent>
                  <Typography variant="h6">
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mt: 1,
                      color: "#D4AF37"
                    }}
                  >
                    ₹{product.price}
                  </Typography>

                  <Button
                    component={Link}
                    to="/shop"
                    fullWidth
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderColor: "#D4AF37",
                      color: "#D4AF37",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "#D4AF37",
                        color: "#D4AF37"
                      }
                    }}
                  >
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={Link}
            to="/shop"
            variant="contained"
            sx={{
              px: 6,
              py: 1.5,
              backgroundColor: "#D4AF37",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#D4AF37"
              }
            }}
          >
            VIEW FULL COLLECTION
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturedSection;