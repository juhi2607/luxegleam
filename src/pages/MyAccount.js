import React, { useState } from "react";
import {
  Box, Container, Grid, Typography, TextField,
  Button, Divider, Breadcrumbs, Alert
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

const GOLD = "#C9A84C";

export default function MyAccount() {
  const navigate = useNavigate();
  const [loginData,    setLoginData]    = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  return (
    <Box sx={{ background: "#faf8f5", minHeight: "100vh", pt: "98px" }}>
      {/* Breadcrumb */}
      <Box sx={{ background: "#fff", borderBottom: "1px solid #ede8e0", py: 1.5, px: { xs: 2, md: 6 } }}>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 14, color: "#bbb" }} />}>
          <Typography component={Link} to="/" sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: GOLD } }}>Home</Typography>
          <Typography component={Link} to="/shop" sx={{ fontSize: "12px", color: "#999", fontFamily: "'Montserrat', sans-serif", textDecoration: "none", "&:hover": { color: GOLD } }}>Shop</Typography>
          <Typography sx={{ fontSize: "12px", color: "#1a1a1a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>My account</Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, opacity: 0.5 }} />
          </Box>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", fontWeight: 400, color: "#1a1a1a", letterSpacing: "0.08em" }}>
            MY ACCOUNT
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* LOGIN */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Box sx={{ border: "1px solid #ede8e0", background: "#fff", p: 4 }}>
                <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.05em", mb: 3 }}>
                  LOGIN
                </Typography>

                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555", mb: 0.8 }}>
                  Username or email address <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField fullWidth size="small" type="email" value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  sx={{ mb: 2.5, "& .MuiOutlinedInput-root": { borderRadius: 0, "& fieldset": { borderColor: "#ddd" }, "&:hover fieldset": { borderColor: GOLD }, "&.Mui-focused fieldset": { borderColor: GOLD } } }}
                />

                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555", mb: 0.8 }}>
                  Password <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField fullWidth size="small" type="password" value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  sx={{ mb: 2.5, "& .MuiOutlinedInput-root": { borderRadius: 0, "& fieldset": { borderColor: "#ddd" }, "&:hover fieldset": { borderColor: GOLD }, "&.Mui-focused fieldset": { borderColor: GOLD } } }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
                  <Button
                    sx={{ background: GOLD, color: "#fff", px: 3, py: 1, fontSize: "12px", letterSpacing: "0.1em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, borderRadius: 0, "&:hover": { background: "#b8963e" } }}
                  >
                    Log in
                  </Button>
                </Box>

                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: GOLD, cursor: "pointer", textDecoration: "underline" }}>
                  Lost your password?
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* REGISTER */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Box sx={{ border: "1px solid #ede8e0", background: "#fff", p: 4 }}>
                <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.05em", mb: 3 }}>
                  REGISTER
                </Typography>

                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#555", mb: 0.8 }}>
                  Email address <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField fullWidth size="small" type="email" value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  sx={{ mb: 2.5, "& .MuiOutlinedInput-root": { borderRadius: 0, "& fieldset": { borderColor: "#ddd" }, "&:hover fieldset": { borderColor: GOLD }, "&.Mui-focused fieldset": { borderColor: GOLD } } }}
                />

                <Typography sx={{ fontSize: "12px", fontFamily: "'Montserrat', sans-serif", color: "#777", lineHeight: 1.7, mb: 3 }}>
                  A link to set a new password will be sent to your email address.
                  <br />Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                  <span style={{ color: GOLD, cursor: "pointer", textDecoration: "underline" }}>privacy policy</span>.
                </Typography>

                <Button
                  sx={{ background: GOLD, color: "#fff", px: 4, py: 1.2, fontSize: "12px", letterSpacing: "0.1em", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, borderRadius: 0, "&:hover": { background: "#b8963e" } }}
                >
                  Register
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
