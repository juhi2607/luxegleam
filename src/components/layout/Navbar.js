import React, { useContext, useState, useEffect, useRef } from "react";
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
  ListItemText,
  Divider,
  InputBase,
  TextField,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import products from "../../data/products";

const categoryMegaMenu = {
  left: [
    { label: "Earrings" },
    { label: "Rings" },
    { label: "Bracelets" },
    { label: "Necklaces" },
    { label: "Watches" },
    { label: "Chocker" },
    { label: "Cufflinks" },
    { label: "Gemstone" },
    { label: "Gift Set" },
    { label: "Sterling" },
    { label: "Starfish" },
    { label: "Pins" },
    { label: "Pens" }
  ],
  columns: [
    {
      title: "EARRINGS",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=120&q=80",
      items: ["Studs", "Hoops", "Chandelier", "Dangles", "Ear cuffs", "Huggies", "Threader", "Jackets", "Crawlers"]
    },
    {
      title: "NECKLACES",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=120&q=80",
      items: ["Chains", "Pendants", "Chokers", "Lariats", "Necklaces", "Collar", "Rope", "Y-Necklaces", "Bib"]
    },
    {
      title: "BRACELETS",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=120&q=80",
      items: ["Bangles", "Cuffs", "Charm bracelets", "Tennis bracelets", "Beaded bracelets", "Chain bracelets", "Wrap bracelets", "Stretch bracelets", "Ankle bracelets"]
    },
    {
      title: "RINGS",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=120&q=80",
      items: ["Engagement rings", "Wedding bands", "Stackable rings", "Signet rings", "Solitaire", "Halo rings", "Cluster rings", "Cocktail rings"]
    },
    {
      title: "BROOCHES",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=120&q=80",
      items: ["Vintage brooches", "Floral brooches", "Animal brooches", "Cameo brooches", "Rhinestone brooches", "Enamel brooches", "Pearl brooches", "Art deco brooches"]
    }
  ]
};

