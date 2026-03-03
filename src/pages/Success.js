import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Success() {
  return (
    <Container sx={{ pt: 14, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        🎉 Order Placed Successfully!
      </Typography>

      <Typography sx={{ mb: 4 }}>
        Thank you for shopping with LuxeGleam 💎
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ backgroundColor: "gold", color: "#000" }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
}

export default Success;