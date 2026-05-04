import { Box, Typography, TextField, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import slider2 from "../assets/slider2.webp";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        background: "#f5ede4",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        mx: { xs: 2, md: 8 },
        my: 0
      }}
    >
      {/* Left image */}
      <Box
        sx={{
          width: { xs: "38%", md: "32%" },
          flexShrink: 0,
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src={slider2}
          alt="Newsletter"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block"
          }}
        />
      </Box>

      {/* Right content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 3, md: 4 }
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: "22px", md: "30px" },
            fontWeight: 700,
            color: "#1a1a1a",
            letterSpacing: "0.05em",
            mb: 0.5
          }}
        >
          15% DISCOUNT
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            fontFamily: "'Montserrat', sans-serif",
            color: "#888",
            mb: 2.5
          }}
        >
          For subscription to our newsletter
        </Typography>

        {/* Email input */}
        <Box sx={{ display: "flex", maxWidth: 380 }}>
          <TextField
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                background: "#fff",
                fontSize: "12px",
                fontFamily: "'Montserrat', sans-serif",
                "& fieldset": { borderColor: "#ddd", borderRight: "none" },
                "&:hover fieldset": { borderColor: "#C9A84C" },
                "&.Mui-focused fieldset": { borderColor: "#C9A84C" }
              },
              "& input::placeholder": { color: "#bbb", fontSize: "12px" }
            }}
          />
          <IconButton
            sx={{
              background: "#C9A84C",
              borderRadius: 0,
              width: 42,
              height: 40,
              "&:hover": { background: "#b8963e" },
              flexShrink: 0
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 16, color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
