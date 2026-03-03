import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cart = [] } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const toggleDrawer = () => setOpen(!open);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Typography
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              color: "#D4AF37",
              fontWeight: "bold",
              fontSize: "22px"
            }}
          >
            LuxeGleam 💎
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center"
            }}
          >
            <Typography sx={{ cursor: "pointer", color: "#fff" }}
              onClick={() => navigate("/")}>
              HOME
            </Typography>

            <Typography sx={{ cursor: "pointer", color: "#fff" }}
              onClick={() => handleScroll("about")}>
              ABOUT
            </Typography>

            <Typography sx={{ cursor: "pointer", color: "#fff" }}
              onClick={() => handleScroll("featured")}>
              FEATURED
            </Typography>

            <Typography sx={{ cursor: "pointer", color: "#fff" }}
              onClick={() => navigate("/shop")}>
              SHOP
            </Typography>

            <IconButton onClick={() => navigate("/cart")} sx={{ color: "#fff" }}>
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, background: "#111", height: "100%", color: "#fff" }}>
          <List>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemText primary="HOME" />
            </ListItem>

            <ListItem button onClick={() => handleScroll("about")}>
              <ListItemText primary="ABOUT" />
            </ListItem>

            <ListItem button onClick={() => handleScroll("featured")}>
              <ListItemText primary="FEATURED" />
            </ListItem>

            <ListItem button onClick={() => navigate("/shop")}>
              <ListItemText primary="SHOP" />
            </ListItem>

            <ListItem button onClick={() => navigate("/cart")}>
              <ListItemText primary={`Cart (${totalItems})`} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;