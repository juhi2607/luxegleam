import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Container,
  TextField,
  Divider,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";

const GOLD = "#C9A84C";

function Cart() {
  const {
    cartItems = [],
    removeFromCart,
    updateQuantity,
    clearCart
  } = useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const navigate = useNavigate();

  const handleIncrease = (item) => updateQuantity(item.id, item.quantity + 1);
  const handleDecrease = (item) => {
    if (item.quantity === 1) removeFromCart(item.id);
    else updateQuantity(item.id, item.quantity - 1);
  };

  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const handleCoupon = () => {
    if (coupon.trim().toUpperCase() === "LUXE10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setCouponApplied(false);
    }
  };

  return (
    <Box sx={{ background: "#faf8f5", minHeight: "100vh", pt: "98px" }}>

      {/* Breadcrumb */}
      <Box sx={{ background: "#fff", borderBottom: "1px solid #ede8e0", py: 1.5, px: { xs: 2, md: 6 } }}>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 14, color: "#bbb" }} />}>
          <Typography component={Link} to="/" sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: GOLD } }}>
            Home
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Cart
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Page title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, opacity: 0.5 }} />
          </Box>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 400, color: "#1a1a1a", letterSpacing: "0.08em" }}>
            SHOPPING CART
          </Typography>
        </Box>

        {cartItems.length === 0 ? (
          /* ── Empty cart ── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                background: "#fff",
                border: "1px solid #ede8e0"
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 64, color: "#ddd", mb: 2 }} />
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", color: "#999", mb: 1 }}>
                Your cart is empty
              </Typography>
              <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#bbb", mb: 4 }}>
                Looks like you haven't added anything yet.
              </Typography>
              <Button
                component={Link}
                to="/shop"
                sx={{
                  background: GOLD,
                  color: "#fff",
                  px: 5,
                  py: 1.4,
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  borderRadius: 0,
                  "&:hover": { background: "#b8963e" }
                }}
              >
                CONTINUE SHOPPING
              </Button>
            </Box>
          </motion.div>
        ) : (
          <Grid container spacing={4}>

            {/* ── LEFT: Cart Table ── */}
            <Grid item xs={12} lg={8}>
              <Box sx={{ background: "#fff", border: "1px solid #ede8e0" }}>

                {/* Table header */}
                <Box
                  sx={{
                    display: { xs: "none", md: "grid" },
                    gridTemplateColumns: "2fr 1fr 1fr 1fr 40px",
                    px: 3,
                    py: 1.5,
                    borderBottom: "1px solid #ede8e0",
                    background: "#faf8f5"
                  }}
                >
                  {["PRODUCT", "PRICE", "QUANTITY", "SUBTOTAL", ""].map((h) => (
                    <Typography
                      key={h}
                      sx={{
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        color: "#1a1a1a"
                      }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>

                {/* Cart items */}
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box
                        sx={{
                          display: { xs: "flex", md: "grid" },
                          gridTemplateColumns: { md: "2fr 1fr 1fr 1fr 40px" },
                          flexDirection: { xs: "column" },
                          alignItems: { md: "center" },
                          px: 3,
                          py: 2.5,
                          borderBottom: "1px solid #f5f0eb",
                          gap: { xs: 1.5, md: 0 },
                          "&:last-child": { borderBottom: "none" }
                        }}
                      >
                        {/* Product info */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box
                            component={Link}
                            to={`/product/${item.id}`}
                            sx={{
                              display: "block",
                              width: 80,
                              height: 80,
                              flexShrink: 0,
                              overflow: "hidden",
                              border: "1px solid #ede8e0",
                              background: "#f9f6f2"
                            }}
                          >
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                          </Box>
                          <Box>
                            <Typography
                              component={Link}
                              to={`/product/${item.id}`}
                              sx={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#1a1a1a",
                                textDecoration: "none",
                                display: "block",
                                "&:hover": { color: GOLD },
                                transition: "color 0.2s"
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography sx={{ fontSize: "11px", color: "#bbb", fontFamily: "'Montserrat', sans-serif", mt: 0.3 }}>
                              {item.category}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Price */}
                        <Typography
                          sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#1a1a1a",
                            display: { xs: "none", md: "block" }
                          }}
                        >
                          ₹{item.price.toLocaleString()}
                        </Typography>

                        {/* Quantity */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                          <IconButton
                            onClick={() => handleDecrease(item)}
                            sx={{
                              border: "1px solid #ddd",
                              borderRadius: 0,
                              width: 32,
                              height: 32,
                              "&:hover": { borderColor: GOLD, color: GOLD }
                            }}
                          >
                            <RemoveIcon sx={{ fontSize: 14 }} />
                          </IconButton>
                          <Box
                            sx={{
                              width: 44,
                              height: 32,
                              border: "1px solid #ddd",
                              borderLeft: "none",
                              borderRight: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600 }}>
                              {item.quantity}
                            </Typography>
                          </Box>
                          <IconButton
                            onClick={() => handleIncrease(item)}
                            sx={{
                              border: "1px solid #ddd",
                              borderRadius: 0,
                              width: 32,
                              height: 32,
                              "&:hover": { borderColor: GOLD, color: GOLD }
                            }}
                          >
                            <AddIcon sx={{ fontSize: 14 }} />
                          </IconButton>
                        </Box>

                        {/* Subtotal */}
                        <Typography
                          sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: GOLD
                          }}
                        >
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </Typography>

                        {/* Remove */}
                        <IconButton
                          onClick={() => removeFromCart(item.id)}
                          sx={{
                            color: "#ccc",
                            width: 28,
                            height: 28,
                            "&:hover": { color: "#e74c3c", background: "transparent" }
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>

              {/* Action buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                  flexWrap: "wrap",
                  gap: 1.5
                }}
              >
                <Button
                  component={Link}
                  to="/shop"
                  sx={{
                    border: "1.5px solid #1a1a1a",
                    color: "#1a1a1a",
                    px: 3,
                    py: 1.1,
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    borderRadius: 0,
                    "&:hover": { background: "#1a1a1a", color: "#fff" }
                  }}
                >
                  ← CONTINUE SHOPPING
                </Button>
                <Button
                  onClick={clearCart}
                  sx={{
                    border: "1.5px solid #ddd",
                    color: "#999",
                    px: 3,
                    py: 1.1,
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    borderRadius: 0,
                    "&:hover": { border: "1.5px solid #e74c3c", color: "#e74c3c" }
                  }}
                >
                  CLEAR CART
                </Button>
              </Box>

              {/* Coupon code */}
              <Box
                sx={{
                  mt: 3,
                  background: "#fff",
                  border: "1px solid #ede8e0",
                  p: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    mb: 2
                  }}
                >
                  COUPON CODE
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                  If you have a coupon code, please apply it below. Try <strong style={{ color: GOLD }}>LUXE10</strong> for 10% off.
                </Typography>
                <Box sx={{ display: "flex", gap: 0 }}>
                  <TextField
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setCouponError(""); }}
                    size="small"
                    sx={{
                      flex: 1,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        fontSize: "12px",
                        fontFamily: "'Montserrat', sans-serif",
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: GOLD },
                        "&.Mui-focused fieldset": { borderColor: GOLD }
                      }
                    }}
                  />
                  <Button
                    onClick={handleCoupon}
                    sx={{
                      background: "#1a1a1a",
                      color: "#fff",
                      px: 3,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      borderRadius: 0,
                      "&:hover": { background: GOLD }
                    }}
                  >
                    APPLY
                  </Button>
                </Box>
                {couponApplied && (
                  <Typography sx={{ fontSize: "12px", color: "#27ae60", fontFamily: "'Montserrat', sans-serif", mt: 1 }}>
                    ✓ Coupon applied! 10% discount added.
                  </Typography>
                )}
                {couponError && (
                  <Typography sx={{ fontSize: "12px", color: "#e74c3c", fontFamily: "'Montserrat', sans-serif", mt: 1 }}>
                    {couponError}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* ── RIGHT: Order Summary ── */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ background: "#fff", border: "1px solid #ede8e0", p: 3 }}>
                <Typography
                  sx={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    mb: 3,
                    pb: 2,
                    borderBottom: "1px solid #ede8e0"
                  }}
                >
                  ORDER SUMMARY
                </Typography>

                {/* Summary rows */}
                {[
                  { label: "Subtotal", value: `₹${subtotal.toLocaleString()}` },
                  ...(couponApplied ? [{ label: "Discount (10%)", value: `-₹${discount.toLocaleString()}`, gold: true }] : []),
                  { label: "Shipping", value: shipping === 0 ? "FREE" : `₹${shipping}`, green: shipping === 0 }
                ].map((row) => (
                  <Box
                    key={row.label}
                    sx={{ display: "flex", justifyContent: "space-between", mb: 1.8 }}
                  >
                    <Typography sx={{ fontSize: "13px", fontFamily: "'Montserrat', sans-serif", color: "#777" }}>
                      {row.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        color: row.gold ? GOLD : row.green ? "#27ae60" : "#1a1a1a"
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ borderColor: "#ede8e0", my: 2 }} />

                {/* Total */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1a1a1a"
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: GOLD
                    }}
                  >
                    ₹{total.toLocaleString()}
                  </Typography>
                </Box>

                {/* Checkout button */}
                <Button
                  fullWidth
                  component={Link}
                  to="/checkout"
                  sx={{
                    background: GOLD,
                    color: "#fff",
                    py: 1.6,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    borderRadius: 0,
                    mb: 1.5,
                    "&:hover": { background: "#b8963e" }
                  }}
                >
                  PROCEED TO CHECKOUT →
                </Button>

                {/* Secure badge */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 1 }}>
                  <LockOutlinedIcon sx={{ fontSize: 14, color: "#bbb" }} />
                  <Typography sx={{ fontSize: "11px", color: "#bbb", fontFamily: "'Montserrat', sans-serif" }}>
                    Secure & Encrypted Checkout
                  </Typography>
                </Box>

                {/* Free shipping notice */}
                {subtotal < 999 && (
                  <Box
                    sx={{
                      mt: 2.5,
                      p: 1.5,
                      background: "#faf8f5",
                      border: "1px solid #ede8e0",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5
                    }}
                  >
                    <LocalShippingOutlinedIcon sx={{ fontSize: 18, color: GOLD }} />
                    <Typography sx={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", color: "#777", lineHeight: 1.5 }}>
                      Add <strong style={{ color: GOLD }}>₹{(999 - subtotal).toLocaleString()}</strong> more for free shipping!
                    </Typography>
                  </Box>
                )}

                {/* Payment icons */}
                <Box sx={{ mt: 3, pt: 2.5, borderTop: "1px solid #ede8e0" }}>
                  <Typography sx={{ fontSize: "10px", letterSpacing: "0.15em", color: "#bbb", fontFamily: "'Montserrat', sans-serif", mb: 1.5, textAlign: "center" }}>
                    WE ACCEPT
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
                    {["VISA", "MC", "UPI", "GPay", "PayTM"].map((pay) => (
                      <Box
                        key={pay}
                        sx={{
                          border: "1px solid #ede8e0",
                          px: 1.5,
                          py: 0.5,
                          fontSize: "9px",
                          color: "#999",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          letterSpacing: "0.05em"
                        }}
                      >
                        {pay}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Cart;