function Navbar() {
  const { cart = [] } = useContext(CartContext);
  const { wishlist = [] } = useContext(WishlistContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeLeft, setActiveLeft] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const closeTimer = useRef(null);
  const searchRef = useRef(null);
  const loginRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q.trim().length < 2) { setSearchResults([]); return; }
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.category.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 6);
    setSearchResults(results);
  };

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
      setActiveLeft(null);
    }, 120);
  };

  const handleNavScroll = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarHeight = scrolled ? 68 : 98;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: "#ffffff",
          borderBottom: "1px solid #e8e0d5",
          transition: "box-shadow 0.3s ease",
          zIndex: 1200
        }}
      >
        {/* Announcement bar */}
        <Box sx={{ background: "#1a1a1a", py: 0.7, textAlign: "center", display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontSize: "11px", letterSpacing: "0.2em", color: "#fff", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            FREE SHIPPING ON ORDERS ABOVE ₹999 &nbsp;|&nbsp; USE CODE:{" "}
            <span style={{ color: "#C9A84C" }}>LUXE10</span> FOR 10% OFF
          </Typography>
        </Box>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: { xs: 2, md: 5 }, minHeight: "68px !important", gap: 2 }}>

          {/* Logo */}
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
            <Box component="svg" viewBox="0 0 40 36" sx={{ width: 38, height: 34 }}>
              <polygon points="20,2 38,14 20,34 2,14" fill="none" stroke="#C9A84C" strokeWidth="2" />
              <polygon points="20,2 30,14 20,26 10,14" fill="#C9A84C" opacity="0.3" />
              <line x1="2" y1="14" x2="38" y2="14" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="20" y1="2" x2="10" y2="14" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="20" y1="2" x2="30" y2="14" stroke="#C9A84C" strokeWidth="1.5" />
            </Box>
            <Box>
              <Typography sx={{ color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "0.15em", lineHeight: 1 }}>LUXEGLEAM</Typography>
              <Typography sx={{ color: "#999", fontSize: "8px", letterSpacing: "0.3em", fontFamily: "'Montserrat', sans-serif" }}>JEWELLERY</Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "stretch", flex: 1, justifyContent: "center" }}>

            {/* SHOP BY CATEGORIES */}
            <Box onMouseEnter={openMega} onMouseLeave={closeMega} sx={{ position: "static" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.4, px: 2, py: 2.5, cursor: "pointer", color: megaOpen ? "#C9A84C" : "#1a1a1a", borderBottom: megaOpen ? "2px solid #C9A84C" : "2px solid transparent", transition: "all 0.2s", "&:hover": { color: "#C9A84C" } }}>
                <MenuIcon sx={{ fontSize: 13, mr: 0.3 }} />
                <Typography sx={{ fontSize: "11px", letterSpacing: "0.12em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>SHOP BY CATEGORIES</Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 15, transition: "transform 0.3s", transform: megaOpen ? "rotate(180deg)" : "rotate(0)" }} />
              </Box>
            </Box>

            {/* SHOP */}
            <Box onClick={() => navigate("/shop")} sx={{ display: "flex", alignItems: "center", gap: 0.3, px: 2, py: 2.5, cursor: "pointer", color: "#1a1a1a", borderBottom: "2px solid transparent", transition: "all 0.2s", "&:hover": { color: "#C9A84C", borderBottomColor: "#C9A84C" } }}>
              <Typography sx={{ fontSize: "11px", letterSpacing: "0.12em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>SHOP</Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
            </Box>

            {/* ELEMENTS */}
            <Box onClick={() => navigate("/elements")} sx={{ px: 2, py: 2.5, cursor: "pointer", color: "#1a1a1a", borderBottom: "2px solid transparent", transition: "all 0.2s", "&:hover": { color: "#C9A84C", borderBottomColor: "#C9A84C" } }}>
              <Typography sx={{ fontSize: "11px", letterSpacing: "0.12em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>ELEMENTS</Typography>
            </Box>

            {/* ABOUT US */}
            <Box onClick={() => handleNavScroll("about")} sx={{ px: 2, py: 2.5, cursor: "pointer", color: "#1a1a1a", borderBottom: "2px solid transparent", transition: "all 0.2s", "&:hover": { color: "#C9A84C", borderBottomColor: "#C9A84C" } }}>
              <Typography sx={{ fontSize: "11px", letterSpacing: "0.12em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>ABOUT US</Typography>
            </Box>
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5, flexShrink: 0, position: "relative" }} ref={searchRef}>

            {/* Search icon + expandable input */}
            <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
              <IconButton
                onClick={() => { setSearchOpen((v) => !v); setTimeout(() => document.getElementById("navbar-search")?.focus(), 100); }}
                sx={{ color: "#1a1a1a", "&:hover": { color: "#C9A84C" } }}
              >
                <SearchIcon sx={{ fontSize: 20 }} />
              </IconButton>

              {/* Expandable search box */}
              {searchOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "110%",
                    width: 320,
                    background: "#fff",
                    border: "1px solid #ede8e0",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                    zIndex: 1400
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1, borderBottom: "1px solid #ede8e0" }}>
                    <SearchIcon sx={{ fontSize: 16, color: "#bbb", mr: 1 }} />
                    <InputBase
                      id="navbar-search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && searchQuery.trim()) {
                          navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                          setSearchOpen(false);
                          setSearchQuery("");
                          setSearchResults([]);
                        }
                      }}
                      sx={{ flex: 1, fontSize: "13px", fontFamily: "'Montserrat', sans-serif" }}
                    />
                    <IconButton size="small" onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}>
                      <CloseIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Box>

                  {/* Results */}
                  {searchResults.length > 0 && (
                    <Box>
                      {searchResults.map((p) => (
                        <Box
                          key={p.id}
                          component={Link}
                          to={`/product/${p.id}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            px: 2,
                            py: 1.2,
                            textDecoration: "none",
                            borderBottom: "1px solid #f5f0eb",
                            "&:hover": { background: "#faf8f5" }
                          }}
                        >
                          <Box component="img" src={p.image} alt={p.name} sx={{ width: 36, height: 36, objectFit: "cover", flexShrink: 0 }} />
                          <Box>
                            <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#1a1a1a" }}>{p.name}</Typography>
                            <Typography sx={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", color: "#C9A84C", fontWeight: 600 }}>₹{p.price.toLocaleString()}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {searchQuery.length >= 2 && searchResults.length === 0 && (
                    <Box sx={{ px: 2, py: 2 }}>
                      <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>No products found for "{searchQuery}"</Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Box>

            {/* Wishlist with badge */}
            <IconButton
              onClick={() => navigate("/shop")}
              sx={{ color: "#1a1a1a", "&:hover": { color: "#C9A84C" } }}
            >
              <Badge
                badgeContent={wishlistCount}
                sx={{ "& .MuiBadge-badge": { background: "#C9A84C", color: "#fff", fontSize: "10px", minWidth: "17px", height: "17px" } }}
              >
                {wishlistCount > 0
                  ? <FavoriteIcon sx={{ fontSize: 20, color: "#e74c3c" }} />
                  : <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                }
              </Badge>
            </IconButton>

            {/* Cart */}
            <IconButton onClick={() => navigate("/cart")} sx={{ color: "#1a1a1a", "&:hover": { color: "#C9A84C" } }}>
              <Badge badgeContent={totalItems} sx={{ "& .MuiBadge-badge": { background: "#C9A84C", color: "#fff", fontSize: "10px", minWidth: "17px", height: "17px" } }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
              </Badge>
            </IconButton>

            {/* Account — login dropdown */}
            <Box sx={{ position: "relative" }} ref={loginRef}>
              <IconButton
                onClick={() => setLoginOpen((v) => !v)}
                sx={{ color: loginOpen ? "#C9A84C" : "#1a1a1a", "&:hover": { color: "#C9A84C" } }}
              >
                <PersonOutlineIcon sx={{ fontSize: 20 }} />
              </IconButton>

              {loginOpen && (
                <Box
                  sx={{
                    position: "absolute", right: 0, top: "calc(100% + 8px)",
                    width: 300, background: "#fff", border: "1px solid #ede8e0",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)", zIndex: 1400, p: 3
                  }}
                >
                  <TextField
                    fullWidth placeholder="Email address" size="small" type="email"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "13px", fontFamily: "'Montserrat', sans-serif", "& fieldset": { borderColor: "#ddd" }, "&:hover fieldset": { borderColor: "#C9A84C" }, "&.Mui-focused fieldset": { borderColor: "#C9A84C" } } }}
                  />
                  <TextField
                    fullWidth placeholder="Password" type="password" size="small"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    sx={{ mb: 2.5, "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "13px", fontFamily: "'Montserrat', sans-serif", "& fieldset": { borderColor: "#ddd" }, "&:hover fieldset": { borderColor: "#C9A84C" }, "&.Mui-focused fieldset": { borderColor: "#C9A84C" } } }}
                  />
                  <Button
                    fullWidth
                    onClick={() => { setLoginOpen(false); navigate("/my-account"); }}
                    sx={{ background: "#C9A84C", color: "#fff", py: 1.2, fontSize: "13px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, borderRadius: 0, mb: 2, "&:hover": { background: "#b8963e" } }}
                  >
                    Log In
                  </Button>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", cursor: "pointer", "&:hover": { color: "#C9A84C" } }}>
                      Forgot password?
                    </Typography>
                    <Typography
                      onClick={() => { setLoginOpen(false); navigate("/my-account"); }}
                      sx={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", cursor: "pointer", "&:hover": { color: "#C9A84C" } }}
                    >
                      Sign up
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* Mobile icons */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
            <IconButton onClick={() => navigate("/cart")} sx={{ color: "#1a1a1a" }}>
              <Badge badgeContent={totalItems} sx={{ "& .MuiBadge-badge": { background: "#C9A84C", color: "#fff" } }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 22 }} />
              </Badge>
            </IconButton>
            <IconButton sx={{ color: "#1a1a1a" }} onClick={() => setOpen(true)}><MenuIcon /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MEGA MENU */}
      {megaOpen && (
        <Box
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          sx={{
            position: "fixed",
            top: `${navbarHeight}px`,
            left: 0,
            right: 0,
            zIndex: 1199,
            background: "#fff",
            borderTop: "2px solid #C9A84C",
            borderBottom: "1px solid #e8e0d5",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            display: "flex",
            maxHeight: "80vh",
            overflowY: "auto"
          }}
        >
          {/* Left sidebar */}
          <Box sx={{ width: 220, borderRight: "1px solid #f0ebe4", py: 1, flexShrink: 0, background: "#faf8f5" }}>
            {categoryMegaMenu.left.map((cat, i) => (
              <Box
                key={cat.label}
                component={Link}
                to={`/shop?category=${encodeURIComponent(cat.label)}`}
                onClick={() => setMegaOpen(false)}
                onMouseEnter={() => setActiveLeft(i)}
                sx={{
                  display: "flex", alignItems: "center", gap: 2, px: 3, py: 1.3,
                  textDecoration: "none",
                  background: activeLeft === i ? "#fff" : "transparent",
                  color: activeLeft === i ? "#C9A84C" : "#1a1a1a",
                  borderLeft: activeLeft === i ? "2px solid #C9A84C" : "2px solid transparent",
                  transition: "all 0.15s",
                  "&:hover": { background: "#fff", color: "#C9A84C", borderLeftColor: "#C9A84C" }
                }}
              >
                <Box sx={{ width: 22, height: 22, flexShrink: 0, opacity: activeLeft === i ? 1 : 0.5 }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                    {i === 0 && <><circle cx="8" cy="7" r="2" /><circle cx="16" cy="7" r="2" /><path d="M8 9 L6 18 M16 9 L18 18" /></>}
                    {i === 1 && <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /></>}
                    {i === 2 && <ellipse cx="12" cy="12" rx="8" ry="5" />}
                    {i === 3 && <><path d="M6 6 Q6 18 12 20 Q18 18 18 6" /><circle cx="12" cy="22" r="2" /></>}
                    {i === 4 && <><circle cx="12" cy="10" r="5" /><rect x="8" y="14" width="8" height="6" rx="1" /></>}
                    {i === 5 && <><path d="M4 14 Q12 8 20 14" /><circle cx="12" cy="18" r="3" /></>}
                    {i === 6 && <><circle cx="8" cy="12" r="4" /><circle cx="16" cy="12" r="4" /><line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" /></>}
                    {i === 7 && <><polygon points="12,3 21,9 17,20 7,20 3,9" /></>}
                    {i === 8 && <><rect x="4" y="11" width="16" height="10" rx="1" /><rect x="2" y="7" width="20" height="5" rx="1" /><line x1="12" y1="7" x2="12" y2="21" /></>}
                    {i === 9 && <><path d="M5 5 L19 5 L19 19 L5 19 Z" /><line x1="5" y1="9" x2="19" y2="9" /><line x1="12" y1="5" x2="12" y2="19" /></>}
                    {i === 10 && <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />}
                    {i === 11 && <><circle cx="12" cy="8" r="3" /><path d="M9 11 L7 20 M15 11 L17 20" /></>}
                    {i === 12 && <><rect x="6" y="4" width="4" height="16" rx="2" /><rect x="14" y="4" width="4" height="16" rx="2" /></>}
                  </svg>
                </Box>
                <Typography sx={{ fontSize: "13px", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, flex: 1 }}>{cat.label}</Typography>
                <Typography sx={{ fontSize: "14px", color: "#C9A84C", opacity: activeLeft === i ? 1 : 0 }}>›</Typography>
              </Box>
            ))}
          </Box>

          {/* Center columns */}
          <Box sx={{ flex: 1, p: 3 }}>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              {categoryMegaMenu.columns.map((col) => (
                <Box key={col.title} component={Link} to={`/shop?category=${col.title === "BROOCHES" ? "Pins" : col.title.charAt(0) + col.title.slice(1).toLowerCase()}`} onClick={() => setMegaOpen(false)} sx={{ flex: 1, textDecoration: "none", "&:hover img": { opacity: 0.85 } }}>
                  <Box component="img" src={col.image} alt={col.title} sx={{ width: "100%", height: 90, objectFit: "cover", display: "block", transition: "opacity 0.2s" }} />
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${categoryMegaMenu.columns.length}, 1fr)`, gap: 2 }}>
              {categoryMegaMenu.columns.map((col) => (
                <Box key={col.title}>
                  <Typography sx={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: "0.12em", color: "#1a1a1a", mb: 1.5 }}>{col.title}</Typography>
                  {col.items.map((item) => (
                    <Typography key={item} component={Link} to="/shop" onClick={() => setMegaOpen(false)} sx={{ display: "block", fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555", textDecoration: "none", mb: 0.7, "&:hover": { color: "#C9A84C" }, transition: "color 0.2s" }}>{item}</Typography>
                  ))}
                  <Typography component={Link} to={`/shop?category=${encodeURIComponent(col.title === "EARRINGS" ? "Earrings" : col.title === "NECKLACES" ? "Necklaces" : col.title === "BRACELETS" ? "Bracelets" : col.title === "RINGS" ? "Rings" : "Pins")}`} onClick={() => setMegaOpen(false)} sx={{ display: "block", fontSize: "11px", fontFamily: "'Montserrat', sans-serif", color: "#C9A84C", textDecoration: "none", mt: 1, fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>View all ›</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, background: "#fff", height: "100%", color: "#1a1a1a", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2.5, borderBottom: "1px solid #f0ebe4" }}>
            <Typography sx={{ color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.15em" }}>LUXEGLEAM</Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#1a1a1a" }}><CloseIcon /></IconButton>
          </Box>
          <List sx={{ pt: 1 }}>
            {[
              { label: "Home", action: () => { navigate("/"); setOpen(false); } },
              { label: "Shop by Categories", action: () => { navigate("/shop"); setOpen(false); } },
              { label: "Shop", action: () => { navigate("/shop"); setOpen(false); } },
              { label: "Elements", action: () => { navigate("/elements"); setOpen(false); } },
              { label: "About Us", action: () => handleNavScroll("about") },
              { label: "My Account", action: () => { navigate("/my-account"); setOpen(false); } },
              { label: `Cart (${totalItems})`, action: () => { navigate("/cart"); setOpen(false); } }
            ].map((link, i, arr) => (
              <React.Fragment key={link.label}>
                <ListItem button onClick={link.action} sx={{ py: 1.5, px: 3 }}>
                  <ListItemText primary={link.label} primaryTypographyProps={{ sx: { fontSize: "12px", letterSpacing: "0.15em", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: link.label.startsWith("Cart") ? "#C9A84C" : "#1a1a1a" } }} />
                </ListItem>
                {i < arr.length - 1 && <Divider sx={{ borderColor: "#f5f0eb" }} />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
