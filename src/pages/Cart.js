import React, { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems = [],
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useContext(CartContext);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container sx={{ pt: 14, pb: 6 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: 700 }}
      >
        Your Cart 🛒
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                mb: 3,
                borderRadius: 3,
                overflow: "hidden",
                background: "#1a1a1a",
                color: "#fff",
              }}
            >
              <Grid container>
                {/* Product Image */}
                <Grid item xs={12} md={3}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      height: 220,
                      objectFit: "cover",
                    }}
                  />
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography variant="h6">
                      {item.name}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                      Price: ₹{item.price}
                    </Typography>

                    {/* Quantity Controls */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <IconButton
                        onClick={() => handleDecrease(item)}
                        sx={{ color: "#fff" }}
                      >
                        <RemoveIcon />
                      </IconButton>

                      <Typography>
                        {item.quantity}
                      </Typography>

                      <IconButton
                        onClick={() => handleIncrease(item)}
                        sx={{ color: "#fff" }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <Typography sx={{ mt: 2 }}>
                      Subtotal: ₹
                      {item.price * item.quantity}
                    </Typography>
                  </CardContent>
                </Grid>

                {/* Remove Button */}
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Card>
          ))}

          {/* Grand Total Section */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 3,
              backgroundColor: "#111",
              color: "#fff",
              textAlign: "right",
            }}
          >
            <Typography variant="h6">
              Grand Total: ₹{totalPrice}
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/checkout"
              sx={{
                mt: 2,
                backgroundColor: "gold",
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#d4af37",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Cart;