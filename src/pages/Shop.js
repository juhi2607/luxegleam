import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Slider,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Rating,
  Chip,
  Breadcrumbs,
  Tooltip
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";

// Local asset imports for category slider
import goldPlatedRingImg  from "../assets/Gold Plated Ring.jpg";
import goldHoopImg        from "../assets/Gold Hoop Earrings.jpg";
import crystalTennisImg   from "../assets/Crystal Tennis Bracelet.jpg";
import elegantPearlImg    from "../assets/Elegant Pearl Necklace.jpg";
import watchRoseGoldImg   from "../assets/Automatic watch – rose gold ip.webp";
import hotDiamondsImg     from "../assets/Hot diamonds 3 piece gift set .webp";
import gemstoneImg        from "../assets/gemstone.webp";
import sterlingCurbImg    from "../assets/Sterling silver 16 inch dainty curb chain.webp";

// Category images for the top slider — only categories we actually have
const categorySlides = [
  { label: "Rings",         image: goldPlatedRingImg },
  { label: "Earrings",      image: goldHoopImg },
  { label: "Bracelets",     image: crystalTennisImg },
  { label: "Necklaces",     image: elegantPearlImg },
  { label: "Watches",       image: watchRoseGoldImg },
  { label: "Gift Set",      image: hotDiamondsImg },
  { label: "Gemstone",      image: gemstoneImg },
  { label: "Sterling",      image: sterlingCurbImg },
];

// Sidebar categories — all categories present in products
const sidebarCategories = [
  "Earrings",
  "Rings",
  "Bracelets",
  "Necklaces",
  "Watches",
  "Pins",
  "Pens",
  "Gemstone",
  "Gift Set",
  "Sterling",
  "Starfish",
  "Chocker",
  "Cufflinks",
  "Button",
  "Pocket Square",
];

