import { useContext, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Rating,
  Chip
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const GOLD = "#C9A84C";
const COLS = 4;   // visible columns
const ROWS = 2;   // rows per page
const PER_PAGE = COLS * ROWS; // 8 per page

function TrendingSection() {
  const { addToCart } = useContext(CartContext);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / PER_PAGE);
  const visible = products.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <Box sx={{ py: 8, background: "#faf8f5" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "22px", md: "26px" },
              fontWeight: 400,
              letterSpacing: "0.25em",
              color: "#1a1a1a",
              textTransform: "uppercase"
            }}
          >
            Trending Products
          </Typography>
          <Box sx={{ width: 40, height: 2, background: GOLD, mx: "auto", mt: 1.5 }} />
        </Box>

        {/* Grid with arrows */}
        <Box sx={{ position: "relative" }}>
          {/* Left arrow */}
          <IconButton
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            sx={{
              position: "absolute",
              left: -22,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "1px solid #ddd",
              borderRadius: 0,
              width: 34,
              height: 34,
              background: "#fff",
              "&:hover": { borderColor: GOLD, color: GOLD },
              "&.Mui-disabled": { opacity: 0.25 }
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
          </IconButton>

          {/* 2-row grid */}
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: `repeat(${COLS}, 1fr)` },
                gap: 1.5
              }}
            >
              {visible.map((product, i) => {
                const badge =
                  product.rating >= 4.9 ? "Popular" :
                  product.rating >= 4.8 ? "New" :
                  i % 7 === 0 ? "Sale" : null;
                const badgeColor =
                  badge === "Sale" ? "#e74c3c" :
                  badge === "Popular" ? "#f39c12" : "#27ae60";

                return (
                  <Box
                    key={product.id}
                    sx={{
                      background: "#fff",
                      border: "1px solid #ede8e0",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      overflow: "hidden",
                      position: "relative",
                      transition: "border-color 0.25s",
                      "&:hover": { borderColor: GOLD },
                      "&:hover .t-img": { transform: "scale(1.04)" }
                    }}
                  >
                    {/* Badge */}
                    {badge && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 6,
                          left: 6,
                          zIndex: 2,
                          background: badgeColor,
                          color: "#fff",
                          fontSize: "9px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          px: 1,
                          py: 0.2,
                          letterSpacing: "0.05em"
                        }}
                      >
                        {badge}
                      </Box>
                    )}

                    {/* Image */}
                    <Box
                      component={Link}
                      to={`/product/${product.id}`}
                      sx={{
                        display: "block",
                        width: { xs: "100%", sm: 90 },
                        height: { xs: 140, sm: 90 },
                        flexShrink: 0,
                        overflow: "hidden",
                        background: "#f9f6f2",
                        textDecoration: "none"
                      }}
                    >
                      <Box
                        className="t-img"
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s ease"
                        }}
                      />
                    </Box>

                    {/* Info */}
                    <Box sx={{ p: 1.5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <Typography
                        component={Link}
                        to={`/product/${product.id}`}
                        sx={{
                          display: "block",
                          fontSize: "10px",
                          letterSpacing: "0.08em",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          mb: 0.4,
                          lineHeight: 1.4,
                          "&:hover": { color: GOLD }
                        }}
                      >
                        {product.name.length > 20 ? product.name.slice(0, 20) + "…" : product.name}
                      </Typography>

                      <Rating
                        value={Number(product.rating)}
                        precision={0.1}
                        readOnly
                        size="small"
                        sx={{
                          "& .MuiRating-iconFilled": { color: GOLD },
                          "& .MuiRating-iconEmpty": { color: "#ddd" },
                          fontSize: "11px",
                          mb: 0.4
                        }}
                      />

                      <Typography
                        sx={{
                          color: GOLD,
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "13px",
                          fontWeight: 700,
                          mb: 0.5
                        }}
                      >
                        ₹{product.price.toLocaleString()}
                      </Typography>

                      <Button
                        onClick={() => addToCart(product)}
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 11 }} />}
                        sx={{
                          color: "#888",
                          fontSize: "9px",
                          letterSpacing: "0.06em",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                          p: 0,
                          minWidth: "auto",
                          justifyContent: "flex-start",
                          "&:hover": { color: GOLD, background: "transparent" }
                        }}
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </motion.div>

          {/* Right arrow */}
          <IconButton
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            sx={{
              position: "absolute",
              right: -22,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "1px solid #ddd",
              borderRadius: 0,
              width: 34,
              height: 34,
              background: "#fff",
              "&:hover": { borderColor: GOLD, color: GOLD },
              "&.Mui-disabled": { opacity: 0.25 }
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
          </IconButton>
        </Box>

        {/* Page dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i)}
              sx={{
                width: i === page ? 20 : 7,
                height: 7,
                borderRadius: "4px",
                background: i === page ? GOLD : "#ddd",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default TrendingSection;
