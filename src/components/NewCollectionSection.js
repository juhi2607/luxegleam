import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";

function NewCollectionSection() {
  const p = products;

  return (
    <Box id="collections" sx={{ py: 8, background: "#fff" }}>

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
          New Collection
        </Typography>
        <Box sx={{ width: 40, height: 2, background: "#C9A84C", mx: "auto", mt: 1.5 }} />
      </Box>

      {/* Mosaic — 4 images only, centered, no overlay boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1.4fr 1fr 1fr" },
          gridTemplateRows: { xs: "auto", md: "260px 260px" },
          gap: "2px",
          maxWidth: "1000px",
          mx: "auto",
          px: { xs: 2, md: 4 }
        }}
      >
        {/* Col 1 — tall, spans 2 rows */}
        <Box
          sx={{
            gridColumn: { md: "1 / 2" },
            gridRow: { md: "1 / 3" },
            overflow: "hidden",
            "&:hover img": { transform: "scale(1.05)" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ height: "100%" }}
          >
            <Box
              component={Link}
              to={`/product/${p[0]?.id}`}
              sx={{ display: "block", height: { xs: 260, md: "100%" }, textDecoration: "none" }}
            >
              <Box
                component="img"
                src={p[0]?.image}
                alt={p[0]?.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Col 2 — tall center, spans 2 rows */}
        <Box
          sx={{
            gridColumn: { md: "2 / 3" },
            gridRow: { md: "1 / 3" },
            overflow: "hidden",
            "&:hover img": { transform: "scale(1.05)" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ height: "100%" }}
          >
            <Box
              component={Link}
              to={`/product/${p[1]?.id}`}
              sx={{ display: "block", height: { xs: 260, md: "100%" }, textDecoration: "none" }}
            >
              <Box
                component="img"
                src={p[1]?.image}
                alt={p[1]?.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Col 3 top */}
        <Box
          sx={{
            gridColumn: { md: "3 / 4" },
            gridRow: { md: "1 / 2" },
            overflow: "hidden",
            "&:hover img": { transform: "scale(1.05)" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ height: "100%" }}
          >
            <Box
              component={Link}
              to={`/product/${p[2]?.id}`}
              sx={{ display: "block", height: { xs: 200, md: "100%" }, textDecoration: "none" }}
            >
              <Box
                component="img"
                src={p[2]?.image}
                alt={p[2]?.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Col 3 bottom — "JEWELRY TELLS" text block */}
        <Box
          sx={{
            gridColumn: { md: "3 / 4" },
            gridRow: { md: "2 / 3" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#faf8f5",
            p: 3
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: { xs: "18px", md: "20px" }, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, mb: 0.5 }}>
              JEWELRY TELLS
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: { xs: "18px", md: "20px" }, fontWeight: 700, color: "#C9A84C", lineHeight: 1.2, mb: 2 }}>
              A GREAT STORY
            </Typography>
            <Button
              component={Link}
              to="/shop"
              sx={{
                border: "1px solid #1a1a1a",
                color: "#1a1a1a",
                fontSize: "10px",
                letterSpacing: "0.12em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                borderRadius: 0,
                px: 2.5,
                py: 0.8,
                "&:hover": { background: "#1a1a1a", color: "#fff" }
              }}
            >
              Discover more
            </Button>
          </motion.div>
        </Box>

        {/* Col 4 — tall, spans 2 rows */}
        <Box
          sx={{
            gridColumn: { md: "4 / 5" },
            gridRow: { md: "1 / 3" },
            overflow: "hidden",
            "&:hover img": { transform: "scale(1.05)" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ height: "100%" }}
          >
            <Box
              component={Link}
              to={`/product/${p[3]?.id}`}
              sx={{ display: "block", height: { xs: 260, md: "100%" }, textDecoration: "none" }}
            >
              <Box
                component="img"
                src={p[3]?.image}
                alt={p[3]?.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default NewCollectionSection;