const brandNames = [
  { name: "Celestial", style: { fontFamily: "cursive", fontSize: "18px" } },
  { name: "Charm", style: { fontFamily: "cursive", fontSize: "20px", fontWeight: 700 } },
  { name: "Eastern", style: { fontFamily: "cursive", fontSize: "18px" } },
  { name: "Forest", style: { fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" } },
  { name: "Goddess", style: { fontFamily: "cursive", fontSize: "18px" } },
  { name: "Luxer", style: { fontFamily: "cursive", fontSize: "18px" } }
];

const caratOptions = ["0.1", "0.12", "0.33", "14", "9"];
const materialOptions = ["Bones", "Cotton", "Gold", "Rose gold", "Silver", "Sterling silver"];

const sortOptions = [
  { value: "default", label: "Default sorting" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
  { value: "rating", label: "By Rating" },
  { value: "name", label: "By Name" }
];

function Shop() {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Read category from URL ?category=Earrings
  const urlCategory = searchParams.get("category") || "";

  const [activeCategory, setActiveCategory] = useState(urlCategory);
  const [sort, setSort] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 35000]);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCarat, setSelectedCarat] = useState("");
  const [viewMode, setViewMode] = useState("grid4");
  const [catSlideIndex, setCatSlideIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Sync when URL changes
  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const visibleCats = 8;

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const handleCategoryClick = (cat) => {
    const next = activeCategory === cat ? "" : cat;
    setActiveCategory(next);
    if (next) navigate(`/shop?category=${encodeURIComponent(next)}`);
    else navigate("/shop");
  };

  const filteredProducts = products
    .filter((p) => (activeCategory ? p.category === activeCategory : true))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const gridCols = viewMode === "grid4" ? 3 : viewMode === "grid3" ? 4 : 12;

  return (
    <Box sx={{ background: "#faf8f5", minHeight: "100vh", pt: "98px" }}>

      {/* Breadcrumb */}
      <Box sx={{ background: "#fff", borderBottom: "1px solid #ede8e0", py: 1.5, px: { xs: 2, md: 5 } }}>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 14, color: "#999" }} />}>
          <Typography
            component={Link}
            to="/"
            sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: "#C9A84C" } }}
          >
            Home
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Shop
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>

        {/* Page Title */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#C9A84C", opacity: 0.5 }} />
          </Box>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 400, color: "#1a1a1a", letterSpacing: "0.1em" }}>
            SHOP
          </Typography>
        </Box>

        {/* Category Image Slider */}
        <Box sx={{ position: "relative", mb: 4 }}>
          <IconButton
            onClick={() => setCatSlideIndex((p) => Math.max(0, p - 1))}
            sx={{ position: "absolute", left: -16, top: "50%", transform: "translateY(-50%)", zIndex: 2, color: "#999", "&:hover": { color: "#C9A84C" } }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
          </IconButton>

          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                transition: "transform 0.4s ease",
                transform: `translateX(-${catSlideIndex * (100 / visibleCats)}%)`
              }}
            >
              {categorySlides.map((cat) => (
                <Box
                  key={cat.label}
                  onClick={() => handleCategoryClick(cat.label)}
                  sx={{
                    flex: `0 0 calc(${100 / visibleCats}% - 10px)`,
                    cursor: "pointer",
                    border: activeCategory === cat.label ? "2px solid #C9A84C" : "2px solid #ede8e0",
                    background: "#fff",
                    transition: "border-color 0.2s",
                    "&:hover": { borderColor: "#C9A84C" }
                  }}
                >
                  <Box
                    component="img"
                    src={cat.image}
                    alt={cat.label}
                    sx={{ width: "100%", height: 130, objectFit: "cover", display: "block" }}
                  />
                  <Typography
                    sx={{
                      textAlign: "center",
                      py: 1.5,
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      color: activeCategory === cat.label ? "#C9A84C" : "#1a1a1a",
                      borderTop: "1px solid #ede8e0",
                      textDecoration: activeCategory === cat.label ? "underline" : "none"
                    }}
                  >
                    {cat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <IconButton
            onClick={() => setCatSlideIndex((p) => p + 1)}
            sx={{ position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)", zIndex: 2, color: "#999", "&:hover": { color: "#C9A84C" } }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>

        {/* Main layout: sidebar + products */}
        <Grid container spacing={3}>

          {/* ===== SIDEBAR ===== */}
          <Grid item xs={12} md={3} lg={2.5}>
            <Box sx={{ background: "#fff", border: "1px solid #ede8e0", p: 0 }}>

              {/* Shop by Categories */}
              <Box sx={{ p: 2.5, borderBottom: "1px solid #ede8e0" }}>
                <Typography sx={{ fontSize: "11px", letterSpacing: "0.18em", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                  SHOP BY CATEGORIES
                </Typography>
                {sidebarCategories.map((cat) => (
                  <Typography
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    sx={{
                      fontSize: "13px",
                      fontFamily: "'Montserrat', sans-serif",
                      color: activeCategory === cat ? "#C9A84C" : "#555",
                      cursor: "pointer",
                      py: 0.5,
                      fontWeight: activeCategory === cat ? 600 : 400,
                      "&:hover": { color: "#C9A84C" },
                      transition: "color 0.2s"
                    }}
                  >
                    {cat}
                  </Typography>
                ))}
              </Box>

              {/* Brands */}
              <Box sx={{ p: 2.5, borderBottom: "1px solid #ede8e0" }}>
                <Grid container spacing={1}>
                  {brandNames.map((brand) => (
                    <Grid item xs={6} key={brand.name}>
                      <Box
                        sx={{
                          border: "1px solid #ede8e0",
                          p: 1,
                          textAlign: "center",
                          cursor: "pointer",
                          "&:hover": { borderColor: "#C9A84C" },
                          transition: "border-color 0.2s"
                        }}
                      >
                        <Typography sx={{ ...brand.style, color: "#1a1a1a" }}>
                          {brand.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Carat */}
              <Box sx={{ p: 2.5, borderBottom: "1px solid #ede8e0" }}>
                <Typography sx={{ fontSize: "11px", letterSpacing: "0.18em", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                  CARAT
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {caratOptions.map((c) => (
                    <Box
                      key={c}
                      onClick={() => setSelectedCarat(selectedCarat === c ? "" : c)}
                      sx={{
                        border: selectedCarat === c ? "1px solid #C9A84C" : "1px solid #ddd",
                        px: 1.5,
                        py: 0.5,
                        fontSize: "11px",
                        fontFamily: "'Montserrat', sans-serif",
                        cursor: "pointer",
                        color: selectedCarat === c ? "#C9A84C" : "#555",
                        background: selectedCarat === c ? "rgba(201,168,76,0.08)" : "#fff",
                        transition: "all 0.2s",
                        "&:hover": { borderColor: "#C9A84C", color: "#C9A84C" }
                      }}
                    >
                      {c}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Material */}
              <Box sx={{ p: 2.5, borderBottom: "1px solid #ede8e0" }}>
                <Typography sx={{ fontSize: "11px", letterSpacing: "0.18em", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#1a1a1a", mb: 1.5 }}>
                  MATERIAL
                </Typography>
                {materialOptions.map((m) => (
                  <FormControlLabel
                    key={m}
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedMaterials.includes(m)}
                        onChange={() => toggleMaterial(m)}
                        sx={{ color: "#ddd", "&.Mui-checked": { color: "#C9A84C" }, p: 0.5 }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555" }}>
                        {m}
                      </Typography>
                    }
                    sx={{ display: "flex", ml: 0, mb: 0.3 }}
                  />
                ))}
              </Box>

              {/* Price */}
              <Box sx={{ p: 2.5 }}>
                <Typography sx={{ fontSize: "11px", letterSpacing: "0.18em", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                  PRICE
                </Typography>
                <Slider
                  value={priceRange}
                  onChange={(e, v) => setPriceRange(v)}
                  min={0}
                  max={35000}
                  sx={{
                    color: "#C9A84C",
                    "& .MuiSlider-thumb": { width: 14, height: 14, background: "#1a1a1a" },
                    "& .MuiSlider-rail": { background: "#ddd" }
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  <Box sx={{ background: "#1a1a1a", color: "#fff", px: 1.5, py: 0.4, fontSize: "11px", fontFamily: "'Montserrat', sans-serif" }}>
                    ₹{priceRange[0]}
                  </Box>
                  <Box sx={{ background: "#1a1a1a", color: "#fff", px: 1.5, py: 0.4, fontSize: "11px", fontFamily: "'Montserrat', sans-serif" }}>
                    ₹{priceRange[1]}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* ===== PRODUCTS AREA ===== */}
          <Grid item xs={12} md={9} lg={9.5}>

            {/* Toolbar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                border: "1px solid #ede8e0",
                px: 2,
                py: 1.2,
                mb: 2,
                flexWrap: "wrap",
                gap: 1
              }}
            >
              {/* View mode icons */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <IconButton
                  onClick={() => setViewMode("grid4")}
                  sx={{ color: viewMode === "grid4" ? "#C9A84C" : "#bbb", p: 0.8 }}
                >
                  <GridViewIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  onClick={() => setViewMode("grid3")}
                  sx={{ color: viewMode === "grid3" ? "#C9A84C" : "#bbb", p: 0.8 }}
                >
                  <ViewModuleIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  onClick={() => setViewMode("list")}
                  sx={{ color: viewMode === "list" ? "#C9A84C" : "#bbb", p: 0.8 }}
                >
                  <ViewListIcon sx={{ fontSize: 18 }} />
                </IconButton>

                {/* Sort */}
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  size="small"
                  sx={{
                    ml: 1,
                    fontSize: "12px",
                    fontFamily: "'Montserrat', sans-serif",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ede8e0" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#C9A84C" },
                    minWidth: 160
                  }}
                >
                  {sortOptions.map((o) => (
                    <MenuItem key={o.value} value={o.value} sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                      {o.label}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              {/* On sale + count */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={onSaleOnly}
                      onChange={(e) => setOnSaleOnly(e.target.checked)}
                      sx={{ color: "#ddd", "&.Mui-checked": { color: "#C9A84C" }, p: 0.5 }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555" }}>
                      Only products on sale
                    </Typography>
                  }
                  sx={{ ml: 0 }}
                />
                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#999", whiteSpace: "nowrap" }}>
                  Showing 1–{Math.min(filteredProducts.length, 24)} of {filteredProducts.length} results
                </Typography>
              </Box>
            </Box>

            {/* Product Grid */}
            <Grid container spacing={1.5}>
              {filteredProducts.map((product, i) => {
                const isWishlisted = wishlist?.find((item) => item.id === product.id);
                const isHovered = hoveredProduct === product.id;
                const badge = i % 7 === 0 ? "Popular" : i % 5 === 0 ? "Sale" : i % 3 === 0 ? "New" : null;
                const badgeColor = badge === "Sale" ? "#e74c3c" : badge === "Popular" ? "#f39c12" : "#2ecc71";

                return (
                  <Grid item xs={6} sm={viewMode === "list" ? 12 : 4} md={viewMode === "list" ? 12 : gridCols} key={product.id}>
                    <Box
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      sx={{
                        background: "#fff",
                        border: isHovered ? "1px solid #C9A84C" : "1px solid #ede8e0",
                        transition: "border-color 0.25s",
                        position: "relative",
                        display: viewMode === "list" ? "flex" : "block",
                        gap: viewMode === "list" ? 3 : 0
                      }}
                    >
                      {/* Badge */}
                      {badge && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            background: badgeColor,
                            color: "#fff",
                            fontSize: "10px",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            px: 1.2,
                            py: 0.3,
                            zIndex: 2,
                            letterSpacing: "0.05em"
                          }}
                        >
                          {badge}
                        </Box>
                      )}

                      {/* Action icons on hover */}
                      {isHovered && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.5,
                            zIndex: 2
                          }}
                        >
                          <IconButton
                            onClick={() => toggleWishlist(product)}
                            sx={{ background: "#fff", width: 30, height: 30, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", "&:hover": { background: "#C9A84C", color: "#fff" } }}
                          >
                            {isWishlisted
                              ? <FavoriteIcon sx={{ fontSize: 14, color: "#e74c3c" }} />
                              : <FavoriteBorderIcon sx={{ fontSize: 14, color: "#555" }} />
                            }
                          </IconButton>
                          <IconButton
                            onClick={() => navigate(`/product/${product.id}`)}
                            sx={{ background: "#fff", width: 30, height: 30, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", "&:hover": { background: "#C9A84C", color: "#fff" } }}
                          >
                            <VisibilityOutlinedIcon sx={{ fontSize: 14, color: "#555" }} />
                          </IconButton>
                          <IconButton
                            sx={{ background: "#fff", width: 30, height: 30, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", "&:hover": { background: "#C9A84C", color: "#fff" } }}
                          >
                            <TuneIcon sx={{ fontSize: 14, color: "#555" }} />
                          </IconButton>
                        </Box>
                      )}

                      {/* Image */}
                      <Box
                        component={Link}
                        to={`/product/${product.id}`}
                        sx={{
                          display: "block",
                          overflow: "hidden",
                          background: "#f9f6f2",
                          flexShrink: 0,
                          width: viewMode === "list" ? 200 : "100%"
                        }}
                      >
                        <Box
                          component="img"
                          src={product.image}
                          alt={product.name}
                          sx={{
                            width: "100%",
                            height: viewMode === "list" ? 200 : 220,
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.4s ease",
                            transform: isHovered ? "scale(1.04)" : "scale(1)"
                          }}
                        />
                      </Box>

                      {/* Info */}
                      <Box sx={{ p: 2, flex: 1 }}>
                        <Typography
                          component={Link}
                          to={`/product/${product.id}`}
                          sx={{
                            display: "block",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            color: "#1a1a1a",
                            textDecoration: "none",
                            mb: 1,
                            textTransform: "uppercase",
                            "&:hover": { color: "#C9A84C" },
                            transition: "color 0.2s"
                          }}
                        >
                          {product.name}
                        </Typography>

                        {/* Stars */}
                        <Rating
                          value={Number(product.rating)}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{ "& .MuiRating-iconFilled": { color: "#C9A84C" }, "& .MuiRating-iconEmpty": { color: "#ddd" }, fontSize: "14px" }}
                        />

                        {/* Price */}
                        <Typography
                          sx={{
                            color: "#C9A84C",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "15px",
                            fontWeight: 700,
                            mt: 0.8,
                            mb: 1.5
                          }}
                        >
                          ₹{product.price.toLocaleString()}
                        </Typography>

                        {/* Add to cart */}
                        <Button
                          onClick={() => addToCart(product)}
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            p: 0,
                            minWidth: "auto",
                            "&:hover": { color: "#C9A84C", background: "transparent" },
                            transition: "color 0.2s"
                          }}
                        >
                          Add to cart
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {/* No results */}
            {filteredProducts.length === 0 && (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#999" }}>
                  No products found
                </Typography>
                <Button
                  onClick={() => { setActiveCategory(""); setPriceRange([0, 35000]); navigate("/shop"); }}
                  sx={{ mt: 2, color: "#C9A84C", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  Clear Filters
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Shop;
