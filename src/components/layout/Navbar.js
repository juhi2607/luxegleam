import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cart = [] } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleScroll = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#D4AF37",
            fontWeight: "bold",
            fontSize: "22px"
          }}
        >
          LuxeGleam 💎
        </Typography>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}
          >
            HOME
          </Typography>

          <Typography
            onClick={() => handleScroll("about")}
            sx={{ color: "#fff", cursor: "pointer" }}
          >
            ABOUT
          </Typography>

          <Typography
            onClick={() => handleScroll("featured")}
            sx={{ color: "#fff", cursor: "pointer" }}
          >
            FEATURED
          </Typography>

          <Typography
            component={Link}
            to="/shop"
            sx={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}
          >
            SHOP
          </Typography>

          <IconButton component={Link} to="/cart" sx={{ color: "#fff" }}>
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;