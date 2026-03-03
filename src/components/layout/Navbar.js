import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cartItems = [] } = useContext(CartContext); // SAFE

  const totalQty = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600 }}
        >
          LuxeGleam 💎
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            component={Link}
            to="/"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            HOME
          </Typography>

          <Typography
  component={Link}
  to="/about"
  sx={{ color: "#fff", textDecoration: "none" }}
>
  ABOUT
</Typography>

          <Typography
            component={Link}
            to="/shop"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            SHOP
          </Typography>

          <IconButton
            component={Link}
            to="/cart"
            sx={{ color: "#fff" }}
          >
            <Badge
              badgeContent={totalQty}
              color="error"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;