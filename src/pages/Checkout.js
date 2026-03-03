import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  TextField,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { loadRazorpay } from "../utils/razorpay";
import jsPDF from "jspdf";

function Checkout() {
  const { cartItems = [], clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon === "LUXE10") {
      setDiscount(subtotal * 0.1);
    } else {
      alert("Invalid Coupon");
    }
  };

  const finalTotal = subtotal - discount;

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("LuxeGleam Invoice", 20, 20);

    let y = 40;
    cartItems.forEach((item) => {
      doc.text(
        `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`,
        20,
        y
      );
      y += 10;
    });

    doc.text(`Total: ₹${finalTotal}`, 20, y + 10);
    doc.save("invoice.pdf");
  };

  const handlePayment = async () => {
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // TEST KEY
      amount: finalTotal * 100,
      currency: "INR",
      name: "LuxeGleam",
      description: "Jewelry Purchase",
      handler: function () {
        clearCart();
        generateInvoice();
        navigate("/success");
      },
      theme: { color: "#d4af37" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Container sx={{ pt: 14, pb: 6 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Checkout 💳
      </Typography>

      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography>
              ₹{item.price} × {item.quantity}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      <TextField
        label="Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />

      <Button sx={{ ml: 2 }} onClick={applyCoupon}>
        Apply
      </Button>

      <Box sx={{ mt: 3 }}>
        <Typography>Subtotal: ₹{subtotal}</Typography>
        <Typography>Discount: ₹{discount}</Typography>
        <Typography variant="h6">
          Final Total: ₹{finalTotal}
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "gold",
            color: "#000",
          }}
          onClick={handlePayment}
        >
          Pay Now
        </Button>
      </Box>
    </Container>
  );
}

export default Checkout;