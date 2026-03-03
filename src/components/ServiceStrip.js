import { Box, Container, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReplayIcon from "@mui/icons-material/Replay";
import SecurityIcon from "@mui/icons-material/Security";

function ServiceStrip() {
  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 30, color: "#D4AF37" }} />,
      title: "Free Shipping",
      desc: "Free shipping on all orders"
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 30, color: "#D4AF37" }} />,
      title: "Support 24/7",
      desc: "Support 24 hours a day"
    },
    {
      icon: <ReplayIcon sx={{ fontSize: 30, color: "#D4AF37" }} />,
      title: "Money Return",
      desc: "30 days free return"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 30, color: "#D4AF37" }} />,
      title: "100% Payment Secure",
      desc: "We ensure secure payment"
    }
  ];

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#111", // luxury dark
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222"
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {services.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                {item.icon}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#aaa"
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