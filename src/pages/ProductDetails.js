import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  IconButton,
  Divider,
  Chip,
  Snackbar,
  Alert,
  Breadcrumbs,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";

const GOLD = "#C9A84C";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, wishlist } = useContext(WishlistContext);

  const [qty, setQty] = useState(1);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [expanded, setExpanded] = useState("info");
  const [relatedStart, setRelatedStart] = useState(0);

  if (!product) return (
    <Box sx={{ pt: "120px", textAlign: "center" }}>
      <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px" }}>
        Product not found
      </Typography>
    </Box>
  );

  const isWishlisted = wishlist?.find((w) => w.id === product.id);
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 6);
  const visibleRelated = related.slice(relatedStart, relatedStart + 4);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setSnackMsg(`${product.name} added to cart!`);
    setSnackOpen(true);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    setSnackMsg(isWishlisted ? "Removed from wishlist" : "Added to wishlist!");
    setSnackOpen(true);
  };

  // Generate a fake SKU
  const sku = `QTR${product.id}${product.category.slice(0, 2).toUpperCase()}`;

  return (
    <Box sx={{ background: "#faf8f5", minHeight: "100vh", pt: "98px" }}>

      {/* Breadcrumb */}
      <Box sx={{ background: "#fff", borderBottom: "1px solid #ede8e0", py: 1.5, px: { xs: 2, md: 6 } }}>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 14, color: "#bbb" }} />}>
          <Typography component={Link} to="/" sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: GOLD } }}>
            Home
          </Typography>
          <Typography component={Link} to="/shop" sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: GOLD } }}>
            Shop
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            {product.name}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={5}>

          {/* ── LEFT: Product Image ── */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ position: "relative" }}>
                {/* Popular badge */}
                {product.rating >= 4.7 && (
                  <Chip
                    label="Popular"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      background: "#f39c12",
                      color: "#fff",
                      fontSize: "10px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      height: 22,
                      borderRadius: 0
                    }}
                  />
                )}

                {/* Zoom icon */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 2,
                    background: "rgba(255,255,255,0.9)",
                    width: 34,
                    height: 34,
                    "&:hover": { background: "#fff", color: GOLD }
                  }}
                >
                  <ZoomInIcon sx={{ fontSize: 18 }} />
                </IconButton>

                {/* Main image */}
                <Box
                  sx={{
                    border: "1px solid #ede8e0",
                    background: "#fff",
                    overflow: "hidden",
                    aspectRatio: "1/1"
                  }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* ── CENTER: Product Info ── */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Name */}
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: { xs: "26px", md: "32px" },
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "0.02em",
                  mb: 1
                }}
              >
                {product.name.toUpperCase()}
              </Typography>

              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Rating
                  value={Number(product.rating)}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{ "& .MuiRating-iconFilled": { color: GOLD }, "& .MuiRating-iconEmpty": { color: "#ddd" } }}
                />
                <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>
                  ({Math.floor(product.rating * 10)} customer reviews)
                </Typography>
              </Box>

              {/* SKU + Category */}
              <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>
                  SKU: <span style={{ color: "#555" }}>{sku}</span>
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>
                  Category:{" "}
                  <Typography
                    component={Link}
                    to="/shop"
                    sx={{ fontSize: "12px", color: GOLD, fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                  >
                    {product.category}
                  </Typography>
                </Typography>
              </Box>

              <Divider sx={{ borderColor: "#ede8e0", mb: 2.5 }} />

              {/* Price */}
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "34px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  mb: 3
                }}
              >
                ₹{product.price.toLocaleString()}
              </Typography>

              {/* Quantity selector */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0, mb: 2 }}>
                <IconButton
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 0,
                    width: 38,
                    height: 38,
                    "&:hover": { borderColor: GOLD, color: GOLD }
                  }}
                >
                  <RemoveIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <Box
                  sx={{
                    width: 52,
                    height: 38,
                    border: "1px solid #ddd",
                    borderLeft: "none",
                    borderRight: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 600 }}>
                    {qty}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setQty((q) => q + 1)}
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 0,
                    width: 38,
                    height: 38,
                    "&:hover": { borderColor: GOLD, color: GOLD }
                  }}
                >
                  <AddIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>

              {/* Add to Cart button */}
              <Button
                fullWidth
                onClick={handleAddToCart}
                startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  border: "1.5px solid #1a1a1a",
                  color: "#1a1a1a",
                  background: "transparent",
                  py: 1.4,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  borderRadius: 0,
                  mb: 1.5,
                  "&:hover": { background: "#1a1a1a", color: "#fff" },
                  transition: "all 0.25s"
                }}
              >
                Add to cart →
              </Button>

              {/* Buy Now button */}
              <Button
                fullWidth
                onClick={handleBuyNow}
                startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: GOLD,
                  color: "#fff",
                  py: 1.4,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  borderRadius: 0,
                  mb: 2.5,
                  "&:hover": { background: "#b8963e" },
                  transition: "all 0.25s"
                }}
              >
                Buy now →
              </Button>

              {/* Wishlist + Compare */}
              <Box sx={{ display: "flex", gap: 3, mb: 2.5 }}>
                <Box
                  onClick={handleWishlist}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    cursor: "pointer",
                    color: isWishlisted ? "#e74c3c" : "#555",
                    "&:hover": { color: GOLD },
                    transition: "color 0.2s"
                  }}
                >
                  {isWishlisted
                    ? <FavoriteIcon sx={{ fontSize: 16 }} />
                    : <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                  }
                  <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                    Add to wishlist {Math.floor(product.rating * 5)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    cursor: "pointer",
                    color: "#555",
                    "&:hover": { color: GOLD },
                    transition: "color 0.2s"
                  }}
                >
                  <CompareArrowsIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                    Add to compare
                  </Typography>
                </Box>
              </Box>

              {/* Social share */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {[
                  { icon: <FacebookIcon sx={{ fontSize: 16 }} />, label: "Facebook" },
                  { icon: <TwitterIcon sx={{ fontSize: 16 }} />, label: "Twitter" },
                  { icon: <PinterestIcon sx={{ fontSize: 16 }} />, label: "Pinterest" },
                  { icon: <LinkedInIcon sx={{ fontSize: 16 }} />, label: "LinkedIn" },
                  { icon: <WhatsAppIcon sx={{ fontSize: 16 }} />, label: "WhatsApp" },
                  { icon: <TelegramIcon sx={{ fontSize: 16 }} />, label: "Telegram" }
                ].map((s) => (
                  <IconButton
                    key={s.label}
                    aria-label={s.label}
                    sx={{
                      width: 30,
                      height: 30,
                      border: "1px solid #ddd",
                      borderRadius: 0,
                      color: "#888",
                      "&:hover": { borderColor: GOLD, color: GOLD, background: "transparent" },
                      transition: "all 0.2s"
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* ── RIGHT: Product Information Panel ── */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Product Information accordion */}
              {[
                {
                  key: "info",
                  label: "Product information",
                  content: (
                    <Box>
                      {[
                        { label: "Color", value: "Gold / Silver" },
                        { label: "Material", value: "Sterling Silver" },
                        { label: "Brand", value: "LuxeGleam" }
                      ].map((row) => (
                        <Box
                          key={row.label}
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #f0ebe4"
                          }}
                        >
                          <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#999", width: 90, flexShrink: 0 }}>
                            {row.label}
                          </Typography>
                          <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>
                            {row.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )
                },
                {
                  key: "desc",
                  label: "Description",
                  content: (
                    <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#666", lineHeight: 1.8 }}>
                      Crafted with high-grade materials and meticulous attention to detail. Each piece is designed to enhance confidence and celebrate individuality — a timeless heirloom.
                    </Typography>
                  )
                },
                {
                  key: "features",
                  label: "Features",
                  content: (
                    <Box>
                      {["Exquisite Craftsmanship", "Diverse Selection", "Customization Options", "Exceptional Value"].map((f) => (
                        <Box key={f} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                          <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
                          <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555" }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )
                }
              ].map((panel) => (
                <Accordion
                  key={panel.key}
                  expanded={expanded === panel.key}
                  onChange={() => setExpanded(expanded === panel.key ? false : panel.key)}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "1px solid #ede8e0",
                    borderBottom: "none",
                    "&:last-child": { borderBottom: "1px solid #ede8e0" },
                    "&:before": { display: "none" },
                    "&.Mui-expanded": { margin: 0 }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: 18, color: expanded === panel.key ? GOLD : "#999" }} />}
                    sx={{ px: 2, py: 0, minHeight: "44px !important", "& .MuiAccordionSummary-content": { my: 0 } }}
                  >
                    <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.05em" }}>
                      {panel.label}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2, pb: 2, pt: 0, background: "#faf8f5" }}>
                    {panel.content}
                  </AccordionDetails>
                </Accordion>
              ))}
            </motion.div>
          </Grid>
        </Grid>

        {/* ── DESCRIPTION SECTION ── */}
        <Box sx={{ mt: 6, pt: 5, borderTop: "1px solid #ede8e0" }}>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#1a1a1a",
              mb: 2.5
            }}
          >
            DESCRIPTION
          </Typography>
          <Typography sx={{ fontSize: "13px", fontFamily: "'Montserrat', sans-serif", color: "#666", lineHeight: 1.9, mb: 2 }}>
            Radiating warmth and elegance, this {product.category} serves as a tangible symbol of devotion, featuring exquisite craftsmanship with premium materials. Each piece is handcrafted by skilled artisans who bring decades of expertise to every creation.
          </Typography>
          <Typography sx={{ fontSize: "13px", fontFamily: "'Montserrat', sans-serif", color: "#666", lineHeight: 1.9 }}>
            This captivating piece captures the essence of luxury with its delicate design, making it a cherished token of affection and a timeless heirloom to be passed down through generations.
          </Typography>
        </Box>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <Box sx={{ mt: 7 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#1a1a1a"
                }}
              >
                RELATED PRODUCTS
              </Typography>
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <IconButton
                  onClick={() => setRelatedStart((s) => Math.max(0, s - 1))}
                  disabled={relatedStart === 0}
                  sx={{ border: "1px solid #ddd", borderRadius: 0, width: 32, height: 32, "&:hover": { borderColor: GOLD, color: GOLD } }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                </IconButton>
                <IconButton
                  onClick={() => setRelatedStart((s) => Math.min(related.length - 4, s + 1))}
                  disabled={relatedStart >= related.length - 4}
                  sx={{ border: "1px solid #ddd", borderRadius: 0, width: 32, height: 32, "&:hover": { borderColor: GOLD, color: GOLD } }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                </IconButton>
              </Box>
            </Box>

            <Grid container spacing={2}>
              {visibleRelated.map((p, i) => (
                <Grid item xs={6} sm={3} key={p.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Box
                      sx={{
                        background: "#fff",
                        border: "1px solid #ede8e0",
                        position: "relative",
                        "&:hover": { borderColor: GOLD },
                        "&:hover .rel-actions": { opacity: 1 },
                        "&:hover img": { transform: "scale(1.04)" },
                        transition: "border-color 0.25s"
                      }}
                    >
                      {/* Badge */}
                      {p.rating >= 4.8 && (
                        <Box sx={{ position: "absolute", top: 8, left: 8, zIndex: 2, background: "#f39c12", color: "#fff", fontSize: "9px", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, px: 1, py: 0.3 }}>
                          Popular
                        </Box>
                      )}

                      {/* Hover actions */}
                      <Box
                        className="rel-actions"
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          zIndex: 2,
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.5,
                          opacity: 0,
                          transition: "opacity 0.25s"
                        }}
                      >
                        <IconButton onClick={() => toggleWishlist(p)} sx={{ background: "#fff", width: 28, height: 28, boxShadow: "0 2px 6px rgba(0,0,0,0.1)", "&:hover": { background: GOLD, color: "#fff" } }}>
                          <FavoriteBorderIcon sx={{ fontSize: 13 }} />
                        </IconButton>
                      </Box>

                      {/* Image */}
                      <Box
                        component={Link}
                        to={`/product/${p.id}`}
                        sx={{ display: "block", overflow: "hidden", background: "#f9f6f2" }}
                      >
                        <Box
                          component="img"
                          src={p.image}
                          alt={p.name}
                          sx={{ width: "100%", height: 180, objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        />
                      </Box>

                      {/* Info */}
                      <Box sx={{ p: 1.5 }}>
                        <Typography
                          component={Link}
                          to={`/product/${p.id}`}
                          sx={{ display: "block", fontSize: "10px", letterSpacing: "0.1em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#1a1a1a", textDecoration: "none", mb: 0.8, textTransform: "uppercase", "&:hover": { color: GOLD } }}
                        >
                          {p.name}
                        </Typography>
                        <Rating value={Number(p.rating)} precision={0.1} readOnly size="small" sx={{ "& .MuiRating-iconFilled": { color: GOLD }, "& .MuiRating-iconEmpty": { color: "#ddd" }, fontSize: "12px" }} />
                        <Typography sx={{ color: GOLD, fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, mt: 0.5 }}>
                          ₹{p.price.toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      {/* ── SUCCESS SNACKBAR ── */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          icon={<CheckCircleOutlineIcon sx={{ color: GOLD }} />}
          sx={{
            background: "#fff",
            color: "#1a1a1a",
            border: `1px solid ${GOLD}`,
            borderRadius: 0,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            "& .MuiAlert-icon": { color: GOLD }
          }}
        >
          {snackMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetails;
