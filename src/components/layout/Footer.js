import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const footerLinks = {
  ACCOUNT: [
    { label: "Dashboard", to: "/" },
    { label: "Orders", to: "/" },
    { label: "Wishlist", to: "/" },
    { label: "Addresses", to: "/" }
  ],
  CATALOG: [
    { label: "Shop by category", to: "/shop" },
    { label: "Shop by brand", to: "/shop" },
    { label: "Promotions", to: "/shop" },
    { label: "Sitemap", to: "/" }
  ],
  HELP: [
    { label: "Features", to: "/elements" },
    { label: "FAQ", to: "/" },
    { label: "About us", to: "/" },
    { label: "Contact us", to: "/" }
  ]
};

function Footer() {
  return (
    <Box sx={{ background: "#fff", borderTop: "1px solid #ede8e0" }}>
      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Grid container spacing={4}>

          {/* ── Brand column ── */}
          <Grid item xs={12} md={3}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2, textDecoration: "none" }}
            >
              <Box component="svg" viewBox="0 0 44 40" sx={{ width: 42, height: 38, flexShrink: 0 }}>
                <polygon points="22,2 42,16 22,38 2,16" fill="none" stroke="#C9A84C" strokeWidth="2.2" />
                <polygon points="22,2 32,16 22,28 12,16" fill="#C9A84C" opacity="0.22" />
                <line x1="2" y1="16" x2="42" y2="16" stroke="#C9A84C" strokeWidth="1.6" />
                <line x1="22" y1="2" x2="12" y2="16" stroke="#C9A84C" strokeWidth="1.4" />
                <line x1="22" y1="2" x2="32" y2="16" stroke="#C9A84C" strokeWidth="1.4" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    letterSpacing: "0.12em",
                    lineHeight: 1
                  }}
                >
                  LUXEGLEAM
                </Typography>
                <Typography
                  sx={{
                    fontSize: "8px",
                    letterSpacing: "0.3em",
                    color: "#aaa",
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  JEWELLERY
                </Typography>
              </Box>
            </Box>

            {/* Tagline */}
            <Typography
              sx={{
                fontSize: "13px",
                color: "#777",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 220
              }}
            >
              Unleash the radiance of your inner beauty with our premium jewelry brand — a perfect blend of sophistication and style.
            </Typography>

            {/* Contact info */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, mb: 1.5 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#C9A84C", mt: 0.2, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "12px", color: "#777", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.6 }}>
                7031 N 35th Ave, Phoenix<br />Arkansas United States
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
              <PhoneOutlinedIcon sx={{ fontSize: 16, color: "#C9A84C", flexShrink: 0 }} />
              <Box>
                <Typography sx={{ fontSize: "11px", color: "#aaa", fontFamily: "'Montserrat', sans-serif" }}>
                  Call us 8 AM – 10 PM
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                  6668 5555 8464
                </Typography>
              </Box>
            </Box>

            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 0.8 }}>
              {[
                { icon: <FacebookIcon sx={{ fontSize: 16 }} />, label: "Facebook" },
                { icon: <InstagramIcon sx={{ fontSize: 16 }} />, label: "Instagram" },
                { icon: <TelegramIcon sx={{ fontSize: 16 }} />, label: "Telegram" },
                { icon: <TwitterIcon sx={{ fontSize: 16 }} />, label: "Twitter" },
                { icon: <YouTubeIcon sx={{ fontSize: 16 }} />, label: "YouTube" }
              ].map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "1px solid #e0dbd4",
                    borderRadius: 0,
                    color: "#aaa",
                    "&:hover": { borderColor: "#C9A84C", color: "#C9A84C", background: "transparent" },
                    transition: "all 0.25s"
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid item xs={6} sm={4} md={2} key={section}>
              <Typography
                sx={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: "#1a1a1a",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  mb: 2.5
                }}
              >
                {section}
              </Typography>
              {links.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.to}
                  sx={{
                    display: "block",
                    fontSize: "13px",
                    color: "#777",
                    fontFamily: "'Montserrat', sans-serif",
                    textDecoration: "none",
                    mb: 1.3,
                    "&:hover": { color: "#C9A84C" },
                    transition: "color 0.25s"
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Grid>
          ))}

          {/* ── Contact Us column ── */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "#1a1a1a",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                mb: 2.5
              }}
            >
              CONTACT US
            </Typography>

            {/* Contact details repeated for the column */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, mb: 1.5 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#C9A84C", mt: 0.2, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "12px", color: "#777", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.6 }}>
                7031 N 35th Ave, Phoenix<br />Arkansas United States
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2.5 }}>
              <PhoneOutlinedIcon sx={{ fontSize: 16, color: "#C9A84C", flexShrink: 0 }} />
              <Box>
                <Typography sx={{ fontSize: "11px", color: "#aaa", fontFamily: "'Montserrat', sans-serif" }}>
                  Call us 8 AM – 10 PM
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                  6668 5555 8464
                </Typography>
              </Box>
            </Box>

            {/* Social icons (repeated for this column) */}
            <Box sx={{ display: "flex", gap: 0.8 }}>
              {[
                { icon: <FacebookIcon sx={{ fontSize: 16 }} />, label: "Facebook" },
                { icon: <InstagramIcon sx={{ fontSize: 16 }} />, label: "Instagram" },
                { icon: <TelegramIcon sx={{ fontSize: 16 }} />, label: "Telegram" },
                { icon: <TwitterIcon sx={{ fontSize: 16 }} />, label: "Twitter" },
                { icon: <YouTubeIcon sx={{ fontSize: 16 }} />, label: "YouTube" }
              ].map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "1px solid #e0dbd4",
                    borderRadius: 0,
                    color: "#aaa",
                    "&:hover": { borderColor: "#C9A84C", color: "#C9A84C", background: "transparent" },
                    transition: "all 0.25s"
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── Bottom bar ── */}
      <Divider sx={{ borderColor: "#ede8e0" }} />
      <Box
        sx={{
          py: 2.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 8 },
          gap: 1.5,
          background: "#fff"
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "#aaa", fontFamily: "'Montserrat', sans-serif" }}>
          Copyright © 2026 LuxeGleam. All Rights Reserved
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "11px",
                color: "#aaa",
                fontFamily: "'Montserrat', sans-serif",
                cursor: "pointer",
                "&:hover": { color: "#C9A84C" },
                transition: "color 0.25s"
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
