import { Box, Container, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const services = [
  {
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 26, color: "#C9A84C" }} />,
    title: "Free Shipping",
    desc: "On all orders above ₹999"
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 26, color: "#C9A84C" }} />,
    title: "24/7 Support",
    desc: "Dedicated customer care"
  },
  {
    icon: <ReplayOutlinedIcon sx={{ fontSize: 26, color: "#C9A84C" }} />,
    title: "Easy Returns",
    desc: "30-day hassle-free returns"
  },
  {
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 26, color: "#C9A84C" }} />,
    title: "Secure Payment",
    desc: "100% safe & encrypted"
  }
];

function ServiceStrip() {
  return (
    <Box
      sx={{
        py: 5,
        background: "#fff",
        borderTop: "1px solid #ede8e0",
        borderBottom: "1px solid #ede8e0"
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {services.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: 2,
                  textAlign: { xs: "center", sm: "left" },
                  p: { xs: 2, md: 3 },
                  borderRight: { md: index < 3 ? "1px solid #ede8e0" : "none" }
                }}
              >
                <Box sx={{ mt: { sm: 0.2 }, flexShrink: 0 }}>{item.icon}</Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#1a1a1a",
                      fontSize: "13px",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.03em"
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#999",
                      fontFamily: "'Montserrat', sans-serif",
                      mt: 0.3
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceStrip;
