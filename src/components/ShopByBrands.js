import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const brands = [
  { name: "Celestial",    style: { fontFamily: "Georgia, serif",          fontSize: "28px", fontStyle: "italic",  fontWeight: 400 } },
  { name: "Eastern",      style: { fontFamily: "Georgia, serif",          fontSize: "26px", fontStyle: "italic",  fontWeight: 400 } },
  { name: "Goddess",      style: { fontFamily: "Georgia, serif",          fontSize: "26px", fontStyle: "italic",  fontWeight: 300 } },
  { name: "Opulence",     style: { fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0.05em" } },
  { name: "Romance",      style: { fontFamily: "Georgia, serif",          fontSize: "26px", fontStyle: "italic",  fontWeight: 400 } },
  { name: "Charm",        style: { fontFamily: "Georgia, serif",          fontSize: "30px", fontStyle: "italic",  fontWeight: 700 } },
  { name: "FOREST",       style: { fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontStyle: "normal", fontWeight: 800, letterSpacing: "0.12em" } },
  { name: "Luxer",        style: { fontFamily: "Georgia, serif",          fontSize: "26px", fontStyle: "italic",  fontWeight: 300 } },
  { name: "Retro Revival",style: { fontFamily: "Georgia, serif",          fontSize: "20px", fontStyle: "italic",  fontWeight: 400 } },
  { name: "Vintage",      style: { fontFamily: "Georgia, serif",          fontSize: "28px", fontStyle: "italic",  fontWeight: 400 } },
];

export default function ShopByBrands() {
  return (
    <Box sx={{ py: 8, background: "#fff" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#1a1a1a",
              textTransform: "uppercase"
            }}
          >
            SHOP BY BRANDS
          </Typography>
          <Box sx={{ width: 40, height: 2, background: "#C9A84C", mx: "auto", mt: 1.5 }} />
        </Box>

        {/* Brand grid — 5 per row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            rowGap: 3,
            columnGap: 2
          }}
        >
          {brands.map((brand) => (
            <Box
              key={brand.name}
              component={Link}
              to="/shop"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                py: 1,
                transition: "opacity 0.25s",
                "&:hover": { opacity: 0.6 }
              }}
            >
              <Typography sx={{ ...brand.style, color: "#1a1a1a", textAlign: "center" }}>
                {brand.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
